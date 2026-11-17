// @vitest-environment node
import type { FastifyInstance } from 'fastify'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { emptyProgress } from '../src/engine/progress'
import { buildApp, SESSION_COOKIE } from './app'
import { createSessionToken, FailureLimiter, hashPassword, isPasswordHash, verifyPassword, verifySessionToken } from './auth'
import { MemoryProgressRepo } from './repo'

const PASSWORD = 'senha-de-teste'
const SECRET = 'x'.repeat(40)
const passwordHash = hashPassword(PASSWORD)

describe('auth', () => {
  it('confere a senha pelo hash scrypt', async () => {
    expect(isPasswordHash(passwordHash)).toBe(true)
    await expect(verifyPassword(PASSWORD, passwordHash)).resolves.toBe(true)
    await expect(verifyPassword('outra', passwordHash)).resolves.toBe(false)
    await expect(verifyPassword(PASSWORD, 'lixo')).resolves.toBe(false)
  })

  it('rejeita token adulterado, de outro segredo ou expirado', () => {
    const token = createSessionToken(SECRET, 1000)
    expect(verifySessionToken(token, SECRET, 2000)).toBe(true)
    expect(verifySessionToken(token, 'y'.repeat(40), 2000)).toBe(false)
    expect(verifySessionToken(token.replace('v1.', 'v1.9'), SECRET, 2000)).toBe(false)
    expect(verifySessionToken(token, SECRET, 1000 + 31 * 24 * 3600 * 1000)).toBe(false)
    expect(verifySessionToken(undefined, SECRET)).toBe(false)
  })
})

describe('API', () => {
  let app: FastifyInstance
  let repo: MemoryProgressRepo

  beforeEach(async () => {
    repo = new MemoryProgressRepo()
    app = await buildApp({ repo, passwordHash, sessionSecret: SECRET, cookieSecure: true, loginMax: 3 })
  })
  afterEach(() => app.close())

  const login = async () => {
    const res = await app.inject({ method: 'POST', url: '/api/login', payload: { password: PASSWORD } })
    expect(res.statusCode).toBe(200)
    const c = res.cookies.find((x) => x.name === SESSION_COOKIE)!
    expect(c.httpOnly).toBe(true)
    expect(c.secure).toBe(true)
    expect(c.sameSite).toBe('Strict')
    return { [SESSION_COOKIE]: c.value }
  }

  it('health responde ok', async () => {
    expect((await app.inject('/api/health')).statusCode).toBe(200)
  })

  it('exige sessão para ler e gravar o progresso', async () => {
    expect((await app.inject('/api/session')).statusCode).toBe(401)
    expect((await app.inject('/api/progress')).statusCode).toBe(401)
    const forged = { [SESSION_COOKIE]: createSessionToken('z'.repeat(40)) }
    expect((await app.inject({ url: '/api/progress', cookies: forged })).statusCode).toBe(401)
    const put = await app.inject({ method: 'PUT', url: '/api/progress', payload: { data: emptyProgress(), revision: 0 } })
    expect(put.statusCode).toBe(401)
  })

  it('recusa senha errada e limita tentativas', async () => {
    const wrong = () => app.inject({ method: 'POST', url: '/api/login', payload: { password: 'errada' } })
    expect((await wrong()).statusCode).toBe(401)
    expect((await wrong()).statusCode).toBe(401)
    expect((await wrong()).statusCode).toBe(401)
    expect((await wrong()).statusCode).toBe(429)
  })

  it('X-Forwarded-For forjado não burla o limite por IP (só confia no nginx)', async () => {
    await app.close()
    app = await buildApp({ repo, passwordHash, sessionSecret: SECRET, cookieSecure: true, loginMax: 3, trustProxyHops: 1 })
    const codes: number[] = []
    for (let i = 0; i < 5; i++) {
      const res = await app.inject({
        method: 'POST',
        url: '/api/login',
        payload: { password: 'errada' },
        remoteAddress: '172.20.0.3', // o nginx
        headers: { 'x-forwarded-for': `10.0.0.${i}, 203.0.113.7` }, // forjado + IP real visto pelo nginx
      })
      codes.push(res.statusCode)
    }
    expect(codes).toEqual([401, 401, 401, 429, 429])
  })

  it('limite global bloqueia novos logins após muitas falhas, mesmo de IPs diferentes', async () => {
    await app.close()
    app = await buildApp({ repo, passwordHash, sessionSecret: SECRET, cookieSecure: true, loginGlobalMax: 4 })
    const attempt = (password: string, ip: string) =>
      app.inject({ method: 'POST', url: '/api/login', payload: { password }, remoteAddress: ip })
    expect((await attempt(PASSWORD, '10.0.0.1')).statusCode).toBe(200) // acerto não consome a cota
    await Promise.all([1, 2, 3, 4].map((i) => attempt('errada', `10.0.1.${i}`)))
    expect((await attempt('errada', '10.0.2.1')).statusCode).toBe(429)
    expect((await attempt(PASSWORD, '10.0.2.2')).statusCode).toBe(429)
  })

  it('FailureLimiter libera depois da janela', () => {
    const l = new FailureLimiter(2, 1000)
    l.record(0)
    l.record(10)
    expect(l.blocked(500)).toBe(true)
    expect(l.blocked(1011)).toBe(false)
  })

  it('logout limpa o cookie', async () => {
    const res = await app.inject({ method: 'POST', url: '/api/logout' })
    expect(res.cookies.find((x) => x.name === SESSION_COOKIE)?.value).toBe('')
  })

  it('lê vazio, grava e detecta conflito de revisão', async () => {
    const cookies = await login()
    expect((await app.inject({ url: '/api/session', cookies })).statusCode).toBe(200)

    const empty = await app.inject({ url: '/api/progress', cookies })
    expect(empty.json()).toEqual({ data: null, revision: 0 })
    expect(empty.headers['cache-control']).toBe('no-store')

    const doc = { ...emptyProgress(), xp: 30 }
    const put = await app.inject({ method: 'PUT', url: '/api/progress', cookies, payload: { data: doc, revision: 0 } })
    expect(put.json()).toEqual({ revision: 1 })

    const stale = await app.inject({
      method: 'PUT',
      url: '/api/progress',
      cookies,
      payload: { data: { ...doc, xp: 99 }, revision: 0 },
    })
    expect(stale.statusCode).toBe(409)
    expect(stale.json()).toEqual({ data: doc, revision: 1 })

    const next = await app.inject({ method: 'PUT', url: '/api/progress', cookies, payload: { data: doc, revision: 1 } })
    expect(next.json()).toEqual({ revision: 2 })
  })

  it('recusa progresso inválido e corpo que não é JSON', async () => {
    const cookies = await login()
    const bad = await app.inject({
      method: 'PUT',
      url: '/api/progress',
      cookies,
      payload: { data: { version: 2 }, revision: 0 },
    })
    expect(bad.statusCode).toBe(400)
    const noRev = await app.inject({ method: 'PUT', url: '/api/progress', cookies, payload: { data: emptyProgress() } })
    expect(noRev.statusCode).toBe(400)
    const form = await app.inject({
      method: 'PUT',
      url: '/api/progress',
      cookies,
      headers: { 'content-type': 'text/plain' },
      payload: JSON.stringify({ data: emptyProgress(), revision: 0 }),
    })
    expect(form.statusCode).toBe(415)
  })
})
