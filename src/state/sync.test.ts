import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Conflict, Offline, Unauthorized, type ProgressClient, type RemoteProgress } from '../api'
import { emptyProgress, type ProgressState } from '../engine/progress'
import type { SyncMeta } from '../storage'
import { SyncEngine, type SyncStatus } from './sync'

/** Servidor falso em memória com as mesmas regras de revisão da API. */
class FakeServer implements ProgressClient {
  doc: RemoteProgress = { data: null, revision: 0 }
  authorized = true
  online = true
  puts: Array<{ data: ProgressState; revision: number }> = []

  private check() {
    if (!this.online) throw new Offline('network')
    if (!this.authorized) throw new Unauthorized('unauthorized')
  }
  async checkSession() {
    this.check()
  }
  async getProgress() {
    this.check()
    return structuredClone(this.doc)
  }
  async putProgress(data: ProgressState, revision: number) {
    this.check()
    this.puts.push({ data, revision })
    if (revision !== this.doc.revision) throw new Conflict(structuredClone(this.doc))
    this.doc = { data: structuredClone(data), revision: revision + 1 }
    return this.doc.revision
  }
}

const withXp = (xp: number): ProgressState => ({ ...emptyProgress(), xp })

function setup(initial: ProgressState, meta: SyncMeta = { revision: 0, dirty: false }) {
  const server = new FakeServer()
  const log = { meta, statuses: [] as SyncStatus[], remote: [] as ProgressState[], conflicts: 0 }
  const engine = new SyncEngine(initial, {
    client: server,
    meta,
    debounceMs: 1000,
    onMeta: (m) => (log.meta = m),
    onStatus: (s) => log.statuses.push(s),
    onRemote: (s) => log.remote.push(s),
    onConflict: () => log.conflicts++,
  })
  return { server, engine, log }
}

describe('SyncEngine', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('envia o progresso local quando o servidor está vazio (migração)', async () => {
    const { server, engine, log } = setup(withXp(50))
    await engine.connect()
    expect(server.doc).toEqual({ data: withXp(50), revision: 1 })
    expect(log.meta).toEqual({ revision: 1, dirty: false })
    expect(engine.getStatus()).toBe('saved')
  })

  it('não envia nada se local e servidor estão vazios', async () => {
    const { server, engine } = setup(emptyProgress())
    await engine.connect()
    expect(server.puts).toHaveLength(0)
    expect(engine.getStatus()).toBe('saved')
  })

  it('adota o servidor quando não há mudanças locais', async () => {
    const { server, engine, log } = setup(withXp(10), { revision: 3, dirty: false })
    server.doc = { data: withXp(200), revision: 5 }
    await engine.connect()
    expect(log.remote).toEqual([withXp(200)])
    expect(log.meta).toEqual({ revision: 5, dirty: false })
    expect(log.conflicts).toBe(0)
    expect(server.puts).toHaveLength(0)
  })

  it('envia mudanças feitas offline sobre a revisão atual do servidor', async () => {
    const { server, engine } = setup(withXp(70), { revision: 2, dirty: true })
    server.doc = { data: withXp(20), revision: 2 }
    await engine.connect()
    expect(server.doc).toEqual({ data: withXp(70), revision: 3 })
  })

  it('servidor vence se mudou enquanto havia mudanças locais', async () => {
    const { server, engine, log } = setup(withXp(70), { revision: 2, dirty: true })
    server.doc = { data: withXp(90), revision: 4 }
    await engine.connect()
    expect(log.remote).toEqual([withXp(90)])
    expect(log.conflicts).toBe(1)
    expect(server.puts).toHaveLength(0)
  })

  it('agrupa mudanças com debounce e ignora a volta do estado adotado', async () => {
    const { server, engine, log } = setup(emptyProgress())
    server.doc = { data: withXp(5), revision: 1 }
    await engine.connect()
    engine.update(log.remote[0]) // o React devolve o estado adotado: não deve gerar PUT
    engine.update(withXp(15))
    engine.update(withXp(25))
    expect(log.meta.dirty).toBe(true)
    expect(server.puts).toHaveLength(0)
    await vi.advanceTimersByTimeAsync(1000)
    expect(server.puts).toEqual([{ data: withXp(25), revision: 1 }])
    expect(log.meta).toEqual({ revision: 2, dirty: false })
  })

  it('409 ao gravar adota a versão do servidor', async () => {
    const { server, engine, log } = setup(emptyProgress())
    server.doc = { data: withXp(5), revision: 1 }
    await engine.connect()
    server.doc = { data: withXp(500), revision: 7 } // outro aparelho gravou
    engine.update(withXp(15))
    await vi.advanceTimersByTimeAsync(1000)
    expect(log.remote.at(-1)).toEqual(withXp(500))
    expect(log.meta).toEqual({ revision: 7, dirty: false })
    expect(log.conflicts).toBe(1)
  })

  it('fica offline, mantém a mudança pendente e envia ao reconectar', async () => {
    const { server, engine, log } = setup(emptyProgress())
    await engine.connect()
    server.online = false
    engine.update(withXp(40))
    await vi.advanceTimersByTimeAsync(1000)
    expect(engine.getStatus()).toBe('offline')
    expect(log.meta.dirty).toBe(true)
    server.online = true
    engine.retry()
    await vi.advanceTimersByTimeAsync(0)
    expect(server.doc).toEqual({ data: withXp(40), revision: 1 })
    expect(engine.getStatus()).toBe('saved')
  })

  it('pede login sem sessão e não grava', async () => {
    const { server, engine } = setup(withXp(10))
    server.authorized = false
    await engine.connect()
    expect(engine.getStatus()).toBe('auth')
    engine.update(withXp(20))
    await vi.advanceTimersByTimeAsync(2000)
    expect(server.puts).toHaveLength(0)
  })

  it('logout esquece o estado e a revisão', async () => {
    const { engine, log } = setup(withXp(10))
    await engine.connect()
    engine.reset()
    expect(engine.getStatus()).toBe('auth')
    expect(log.meta).toEqual({ revision: 0, dirty: false })
  })
})
