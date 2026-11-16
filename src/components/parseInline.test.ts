import { describe, expect, it } from 'vitest'
import { parseInline } from './parseInline'

describe('parseInline', () => {
  it('negrito e itálico simples', () => {
    expect(parseInline('a **b** *c* `d`')).toEqual([
      'a ',
      { kind: 'strong', children: ['b'] },
      ' ',
      { kind: 'em', children: ['c'] },
      ' ',
      { kind: 'code', text: 'd' },
    ])
  })

  it('negrito dentro de itálico', () => {
    expect(parseInline('*I **bought** a car.* ✔')).toEqual([
      { kind: 'em', children: ['I ', { kind: 'strong', children: ['bought'] }, ' a car.'] },
      ' ✔',
    ])
  })

  it('itálico começando com negrito (***)', () => {
    expect(parseInline('***Never have I** seen it.*')).toEqual([
      { kind: 'em', children: [{ kind: 'strong', children: ['Never have I'] }, ' seen it.'] },
    ])
  })

  it('itálico terminando com negrito (***)', () => {
    expect(parseInline('*both **X** and **Y***')).toEqual([
      { kind: 'em', children: ['both ', { kind: 'strong', children: ['X'] }, ' and ', { kind: 'strong', children: ['Y'] }] },
    ])
  })

  it('marcadores sem par ficam como texto', () => {
    expect(parseInline('5 * 3 = 15')).toEqual(['5 * 3 = 15'])
  })
})
