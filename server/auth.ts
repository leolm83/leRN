import { createHmac, randomBytes, scrypt, scryptSync, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'

const scryptAsync = promisify(scrypt) as (password: string, salt: Buffer, keylen: number) => Promise<Buffer>

/**
 * Senha: hash scrypt no formato `scrypt:<salt hex>:<hash hex>`.
 * Usa `:` (e não `$`) para não ser interpolado pelo docker compose no `.env`.
 */
const KEY_LEN = 64

export function hashPassword(password: string): string {
  const salt = randomBytes(16)
  const hash = scryptSync(password, salt, KEY_LEN)
  return `scrypt:${salt.toString('hex')}:${hash.toString('hex')}`
}

/** Assíncrono: o scrypt roda no threadpool e não trava o servidor durante tentativas de login. */
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [scheme, saltHex, hashHex] = stored.split(':')
  if (scheme !== 'scrypt' || !saltHex || !hashHex) return false
  const expected = Buffer.from(hashHex, 'hex')
  if (expected.length !== KEY_LEN) return false
  const actual = await scryptAsync(password, Buffer.from(saltHex, 'hex'), KEY_LEN)
  return timingSafeEqual(actual, expected)
}

export function isPasswordHash(stored: string): boolean {
  return /^scrypt:[0-9a-f]{32}:[0-9a-f]{128}$/.test(stored)
}

/** Sessão stateless: `v1.<expira em ms>.<hmac>`. */
export const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000

function sign(payload: string, secret: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url')
}

export function createSessionToken(secret: string, now = Date.now()): string {
  const payload = `v1.${now + SESSION_TTL_MS}`
  return `${payload}.${sign(payload, secret)}`
}

export function verifySessionToken(token: string | undefined, secret: string, now = Date.now()): boolean {
  if (!token) return false
  const parts = token.split('.')
  if (parts.length !== 3 || parts[0] !== 'v1') return false
  const payload = `${parts[0]}.${parts[1]}`
  const expected = Buffer.from(sign(payload, secret))
  const actual = Buffer.from(parts[2])
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return false
  const expires = Number(parts[1])
  return Number.isFinite(expires) && expires > now
}

/**
 * Limite global de logins errados, independente de IP: freia força bruta distribuída
 * (ou com IP forjado). Só falhas contam, então o login certo não consome a cota.
 */
export class FailureLimiter {
  private failures: number[] = []
  private readonly max: number
  private readonly windowMs: number

  constructor(max: number, windowMs: number) {
    this.max = max
    this.windowMs = windowMs
  }

  private prune(now: number) {
    const from = now - this.windowMs
    while (this.failures.length && this.failures[0] <= from) this.failures.shift()
  }

  blocked(now = Date.now()): boolean {
    this.prune(now)
    return this.failures.length >= this.max
  }

  /** Conta a tentativa antes de verificar a senha (requisições paralelas não furam o limite). */
  record(now = Date.now()): void {
    this.prune(now)
    this.failures.push(now)
  }

  /** Senha certa: desconta a tentativa registrada. */
  forgive(): void {
    this.failures.pop()
  }
}
