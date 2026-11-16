export type InlineNode =
  | string
  | { kind: 'strong' | 'em'; children: InlineNode[] }
  | { kind: 'code'; text: string }

/** Procura o "*" de fechamento do itálico, pulando trechos **negrito** internos. */
function findItalicClose(text: string, from: number): number {
  let j = from
  while (j < text.length) {
    if (text.startsWith('**', j)) {
      const k = text.indexOf('**', j + 2)
      if (k === -1) return -1
      j = k + 2
    } else if (text[j] === '*') {
      return j
    } else {
      j++
    }
  }
  return -1
}

/**
 * Formatação inline com aninhamento: **negrito**, *itálico* (que pode conter **negrito**)
 * e `código`. Marcadores sem par ficam como texto.
 */
export function parseInline(text: string): InlineNode[] {
  const out: InlineNode[] = []
  let buf = ''
  const flush = () => {
    if (buf) out.push(buf)
    buf = ''
  }
  let i = 0
  while (i < text.length) {
    const c = text[i]
    if (c === '`') {
      const end = text.indexOf('`', i + 1)
      if (end > i + 1) {
        flush()
        out.push({ kind: 'code', text: text.slice(i + 1, end) })
        i = end + 1
        continue
      }
    } else if (text.startsWith('**', i) && !text.startsWith('***', i)) {
      const end = text.indexOf('**', i + 2)
      if (end > i + 2) {
        flush()
        out.push({ kind: 'strong', children: parseInline(text.slice(i + 2, end)) })
        i = end + 2
        continue
      }
    } else if (c === '*') {
      const end = findItalicClose(text, i + 1)
      if (end > i + 1) {
        flush()
        out.push({ kind: 'em', children: parseInline(text.slice(i + 1, end)) })
        i = end + 1
        continue
      }
    }
    buf += c
    i++
  }
  flush()
  return out
}
