import cookie from '@fastify/cookie'
import rateLimit from '@fastify/rate-limit'
import Fastify, { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify'
import { parseProgress } from '../src/engine/progress'
import { createSessionToken, FailureLimiter, SESSION_TTL_MS, verifyPassword, verifySessionToken } from './auth'
import type { ProgressRepo } from './repo'

export interface AppConfig {
  repo: ProgressRepo
  passwordHash: string
  sessionSecret: string
  cookieSecure: boolean
  /**
   * Quantos proxies confiáveis há na frente da API (nginx = 1; nginx + proxy HTTPS = 2).
   * O IP do cliente é lido do X-Forwarded-For só até esse ponto; o resto é forjável.
   */
  trustProxyHops?: number
  logger?: boolean
  /** Tentativas de login por minuto por IP. */
  loginMax?: number
  /** Logins errados aceitos no total (todos os IPs) por janela antes de bloquear novos logins. */
  loginGlobalMax?: number
  loginGlobalWindowMs?: number
}

export const SESSION_COOKIE = 'lern_session'
const BODY_LIMIT = 2 * 1024 * 1024

export async function buildApp(config: AppConfig): Promise<FastifyInstance> {
  const { repo, passwordHash, sessionSecret, cookieSecure } = config
  const app = Fastify({
    logger: config.logger ?? false,
    // Equivale a trustProxy: N (proxy-addr): confia só nos N saltos mais próximos.
    trustProxy: (_addr: string, hop: number) => hop < (config.trustProxyHops ?? 0),
    bodyLimit: BODY_LIMIT,
  })
  const globalFailures = new FailureLimiter(config.loginGlobalMax ?? 20, config.loginGlobalWindowMs ?? 10 * 60 * 1000)

  // Só JSON: um formulário de outro site não consegue enviar application/json sem CORS.
  app.removeContentTypeParser('text/plain')
  await app.register(cookie)
  await app.register(rateLimit, { global: false })

  const cookieOptions = { path: '/api', httpOnly: true, sameSite: 'strict', secure: cookieSecure } as const

  const requireSession = async (req: FastifyRequest, reply: FastifyReply) => {
    if (!verifySessionToken(req.cookies[SESSION_COOKIE], sessionSecret)) {
      return reply.code(401).send({ error: 'unauthorized' })
    }
  }

  app.addHook('onSend', async (_req, reply) => {
    reply.header('Cache-Control', 'no-store')
  })

  app.get('/api/health', async (_req, reply) => {
    try {
      await repo.ping()
      return { ok: true }
    } catch {
      return reply.code(503).send({ ok: false })
    }
  })

  app.post<{ Body: { password?: unknown } }>(
    '/api/login',
    { config: { rateLimit: { max: config.loginMax ?? 5, timeWindow: '1 minute' } } },
    async (req, reply) => {
      if (globalFailures.blocked()) {
        req.log.warn('login bloqueado: limite global de tentativas erradas atingido')
        return reply.code(429).send({ error: 'too_many_attempts' })
      }
      globalFailures.record()
      const password = req.body?.password
      if (typeof password !== 'string' || password.length > 1024 || !(await verifyPassword(password, passwordHash))) {
        return reply.code(401).send({ error: 'wrong_password' })
      }
      globalFailures.forgive()
      reply.setCookie(SESSION_COOKIE, createSessionToken(sessionSecret), {
        ...cookieOptions,
        maxAge: SESSION_TTL_MS / 1000,
      })
      return { ok: true }
    },
  )

  app.post('/api/logout', async (_req, reply) => {
    reply.clearCookie(SESSION_COOKIE, cookieOptions)
    return { ok: true }
  })

  app.get('/api/session', { preHandler: requireSession }, async () => ({ ok: true }))

  app.get('/api/progress', { preHandler: requireSession }, async () => repo.get())

  app.put<{ Body: { data?: unknown; revision?: unknown } }>(
    '/api/progress',
    { preHandler: requireSession },
    async (req, reply) => {
      const { data, revision } = req.body ?? {}
      const parsed = parseProgress(data)
      if (!parsed || typeof revision !== 'number' || !Number.isInteger(revision) || revision < 0) {
        return reply.code(400).send({ error: 'invalid_progress' })
      }
      const result = await repo.save(parsed, revision)
      if (!result.ok) return reply.code(409).send(result.current)
      return { revision: result.revision }
    },
  )

  return app
}
