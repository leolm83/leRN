import { emptyProgress, parseProgress, type ProgressState } from './engine/progress'

const KEY = 'lern:progress:v1'
const SYNC_KEY = 'lern:sync:v1'

/** Cópia local do progresso: cache offline do que está no servidor. */
export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyProgress()
    return parseProgress(JSON.parse(raw)) ?? emptyProgress()
  } catch {
    return emptyProgress()
  }
}

export function saveProgress(state: ProgressState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Armazenamento indisponível (modo privado, cota cheia): o app continua funcionando sem salvar.
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(KEY)
    localStorage.removeItem(SYNC_KEY)
  } catch {
    // ignore
  }
}

/** Estado da sincronização: revisão do servidor em que a cópia local se baseia e se há mudanças não enviadas. */
export interface SyncMeta {
  revision: number
  dirty: boolean
}

export function loadSyncMeta(): SyncMeta {
  try {
    const raw = JSON.parse(localStorage.getItem(SYNC_KEY) ?? 'null') as Partial<SyncMeta> | null
    if (raw && typeof raw.revision === 'number' && typeof raw.dirty === 'boolean') {
      return { revision: raw.revision, dirty: raw.dirty }
    }
  } catch {
    // ignore
  }
  return { revision: 0, dirty: false }
}

export function saveSyncMeta(meta: SyncMeta): void {
  try {
    localStorage.setItem(SYNC_KEY, JSON.stringify(meta))
  } catch {
    // ignore
  }
}
