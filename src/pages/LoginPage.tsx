import { useState, type FormEvent } from 'react'
import { useProgress } from '../state/ProgressContext'

export function LoginPage() {
  const { login } = useProgress()
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!password || busy) return
    setBusy(true)
    setError('')
    try {
      const result = await login(password)
      if (result === 'wrong') setError('Senha incorreta.')
      if (result === 'limited') setError('Muitas tentativas. Espere um minuto e tente de novo.')
    } catch {
      setError('Não foi possível falar com o servidor. Tente de novo em instantes.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="page narrow">
      <h1>Entrar</h1>
      <p className="lead">Seu progresso fica salvo no servidor. Digite a senha para continuar.</p>
      <form onSubmit={submit}>
        <input
          className="line"
          type="password"
          aria-label="Senha"
          placeholder="Senha"
          autoComplete="current-password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn primary" type="submit" disabled={busy || !password}>
          {busy ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
      {error && (
        <p className="tip" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
