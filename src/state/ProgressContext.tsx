import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { LevelId, Unit } from '../content/types'
import { toDay } from '../engine/dates'
import {
  emptyProgress,
  gainXp,
  recordConsolidation,
  recordLesson,
  recordLevelTest,
  type AttemptResult,
  type ProgressState,
} from '../engine/progress'
import { review } from '../engine/srs'
import { clearProgress, loadProgress, saveProgress } from '../storage'

export const XP_PER_REVIEW = 5
export const DAILY_GOAL_XP = 150

interface ProgressApi {
  state: ProgressState
  today: string
  completeLesson: (unit: Unit, result: AttemptResult) => void
  completeLevelTest: (level: LevelId, result: AttemptResult) => void
  completeConsolidation: (id: string, result: AttemptResult) => void
  reviewCard: (key: string, correct: boolean) => void
  replaceState: (s: ProgressState) => void
  reset: () => void
}

const Ctx = createContext<ProgressApi | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadProgress)

  useEffect(() => saveProgress(state), [state])

  const completeLesson = useCallback((unit: Unit, result: AttemptResult) => {
    setState((s) => recordLesson(s, unit, result, toDay()))
  }, [])

  const completeLevelTest = useCallback((level: LevelId, result: AttemptResult) => {
    setState((s) => recordLevelTest(s, level, result, toDay()))
  }, [])

  const completeConsolidation = useCallback((id: string, result: AttemptResult) => {
    setState((s) => recordConsolidation(s, id, result, toDay()))
  }, [])

  const reviewCard = useCallback((key: string, correct: boolean) => {
    setState((s) => {
      const today = toDay()
      const next = { ...s, deck: review(s.deck, key, correct, today) }
      return correct ? gainXp(next, XP_PER_REVIEW, today) : next
    })
  }, [])

  const reset = useCallback(() => {
    clearProgress()
    setState(emptyProgress())
  }, [])

  const api = useMemo<ProgressApi>(
    () => ({ state, today: toDay(), completeLesson, completeLevelTest, completeConsolidation, reviewCard, replaceState: setState, reset }),
    [state, completeLesson, completeLevelTest, completeConsolidation, reviewCard, reset],
  )

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress(): ProgressApi {
  const v = useContext(Ctx)
  if (!v) throw new Error('useProgress fora do ProgressProvider')
  return v
}
