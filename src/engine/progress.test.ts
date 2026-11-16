import { describe, expect, it } from 'vitest'
import { levels } from '../content'
import type { Consolidation } from '../content/types'
import {
  currentStreak,
  emptyProgress,
  isConsolidationUnlocked,
  isLevelTestUnlocked,
  isLevelUnlocked,
  isUnitUnlocked,
  nextUnit,
  parseProgress,
  recordConsolidation,
  recordLesson,
  recordLevelTest,
} from './progress'

const [a1] = levels
const [u1, u2] = a1.units
const today = '2026-03-01'

describe('desbloqueio', () => {
  it('só a primeira unidade começa aberta', () => {
    const s = emptyProgress()
    expect(isUnitUnlocked(s, levels, u1.id)).toBe(true)
    expect(isUnitUnlocked(s, levels, u2.id)).toBe(false)
    expect(nextUnit(s, levels)?.id).toBe(u1.id)
  })

  it('aprovação com 80% abre a próxima unidade', () => {
    let s = recordLesson(emptyProgress(), u1, { correct: 7, total: 10, wrongIds: [] }, today)
    expect(isUnitUnlocked(s, levels, u2.id)).toBe(false)
    s = recordLesson(s, u1, { correct: 8, total: 10, wrongIds: [] }, today)
    expect(isUnitUnlocked(s, levels, u2.id)).toBe(true)
    expect(s.lessons[u1.id]).toMatchObject({ bestScore: 0.8, attempts: 2, completedAt: today })
  })

  it('a melhor nota é mantida', () => {
    let s = recordLesson(emptyProgress(), u1, { correct: 10, total: 10, wrongIds: [] }, today)
    s = recordLesson(s, u1, { correct: 1, total: 10, wrongIds: [] }, today)
    expect(s.lessons[u1.id].bestScore).toBe(1)
    expect(s.lessons[u1.id].lastScore).toBe(0.1)
  })

  it('prova de nível abre depois de todas as unidades e libera o próximo nível', () => {
    let s = emptyProgress()
    expect(isLevelTestUnlocked(s, levels, 'A1')).toBe(false)
    for (const u of a1.units) s = recordLesson(s, u, { correct: 1, total: 1, wrongIds: [] }, today)
    expect(isLevelTestUnlocked(s, levels, 'A1')).toBe(true)
    expect(isLevelUnlocked(s, levels, 'A2')).toBe(false)
    s = recordLevelTest(s, 'A1', { correct: 9, total: 10, wrongIds: [] }, today)
    expect(isLevelUnlocked(s, levels, 'A2')).toBe(true)
  })
})

describe('revisão e XP', () => {
  it('adiciona vocabulário e erros ao deck', () => {
    const wrong = u1.exercises[0].id
    const s = recordLesson(emptyProgress(), u1, { correct: 3, total: 4, wrongIds: [wrong] }, today)
    expect(s.deck[`exercise:${wrong}`]).toMatchObject({ box: 1, due: today })
    expect(Object.values(s.deck).filter((c) => c.kind === 'vocab').length).toBe(u1.vocab.length)
    expect(s.xp).toBe(30)
    expect(s.daily[today]).toBe(30)
  })

  it('streak conta dias seguidos e zera se pular um dia', () => {
    let s = recordLesson(emptyProgress(), u1, { correct: 1, total: 1, wrongIds: [] }, '2026-03-01')
    s = recordLesson(s, u1, { correct: 1, total: 1, wrongIds: [] }, '2026-03-02')
    expect(currentStreak(s, '2026-03-02')).toBe(2)
    expect(currentStreak(s, '2026-03-03')).toBe(2)
    expect(currentStreak(s, '2026-03-04')).toBe(0)
    s = recordLesson(s, u1, { correct: 1, total: 1, wrongIds: [] }, '2026-03-05')
    expect(currentStreak(s, '2026-03-05')).toBe(1)
  })
})

describe('parseProgress', () => {
  it('recusa dados inválidos', () => {
    expect(parseProgress(null)).toBeNull()
    expect(parseProgress({ version: 2 })).toBeNull()
    expect(parseProgress(JSON.parse(JSON.stringify(emptyProgress())))).toEqual(emptyProgress())
  })
})

describe('consolidação', () => {
  const block: Consolidation = {
    id: 'a1-c99',
    level: 'A1',
    title: 'Teste',
    units: [1, 2],
    unitIds: [u1.id, u2.id],
    summary: '',
    questions: [],
  }

  it('libera só depois de concluir todas as unidades do bloco', () => {
    let s = recordLesson(emptyProgress(), u1, { correct: 10, total: 10, wrongIds: [] }, today)
    expect(isConsolidationUnlocked(s, block)).toBe(false)
    s = recordLesson(s, u2, { correct: 10, total: 10, wrongIds: [] }, today)
    expect(isConsolidationUnlocked(s, block)).toBe(true)
  })

  it('guarda a melhor nota, dá XP e não afeta desbloqueios nem a revisão', () => {
    const base = recordLesson(emptyProgress(), u1, { correct: 10, total: 10, wrongIds: [] }, today)
    let s = recordConsolidation(base, block.id, { correct: 9, total: 10, wrongIds: ['x'] }, today)
    s = recordConsolidation(s, block.id, { correct: 2, total: 10, wrongIds: [] }, today)
    expect(s.consolidations[block.id]).toMatchObject({ bestScore: 0.9, lastScore: 0.2, attempts: 2 })
    expect(s.xp).toBe(base.xp + 110)
    expect(s.deck).toBe(base.deck)
    expect(s.lessons).toBe(base.lessons)
    expect(isUnitUnlocked(s, levels, u2.id)).toBe(isUnitUnlocked(base, levels, u2.id))
    expect(isLevelUnlocked(s, levels, 'A2')).toBe(false)
  })

  it('backup antigo sem o campo consolidations continua válido', () => {
    const old = { version: 1, lessons: {}, levelTests: {}, xp: 5, streak: { count: 0, lastDay: null }, daily: {}, deck: {} }
    expect(parseProgress(old)?.consolidations).toEqual({})
  })
})
