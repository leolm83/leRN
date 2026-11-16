import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getExercise, getUnit } from '../content'
import { ExerciseView } from '../components/ExerciseView'
import { gradeText, type GradeStatus } from '../engine/grader'
import { dueCards, type Card } from '../engine/srs'
import { vocabAnswers } from '../engine/vocab'
import { useProgress } from '../state/ProgressContext'

const SESSION_SIZE = 30

export function ReviewPage() {
  const { state, today, reviewCard } = useProgress()
  // A sessão é fixada ao abrir a página para que a lista não mude enquanto o aluno responde.
  const [session] = useState<Card[]>(() => dueCards(state.deck, today).slice(0, SESSION_SIZE))
  const [index, setIndex] = useState(0)
  const [right, setRight] = useState(0)

  if (session.length === 0) {
    return (
      <div className="page narrow">
        <h1>Revisão</h1>
        <p>Nenhum item para revisar hoje. Os itens voltam em intervalos crescentes (1, 3, 7, 14 e 30 dias) conforme você acerta.</p>
        <Link className="btn primary" to="/">
          Voltar para a trilha
        </Link>
      </div>
    )
  }

  if (index >= session.length) {
    return (
      <div className="page narrow">
        <h1>Revisão concluída</h1>
        <p>
          Você acertou {right} de {session.length}. Os itens errados voltam amanhã.
        </p>
        <Link className="btn primary" to="/">
          Voltar para a trilha
        </Link>
      </div>
    )
  }

  const card = session[index]
  const done = (status: GradeStatus) => {
    const ok = status === 'correct'
    reviewCard(card.key, ok)
    if (ok) setRight((r) => r + 1)
    setIndex((i) => i + 1)
  }

  return (
    <div className="page narrow">
      <h1>Revisão</h1>
      <div className="runner-head">
        <div className="bar">
          <div style={{ width: `${(index / session.length) * 100}%` }} />
        </div>
        <span className="muted">
          {index + 1} / {session.length}
        </span>
      </div>
      <ReviewItem key={card.key} card={card} onDone={done} />
    </div>
  )
}

function ReviewItem({ card, onDone }: { card: Card; onDone: (s: GradeStatus) => void }) {
  if (card.kind === 'exercise') {
    const ex = getExercise(card.ref)
    if (!ex) return <Skip onDone={onDone} />
    return <ExerciseView exercise={ex} onDone={(r) => onDone(r.status)} />
  }
  const [unitId, en] = card.ref.split('|')
  const item = getUnit(unitId)?.vocab.find((v) => v.en === en)
  if (!item) return <Skip onDone={onDone} />
  return <VocabCard pt={item.pt} en={item.en} onDone={onDone} />
}

function Skip({ onDone }: { onDone: (s: GradeStatus) => void }) {
  // Conteúdo removido de uma versão anterior: conta como acerto para sair da fila.
  const fired = useRef(false)
  useEffect(() => {
    if (fired.current) return
    fired.current = true
    onDone('correct')
  }, [onDone])
  return null
}

function VocabCard({ pt, en, onDone }: { pt: string; en: string; onDone: (s: GradeStatus) => void }) {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<GradeStatus | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => inputRef.current?.focus(), [])
  useEffect(() => {
    if (status) nextRef.current?.focus()
  }, [status])

  const check = () => {
    if (value.trim() && !status) setStatus(gradeText(value, vocabAnswers(en)))
  }

  return (
    <div className="exercise">
      <p className="exercise-kind">Vocabulário — escreva em inglês</p>
      <p className="prompt big">{pt}</p>
      <input
        ref={inputRef}
        className="line"
        value={value}
        disabled={!!status}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            check()
          }
        }}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        aria-label="Palavra em inglês"
      />
      {!status ? (
        <button className="btn primary" disabled={!value.trim()} onClick={check}>
          Verificar
        </button>
      ) : (
        <div className={`feedback ${status}`} role="status">
          <strong>{status === 'correct' ? 'Correto!' : status === 'almost' ? 'Quase! Confira a grafia.' : 'Não foi dessa vez.'}</strong>
          {status !== 'correct' && (
            <p>
              Resposta: <span className="answer">{en}</span>
            </p>
          )}
          <button ref={nextRef} className="btn primary" onClick={() => onDone(status)}>
            Continuar
          </button>
        </div>
      )}
    </div>
  )
}
