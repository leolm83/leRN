import { emptyProgress, parseProgress, type ProgressState } from './engine/progress'

const KEY = 'lern:progress:v1'

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
  } catch {
    // ignore
  }
}
