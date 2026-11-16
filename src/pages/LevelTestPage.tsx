import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLevel, levels } from '../content'
import { ExerciseRunner, type WrongItem } from '../components/ExerciseRunner'
import { Result } from '../components/Result'
import { isLevelTestUnlocked, type AttemptResult } from '../engine/progress'
import { useProgress } from '../state/ProgressContext'
import { NotFoundInline } from './LessonPage'

export function LevelTestPage() {
  const { levelId = '' } = useParams()
  const level = getLevel(levelId)
  const { state, completeLevelTest } = useProgress()
  const [attempt, setAttempt] = useState(0)
  const [outcome, setOutcome] = useState<{ result: AttemptResult; wrong: WrongItem[] } | null>(null)

  if (!level) return <NotFoundInline />

  if (!isLevelTestUnlocked(state, levels, level.id)) {
    return (
      <div className="page narrow">
        <h2>Prova bloqueada</h2>
        <p>Conclua todas as unidades do nível {level.id} com pelo menos 80% para liberar a prova.</p>
        <Link className="btn" to="/">
          Voltar para a trilha
        </Link>
      </div>
    )
  }

  const nextLevel = levels[levels.findIndex((l) => l.id === level.id) + 1]

  return (
    <div className="page narrow">
      <p className="crumbs">
        <Link to="/">Trilha</Link> › Prova {level.id}
      </p>
      <h1>Prova do nível {level.id}</h1>
      {!outcome ? (
        <>
          <p className="lead">Exercícios de todas as unidades, sem teoria. Acerte 80% para liberar o próximo nível.</p>
          <ExerciseRunner
            key={attempt}
            exercises={level.test}
            onFinish={(result, wrong) => {
              completeLevelTest(level.id, result)
              setOutcome({ result, wrong })
              window.scrollTo(0, 0)
            }}
          />
        </>
      ) : (
        <Result
          result={outcome.result}
          wrong={outcome.wrong}
          onRetry={() => {
            setOutcome(null)
            setAttempt((a) => a + 1)
          }}
          next={nextLevel && nextLevel.units[0] ? { to: `/lesson/${nextLevel.units[0].id}`, label: `Começar o ${nextLevel.id}` } : undefined}
        />
      )}
    </div>
  )
}
