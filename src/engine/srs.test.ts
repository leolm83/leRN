import { describe, expect, it } from 'vitest'
import { addDays, diffDays } from './dates'
import { addCard, dueCards, markWrong, review, type Deck } from './srs'

const today = '2026-01-10'

describe('dates', () => {
  it('soma dias atravessando meses', () => {
    expect(addDays('2026-01-31', 1)).toBe('2026-02-01')
    expect(diffDays('2026-01-31', '2026-02-02')).toBe(2)
  })
})

describe('srs', () => {
  it('adiciona cartão uma vez só', () => {
    let deck: Deck = {}
    deck = addCard(deck, 'vocab', 'a1-u01|hello', today)
    const again = addCard(deck, 'vocab', 'a1-u01|hello', '2030-01-01')
    expect(again).toBe(deck)
    expect(Object.keys(deck)).toEqual(['vocab:a1-u01|hello'])
  })

  it('acerto sobe de caixa e aumenta o intervalo', () => {
    let deck = addCard({}, 'exercise', 'e1', today)
    deck = review(deck, 'exercise:e1', true, today)
    expect(deck['exercise:e1']).toMatchObject({ box: 2, due: addDays(today, 3) })
    deck = review(deck, 'exercise:e1', true, today)
    expect(deck['exercise:e1']).toMatchObject({ box: 3, due: addDays(today, 7) })
  })

  it('erro volta para a caixa 1 e reaparece amanhã', () => {
    let deck = addCard({}, 'exercise', 'e1', today)
    deck = review(deck, 'exercise:e1', true, today)
    deck = review(deck, 'exercise:e1', true, today)
    deck = review(deck, 'exercise:e1', false, today)
    expect(deck['exercise:e1']).toMatchObject({ box: 1, due: addDays(today, 1) })
  })

  it('a caixa máxima é 5', () => {
    let deck = addCard({}, 'exercise', 'e1', today)
    for (let i = 0; i < 10; i++) deck = review(deck, 'exercise:e1', true, today)
    expect(deck['exercise:e1'].box).toBe(5)
  })

  it('dueCards traz só os vencidos, caixas baixas primeiro', () => {
    let deck = addCard({}, 'exercise', 'a', addDays(today, 2))
    deck = addCard(deck, 'exercise', 'b', today)
    deck = markWrong(deck, 'exercise', 'c', today)
    deck = review(deck, 'exercise:b', true, addDays(today, -5))
    const due = dueCards(deck, today)
    expect(due.map((c) => c.ref)).toEqual(['c', 'b'])
  })
})
