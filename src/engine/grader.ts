import type { Exercise } from '../content/types'

export type GradeStatus = 'correct' | 'almost' | 'wrong'

export interface GradeResult {
  status: GradeStatus
  /** Resposta de referência para mostrar ao aluno. */
  expected: string
  /** Dicas de escrita (maiúsculas, pontuação) mesmo quando a resposta está certa. */
  notes: string[]
}

const CONTRACTIONS: [RegExp, string][] = [
  [/\bcan't\b/g, 'cannot'],
  [/\bcan not\b/g, 'cannot'],
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\bain't\b/g, 'is not'],
  [/\blet's\b/g, 'let us'],
  [/n't\b/g, ' not'],
  [/\bi'm\b/g, 'i am'],
  [/'re\b/g, ' are'],
  [/'ve\b/g, ' have'],
  [/'ll\b/g, ' will'],
  [/'d\b/g, ' would'],
  // he's / she's / it's / what's ... (também cobre o possessivo, mas os dois lados viram a mesma coisa)
  [/\b(he|she|it|that|what|where|who|there|here|how|when|why)'s\b/g, '$1 is'],
]

/** Normaliza uma resposta: caixa, espaços, pontuação e contrações. */
export function normalize(text: string): string {
  let s = text
    .normalize('NFC')
    .toLowerCase()
    .replace(/[‘’ʼ`´]/g, "'")
    .replace(/[“”"]/g, '')
    .replace(/[.,!?;:()¡¿…]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  for (const [re, rep] of CONTRACTIONS) s = s.replace(re, rep)
  return s.replace(/\s+/g, ' ').trim()
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = cur
  }
  return prev[b.length]
}

/** Normalização estrita: só espaços, aspas curvas e a pontuação final são ignorados. */
export function normalizeStrict(text: string): string {
  return text
    .normalize('NFC')
    .replace(/[\u2018\u2019\u02bc`´]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s*[.!?]+$/, '')
}

/** Compara uma resposta digitada com uma lista de respostas aceitas. */
export function gradeText(input: string, accepted: string[], strict = false): GradeStatus {
  const norm = strict ? normalizeStrict : normalize
  const given = norm(input)
  if (!given) return 'wrong'
  let best = Infinity
  for (const ans of accepted) {
    const exp = norm(ans)
    if (given === exp) return 'correct'
    best = Math.min(best, levenshtein(given, exp))
  }
  // Um erro de digitação em respostas maiores conta como "quase" (ainda é erro, mas avisa).
  const longest = Math.max(...accepted.map((a) => norm(a).length))
  if (best <= 1 && longest >= 5) return 'almost'
  if (best <= 2 && longest >= 20) return 'almost'
  return 'wrong'
}

/** Dicas de escrita para respostas que são frases completas. */
export function writingNotes(input: string): string[] {
  const notes: string[] = []
  const t = input.trim()
  if (!t) return notes
  if (/^[a-z]/.test(t)) notes.push('Frases em inglês começam com letra maiúscula.')
  if (/(^|\s)i(\s|'|$)/.test(t)) notes.push('O pronome "I" (eu) é sempre escrito com letra maiúscula.')
  if (!/[.!?]$/.test(t)) notes.push('Termine a frase com pontuação (. ? !).')
  return notes
}

export function expectedAnswer(ex: Exercise): string {
  switch (ex.type) {
    case 'choice':
      return ex.options[ex.answer]
    case 'reorder':
      return reorderSentence(ex.words)
    case 'writing':
      return ex.model
    default:
      return ex.answers[0]
  }
}

export function reorderSentence(words: string[]): string {
  return words.join(' ').replace(/\s+([.,!?])/g, '$1')
}

/**
 * Corrige uma resposta. Para `choice` a resposta é o índice como string.
 * `writing` é autoavaliado: a resposta deve ser "self:correct" ou "self:wrong".
 */
export function grade(ex: Exercise, input: string): GradeResult {
  const expected = expectedAnswer(ex)
  switch (ex.type) {
    case 'choice':
      return { status: Number(input) === ex.answer ? 'correct' : 'wrong', expected, notes: [] }
    case 'writing':
      return { status: input === 'self:correct' ? 'correct' : 'wrong', expected, notes: [] }
    case 'fill':
      return { status: gradeText(input, ex.answers, ex.strict), expected, notes: [] }
    case 'reorder': {
      const accepted = [reorderSentence(ex.words), ...(ex.alternatives ?? [])]
      // Na ordenação as palavras são fixas, então não existe "quase".
      const status = gradeText(input, accepted) === 'correct' ? 'correct' : 'wrong'
      return { status, expected, notes: [] }
    }
    case 'translate':
    case 'fixError':
    case 'transform': {
      const status = gradeText(input, ex.answers, ex.strict)
      const notes = status === 'correct' && !(ex.type === 'translate' && ex.from === 'en') ? writingNotes(input) : []
      return { status, expected, notes }
    }
  }
}
