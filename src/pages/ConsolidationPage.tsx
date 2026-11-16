import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getConsolidation, getUnit } from '../content'
import { ConsolidationQuiz, Explanations, type ConsolidationMiss } from '../components/ConsolidationQuiz'
import { RichText, Inline } from '../components/RichText'
import { shuffled, shuffleQuestion, type ShuffledQuestion } from '../components/shuffle'
import { PASS_SCORE, XP_PER_CORRECT, isConsolidationUnlocked, isUnitPassed, type AttemptResult } from '../engine/progress'
import { useProgress } from '../state/ProgressContext'
import { NotFoundInline } from './LessonPage'

type Stage = { kind: 'summary' } | { kind: 'quiz'; items: ShuffledQuestion[] } | { kind: 'result'; result: AttemptResult; misses: ConsolidationMiss[] }

export function ConsolidationPage() {
  const { id = '' } = useParams()
  const block = getConsolidation(id)
  const { state, completeConsolidation } = useProgress()
  const [stage, setStage] = useState<Stage>({ kind: 'summary' })

  if (!block) return <NotFoundInline />

  const units = block.unitIds.flatMap((u) => getUnit(u) ?? [])
  const rangeLabel = `${block.level}, unidades ${block.units[0]} a ${block.units[1]}`
  const record = state.consolidations[block.id]

  const start = () => {
    setStage({ kind: 'quiz', items: shuffled(block.questions).map((q) => shuffleQuestion(q)) })
    window.scrollTo(0, 0)
  }

  const header = (
    <>
      <p className="crumbs">
        <Link to="/">Trilha</Link> › Consolidação ({rangeLabel})
      </p>
      <h1>{block.title}</h1>
    </>
  )

  if (!isConsolidationUnlocked(state, block)) {
    const missing = units.filter((u) => !isUnitPassed(state, u.id))
    return (
      <div className="page narrow">
        {header}
        <p>Esta consolidação é opcional e libera quando você concluir as unidades do bloco. Faltam:</p>
        <ul>
          {missing.map((u) => (
            <li key={u.id}>
              Unidade {u.number}: {u.title}
            </li>
          ))}
        </ul>
        <Link className="btn" to="/">
          Voltar para a trilha
        </Link>
      </div>
    )
  }

  if (stage.kind === 'quiz') {
    return (
      <div className="page narrow">
        {header}
        <ConsolidationQuiz
          items={stage.items}
          onFinish={(result, misses) => {
            completeConsolidation(block.id, result)
            setStage({ kind: 'result', result, misses })
            window.scrollTo(0, 0)
          }}
        />
      </div>
    )
  }

  if (stage.kind === 'result') {
    const { result, misses } = stage
    const score = result.total ? result.correct / result.total : 0
    const solid = score >= PASS_SCORE
    return (
      <div className="page narrow">
        {header}
        <div className="result">
          <div className={`score ${solid ? 'pass' : 'fail'}`}>
            <span className="value">{Math.round(score * 100)}%</span>
            <span>
              {result.correct} de {result.total} corretas, +{result.correct * XP_PER_CORRECT} XP
            </span>
          </div>
          <p>
            {solid
              ? 'Conteúdo consolidado. Volte aqui de vez em quando para manter as regras frescas.'
              : 'Vale revisar: releia o resumo e as explicações abaixo. Esta prova não bloqueia nada: refaça quando quiser.'}
          </p>
          {misses.length > 0 && (
            <>
              <h3>Seus erros, explicados</h3>
              <ol className="miss-list">
                {misses.map((m, i) => (
                  <li key={i}>
                    <p className="prompt">
                      <Inline text={m.item.question.prompt} />
                    </p>
                    <Explanations item={m.item} picked={m.picked} />
                  </li>
                ))}
              </ol>
            </>
          )}
          <div className="row">
            <button className={`btn ${solid ? '' : 'primary'}`} onClick={start}>
              Refazer
            </button>
            <button className="btn" onClick={() => setStage({ kind: 'summary' })}>
              Ver o resumo
            </button>
            <Link className="btn" to="/">
              Trilha
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page narrow">
      {header}
      <p className="lead">
        Prova opcional de consolidação: {block.questions.length} questões de múltipla escolha. Cada resposta vem com a explicação de por que está certa
        ou errada. Não bloqueia o avanço.
        {record && ` Sua melhor nota: ${Math.round(record.bestScore * 100)}%.`}
      </p>
      <section className="theory consolidation-summary">
        <h2>Resumo do bloco</h2>
        <RichText text={block.summary} />
      </section>
      <p className="muted">Rever a teoria:</p>
      <ul className="review-links">
        {units.map((u) => (
          <li key={u.id}>
            <Link to={`/lesson/${u.id}`}>
              Unidade {u.number}: {u.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="row">
        <button className="btn primary" onClick={start}>
          Começar
        </button>
      </div>
    </div>
  )
}
