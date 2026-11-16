import { Fragment } from 'react'
import { parseBlocks } from './parseBlocks'
import { parseInline, type InlineNode } from './parseInline'

/** Formatação inline: **negrito**, *itálico* (com negrito dentro) e `código`. Não usa HTML cru. */
export function Inline({ text }: { text: string }) {
  return <InlineNodes nodes={parseInline(text)} />
}

function InlineNodes({ nodes }: { nodes: InlineNode[] }) {
  return (
    <>
      {nodes.map((n, k) => {
        if (typeof n === 'string') return <Fragment key={k}>{n}</Fragment>
        if (n.kind === 'code') return <code key={k}>{n.text}</code>
        const Tag = n.kind
        return (
          <Tag key={k}>
            <InlineNodes nodes={n.children} />
          </Tag>
        )
      })}
    </>
  )
}

/** Blocos: parágrafos separados por linha em branco e listas com "- ". */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {parseBlocks(text).map((b, i) =>
        b.kind === 'p' ? (
          <p key={i}>
            <Inline text={b.text} />
          </p>
        ) : (
          <ul key={i}>
            {b.items.map((item, k) => (
              <li key={k}>
                <Inline text={item} />
              </li>
            ))}
          </ul>
        ),
      )}
    </>
  )
}
