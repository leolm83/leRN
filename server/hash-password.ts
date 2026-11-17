/**
 * Gera o valor de LERN_PASSWORD_HASH para o .env.
 * Uso: npm run hash-password   (pede a senha sem mostrá-la)
 */
import { createInterface } from 'node:readline'
import { Writable } from 'node:stream'
import { hashPassword } from './auth.ts'

let muted = false
const output = new Writable({
  write(chunk, _enc, cb) {
    if (!muted) process.stdout.write(chunk)
    cb()
  },
})
const rl = createInterface({ input: process.stdin, output, terminal: true })

rl.question('Senha: ', (password) => {
  rl.close()
  process.stdout.write('\n')
  if (password.length < 8) {
    console.error('Use uma senha com pelo menos 8 caracteres.')
    process.exit(1)
  }
  console.log(`LERN_PASSWORD_HASH=${hashPassword(password)}`)
})
muted = true
