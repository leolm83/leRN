import type { ConsolidationOption, ConsolidationQuestion } from '../content/types'

export interface ShuffledQuestion {
  question: ConsolidationQuestion
  /** Alternativas na ordem exibida. */
  options: ConsolidationOption[]
  /** Índice da correta na ordem exibida. */
  answer: number
}

/** Fisher–Yates; `random` é injetável para testes. */
export function shuffled<T>(items: T[], random: () => number = Math.random): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Embaralha as alternativas mantendo a referência à correta. */
export function shuffleQuestion(question: ConsolidationQuestion, random: () => number = Math.random): ShuffledQuestion {
  const order = shuffled(
    question.options.map((_, i) => i),
    random,
  )
  return {
    question,
    options: order.map((i) => question.options[i]),
    answer: order.indexOf(question.answer),
  }
}
