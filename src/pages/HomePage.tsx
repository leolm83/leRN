import { Link } from 'react-router-dom'
import { levels } from '../content'
import type { Consolidation } from '../content/types'
import {
  currentStreak,
  isConsolidationUnlocked,
  isLevelPassed,
  isLevelTestUnlocked,
  isLevelUnlocked,
  isUnitPassed,
  isUnitUnlocked,
  nextUnit,
  PASS_SCORE,
  type ProgressState,
} from '../engine/progress'
import { dueCards } from '../engine/srs'
import { DAILY_GOAL_XP, useProgress } from '../state/ProgressContext'

function pct(n: number) {
  return `${Math.round(n * 100)}%`
}

function ConsolidationCard({ block, state }: { block: Consolidation; state: ProgressState }) {
  const open = isConsolidationUnlocked(state, block)
  const rec = state.consolidations[block.id]
  const solid = rec && rec.bestScore >= PASS_SCORE
  const body = (
    <>
      <span className={`dot ${solid ? 'done' : open ? 'open' : ''}`}>✦</span>
      <span className="unit-title">
        Consolidação · unidades {block.units[0]}–{block.units[1]} <span className="tag">opcional</span>
        <small className="muted">
          {open ? `${block.title} — resumo + ${block.questions.length} questões explicadas.` : 'Libera ao concluir as unidades do bloco. Não bloqueia o avanço.'}
        </small>
      </span>
      <span className="unit-score">{rec ? pct(rec.bestScore) : open ? '' : '🔒'}</span>
    </>
  )
  return open ? (
    <Link to={`/consolidation/${block.id}`} className="unit consolidation">
      {body}
    </Link>
  ) : (
    <div className="unit consolidation disabled">{body}</div>
  )
}

export function HomePage() {
  const { state, today } = useProgress()
  const next = nextUnit(state, levels)
  const due = dueCards(state.deck, today).length
  const todayXp = state.daily[today] ?? 0
  const streak = currentStreak(state, today)

  return (
    <div className="page">
      <section className="stats">
        <div className="stat">
          <span className="value">{streak}</span>
          <span className="label">{streak === 1 ? 'dia seguido' : 'dias seguidos'}</span>
        </div>
        <div className="stat">
          <span className="value">{state.xp}</span>
          <span className="label">XP total</span>
        </div>
        <div className="stat goal">
          <span className="value">
            {todayXp}
            <small> / {DAILY_GOAL_XP}</small>
          </span>
          <span className="label">meta de hoje</span>
          <div className="bar small">
            <div style={{ width: `${Math.min(100, (todayXp / DAILY_GOAL_XP) * 100)}%` }} />
          </div>
        </div>
      </section>

      <section className="cta-row">
        {next ? (
          <Link className="cta" to={`/lesson/${next.id}`}>
            <span className="muted">
              Continuar — {next.level}, unidade {next.number}
            </span>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <div className="cta">
            <strong>Todas as unidades disponíveis foram concluídas.</strong>
          </div>
        )}
        <Link className={`cta secondary ${due ? '' : 'quiet'}`} to="/review">
          <span className="muted">Revisão</span>
          <strong>{due ? `${due} ${due === 1 ? 'item pendente' : 'itens pendentes'}` : 'Nada pendente hoje'}</strong>
        </Link>
      </section>

      <h2>Trilha</h2>
      {levels.map((level) => {
        const unlocked = isLevelUnlocked(state, levels, level.id)
        const passed = isLevelPassed(state, level.id)
        const doneUnits = level.units.filter((u) => isUnitPassed(state, u.id)).length
        return (
          <details key={level.id} className={`level ${unlocked ? '' : 'locked'}`} open={unlocked && !passed}>
            <summary>
              <span className="level-id">{level.id}</span>
              <span className="level-title">
                {level.title}
                <small className="muted">{level.description}</small>
              </span>
              <span className="level-status">
                {passed ? '✓ concluído' : level.units.length ? `${doneUnits}/${level.units.length}` : 'em breve'}
              </span>
            </summary>

            {level.units.length === 0 ? (
              <div className="soon">
                <p className="muted">O conteúdo deste nível será adicionado. Tópicos previstos:</p>
                <ul>
                  {level.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <ol className="units">
                {level.units.map((u) => {
                  const open = isUnitUnlocked(state, levels, u.id)
                  const rec = state.lessons[u.id]
                  const ok = isUnitPassed(state, u.id)
                  const body = (
                    <>
                      <span className={`dot ${ok ? 'done' : open ? 'open' : ''}`}>{ok ? '✓' : u.number}</span>
                      <span className="unit-title">
                        {u.title}
                        <small className="muted">{u.summary}</small>
                      </span>
                      <span className="unit-score">{rec ? pct(rec.bestScore) : open ? '' : '🔒'}</span>
                    </>
                  )
                  const blocks = level.consolidations.filter((c) => c.units[1] === u.number)
                  return [
                    <li key={u.id}>
                      {open ? (
                        <Link to={`/lesson/${u.id}`} className="unit">
                          {body}
                        </Link>
                      ) : (
                        <div className="unit disabled">{body}</div>
                      )}
                    </li>,
                    ...blocks.map((c) => (
                      <li key={c.id}>
                        <ConsolidationCard block={c} state={state} />
                      </li>
                    )),
                  ]
                })}
                <li>
                  {isLevelTestUnlocked(state, levels, level.id) ? (
                    <Link to={`/test/${level.id}`} className="unit test">
                      <span className={`dot ${passed ? 'done' : 'open'}`}>★</span>
                      <span className="unit-title">
                        Prova do nível {level.id}
                        <small className="muted">{level.test.length} exercícios de todas as unidades. 80% para passar.</small>
                      </span>
                      <span className="unit-score">{state.levelTests[level.id] ? pct(state.levelTests[level.id]!.bestScore) : ''}</span>
                    </Link>
                  ) : (
                    <div className="unit test disabled">
                      <span className="dot">★</span>
                      <span className="unit-title">
                        Prova do nível {level.id}
                        <small className="muted">Libera quando todas as unidades estiverem aprovadas.</small>
                      </span>
                      <span className="unit-score">🔒</span>
                    </div>
                  )}
                </li>
              </ol>
            )}
          </details>
        )
      })}
    </div>
  )
}
