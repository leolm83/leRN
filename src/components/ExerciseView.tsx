import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import type { Exercise, ReorderExercise, WritingExercise } from '../content/types'
import { grade, type GradeResult } from '../engine/grader'
import { Inline } from './RichText'

const INSTRUCTIONS: Record<Exercise['type'], string> = {
  choice: 'Escolha a opção correta',
  fill: 'Complete a lacuna',
  reorder: 'Monte a frase na ordem correta',
  translate: 'Traduza',
  fixError: 'A frase tem um erro. Reescreva a frase inteira corrigida',
  transform: 'Reescreva a frase',
  writing: 'Produção escrita',
}

interface Props {
  exercise: Exercise
  onDone: (result: GradeResult) => void
}

/** Mostra um exercício, corrige a resposta e exibe o feedback. Chama onDone ao clicar em "Continuar". */
export function ExerciseView({ exercise, onDone }: Props) {
  const [result, setResult] = useState<GradeResult | null>(null)
  const continueRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (result) continueRef.current?.focus()
  }, [result])

  const submit = (answer: string) => {
    if (!result) setResult(grade(exercise, answer))
  }

  const title =
    exercise.type === 'translate'
      ? exercise.from === 'pt'
        ? 'Traduza para o inglês'
        : 'Traduza para o português'
      : exercise.type === 'transform'
        ? exercise.instruction
        : INSTRUCTIONS[exercise.type]

  return (
    <div className="exercise">
      <p className="exercise-kind">{title}</p>
      <ExerciseInput exercise={exercise} locked={!!result} onSubmit={submit} />
      {result && (
        <div className={`feedback ${result.status}`} role="status">
          <strong>
            {result.status === 'correct' ? 'Correto!' : result.status === 'almost' ? 'Quase! Confira a grafia.' : 'Não foi dessa vez.'}
          </strong>
          {result.status !== 'correct' && exercise.type !== 'writing' && (
            <p>
              Resposta: <span className="answer">{result.expected}</span>
            </p>
          )}
          {result.notes.map((n) => (
            <p key={n} className="tip">
              ✎ {n}
            </p>
          ))}
          {exercise.explanation && (
            <p className="explanation">
              <Inline text={exercise.explanation} />
            </p>
          )}
          <button ref={continueRef} className="btn primary" onClick={() => onDone(result)}>
            Continuar
          </button>
        </div>
      )}
    </div>
  )
}

interface InputProps {
  exercise: Exercise
  locked: boolean
  onSubmit: (answer: string) => void
}

function ExerciseInput({ exercise, locked, onSubmit }: InputProps) {
  switch (exercise.type) {
    case 'choice':
      return <ChoiceInput exercise={exercise} locked={locked} onSubmit={onSubmit} />
    case 'reorder':
      return <ReorderInput exercise={exercise} locked={locked} onSubmit={onSubmit} />
    case 'writing':
      return <WritingInput exercise={exercise} locked={locked} onSubmit={onSubmit} />
    case 'fill':
      return <TextInput prompt={exercise.prompt} hint={exercise.hint} fill locked={locked} onSubmit={onSubmit} />
    case 'fixError':
      return <TextInput prompt={exercise.prompt} wrong locked={locked} onSubmit={onSubmit} />
    default:
      return <TextInput prompt={exercise.prompt} locked={locked} onSubmit={onSubmit} />
  }
}

