import { Conflict, Unauthorized, type ProgressClient, type RemoteProgress } from '../api'
import { emptyProgress, parseProgress, type ProgressState } from '../engine/progress'
import type { SyncMeta } from '../storage'

export type SyncStatus = 'connecting' | 'syncing' | 'saved' | 'offline' | 'auth'

export interface SyncOptions {
  client: ProgressClient
  meta: SyncMeta
  onMeta: (meta: SyncMeta) => void
  /** O servidor venceu: o app deve adotar este estado. */
  onRemote: (state: ProgressState) => void
  onStatus: (status: SyncStatus) => void
  /** Havia mudanças locais, mas o servidor já tinha uma versão mais nova (ex.: outro aparelho). */
  onConflict?: () => void
  debounceMs?: number
}

const EMPTY_JSON = JSON.stringify(emptyProgress())

/**
 * Sincroniza o progresso local com o servidor.
 * O `localStorage` é o cache; o servidor é a fonte da verdade. Mudanças locais vão num PUT
 * com debounce e controle otimista por revisão (409 → o servidor vence).
 */
export class SyncEngine {
  private readonly opts: SyncOptions
  private meta: SyncMeta
  private latest: ProgressState
  private latestJson: string
  /** O que sabemos estar salvo no servidor (null = nada confirmado ainda). */
  private syncedJson: string | null = null
  private connected = false
  private status: SyncStatus = 'connecting'
  private timer: ReturnType<typeof setTimeout> | undefined
  private inFlight = false
  private again = false
  private disposed = false

  constructor(initial: ProgressState, opts: SyncOptions) {
    this.opts = opts
    this.meta = opts.meta
    this.latest = initial
    this.latestJson = JSON.stringify(initial)
  }

  getStatus(): SyncStatus {
    return this.status
  }

  /** Chamado a cada mudança de estado do app. */
  update(state: ProgressState): void {
    const json = JSON.stringify(state)
    if (json === this.latestJson) return
    this.latest = state
    this.latestJson = json
    if (json === this.syncedJson) return
    if (!this.meta.dirty) this.setMeta({ ...this.meta, dirty: true })
    if (this.connected) this.schedule()
  }

  /** Confere a sessão e reconcilia com o servidor. */
  async connect(): Promise<void> {
    this.setStatus('connecting')
    try {
      await this.opts.client.checkSession()
      const remote = await this.opts.client.getProgress()
      if (this.disposed) return
      this.connected = true
      if (remote.data === null) {
        // Servidor vazio: envia o que houver localmente (migração do progresso antigo).
        this.setMeta({ revision: 0, dirty: this.latestJson !== EMPTY_JSON })
        if (this.meta.dirty) await this.flush()
        else this.setStatus('saved')
      } else if (this.meta.dirty && this.meta.revision === remote.revision) {
        // Mudanças feitas offline em cima da versão atual do servidor.
        await this.flush()
      } else {
        const conflict = this.meta.dirty && this.latestJson !== JSON.stringify(remote.data)
        this.adopt(remote)
        if (conflict) this.opts.onConflict?.()
      }
    } catch (e) {
      if (!this.disposed) this.fail(e)
    }
  }

  /** Tenta de novo depois de ficar offline (eventos `online` / aba visível). */
  retry(): void {
    if (this.status === 'offline') void this.connect()
  }

  /** Envia já o que estiver pendente (ex.: ao esconder a aba). */
  flushNow(): void {
    if (this.timer !== undefined) void this.flush()
  }

  /** Logout: esquece tudo e volta a pedir login. */
  reset(): void {
    clearTimeout(this.timer)
    this.timer = undefined
    this.connected = false
    this.latest = emptyProgress()
    this.latestJson = EMPTY_JSON
    this.syncedJson = null
    this.setMeta({ revision: 0, dirty: false })
    this.setStatus('auth')
  }

  /** Desmontagem do provider (inclusive a dupla montagem do StrictMode). */
  dispose(): void {
    clearTimeout(this.timer)
    this.connected = false
    this.disposed = true
  }

  private schedule(): void {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => void this.flush(), this.opts.debounceMs ?? 1000)
  }

  private async flush(): Promise<void> {
    clearTimeout(this.timer)
    this.timer = undefined
    if (!this.connected) return
    if (this.inFlight) {
      this.again = true
      return
    }
    if (this.latestJson === this.syncedJson) {
      this.setMeta({ ...this.meta, dirty: false })
      this.setStatus('saved')
      return
    }
    const sending = this.latest
    const json = this.latestJson
    this.inFlight = true
    this.setStatus('syncing')
    try {
      const revision = await this.opts.client.putProgress(sending, this.meta.revision)
      this.syncedJson = json
      this.setMeta({ revision, dirty: this.latestJson !== json })
      if (!this.meta.dirty) this.setStatus('saved')
    } catch (e) {
      if (!this.disposed) this.fail(e)
    } finally {
      this.inFlight = false
    }
    if (this.connected && (this.again || this.latestJson !== this.syncedJson)) {
      this.again = false
      await this.flush()
    }
  }

  private adopt(remote: RemoteProgress): void {
    const state = parseProgress(remote.data) ?? emptyProgress()
    this.latest = state
    this.latestJson = this.syncedJson = JSON.stringify(state)
    this.setMeta({ revision: remote.revision, dirty: false })
    this.setStatus('saved')
    this.opts.onRemote(state)
  }

  private fail(e: unknown): void {
    if (e instanceof Conflict) {
      if (e.current.data === null) {
        this.setMeta({ revision: 0, dirty: true })
        this.schedule()
        return
      }
      this.adopt(e.current)
      this.opts.onConflict?.()
      return
    }
    clearTimeout(this.timer)
    this.timer = undefined
    this.connected = false
    this.setStatus(e instanceof Unauthorized ? 'auth' : 'offline')
  }

  private setMeta(meta: SyncMeta): void {
    if (meta.revision === this.meta.revision && meta.dirty === this.meta.dirty) return
    this.meta = meta
    this.opts.onMeta(meta)
  }

  private setStatus(status: SyncStatus): void {
    if (status === this.status) return
    this.status = status
    this.opts.onStatus(status)
  }
}
