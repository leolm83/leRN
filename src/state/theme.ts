/** Tema visual. "system" segue a preferência do sistema operacional (claro ou escuro). */
export type Theme = 'system' | 'light' | 'sepia' | 'dark'

export const THEMES: { id: Theme; label: string }[] = [
  { id: 'system', label: 'Automático' },
  { id: 'light', label: 'Claro' },
  { id: 'sepia', label: 'Sépia' },
  { id: 'dark', label: 'Escuro' },
]

/** Mesma chave lida pelo script inline do index.html (evita piscar o tema errado ao abrir). */
export const THEME_KEY = 'lern:theme'

function isTheme(v: unknown): v is Theme {
  return THEMES.some((t) => t.id === v)
}

export function loadTheme(): Theme {
  try {
    const v = localStorage.getItem(THEME_KEY)
    return isTheme(v) ? v : 'system'
  } catch {
    return 'system'
  }
}

export function saveTheme(theme: Theme): void {
  try {
    if (theme === 'system') localStorage.removeItem(THEME_KEY)
    else localStorage.setItem(THEME_KEY, theme)
  } catch {
    // Sem armazenamento: o tema vale só para esta sessão.
  }
}

/** Aplica o tema no <html>. Sem atributo, o CSS segue prefers-color-scheme. */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  if (theme === 'system') delete root.dataset.theme
  else root.dataset.theme = theme
}
