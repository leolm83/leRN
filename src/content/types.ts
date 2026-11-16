export type LevelId = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export interface Example {
  en: string
  pt: string
  note?: string
}

export interface Table {
  head: string[]
  rows: string[][]
}

/** Uma seção de teoria. `body` aceita um markdown simples: parágrafos, **negrito**, *itálico*, `código` e listas com "- ". */
export interface TheorySection {
  title: string
  body: string
  table?: Table
  examples?: Example[]
}

export interface VocabItem {
  en: string
  pt: string
  example?: string
}

interface BaseExercise {
  /** Explicação mostrada depois da resposta. */
  explanation?: string
  /** Se true, maiúsculas e pontuação interna contam na correção (para exercícios de ortografia). */
  strict?: boolean
}

export interface ChoiceExercise extends BaseExercise {
  type: 'choice'
  prompt: string
  options: string[]
  /** Índice da opção correta. */
  answer: number
}

export interface FillExercise extends BaseExercise {
  type: 'fill'
  /** Frase com uma lacuna marcada por ___ */
  prompt: string
  /** Respostas aceitas para a lacuna. A primeira é a mostrada como gabarito. */
  answers: string[]
  hint?: string
}

export interface ReorderExercise extends BaseExercise {
  type: 'reorder'
  /** Palavras na ordem correta (serão embaralhadas na tela). */
  words: string[]
  /** Outras ordens aceitas, como frases completas. */
  alternatives?: string[]
  /** Tradução em português, para guiar. */
  translation?: string
}

export interface TranslateExercise extends BaseExercise {
  type: 'translate'
  from: 'pt' | 'en'
  prompt: string
  answers: string[]
}

export interface FixErrorExercise extends BaseExercise {
  type: 'fixError'
  /** Frase com um erro. O aluno reescreve a frase inteira corrigida. */
  prompt: string
  answers: string[]
}

export interface TransformExercise extends BaseExercise {
  type: 'transform'
  instruction: string
  prompt: string
  answers: string[]
}

export interface WritingExercise extends BaseExercise {
  type: 'writing'
  prompt: string
  /** Resposta-modelo mostrada depois que o aluno escreve. */
  model: string
  checklist: string[]
}

export type ExerciseData =
  | ChoiceExercise
  | FillExercise
  | ReorderExercise
  | TranslateExercise
  | FixErrorExercise
  | TransformExercise
  | WritingExercise

export type Exercise = ExerciseData & { id: string }

export type ExerciseType = ExerciseData['type']

/** Formato usado nos arquivos de conteúdo (sem ids — eles são gerados no registro). */
export interface UnitData {
  slug: string
  title: string
  summary: string
  theory: TheorySection[]
  vocab: VocabItem[]
  exercises: ExerciseData[]
}

export interface Unit extends Omit<UnitData, 'exercises'> {
  id: string
  level: LevelId
  number: number
  exercises: Exercise[]
}

/** Alternativa de uma questão de consolidação, com a explicação de por que está certa ou errada. */
export interface ConsolidationOption {
  text: string
  why: string
}

export interface ConsolidationQuestion {
  /** Enunciado; aceita **negrito**, *itálico* e `código`. */
  prompt: string
  /** 3–4 alternativas (elas são embaralhadas na tela). */
  options: ConsolidationOption[]
  /** Índice da alternativa correta. */
  answer: number
  /** A regra em uma frase, mostrada depois de cada resposta. */
  rule: string
}

/** Prova de consolidação de um bloco de unidades: opcional, não bloqueia o avanço. */
export interface ConsolidationData {
  title: string
  /** Faixa de unidades do nível (inclusiva), ex.: [1, 4]. */
  units: [number, number]
  /** Resumo do bloco em markdown simples (mesmo formato da teoria). */
  summary: string
  questions: ConsolidationQuestion[]
}

export interface Consolidation extends ConsolidationData {
  id: string
  level: LevelId
  unitIds: string[]
}

export interface Level {
  id: LevelId
  title: string
  description: string
  topics: string[]
  units: Unit[]
  /** Prova de nível: exercícios mistos de todas as unidades. */
  test: Exercise[]
  /** Consolidações opcionais por bloco de unidades. */
  consolidations: Consolidation[]
}
