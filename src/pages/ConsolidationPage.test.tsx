import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import App from '../App'
import { getConsolidation, levels } from '../content'
import { emptyProgress, isUnitUnlocked, type ProgressState } from '../engine/progress'

const KEY = 'lern:progress:v1'
const block = getConsolidation('a1-c01')!

function seed(passedUnits: string[]) {
  const s: ProgressState = emptyProgress()
  for (const id of passedUnits) s.lessons[id] = { bestScore: 1, lastScore: 1, attempts: 1, completedAt: '2026-01-01' }
  localStorage.setItem(KEY, JSON.stringify(s))
}

describe('Consolidação (fluxo completo)', () => {
  beforeEach(() => {
    localStorage.clear()
    window.location.hash = ''
    window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
  })

  it('fica bloqueada até concluir o bloco e diz o que falta', () => {
    seed(['a1-u01'])
    window.location.hash = '#/consolidation/a1-c01'
    render(<App />)
    expect(screen.getByText(/Faltam:/)).toBeInTheDocument()
    expect(screen.getByText(/Unidade 2:/)).toBeInTheDocument()
  })

  it('aparece na trilha, mostra o resumo, explica os erros e salva a nota sem bloquear nada', () => {
    seed(block.unitIds)
    render(<App />)
    fireEvent.click(screen.getAllByText(/Consolidação · unidades 1–4/)[0])
    expect(screen.getByRole('heading', { level: 2, name: 'Resumo do bloco' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Começar' }))

    // Erra todas as questões: escolhe sempre uma alternativa errada.
    for (let i = 0; i < block.questions.length; i++) {
      const prompt = document.querySelector('.exercise .prompt')!.textContent!
      const question = block.questions.find((x) => x.prompt.replace(/\*\*|\*|`/g, '') === prompt)!
      const wrongText = question.options.find((_, k) => k !== question.answer)!.text.replace(/\*\*|\*|`/g, '')
      const options = within(document.querySelector('.options') as HTMLElement).getAllByRole('button')
      fireEvent.click(options.find((b) => b.textContent === wrongText)!)
      expect(screen.getByText('Por que a sua resposta está errada')).toBeInTheDocument()
      expect(screen.getByText('Por que a correta é esta')).toBeInTheDocument()
      expect(screen.getByText('Regra')).toBeInTheDocument()
      fireEvent.click(screen.getByRole('button', { name: 'Continuar' }))
    }

    expect(screen.getByText('0%')).toBeInTheDocument()
    expect(screen.getByText('Seus erros, explicados')).toBeInTheDocument()
    expect(document.querySelectorAll('.miss-list > li')).toHaveLength(block.questions.length)

    const saved = JSON.parse(localStorage.getItem(KEY)!) as ProgressState
    expect(saved.consolidations['a1-c01']).toMatchObject({ bestScore: 0, attempts: 1 })
    // Nota baixa não bloqueia: a unidade 5 continua aberta.
    expect(isUnitUnlocked(saved, levels, 'a1-u05')).toBe(true)
  })
})
