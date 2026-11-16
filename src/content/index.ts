import type { Consolidation, ConsolidationData, Exercise, Level, LevelId, TheorySection, Unit, UnitData } from './types'
import { a1Units } from './a1'
import { a1Consolidations } from './a1/consolidations'
import { a2Units } from './a2'
import { a2Consolidations } from './a2/consolidations'
import { b1Units } from './b1'
import { b1Consolidations } from './b1/consolidations'
import { b2Units } from './b2'
import { b2Consolidations } from './b2/consolidations'
import { c1Units } from './c1'
import { c1Consolidations } from './c1/consolidations'
import { c2Units } from './c2'
import { c2Consolidations } from './c2/consolidations'

interface LevelMeta {
  id: LevelId
  title: string
  description: string
  topics: string[]
  units: UnitData[]
  consolidations?: ConsolidationData[]
}

const LEVELS_META: LevelMeta[] = [
  {
    id: 'A1',
    title: 'Iniciante',
    description: 'A base da língua: pronomes, verb to be, artigos, plural, presente e as primeiras frases escritas.',
    topics: [],
    units: a1Units,
    consolidations: a1Consolidations,
  },
  {
    id: 'A2',
    title: 'Básico',
    description: 'Passado, futuro, comparações, advérbios de modo, quantificadores e modais de obrigação.',
    topics: [],
    units: a2Units,
    consolidations: a2Consolidations,
  },
  {
    id: 'B1',
    title: 'Intermediário',
    description: 'Present Perfect, condicionais, voz passiva, orações relativas e escrita de parágrafos e e-mails.',
    topics: [],
    units: b1Units,
    consolidations: b1Consolidations,
  },
  {
    id: 'B2',
    title: 'Intermediário superior',
    description: 'Tempos perfeitos contínuos, condicionais mistas, modais de dedução e redação argumentativa.',
    topics: [],
    units: b2Units,
    consolidations: b2Consolidations,
  },
  {
    id: 'C1',
    title: 'Avançado',
    description: 'Estruturas de ênfase, inversão, registro formal e escrita de ensaios.',
    topics: [],
    units: c1Units,
    consolidations: c1Consolidations,
  },
  {
    id: 'C2',
    title: 'Proficiente',
    description: 'Estilo, precisão e nuance: o inglês escrito de um usuário fluente.',
    topics: [],
    units: c2Units,
    consolidations: c2Consolidations,
  },
]

function buildUnit(level: LevelId, data: UnitData, index: number): Unit {
  const number = index + 1
  const id = `${level.toLowerCase()}-u${String(number).padStart(2, '0')}`
  return {
    ...data,
    id,
    level,
    number,
    exercises: data.exercises.map((e, i) => ({ ...e, id: `${id}-e${String(i + 1).padStart(2, '0')}` }) as Exercise),
  }
}

/** Prova de nível: de cada unidade pega exercícios espaçados (sem os de produção livre). */
function buildTest(units: Unit[], perUnit = 3): Exercise[] {
  const out: Exercise[] = []
  for (const u of units) {
    const pool = u.exercises.filter((e) => e.type !== 'writing')
    const step = Math.max(1, Math.floor(pool.length / perUnit))
    for (let i = 0; i < perUnit && i * step + step - 1 < pool.length; i++) out.push(pool[i * step + step - 1])
  }
  return out
}

function buildConsolidation(level: LevelId, data: ConsolidationData, index: number, units: Unit[]): Consolidation {
  const [from, to] = data.units
  return {
    ...data,
    id: `${level.toLowerCase()}-c${String(index + 1).padStart(2, '0')}`,
    level,
    unitIds: units.filter((u) => u.number >= from && u.number <= to).map((u) => u.id),
  }
}

export const levels: Level[] = LEVELS_META.map((meta) => {
  const units = meta.units.map((u, i) => buildUnit(meta.id, u, i))
  return {
    id: meta.id,
    title: meta.title,
    description: meta.description,
    topics: meta.topics.length ? meta.topics : units.map((u) => u.title),
    units,
    test: buildTest(units),
    consolidations: (meta.consolidations ?? []).map((c, i) => buildConsolidation(meta.id, c, i, units)),
  }
})

const unitById = new Map<string, Unit>()
const consolidationById = new Map<string, Consolidation>()
for (const l of levels) for (const c of l.consolidations) consolidationById.set(c.id, c)
const exerciseById = new Map<string, Exercise>()
for (const l of levels) {
  for (const u of l.units) {
    unitById.set(u.id, u)
    for (const e of u.exercises) exerciseById.set(e.id, e)
  }
}

export function getUnit(id: string): Unit | undefined {
  return unitById.get(id)
}

export function getLevel(id: string): Level | undefined {
  return levels.find((l) => l.id === id.toUpperCase())
}

export function getConsolidation(id: string): Consolidation | undefined {
  return consolidationById.get(id)
}

export function getExercise(id: string): Exercise | undefined {
  return exerciseById.get(id)
}

export interface GrammarEntry {
  unit: Unit
  section: TheorySection
}

export const grammarIndex: GrammarEntry[] = levels.flatMap((l) =>
  l.units.flatMap((unit) => unit.theory.map((section) => ({ unit, section }))),
)
