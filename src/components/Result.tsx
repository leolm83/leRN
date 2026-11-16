import { Link } from 'react-router-dom'
import { PASS_SCORE, XP_PER_CORRECT, type AttemptResult } from '../engine/progress'
import type { WrongItem } from './ExerciseRunner'

interface Props {
  result: AttemptResult
  wrong: WrongItem[]
  onRetry: () => void
  onTheory?: () => void
  next?: { to: string; label: string }
}

function describe(item: WrongItem): string {
  const ex = item.exercise
  switch (ex.type) {
    case 'reorder':
      return ex.translation ?? 'Ordenar palavras'
    case 'writing':
      return 'Produção escrita'
    default:
      return ex.prompt
  }
}

export function Result({ result, wrong, onRetry, onTheory, next }: Props) {
  const score = result.total ? result.correct / result.total : 0
  const passed = score >= PASS_SCORE
  return (
    <div className="result">
      <div className={`score ${passed ? 'pass' : 'fail'}`}>
        <span className="value">{Math.round(score * 100)}%</span>
        <span>
          {result.correct} de {result.total} corretas, +{result.correct * XP_PER_CORRECT} XP
        </span>
      </div>
      <p>
        {passed
          ? 'Aprovado! Os itens que você errou foram para a revisão.'
          : `Você precisa de ${Math.round(PASS_SCORE * 100)}% para avançar. Revise a teoria e tente de novo. Os erros já estão na sua revisão.`}
      </p>

      {wrong.length > 0 && (
        <>
          <h3>Para revisar</h3>
          <ul className="wrong-list">
            {wrong.map((w) => (
              <li key={w.exercise.id}>
                <span className="muted">{describe(w)}</span>
                {w.exercise.type !== 'writing' && <span className="answer">{w.expected}</span>}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="row">
        {passed && next && (
          <Link className="btn primary" to={next.to}>
            {next.label}
          </Link>
        )}
        <button className={`btn ${passed ? '' : 'primary'}`} onClick={onRetry}>
          Tentar de novo
        </button>
        {onTheory && (
          <button className="btn" onClick={onTheory}>
            Rever a teoria
          </button>
        )}
        <Link className="btn" to="/">
          Trilha
        </Link>
      </div>
    </div>
  )
}
