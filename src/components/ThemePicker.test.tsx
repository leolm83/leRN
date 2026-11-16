import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { THEME_KEY, loadTheme } from '../state/theme'
import { ThemePicker } from './ThemePicker'

describe('ThemePicker', () => {
  beforeEach(() => {
    localStorage.clear()
    delete document.documentElement.dataset.theme
  })

  it('começa no automático, sem forçar tema', () => {
    render(<ThemePicker />)
    expect((screen.getByLabelText('Tema') as HTMLSelectElement).value).toBe('system')
    expect(document.documentElement.dataset.theme).toBeUndefined()
  })

  it('aplica e salva o tema escolhido', () => {
    render(<ThemePicker />)
    fireEvent.change(screen.getByLabelText('Tema'), { target: { value: 'sepia' } })
    expect(document.documentElement.dataset.theme).toBe('sepia')
    expect(localStorage.getItem(THEME_KEY)).toBe('sepia')
    expect(loadTheme()).toBe('sepia')
  })

  it('voltar ao automático remove o tema salvo', () => {
    localStorage.setItem(THEME_KEY, 'dark')
    render(<ThemePicker />)
    expect(document.documentElement.dataset.theme).toBe('dark')
    fireEvent.change(screen.getByLabelText('Tema'), { target: { value: 'system' } })
    expect(document.documentElement.dataset.theme).toBeUndefined()
    expect(localStorage.getItem(THEME_KEY)).toBeNull()
  })

  it('ignora valor salvo inválido', () => {
    localStorage.setItem(THEME_KEY, 'neon')
    expect(loadTheme()).toBe('system')
  })
})
