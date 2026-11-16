import type { ConsolidationQuestion } from './types'

/**
 * Atalho para escrever questões de consolidação:
 * q(enunciado, [[alternativa, por quê], ...], índice da correta, regra)
 */
export function q(prompt: string, options: [string, string][], answer: number, rule: string): ConsolidationQuestion {
  return { prompt, options: options.map(([text, why]) => ({ text, why })), answer, rule }
}
