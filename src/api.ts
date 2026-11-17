import type { ProgressState } from './engine/progress'

export interface RemoteProgress {
  data: ProgressState | null
  revision: number
}

/** Sessão ausente ou expirada. */
export class Unauthorized extends Error {}
/** Servidor fora do ar, sem rede ou resposta inesperada. */
export class Offline extends Error {}
/** A revisão enviada não é a do servidor; `current` é o que está salvo lá. */
export class Conflict extends Error {
  readonly current: RemoteProgress
  constructor(current: RemoteProgress) {
    super('conflict')
    this.current = current
  }
}

export type LoginResult = 'ok' | 'wrong' | 'limited'

export interface ProgressClient {
  checkSession(): Promise<void>
  getProgress(): Promise<RemoteProgress>
  putProgress(data: ProgressState, revision: number): Promise<number>
}

async function request(method: string, path: string, body?: unknown): Promise<Response> {
  let res: Response
  try {
    res = await fetch(path, {
      method,
      credentials: 'same-origin',
      headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
  } catch {
    throw new Offline('network')
  }
  if (res.status === 401) throw new Unauthorized('unauthorized')
  if (res.status === 409) throw new Conflict((await res.json()) as RemoteProgress)
  if (!res.ok) throw new Offline(`http ${res.status}`)
  // Sem API (ex.: `npm run dev` sem servidor, ou só o build estático), /api cai no index.html.
  if (!res.headers.get('content-type')?.includes('application/json')) throw new Offline('not json')
  return res
}

export const httpClient: ProgressClient = {
  async checkSession() {
    await request('GET', '/api/session')
  },
  async getProgress() {
    return (await (await request('GET', '/api/progress')).json()) as RemoteProgress
  },
  async putProgress(data, revision) {
    const res = await request('PUT', '/api/progress', { data, revision })
    return ((await res.json()) as { revision: number }).revision
  },
}

export async function login(password: string): Promise<LoginResult> {
  try {
    await request('POST', '/api/login', { password })
    return 'ok'
  } catch (e) {
    if (e instanceof Unauthorized) return 'wrong'
    if (e instanceof Offline && e.message === 'http 429') return 'limited'
    throw e
  }
}

export async function logout(): Promise<void> {
  try {
    await request('POST', '/api/logout')
  } catch {
    // Sem servidor não há sessão para encerrar.
  }
}
