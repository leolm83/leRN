import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'

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

export function verifyPassword(password: string, stored: string): boolean {
  const [scheme, saltHex, hashHex] = stored.split(':')
  if (scheme !== 'scrypt' || !saltHex || !hashHex) return false
  const expected = Buffer.from(hashHex, 'hex')
  if (expected.length !== KEY_LEN) return false
  const actual = scryptSync(password, Buffer.from(saltHex, 'hex'), KEY_LEN)
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
