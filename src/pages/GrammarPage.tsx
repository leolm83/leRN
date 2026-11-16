import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { grammarIndex, type GrammarEntry } from '../content'
import { TheorySectionView } from '../components/TheoryView'

function fold(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

function entryText(e: GrammarEntry): string {
  const s = e.section
  return fold(
    [
      e.unit.title,
      s.title,
      s.body,
      ...(s.table?.rows.flat() ?? []),
      ...(s.examples?.flatMap((x) => [x.en, x.pt]) ?? []),
    ].join(' '),
  )
}

export function GrammarPage() {
  const [query, setQuery] = useState('')
  const indexed = useMemo(() => grammarIndex.map((e) => ({ e, text: entryText(e) })), [])
  const terms = fold(query).split(/\s+/).filter(Boolean)
  const results = terms.length ? indexed.filter(({ text }) => terms.every((t) => text.includes(t))).map((x) => x.e) : grammarIndex

  // Agrupa por unidade mantendo a ordem da trilha.
  const groups: { unitId: string; entries: GrammarEntry[] }[] = []
  for (const r of results) {
    const g = groups.at(-1)
    if (g && g.unitId === r.unit.id) g.entries.push(r)
    else groups.push({ unitId: r.unit.id, entries: [r] })
  }

  return (
    <div className="page narrow">
      <h1>Gramática</h1>
      <p className="lead">Toda a teoria do curso em um só lugar, para consulta rápida.</p>
      <input
        className="line search"
        type="search"
        placeholder="Buscar: does, plural, preposição, its…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Buscar na gramática"
      />
      {results.length === 0 && <p className="muted">Nada encontrado para “{query}”.</p>}
      {groups.map(({ unitId, entries }) => {
        const unit = entries[0].unit
        return (
          <details key={unitId} className="grammar-unit" open={terms.length > 0}>
            <summary>
              <span className="level-id small">{unit.level}</span> {unit.number}. {unit.title}
            </summary>
            {entries.map((e) => (
              <TheorySectionView key={e.section.title} section={e.section} />
            ))}
            <Link to={`/lesson/${unit.id}`} className="btn link">
              Ir para a unidade
            </Link>
          </details>
        )
      })}
    </div>
  )
}
