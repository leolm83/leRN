import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { q } from '../content/q'
import { ConsolidationQuiz } from './ConsolidationQuiz'
import { shuffleQuestion } from './shuffle'

const question = q(
  'Qual está correto?',
  [
    ['I am happy.', 'Com I, o verbo to be é am.'],
    ['I is happy.', 'is é para he/she/it, não para I.'],
    ['I are happy.', 'are é para you/we/they.'],
  ],
  0,
  'I am · he/she/it is · you/we/they are.',
)

describe('ConsolidationQuiz', () => {
  it('ao errar mostra o porquê da escolha, o porquê da correta e a regra', () => {
    const onFinish = vi.fn()
    const item = shuffleQuestion(question, () => 0.99) // sem troca: ordem original
    render(<ConsolidationQuiz items={[item]} onFinish={onFinish} />)
    fireEvent.click(screen.getByRole('button', { name: 'I is happy.' }))
    expect(screen.getByText('Por que a sua resposta está errada')).toBeInTheDocument()
    expect(screen.getByText('is é para he/she/it, não para I.')).toBeInTheDocument()
    expect(screen.getByText('Com I, o verbo to be é am.')).toBeInTheDocument()
    expect(screen.getByText('I am · he/she/it is · you/we/they are.')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Continuar' }))
    expect(onFinish).toHaveBeenCalledWith({ correct: 0, total: 1, wrongIds: [] }, [{ item, picked: 1 }])
  })

  it('ao acertar explica por que está certa e conta o acerto', () => {
    const onFinish = vi.fn()
    render(<ConsolidationQuiz items={[shuffleQuestion(question)]} onFinish={onFinish} />)
    fireEvent.click(screen.getByRole('button', { name: 'I am happy.' }))
    expect(screen.getByText('Por que está certa')).toBeInTheDocument()
    expect(screen.queryByText('Por que a correta é esta')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Continuar' }))
    expect(onFinish.mock.calls[0][0]).toMatchObject({ correct: 1, total: 1 })
  })

  it('o embaralhamento mantém a resposta correta apontando para a mesma alternativa', () => {
    for (let seed = 0; seed < 20; seed++) {
      let x = seed / 20
      const rnd = () => (x = (x * 9301 + 0.49297) % 1)
      const s = shuffleQuestion(question, rnd)
      expect(s.options[s.answer].text).toBe('I am happy.')
      expect(s.options.map((o) => o.text).sort()).toEqual(question.options.map((o) => o.text).sort())
    }
  })
})
