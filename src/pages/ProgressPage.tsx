import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { levels } from '../content'
import { addDays } from '../engine/dates'
import { currentStreak, isConsolidationUnlocked, isUnitPassed, parseProgress, PASS_SCORE } from '../engine/progress'
import { dueCards } from '../engine/srs'
import { DAILY_GOAL_XP, useProgress } from '../state/ProgressContext'

export function ProgressPage() {
  const { state, today, replaceState, reset } = useProgress()
  const fileRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)

  const days = Array.from({ length: 28 }, (_, i) => addDays(today, i - 27))
  const deck = Object.values(state.deck)
  const boxes = [1, 2, 3, 4, 5].map((b) => deck.filter((c) => c.box === b).length)

  const exportBackup = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `lern-progresso-${today}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importBackup = async (file: File) => {
    try {
      const parsed = parseProgress(JSON.parse(await file.text()))
      if (!parsed) throw new Error('formato inválido')
      replaceState(parsed)
      setMessage('Progresso importado com sucesso.')
    } catch {
      setMessage('Não foi possível ler o arquivo. Use um backup exportado pelo leRN.')
    }
  }

  return (
    <div className="page narrow">
      <h1>Progresso</h1>

      <section className="stats">
        <div className="stat">
          <span className="value">{currentStreak(state, today)}</span>
          <span className="label">dias seguidos</span>
        </div>
        <div className="stat">
          <span className="value">{state.xp}</span>
          <span className="label">XP total</span>
        </div>
        <div className="stat">
          <span className="value">{deck.length}</span>
          <span className="label">itens na revisão</span>
        </div>
        <div className="stat">
          <span className="value">{dueCards(state.deck, today).length}</span>
          <span className="label">pendentes hoje</span>
        </div>
      </section>

      <h2>Últimos 28 dias</h2>
      <p className="muted">Cada quadrado é um dia; mais escuro = mais perto da meta de {DAILY_GOAL_XP} XP.</p>
      <div className="heat" role="img" aria-label="Atividade dos últimos 28 dias">
        {days.map((d) => {
          const xp = state.daily[d] ?? 0
          const level = xp === 0 ? 0 : Math.min(4, Math.ceil((xp / DAILY_GOAL_XP) * 4))
          return <span key={d} className={`cell l${level}`} title={`${d}: ${xp} XP`} />
        })}
      </div>

      <h2>Níveis</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nível</th>
              <th>Unidades aprovadas</th>
              <th>Prova</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((l) => (
              <tr key={l.id}>
                <td>
                  {l.id} — {l.title}
                </td>
                <td>{l.units.length ? `${l.units.filter((u) => isUnitPassed(state, u.id)).length} / ${l.units.length}` : 'em breve'}</td>
                <td>{state.levelTests[l.id] ? `${Math.round(state.levelTests[l.id]!.bestScore * 100)}%` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Consolidações</h2>
      <p className="muted">Provas opcionais por bloco de unidades, com explicação de cada resposta. Não bloqueiam o avanço; abaixo de {Math.round(PASS_SCORE * 100)}% vale revisar.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Bloco</th>
              <th>Melhor nota</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {levels.flatMap((l) =>
              l.consolidations.map((c) => {
                const rec = state.consolidations[c.id]
                const open = isConsolidationUnlocked(state, c)
                const status = rec ? (rec.bestScore >= PASS_SCORE ? 'consolidado' : 'vale revisar') : open ? 'disponível' : 'bloqueado'
                return (
                  <tr key={c.id} className={rec && rec.bestScore < PASS_SCORE ? 'needs-review' : undefined}>
                    <td>
                      {open ? <Link to={`/consolidation/${c.id}`}>{`${l.id} ${c.units[0]}–${c.units[1]}`}</Link> : `${l.id} ${c.units[0]}–${c.units[1]}`}{' '}
                      <span className="muted">· {c.title}</span>
                    </td>
                    <td>{rec ? `${Math.round(rec.bestScore * 100)}%` : '—'}</td>
                    <td>{status}</td>
                  </tr>
                )
              }),
            )}
          </tbody>
        </table>
      </div>

      <h2>Caixas de revisão</h2>
      <p className="muted">Caixa 1 = itens novos ou errados; caixa 5 = itens dominados (revisados a cada 30 dias).</p>
      <div className="boxes">
        {boxes.map((n, i) => (
          <div key={i} className="box">
            <span className="value">{n}</span>
            <span className="label">caixa {i + 1}</span>
          </div>
        ))}
      </div>

      <h2>Backup</h2>
      <p className="muted">O progresso fica salvo neste navegador. Exporte um backup para não perdê-lo ou para levar a outro computador.</p>
      <div className="row">
        <button className="btn" onClick={exportBackup}>
          Exportar progresso
        </button>
        <button className="btn" onClick={() => fileRef.current?.click()}>
          Importar progresso
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) void importBackup(f)
            e.target.value = ''
          }}
        />
        {!confirmReset ? (
          <button className="btn danger" onClick={() => setConfirmReset(true)}>
            Apagar progresso
          </button>
        ) : (
          <span className="confirm">
            Tem certeza? Isso não pode ser desfeito.{' '}
            <button
              className="btn danger"
              onClick={() => {
                reset()
                setConfirmReset(false)
                setMessage('Progresso apagado.')
              }}
            >
              Sim, apagar
            </button>{' '}
            <button className="btn" onClick={() => setConfirmReset(false)}>
              Cancelar
            </button>
          </span>
        )}
      </div>
      {message && <p className="tip">{message}</p>}
    </div>
  )
}
