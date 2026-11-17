import type { Pool } from 'pg'
import type { ProgressState } from '../src/engine/progress'

export interface StoredProgress {
  data: ProgressState | null
  revision: number
}

export type SaveResult = { ok: true; revision: number } | { ok: false; current: StoredProgress }

/** Um único documento de progresso (app de um usuário só), com controle otimista por revisão. */
export interface ProgressRepo {
  get(): Promise<StoredProgress>
  /** Grava se `expectedRevision` for a revisão atual (0 = ainda não existe). */
  save(data: ProgressState, expectedRevision: number): Promise<SaveResult>
  ping(): Promise<void>
}

export class MemoryProgressRepo implements ProgressRepo {
  private doc: StoredProgress = { data: null, revision: 0 }

  async get(): Promise<StoredProgress> {
    return structuredClone(this.doc)
  }

  async save(data: ProgressState, expectedRevision: number): Promise<SaveResult> {
    if (expectedRevision !== this.doc.revision) return { ok: false, current: await this.get() }
    this.doc = { data: structuredClone(data), revision: this.doc.revision + 1 }
    return { ok: true, revision: this.doc.revision }
  }

  async ping(): Promise<void> {}
}

export class PgProgressRepo implements ProgressRepo {
  private readonly pool: Pool

  constructor(pool: Pool) {
    this.pool = pool
  }

  async init(): Promise<void> {
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS progress (
        id smallint PRIMARY KEY CHECK (id = 1),
        data jsonb NOT NULL,
        revision integer NOT NULL,
        updated_at timestamptz NOT NULL DEFAULT now()
      )`)
  }

  async get(): Promise<StoredProgress> {
    const { rows } = await this.pool.query<StoredProgress>('SELECT data, revision FROM progress WHERE id = 1')
    return rows[0] ?? { data: null, revision: 0 }
  }

  async save(data: ProgressState, expectedRevision: number): Promise<SaveResult> {
    const json = JSON.stringify(data)
    const { rows } =
      expectedRevision === 0
        ? await this.pool.query<{ revision: number }>(
            `INSERT INTO progress (id, data, revision) VALUES (1, $1, 1)
             ON CONFLICT (id) DO NOTHING RETURNING revision`,
            [json],
          )
        : await this.pool.query<{ revision: number }>(
            `UPDATE progress SET data = $1, revision = revision + 1, updated_at = now()
             WHERE id = 1 AND revision = $2 RETURNING revision`,
            [json, expectedRevision],
          )
    if (rows[0]) return { ok: true, revision: rows[0].revision }
    return { ok: false, current: await this.get() }
  }

  async ping(): Promise<void> {
    await this.pool.query('SELECT 1')
  }
}
