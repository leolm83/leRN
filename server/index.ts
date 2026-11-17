import pg from 'pg'
import { buildApp } from './app'
import { isPasswordHash } from './auth'
import { PgProgressRepo } from './repo'

function required(name: string): string {
  const v = process.env[name]
  if (!v) {
    console.error(`Variável de ambiente obrigatória ausente: ${name}`)
    process.exit(1)
  }
  return v
}

const databaseUrl = required('DATABASE_URL')
const passwordHash = required('LERN_PASSWORD_HASH')
const sessionSecret = required('SESSION_SECRET')

if (!isPasswordHash(passwordHash)) {
  console.error('LERN_PASSWORD_HASH inválido. Gere com: npm run hash-password')
  process.exit(1)
}
if (sessionSecret.length < 32) {
  console.error('SESSION_SECRET precisa ter pelo menos 32 caracteres (ex.: openssl rand -hex 32)')
  process.exit(1)
}

const pool = new pg.Pool({ connectionString: databaseUrl, max: 5 })
const repo = new PgProgressRepo(pool)
await repo.init()

const app = await buildApp({
  repo,
  passwordHash,
  sessionSecret,
  cookieSecure: process.env.COOKIE_SECURE !== 'false',
  trustProxy: true,
  logger: true,
})

const shutdown = async () => {
  await app.close()
  await pool.end()
  process.exit(0)
}
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)

await app.listen({ host: '0.0.0.0', port: Number(process.env.PORT ?? 3000) })
