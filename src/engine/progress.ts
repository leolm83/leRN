import type { Consolidation, Level, LevelId, Unit } from '../content/types'
import { addDays } from './dates'
import { addCard, markWrong, type Deck } from './srs'

export const PASS_SCORE = 0.8
export const XP_PER_CORRECT = 10

export interface LessonRecord {
  bestScore: number
  lastScore: number
  attempts: number
  completedAt?: string
}

export interface ProgressState {
  version: 1
  lessons: Record<string, LessonRecord>
  levelTests: Partial<Record<LevelId, LessonRecord>>
  /** Provas de consolidação (opcionais; não afetam desbloqueios). */
  consolidations: Record<string, LessonRecord>
  xp: number
  streak: { count: number; lastDay: string | null }
  /** XP ganho por dia (YYYY-MM-DD). */
  daily: Record<string, number>
  deck: Deck
}

export function emptyProgress(): ProgressState {
  return { version: 1, lessons: {}, levelTests: {}, consolidations: {}, xp: 0, streak: { count: 0, lastDay: null }, daily: {}, deck: {} }
}

export interface AttemptResult {
  correct: number
  total: number
  wrongIds: string[]
}

function bumpStreak(state: ProgressState, today: string): ProgressState['streak'] {
  const { count, lastDay } = state.streak
  if (lastDay === today) return state.streak
  if (lastDay && addDays(lastDay, 1) === today) return { count: count + 1, lastDay: today }
  return { count: 1, lastDay: today }
}

/** Streak exibido: zera se o aluno pulou um dia. */
export function currentStreak(state: ProgressState, today: string): number {
  const { count, lastDay } = state.streak
  if (!lastDay) return 0
  if (lastDay === today || addDays(lastDay, 1) === today) return count
  return 0
}

/** Ganha XP (usado em lições, provas e revisões). */
export function gainXp(state: ProgressState, amount: number, today: string): ProgressState {
  if (amount <= 0) return state
  return {
    ...state,
    xp: state.xp + amount,
    daily: { ...state.daily, [today]: (state.daily[today] ?? 0) + amount },
    streak: bumpStreak(state, today),
  }
}

function mergeRecord(prev: LessonRecord | undefined, score: number, today: string): LessonRecord {
  const passedNow = score >= PASS_SCORE
  return {
    bestScore: Math.max(prev?.bestScore ?? 0, score),
    lastScore: score,
    attempts: (prev?.attempts ?? 0) + 1,
    completedAt: prev?.completedAt ?? (passedNow ? today : undefined),
  }
}

export function recordLesson(state: ProgressState, unit: Unit, result: AttemptResult, today: string): ProgressState {
  const score = result.total ? result.correct / result.total : 0
  let deck = state.deck
  // Vocabulário entra na revisão a partir de amanhã; exercícios errados entram para hoje.
  for (const v of unit.vocab) deck = addCard(deck, 'vocab', `${unit.id}|${v.en}`, addDays(today, 1))
  for (const id of result.wrongIds) deck = markWrong(deck, 'exercise', id, today)
  const next: ProgressState = {
    ...state,
    deck,
    lessons: { ...state.lessons, [unit.id]: mergeRecord(state.lessons[unit.id], score, today) },
  }
  return gainXp(next, result.correct * XP_PER_CORRECT, today)
}

export function recordLevelTest(state: ProgressState, level: LevelId, result: AttemptResult, today: string): ProgressState {
  const score = result.total ? result.correct / result.total : 0
  let deck = state.deck
  for (const id of result.wrongIds) deck = markWrong(deck, 'exercise', id, today)
  const next: ProgressState = {
    ...state,
    deck,
    levelTests: { ...state.levelTests, [level]: mergeRecord(state.levelTests[level], score, today) },
  }
  return gainXp(next, result.correct * XP_PER_CORRECT, today)
}

/** Consolidação: guarda a nota e dá XP, sem mexer em desbloqueios nem na revisão. */
export function recordConsolidation(state: ProgressState, id: string, result: AttemptResult, today: string): ProgressState {
  const score = result.total ? result.correct / result.total : 0
  const next: ProgressState = {
    ...state,
    consolidations: { ...state.consolidations, [id]: mergeRecord(state.consolidations[id], score, today) },
  }
  return gainXp(next, result.correct * XP_PER_CORRECT, today)
}

/** Libera quando todas as unidades do bloco foram concluídas. */
export function isConsolidationUnlocked(state: ProgressState, c: Consolidation): boolean {
  return c.unitIds.length > 0 && c.unitIds.every((id) => isUnitPassed(state, id))
}

export function isUnitPassed(state: ProgressState, unitId: string): boolean {
  return (state.lessons[unitId]?.bestScore ?? 0) >= PASS_SCORE
}

export function isLevelPassed(state: ProgressState, level: LevelId): boolean {
  return (state.levelTests[level]?.bestScore ?? 0) >= PASS_SCORE
}

/** Um nível está aberto se é o primeiro ou se a prova do nível anterior foi aprovada. */
export function isLevelUnlocked(state: ProgressState, levels: Level[], level: LevelId): boolean {
  const i = levels.findIndex((l) => l.id === level)
  if (i <= 0) return i === 0
  return isLevelPassed(state, levels[i - 1].id)
}

export function isUnitUnlocked(state: ProgressState, levels: Level[], unitId: string): boolean {
  for (const level of levels) {
    const i = level.units.findIndex((u) => u.id === unitId)
    if (i === -1) continue
    if (!isLevelUnlocked(state, levels, level.id)) return false
    return i === 0 || isUnitPassed(state, level.units[i - 1].id)
  }
  return false
}

export function isLevelTestUnlocked(state: ProgressState, levels: Level[], level: LevelId): boolean {
  const l = levels.find((x) => x.id === level)
  if (!l || l.units.length === 0 || !isLevelUnlocked(state, levels, level)) return false
  return l.units.every((u) => isUnitPassed(state, u.id))
}

/** Próxima unidade a estudar (a primeira aberta e não aprovada). */
export function nextUnit(state: ProgressState, levels: Level[]): Unit | undefined {
  for (const level of levels) {
    for (const unit of level.units) {
      if (isUnitUnlocked(state, levels, unit.id) && !isUnitPassed(state, unit.id)) return unit
    }
  }
  return undefined
}

/** Valida um JSON importado do backup. */
export function parseProgress(raw: unknown): ProgressState | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Partial<ProgressState>
  if (r.version !== 1 || typeof r.lessons !== 'object' || typeof r.deck !== 'object') return null
  return { ...emptyProgress(), ...r } as ProgressState
}
