import { describe, expect, it } from 'vitest'
import type { Exercise } from '../content/types'
import { grade, gradeText, normalize, reorderSentence, writingNotes } from './grader'

describe('normalize', () => {
  it('ignora caixa, espaços e pontuação', () => {
    expect(normalize('  Hello,   WORLD!  ')).toBe('hello world')
  })

  it('expande contrações para que as duas formas sejam iguais', () => {
    expect(normalize("I don't know.")).toBe(normalize('I do not know.'))
    expect(normalize("She isn't here")).toBe(normalize('She is not here'))
    expect(normalize("I'm tired")).toBe(normalize('I am tired'))
    expect(normalize("They can't swim")).toBe(normalize('They cannot swim'))
    expect(normalize("He won't come")).toBe(normalize('He will not come'))
    expect(normalize("It's cold")).toBe(normalize('It is cold'))
    expect(normalize("We're here")).toBe(normalize('We are here'))
    expect(normalize("Let's go")).toBe(normalize('Let us go'))
  })

  it('aceita apóstrofo curvo', () => {
    expect(normalize('I’m here')).toBe('i am here')
  })

  it('não remove hífens (twenty-one ≠ twenty one)', () => {
    expect(normalize('twenty-one')).not.toBe(normalize('twenty one'))
  })
})

describe('gradeText', () => {
  it('aceita qualquer resposta da lista', () => {
    expect(gradeText('thanks', ['Thank you.', 'Thanks.'])).toBe('correct')
  })

  it('marca erro de digitação como "almost"', () => {
    expect(gradeText('She is studing now', ['She is studying now.'])).toBe('almost')
  })

  it('não marca "almost" em respostas curtas', () => {
    expect(gradeText('an', ['a'])).toBe('wrong')
    expect(gradeText('is', ['are'])).toBe('wrong')
  })

  it('resposta vazia é errada', () => {
    expect(gradeText('   ', ['a'])).toBe('wrong')
  })

  it('modo estrito diferencia maiúsculas mas ignora o ponto final', () => {
    expect(gradeText('i am from brazil.', ['I am from Brazil.'], true)).not.toBe('correct')
    expect(gradeText('I am from Brazil', ['I am from Brazil.'], true)).toBe('correct')
  })
})

describe('grade', () => {
  const choice: Exercise = { id: 'x', type: 'choice', prompt: '?', options: ['a', 'b'], answer: 1 }
  const reorder: Exercise = { id: 'y', type: 'reorder', words: ['Where', 'is', 'it', '?'] }
  const writing: Exercise = { id: 'z', type: 'writing', prompt: '', model: 'Model.', checklist: [] }

  it('corrige múltipla escolha pelo índice', () => {
    expect(grade(choice, '1').status).toBe('correct')
    expect(grade(choice, '0').status).toBe('wrong')
    expect(grade(choice, '0').expected).toBe('b')
  })

  it('reorder monta a frase sem espaço antes da pontuação', () => {
    expect(reorderSentence(['Where', 'is', 'it', '?'])).toBe('Where is it?')
    expect(grade(reorder, 'Where is it ?').status).toBe('correct')
    expect(grade(reorder, 'Where it is ?').status).toBe('wrong')
  })

  it('writing usa autoavaliação', () => {
    expect(grade(writing, 'self:correct').status).toBe('correct')
    expect(grade(writing, 'self:wrong').status).toBe('wrong')
  })

  it('dá dicas de escrita em frases certas', () => {
    const ex: Exercise = { id: 't', type: 'translate', from: 'pt', prompt: '', answers: ['I am tired.'] }
    const r = grade(ex, 'i am tired')
    expect(r.status).toBe('correct')
    expect(r.notes.length).toBe(3)
  })
})

describe('writingNotes', () => {
  it('não reclama de frase bem escrita', () => {
    expect(writingNotes("I'm from Brazil.")).toEqual([])
  })
})
