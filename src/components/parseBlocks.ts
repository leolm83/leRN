export type Block = { kind: 'p'; text: string } | { kind: 'ul'; items: string[] }

/** Divide o texto em parágrafos e listas. Linhas sem "- " logo depois de um item continuam esse item. */
export function parseBlocks(text: string): Block[] {
  const blocks: Block[] = []
  for (const chunk of text.trim().split(/\n\s*\n/)) {
    let current: Block | null = null
    for (const raw of chunk.split('\n')) {
      const line = raw.trim()
      if (!line) continue
      if (line.startsWith('- ')) {
        if (current?.kind !== 'ul') {
          current = { kind: 'ul', items: [] }
          blocks.push(current)
        }
        current.items.push(line.slice(2))
      } else if (current?.kind === 'ul') {
        current.items[current.items.length - 1] += ' ' + line
      } else if (current?.kind === 'p') {
        current.text += ' ' + line
      } else {
        current = { kind: 'p', text: line }
        blocks.push(current)
      }
    }
  }
  return blocks
}
