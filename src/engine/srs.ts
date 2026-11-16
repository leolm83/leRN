import { addDays } from './dates'

/**
 * Revisão espaçada no sistema Leitner (5 caixas).
 * Acertou: sobe uma caixa e o intervalo aumenta. Errou: volta para a caixa 1.
 */
export const INTERVALS = [0, 1, 3, 7, 14, 30] // índice = caixa

export type CardKind = 'vocab' | 'exercise'

export interface Card {
  key: string
  kind: CardKind
  /** Para vocab: "unitId|en". Para exercise: id do exercício. */
  ref: string
  box: number
  due: string
}

export type Deck = Record<string, Card>

export function vocabKey(unitId: string, en: string) {
  return `vocab:${unitId}|${en}`
}

export function exerciseKey(exerciseId: string) {
  return `exercise:${exerciseId}`
}

/** Adiciona um cartão se ainda não existir. */
export function addCard(deck: Deck, kind: CardKind, ref: string, due: string): Deck {
  const key = kind === 'vocab' ? `vocab:${ref}` : exerciseKey(ref)
  if (deck[key]) return deck
  return { ...deck, [key]: { key, kind, ref, box: 1, due } }
}

/** Marca um item errado fora da revisão: volta para a caixa 1 e fica para hoje. */
export function markWrong(deck: Deck, kind: CardKind, ref: string, today: string): Deck {
  const key = kind === 'vocab' ? `vocab:${ref}` : exerciseKey(ref)
  return { ...deck, [key]: { key, kind, ref, box: 1, due: today } }
}

export function review(deck: Deck, key: string, correct: boolean, today: string): Deck {
  const card = deck[key]
  if (!card) return deck
  const box = correct ? Math.min(card.box + 1, 5) : 1
  const due = addDays(today, correct ? INTERVALS[box] : 1)
  return { ...deck, [key]: { ...card, box, due } }
}

export function dueCards(deck: Deck, today: string): Card[] {
  return Object.values(deck)
    .filter((c) => c.due <= today)
    .sort((a, b) => a.box - b.box || a.due.localeCompare(b.due))
}
