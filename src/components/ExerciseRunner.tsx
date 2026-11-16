import { useState } from 'react'
import type { Exercise } from '../content/types'
import type { AttemptResult } from '../engine/progress'
import { ExerciseView } from './ExerciseView'

export interface WrongItem {
  exercise: Exercise
  expected: string
}

interface Props {
  exercises: Exercise[]
  onFinish: (result: AttemptResult, wrong: WrongItem[]) => void
}

/** Executa uma sequência de exercícios e devolve a pontuação. */
export function ExerciseRunner({ exercises, onFinish }: Props) {
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState<WrongItem[]>([])

  const ex = exercises[index]
  if (!ex) return null

  return (
    <div>
      <div className="runner-head">
        <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={exercises.length} aria-valuenow={index}>
          <div style={{ width: `${(index / exercises.length) * 100}%` }} />
        </div>
        <span className="muted">
          {index + 1} / {exercises.length}
        </span>
      </div>
      <ExerciseView
        key={ex.id}
        exercise={ex}
        onDone={(r) => {
          const ok = r.status === 'correct'
          const nextCorrect = correct + (ok ? 1 : 0)
          const nextWrong = ok ? wrong : [...wrong, { exercise: ex, expected: r.expected }]
          if (index + 1 >= exercises.length) {
            onFinish({ correct: nextCorrect, total: exercises.length, wrongIds: nextWrong.map((w) => w.exercise.id) }, nextWrong)
          } else {
            setCorrect(nextCorrect)
            setWrong(nextWrong)
            setIndex(index + 1)
          }
        }}
      />
    </div>
  )
}
