import { useEffect, useState } from 'react'
import { THEMES, applyTheme, loadTheme, saveTheme, type Theme } from '../state/theme'

/** Seletor de tema no cabeçalho: Automático, Claro, Sépia ou Escuro. */
export function ThemePicker() {
  const [theme, setTheme] = useState<Theme>(loadTheme)

  useEffect(() => {
    applyTheme(theme)
    saveTheme(theme)
  }, [theme])

  return (
    <label className="theme-picker">
      <span>Tema</span>
      <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
        {THEMES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </label>
  )
}
