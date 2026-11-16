import { describe, expect, it } from 'vitest'
import { expectedAnswer, grade } from '../engine/grader'
import { parseBlocks } from '../components/parseBlocks'
import { parseInline, type InlineNode } from '../components/parseInline'
import { getExercise, levels } from '.'

const units = levels.flatMap((l) => l.units)
const exercises = units.flatMap((u) => u.exercises)

describe('integridade do conteúdo', () => {
  it('níveis com conteúdo estão completos', () => {
    expect(levels[0].units.length).toBeGreaterThanOrEqual(15)
    expect(levels[1].units.length).toBeGreaterThanOrEqual(14)
    expect(levels[2].units.length).toBeGreaterThanOrEqual(16)
    expect(levels[3].units.length).toBeGreaterThanOrEqual(15)
    expect(levels[4].units.length).toBeGreaterThanOrEqual(12)
    expect(levels[5].units.length).toBeGreaterThanOrEqual(10)
  })

  it('toda unidade tem teoria, vocabulário e exercícios suficientes', () => {
    for (const u of units) {
      expect(u.theory.length, u.id).toBeGreaterThan(0)
      expect(u.vocab.length, u.id).toBeGreaterThanOrEqual(8)
      expect(u.exercises.length, u.id).toBeGreaterThanOrEqual(12)
    }
  })

  it('ids de exercício são únicos e localizáveis', () => {
    const ids = exercises.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const id of ids) expect(getExercise(id)?.id).toBe(id)
  })

  it('vocabulário não se repete dentro da unidade', () => {
    for (const u of units) {
      const en = u.vocab.map((v) => v.en.toLowerCase())
      expect(new Set(en).size, u.id).toBe(en.length)
    }
  })

  it.each(exercises.map((e) => [e.id, e] as const))('%s é válido e o gabarito se corrige como certo', (_id, ex) => {
    switch (ex.type) {
      case 'choice':
        expect(ex.answer).toBeGreaterThanOrEqual(0)
        expect(ex.answer).toBeLessThan(ex.options.length)
        expect(new Set(ex.options).size).toBe(ex.options.length)
        expect(grade(ex, String(ex.answer)).status).toBe('correct')
        return
      case 'fill':
        expect(ex.prompt.split('___').length).toBe(2)
        break
      case 'reorder':
        expect(ex.words.length).toBeGreaterThan(1)
        break
      case 'writing':
        expect(ex.model.length).toBeGreaterThan(0)
        expect(ex.checklist.length).toBeGreaterThan(0)
        return
      case 'fixError':
        // A frase com erro não pode ser aceita como resposta.
        expect(grade(ex, ex.prompt).status).not.toBe('correct')
        break
      default:
        break
    }
    if ('answers' in ex) {
      expect(ex.answers.length).toBeGreaterThan(0)
      for (const a of ex.answers) expect(grade(ex, a).status, a).toBe('correct')
    }
    expect(grade(ex, expectedAnswer(ex)).status).toBe('correct')
  })

  it.each(levels.filter((l) => l.units.length).map((l) => [l.id, l] as const))('a prova do %s cobre todas as unidades', (_id, level) => {
    const unitsInTest = new Set(level.test.map((e) => e.id.slice(0, 6)))
    expect(unitsInTest.size).toBe(level.units.length)
    expect(level.test.every((e) => e.type !== 'writing')).toBe(true)
  })

  it('nenhuma teoria tem lista quebrada (texto de item vazando como parágrafo)', () => {
    for (const u of units) {
      for (const s of u.theory) {
        for (const b of parseBlocks(s.body)) {
          if (b.kind === 'p') expect(b.text.startsWith('-'), `${u.id} / ${s.title}`).toBe(false)
        }
      }
    }
  })

  it('formatação da teoria fecha certo (nenhum * ou ~ sobrando depois do parse)', () => {
    const leftovers = (nodes: InlineNode[]): string[] =>
      nodes.flatMap((n) => (typeof n === 'string' ? [n] : n.kind === 'code' ? [] : leftovers(n.children)))
    for (const u of units) {
      for (const s of u.theory) {
        const texts = [s.body, ...(s.table ? [...s.table.head, ...s.table.rows.flat()] : [])]
        for (const t of texts) {
          for (const line of t.split('\n')) {
            const plain = leftovers(parseInline(line)).join('')
            expect(/\*|~~/.test(plain), `${u.id} / ${s.title}: ${line}`).toBe(false)
          }
        }
      }
    }
  })

  describe('consolidações', () => {
    const withUnits = levels.filter((l) => l.units.length)

    it.each(withUnits.map((l) => [l.id, l] as const))('%s: blocos cobrem todas as unidades, em ordem e sem sobreposição', (_id, level) => {
      expect(level.consolidations.length).toBeGreaterThan(0)
      let expectedStart = 1
      for (const c of level.consolidations) {
        expect(c.units[0], c.id).toBe(expectedStart)
        expect(c.units[1], c.id).toBeGreaterThanOrEqual(c.units[0])
        expect(c.unitIds.length, c.id).toBe(c.units[1] - c.units[0] + 1)
        expectedStart = c.units[1] + 1
      }
      expect(expectedStart - 1).toBe(level.units.length)
    })

    const blocks = withUnits.flatMap((l) => l.consolidations)
    it.each(blocks.map((c) => [c.id, c] as const))('%s: questões completas e explicadas', (_id, c) => {
      expect(c.title.trim()).not.toBe('')
      expect(c.summary.trim()).not.toBe('')
      expect(c.questions.length).toBeGreaterThanOrEqual(10)
      const prompts = c.questions.map((x) => x.prompt)
      expect(new Set(prompts).size, 'enunciados repetidos').toBe(prompts.length)
      for (const x of c.questions) {
        expect(x.options.length, x.prompt).toBeGreaterThanOrEqual(3)
        expect(x.options.length, x.prompt).toBeLessThanOrEqual(4)
        expect(new Set(x.options.map((o) => o.text)).size, x.prompt).toBe(x.options.length)
        expect(x.answer, x.prompt).toBeGreaterThanOrEqual(0)
        expect(x.answer, x.prompt).toBeLessThan(x.options.length)
        for (const o of x.options) expect(o.why.trim().length, `${x.prompt} / ${o.text}`).toBeGreaterThan(10)
        expect(x.rule.trim().length, x.prompt).toBeGreaterThan(10)
      }
    })

    it.each(blocks.map((c) => [c.id, c] as const))('%s: formatação fecha certo e o resumo não tem lista quebrada', (_id, c) => {
      const leftovers = (nodes: InlineNode[]): string[] =>
        nodes.flatMap((n) => (typeof n === 'string' ? [n] : n.kind === 'code' ? [] : leftovers(n.children)))
      const texts = [c.summary, ...c.questions.flatMap((x) => [x.prompt, x.rule, ...x.options.flatMap((o) => [o.text, o.why])])]
      for (const t of texts) {
        for (const line of t.split('\n')) expect(/\*|~~/.test(leftovers(parseInline(line)).join('')), line).toBe(false)
      }
      for (const b of parseBlocks(c.summary)) if (b.kind === 'p') expect(b.text.startsWith('-'), b.text).toBe(false)
    })
  })
})
