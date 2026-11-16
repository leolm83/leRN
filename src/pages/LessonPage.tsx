import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUnit, levels } from '../content'
import { ExerciseRunner, type WrongItem } from '../components/ExerciseRunner'
import { Result } from '../components/Result'
import { TheorySectionView, VocabTable } from '../components/TheoryView'
import type { AttemptResult } from '../engine/progress'
import { isUnitUnlocked, nextUnit } from '../engine/progress'
import { useProgress } from '../state/ProgressContext'

type Step = 'theory' | 'practice' | 'result'

export function LessonPage() {
  const { unitId = '' } = useParams()
  const unit = getUnit(unitId)
  const { state, completeLesson } = useProgress()
  const [step, setStep] = useState<Step>('theory')
  const [attempt, setAttempt] = useState(0)
  const [outcome, setOutcome] = useState<{ result: AttemptResult; wrong: WrongItem[] } | null>(null)

  if (!unit) return <NotFoundInline />

  if (!isUnitUnlocked(state, levels, unit.id)) {
    return (
      <div className="page narrow">
        <h2>Unidade bloqueada</h2>
        <p>Conclua a unidade anterior com pelo menos 80% para liberar esta.</p>
        <Link className="btn" to="/">
          Voltar para a trilha
        </Link>
      </div>
    )
  }

  const startPractice = () => {
    setAttempt((a) => a + 1)
    setStep('practice')
    window.scrollTo(0, 0)
  }

  return (
    <div className="page narrow">
      <p className="crumbs">
        <Link to="/">Trilha</Link> › {unit.level} › Unidade {unit.number}
      </p>
      <h1>{unit.title}</h1>

      {step === 'theory' && (
        <>
          <p className="lead">{unit.summary}</p>
          {unit.theory.map((s) => (
            <TheorySectionView key={s.title} section={s} />
          ))}
          <VocabTable vocab={unit.vocab} />
          <div className="sticky-actions">
            <button className="btn primary big" onClick={startPractice}>
              Praticar ({unit.exercises.length} exercícios)
            </button>
          </div>
        </>
      )}

      {step === 'practice' && (
        <>
          <ExerciseRunner
            key={attempt}
            exercises={unit.exercises}
            onFinish={(result, wrong) => {
              completeLesson(unit, result)
              setOutcome({ result, wrong })
              setStep('result')
              window.scrollTo(0, 0)
            }}
          />
          <button className="btn link" onClick={() => setStep('theory')}>
            ← Rever a teoria
          </button>
        </>
      )}

      {step === 'result' && outcome && (
        <Result
          result={outcome.result}
          wrong={outcome.wrong}
          onRetry={startPractice}
          onTheory={() => setStep('theory')}
          next={(() => {
            const n = nextUnit(state, levels)
            return n && n.id !== unit.id ? { to: `/lesson/${n.id}`, label: `Próxima: ${n.title}` } : undefined
          })()}
        />
      )}
    </div>
  )
}

export function NotFoundInline() {
  return (
    <div className="page narrow">
      <h2>Página não encontrada</h2>
      <Link className="btn" to="/">
        Voltar para a trilha
      </Link>
    </div>
  )
}