function ChoiceInput({ exercise, locked, onSubmit }: InputProps & { exercise: Extract<Exercise, { type: 'choice' }> }) {
  const [picked, setPicked] = useState<number | null>(null)
  return (
    <>
      <p className="prompt">
        <Inline text={exercise.prompt} />
      </p>
      <div className="options">
        {exercise.options.map((opt, i) => {
          let cls = 'option'
          if (picked === i) cls += ' picked'
          if (locked && i === exercise.answer) cls += ' right'
          if (locked && picked === i && i !== exercise.answer) cls += ' wrong'
          return (
            <button
              key={i}
              className={cls}
              disabled={locked}
              onClick={() => {
                setPicked(i)
                onSubmit(String(i))
              }}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </>
  )
}

interface TextInputProps {
  prompt: string
  hint?: string
  fill?: boolean
  wrong?: boolean
  locked: boolean
  onSubmit: (answer: string) => void
}

function TextInput({ prompt, hint, fill, wrong, locked, onSubmit }: TextInputProps) {
  const [value, setValue] = useState(wrong ? prompt : '')
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => ref.current?.focus(), [])

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim()) {
      e.preventDefault()
      onSubmit(value)
    }
  }

  const input = (
    <input
      ref={ref}
      className={fill ? 'blank' : 'line'}
      value={value}
      disabled={locked}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKey}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      aria-label="Sua resposta"
    />
  )

  if (fill) {
    const [before, after] = prompt.split('___')
    return (
      <>
        <p className="prompt fill-line">
          <Inline text={before} />
          {input}
          <Inline text={after ?? ''} />
        </p>
        {hint && <p className="muted">Dica: {hint}</p>}
        {!locked && (
          <button className="btn primary" disabled={!value.trim()} onClick={() => onSubmit(value)}>
            Verificar
          </button>
        )}
      </>
    )
  }

  return (
    <>
      <p className={`prompt ${wrong ? 'with-error' : ''}`}>{prompt}</p>
      {input}
      {!locked && (
        <button className="btn primary" disabled={!value.trim()} onClick={() => onSubmit(value)}>
          Verificar
        </button>
      )}
    </>
  )
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function ReorderInput({ exercise, locked, onSubmit }: InputProps & { exercise: ReorderExercise }) {
  const tiles = useMemo(() => {
    const indexed = exercise.words.map((w, i) => ({ w, i }))
    let s = shuffle(indexed)
    // Evita mostrar já na ordem certa.
    for (let tries = 0; tries < 5 && s.every((t, k) => t.i === k); tries++) s = shuffle(indexed)
    return s
  }, [exercise])
  const [chosen, setChosen] = useState<number[]>([]) // posições em `tiles`

  const sentence = chosen.map((k) => tiles[k].w).join(' ')
  const complete = chosen.length === tiles.length

  return (
    <>
      {exercise.translation && <p className="prompt">{exercise.translation}</p>}
      <div className="reorder-answer" aria-label="Sua frase">
        {chosen.length === 0 && <span className="muted">Clique nas palavras abaixo…</span>}
        {chosen.map((k, pos) => (
          <button key={k} className="tile" disabled={locked} onClick={() => setChosen((c) => c.filter((_, p) => p !== pos))}>
            {tiles[k].w}
          </button>
        ))}
      </div>
      <div className="reorder-bank">
        {tiles.map((t, k) => (
          <button key={k} className="tile" disabled={locked || chosen.includes(k)} onClick={() => setChosen((c) => [...c, k])}>
            {t.w}
          </button>
        ))}
      </div>
      {!locked && (
        <button className="btn primary" disabled={!complete} onClick={() => onSubmit(sentence)}>
          Verificar
        </button>
      )}
    </>
  )
}

function WritingInput({ exercise, locked, onSubmit }: InputProps & { exercise: WritingExercise }) {
  const [text, setText] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [checked, setChecked] = useState<boolean[]>(() => exercise.checklist.map(() => false))

  return (
    <>
      <p className="prompt">
        <Inline text={exercise.prompt} />
      </p>
      <textarea
        value={text}
        disabled={revealed}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        spellCheck={false}
        placeholder="Escreva aqui em inglês…"
        aria-label="Seu texto"
      />
      {!revealed ? (
        <button className="btn primary" disabled={text.trim().length < 10} onClick={() => setRevealed(true)}>
          Comparar com o modelo
        </button>
      ) : (
        <div className="writing-review">
          <p className="muted">Resposta-modelo (uma de muitas possíveis):</p>
          <p className="model">{exercise.model}</p>
          <p className="muted">Confira o seu texto:</p>
          <ul className="checklist">
            {exercise.checklist.map((item, i) => (
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    disabled={locked}
                    onChange={() => setChecked((c) => c.map((v, k) => (k === i ? !v : v)))}
                  />{' '}
                  {item}
                </label>
              </li>
            ))}
          </ul>
          {!locked && (
            <div className="row">
              <button className="btn primary" disabled={!checked.every(Boolean)} onClick={() => onSubmit('self:correct')}>
                Meu texto cumpre tudo
              </button>
              <button className="btn" onClick={() => onSubmit('self:wrong')}>
                Preciso revisar
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
