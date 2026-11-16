import { useEffect, useRef, useState } from 'react'
import type { AttemptResult } from '../engine/progress'
import { Inline } from './RichText'
import type { ShuffledQuestion } from './shuffle'

export interface ConsolidationMiss {
  item: ShuffledQuestion
  picked: number
}

interface QuestionProps {
  item: ShuffledQuestion
  onDone: (picked: number) => void
}

/** Uma questão: depois de escolher, explica a alternativa escolhida, a correta (se errou) e a regra. */
export function ConsolidationQuestionView({ item, onDone }: QuestionProps) {
  const [picked, setPicked] = useState<number | null>(null)
  const continueRef = useRef<HTMLButtonElement>(null)
  const answered = picked !== null
  const right = picked === item.answer

  useEffect(() => {
    if (answered) continueRef.current?.focus()
  }, [answered])

  return (
    <div className="exercise">
      <p className="exercise-kind">Escolha a alternativa correta</p>
      <p className="prompt">
        <Inline text={item.question.prompt} />
      </p>
      <div className="options">
        {item.options.map((opt, i) => {
          let cls = 'option'
          if (answered && i === item.answer) cls += ' right'
          else if (answered && i === picked) cls += ' wrong'
          return (
            <button key={i} className={cls} disabled={answered} onClick={() => setPicked(i)}>
              <Inline text={opt.text} />
            </button>
          )
        })}
      </div>
      {answered && (
        <div className={`feedback ${right ? 'correct' : 'wrong'}`} role="status">
          <strong>{right ? 'Correto!' : 'Não foi dessa vez.'}</strong>
          <Explanations item={item} picked={picked} />
          <button ref={continueRef} className="btn primary" onClick={() => onDone(picked)}>
            Continuar
          </button>
        </div>
      )}
    </div>
  )
}

/** Por que a escolha está certa/errada, por que a correta é a correta, e a regra. */
export function Explanations({ item, picked }: { item: ShuffledQuestion; picked: number }) {
  const right = picked === item.answer
  const chosen = item.options[picked]
  const correct = item.options[item.answer]
  return (
    <div className="why-list">
      <div className={`why ${right ? 'ok' : 'bad'}`}>
        <span className="why-label">{right ? 'Por que está certa' : 'Por que a sua resposta está errada'}</span>
        <span className="why-option">
          <Inline text={chosen.text} />
        </span>
        <span>
          <Inline text={chosen.why} />
        </span>
      </div>
      {!right && (
        <div className="why ok">
          <span className="why-label">Por que a correta é esta</span>
          <span className="why-option">
            <Inline text={correct.text} />
          </span>
          <span>
            <Inline text={correct.why} />
          </span>
        </div>
      )}
      <div className="rule">
        <span className="why-label">Regra</span>
        <span>
          <Inline text={item.question.rule} />
        </span>
      </div>
    </div>
  )
}

interface QuizProps {
  items: ShuffledQuestion[]
  onFinish: (result: AttemptResult, misses: ConsolidationMiss[]) => void
}

export function ConsolidationQuiz({ items, onFinish }: QuizProps) {
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [misses, setMisses] = useState<ConsolidationMiss[]>([])
  const item = items[index]
  if (!item) return null

  return (
    <div>
      <div className="runner-head">
        <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={index}>
          <div style={{ width: `${(index / items.length) * 100}%` }} />
        </div>
        <span className="muted">
          {index + 1} / {items.length}
        </span>
      </div>
      <ConsolidationQuestionView
        key={index}
        item={item}
        onDone={(picked) => {
          const ok = picked === item.answer
          const nextCorrect = correct + (ok ? 1 : 0)
          const nextMisses = ok ? misses : [...misses, { item, picked }]
          if (index + 1 >= items.length) {
            onFinish({ correct: nextCorrect, total: items.length, wrongIds: [] }, nextMisses)
          } else {
            setCorrect(nextCorrect)
            setMisses(nextMisses)
            setIndex(index + 1)
          }
        }}
      />
    </div>
  )
}
