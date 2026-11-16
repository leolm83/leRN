import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from '../App'
import type { Exercise } from '../content/types'
import { vocabAnswers } from '../engine/vocab'
import { ExerciseView } from './ExerciseView'

describe('ExerciseView', () => {
  it('lacuna: corrige, mostra feedback e continua', () => {
    const ex: Exercise = { id: 'f', type: 'fill', prompt: 'She ___ a teacher.', answers: ['is'], explanation: 'she → is' }
    const onDone = vi.fn()
    render(<ExerciseView exercise={ex} onDone={onDone} />)
    fireEvent.change(screen.getByLabelText('Sua resposta'), { target: { value: 'is' } })
    fireEvent.click(screen.getByText('Verificar'))
    expect(screen.getByText('Correto!')).toBeInTheDocument()
    expect(screen.getByText('she → is')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Continuar'))
    expect(onDone).toHaveBeenCalledWith(expect.objectContaining({ status: 'correct' }))
  })

  it('corrigir erro: começa com a frase errada e mostra o gabarito quando erra', () => {
    const ex: Exercise = { id: 'x', type: 'fixError', prompt: 'He are my brother.', answers: ['He is my brother.'] }
    render(<ExerciseView exercise={ex} onDone={() => {}} />)
    const input = screen.getByLabelText('Sua resposta') as HTMLInputElement
    expect(input.value).toBe('He are my brother.')
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.getByText('Não foi dessa vez.')).toBeInTheDocument()
    expect(screen.getByText('He is my brother.')).toBeInTheDocument()
  })

  it('ordenar: monta a frase clicando nas palavras', () => {
    const ex: Exercise = { id: 'r', type: 'reorder', words: ['They', 'help', 'us'] }
    render(<ExerciseView exercise={ex} onDone={() => {}} />)
    for (const w of ['They', 'help', 'us']) fireEvent.click(screen.getByRole('button', { name: w }))
    fireEvent.click(screen.getByText('Verificar'))
    expect(screen.getByText('Correto!')).toBeInTheDocument()
  })
})

describe('vocabAnswers', () => {
  it('aceita formas parciais', () => {
    expect(vocabAnswers('to love')).toContain('love')
    expect(vocabAnswers('child / children')).toEqual(expect.arrayContaining(['child', 'children']))
    expect(vocabAnswers('to lie (down)')).toContain('lie')
  })
})

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    window.location.hash = ''
    window.scrollTo = vi.fn() as unknown as typeof window.scrollTo
  })

  it('abre a primeira lição, pratica e salva o progresso', () => {
    render(<App />)
    fireEvent.click(screen.getByText(/Continuar — A1, unidade 1/))
    expect(screen.getByRole('heading', { level: 1, name: 'Alfabeto, maiúsculas e pontuação' })).toBeInTheDocument()
    fireEvent.click(screen.getByText(/Praticar/))
    // Primeiro exercício: múltipla escolha, opção correta "I live in Brazil."
    fireEvent.click(screen.getByRole('button', { name: 'I live in Brazil.' }))
    expect(screen.getByText('Correto!')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Continuar'))
    expect(screen.getByText('2 / 15')).toBeInTheDocument()
  })

  it('unidade bloqueada não abre', () => {
    window.location.hash = '#/lesson/a1-u05'
    render(<App />)
    expect(screen.getByText('Unidade bloqueada')).toBeInTheDocument()
  })
})
