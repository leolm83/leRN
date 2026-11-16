import type { TheorySection, VocabItem } from '../content/types'
import { Inline, RichText } from './RichText'

export function TheorySectionView({ section }: { section: TheorySection }) {
  return (
    <section className="theory">
      <h3>{section.title}</h3>
      {section.body && <RichText text={section.body} />}
      {section.table && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {section.table.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.examples && (
        <ul className="examples">
          {section.examples.map((ex, i) => (
            <li key={i}>
              <span className="en">{ex.en}</span>
              <span className="pt">{ex.pt}</span>
              {ex.note && <span className="note">{ex.note}</span>}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export function VocabTable({ vocab }: { vocab: VocabItem[] }) {
  return (
    <section className="theory">
      <h3>Vocabulário da unidade</h3>
      <p className="muted">Estas palavras entram na sua revisão diária a partir de amanhã.</p>
      <div className="table-wrap">
        <table className="vocab">
          <tbody>
            {vocab.map((v) => (
              <tr key={v.en}>
                <td className="en">{v.en}</td>
                <td>{v.pt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
