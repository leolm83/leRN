import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { httpClient, login as apiLogin, logout as apiLogout, type LoginResult } from '../api'
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
import { clearProgress, loadProgress, loadSyncMeta, saveProgress, saveSyncMeta } from '../storage'
import { SyncEngine, type SyncStatus } from './sync'

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
  /** Estado da sincronização com o servidor. */
  sync: SyncStatus
  /** Aviso quando o servidor tinha uma versão mais nova e ela substituiu a local. */
  conflictNotice: boolean
  dismissConflict: () => void
  login: (password: string) => Promise<LoginResult>
  logout: () => Promise<void>
}

const Ctx = createContext<ProgressApi | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadProgress)
  const [sync, setSync] = useState<SyncStatus>('connecting')
  const [conflictNotice, setConflictNotice] = useState(false)
  const engineRef = useRef<SyncEngine | null>(null)

  useEffect(() => {
    const engine = new SyncEngine(loadProgress(), {
      client: httpClient,
      meta: loadSyncMeta(),
      onMeta: saveSyncMeta,
      onRemote: setState,
      onStatus: setSync,
      onConflict: () => setConflictNotice(true),
    })
    engineRef.current = engine
    void engine.connect()

    const retry = () => engine.retry()
    const onVisibility = () => (document.visibilityState === 'hidden' ? engine.flushNow() : engine.retry())
    window.addEventListener('online', retry)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.removeEventListener('online', retry)
      document.removeEventListener('visibilitychange', onVisibility)
      engine.dispose()
      engineRef.current = null
    }
  }, [])

  useEffect(() => {
    saveProgress(state)
    engineRef.current?.update(state)
  }, [state])

  const login = useCallback(async (password: string) => {
    const result = await apiLogin(password)
    if (result === 'ok') await engineRef.current?.connect()
    return result
  }, [])

  const logout = useCallback(async () => {
    await apiLogout()
    clearProgress()
    engineRef.current?.reset()
    setState(emptyProgress())
  }, [])

  const dismissConflict = useCallback(() => setConflictNotice(false), [])

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

  // Apaga o progresso (o cache local é sobrescrito e o servidor recebe o estado vazio).
  const reset = useCallback(() => setState(emptyProgress()), [])

  const api = useMemo<ProgressApi>(
    () => ({
      state,
      today: toDay(),
      completeLesson,
      completeLevelTest,
      completeConsolidation,
      reviewCard,
      replaceState: setState,
      reset,
      sync,
      conflictNotice,
      dismissConflict,
      login,
      logout,
    }),
    [state, completeLesson, completeLevelTest, completeConsolidation, reviewCard, reset, sync, conflictNotice, dismissConflict, login, logout],
  )

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress(): ProgressApi {
  const v = useContext(Ctx)
  if (!v) throw new Error('useProgress fora do ProgressProvider')
  return v
}
