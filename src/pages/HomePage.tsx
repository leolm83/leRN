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
      <span className={`margin-num ${solid ? 'done' : ''}`} aria-hidden="true">
        ✦
      </span>
      <span className="unit-title">
        Consolidação das unidades {block.units[0]} a {block.units[1]} <span className="tag">opcional</span>
        <small>
          {open
            ? `${block.title}: resumo e ${block.questions.length} questões explicadas.`
            : 'Libera quando você concluir essas unidades. Não bloqueia o avanço.'}
        </small>
      </span>
      <span className="unit-score">{rec ? pct(rec.bestScore) : ''}</span>
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
      <section className="stats" aria-label="Seu estudo">
        <div className="stat">
          <span className="label">Sequência</span>
          <span className="value">
            {streak} <small>{streak === 1 ? 'dia' : 'dias'}</small>
          </span>
        </div>
        <div className="stat">
          <span className="label">XP total</span>
          <span className="value">{state.xp}</span>
        </div>
        <div className="stat goal">
          <span className="label">Meta de hoje</span>
          <span className="value">
            {todayXp} <small>de {DAILY_GOAL_XP} XP</small>
          </span>
          <div className="bar small" role="progressbar" aria-valuemin={0} aria-valuemax={DAILY_GOAL_XP} aria-valuenow={todayXp}>
            <div style={{ width: `${Math.min(100, (todayXp / DAILY_GOAL_XP) * 100)}%` }} />
          </div>
        </div>
      </section>

      <section className="cta-row">
        {next ? (
          <Link className="cta" to={`/lesson/${next.id}`}>
            <span className="muted">
              Continuar: {next.level}, unidade {next.number}
            </span>
            <strong>
              <span className="hl">{next.title}</span>
            </strong>
          </Link>
        ) : (
          <div className="cta">
            <strong>Todas as unidades disponíveis foram concluídas.</strong>
          </div>
        )}
        <Link className={`cta secondary ${due ? '' : 'quiet'}`} to="/review">
          {due ? `Revisão: ${due} ${due === 1 ? 'item para hoje' : 'itens para hoje'}` : 'Revisão: nada para hoje'}
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
                <small>{level.description}</small>
              </span>
              <span className="level-status">
                {passed ? 'concluído' : level.units.length ? `${doneUnits} de ${level.units.length}` : 'em breve'}
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
                  const current = next?.id === u.id
                  const body = (
                    <>
                      <span className="margin-num">{u.number}</span>
                      <span className="unit-title">
                        {ok && (
                          <span className="check" aria-label="concluída">
                            ✓{' '}
                          </span>
                        )}
                        {current ? <span className="hl">{u.title}</span> : u.title}
                        <small>{u.summary}</small>
                      </span>
                      <span className="unit-score">
                        {rec ? pct(rec.bestScore) : open ? '' : <span className="sr-only">bloqueada</span>}
                      </span>
                    </>
                  )
                  const blocks = level.consolidations.filter((c) => c.units[1] === u.number)
                  return [
                    <li key={u.id}>
                      {open ? (
                        <Link to={`/lesson/${u.id}`} className={`unit ${current ? 'current' : ''}`}>
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
                      <span className={`margin-num ${passed ? 'done' : ''}`} aria-hidden="true">
                        ★
                      </span>
                      <span className="unit-title">
                        Prova do nível {level.id}
                        <small>{level.test.length} exercícios de todas as unidades. Acerte 80% para abrir o próximo nível.</small>
                      </span>
                      <span className="unit-score">{state.levelTests[level.id] ? pct(state.levelTests[level.id]!.bestScore) : ''}</span>
                    </Link>
                  ) : (
                    <div className="unit test disabled">
                      <span className="margin-num" aria-hidden="true">
                        ★
                      </span>
                      <span className="unit-title">
                        Prova do nível {level.id}
                        <small>Libera quando todas as unidades estiverem concluídas.</small>
                      </span>
                      <span className="unit-score" />
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
