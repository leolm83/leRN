import type { UnitData } from '../types'

export const u07: UnitData = {
  slug: 'nominalisation',
  title: 'Nominalização',
  summary: 'Transformar verbos e adjetivos em substantivos para um texto mais formal e denso: decide → decision.',
  theory: [
    {
      title: 'O que é',
      body: `Na escrita acadêmica e profissional, ações e qualidades viram **substantivos**. O texto fica mais **impessoal, formal e compacto**:

- *The government **decided** to **reduce** taxes, which **surprised** many people.*
- → *The government's **decision** to **reduce** taxes came as a **surprise** to many.*

- *Prices **increased** **rapidly**.* → *There was a **rapid increase** in prices.*`,
    },
    {
      title: 'Sufixos comuns',
      body: ``,
      table: {
        head: ['Sufixo', 'Verbo/adjetivo', 'Substantivo'],
        rows: [
          ['-tion / -sion', 'decide, reduce, explain', 'decision, reduction, explanation'],
          ['-ment', 'develop, improve, achieve', 'development, improvement, achievement'],
          ['-ance / -ence', 'perform, depend, appear', 'performance, dependence, appearance'],
          ['-al', 'refuse, approve, arrive', 'refusal, approval, arrival'],
          ['-ure', 'fail, close, press', 'failure, closure, pressure'],
          ['-ness / -ity', 'aware, effective, able', 'awareness, effectiveness, ability'],
          ['sem mudança', 'increase, decline, change', 'an increase, a decline, a change'],
        ],
      },
    },
    {
      title: 'Como montar',
      body: `- O **sujeito** vira **possessivo** ou **of**: *the company's growth / the growth of the company*
- O **advérbio** vira **adjetivo**: *grew significantly* → *significant growth*
- Use verbos "leves" para ligar: *there was / led to / resulted in / caused*: *The **failure** of the system **led to** a **delay**.*

Não exagere: nominalização demais deixa o texto pesado. Use em relatórios, ensaios e e-mails formais.`,
    },
  ],
  vocab: [
    { en: 'decision', pt: 'decisão' },
    { en: 'reduction', pt: 'redução' },
    { en: 'growth', pt: 'crescimento' },
    { en: 'failure', pt: 'falha, fracasso' },
    { en: 'approval', pt: 'aprovação' },
    { en: 'decline', pt: 'declínio, queda' },
    { en: 'awareness', pt: 'conscientização, consciência' },
    { en: 'to lead to', pt: 'levar a, resultar em' },
    { en: 'significant', pt: 'significativo' },
    { en: 'closure', pt: 'fechamento' },
  ],
  exercises: [
    { type: 'fill', prompt: 'decide → ___', answers: ['decision'] },
    { type: 'fill', prompt: 'improve → ___', answers: ['improvement'] },
    { type: 'fill', prompt: 'refuse → ___', answers: ['refusal'] },
    { type: 'fill', prompt: 'fail → ___', answers: ['failure'] },
    { type: 'fill', prompt: 'aware → ___', answers: ['awareness'] },
    { type: 'fill', prompt: 'grow → ___', answers: ['growth'] },
    { type: 'fill', prompt: 'There was a significant ___ in sales last year. (aumento)', answers: ['increase', 'rise'] },
    { type: 'fill', prompt: 'The ___ of the factory led to 500 job losses. (fechamento)', answers: ['closure'] },
    {
      type: 'choice',
      prompt: 'Versão nominalizada de "Prices fell sharply.":',
      options: ['There was a sharp fall in prices.', 'Prices were sharp falling.', 'The prices sharply had a fall.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Qual frase é mais adequada a um relatório formal?',
      options: ['Because the system failed, the project got delayed.', 'The failure of the system resulted in a delay to the project.', 'The system failed so the project was late, you know.'],
      answer: 1,
    },
    { type: 'reorder', words: ['The', 'approval', 'of', 'the', 'budget', 'was', 'postponed', '.'], translation: 'A aprovação do orçamento foi adiada.' },
    { type: 'fixError', prompt: 'There was a significantly increase in unemployment.', answers: ['There was a significant increase in unemployment.'] },
    {
      type: 'transform',
      instruction: 'Nominalize começando com "The company\'s".',
      prompt: 'The company grew rapidly.',
      answers: ["The company's rapid growth"],
    },
    {
      type: 'transform',
      instruction: 'Nominalize começando com "There was a".',
      prompt: 'Unemployment declined slightly.',
      answers: ['There was a slight decline in unemployment.', 'There was a slight fall in unemployment.', 'There was a slight decrease in unemployment.'],
    },
    {
      type: 'transform',
      instruction: 'Nominalize começando com "The".',
      prompt: 'They arrived late, which caused problems.',
      answers: ['The late arrival caused problems.', 'Their late arrival caused problems.', 'The late arrival led to problems.', 'Their late arrival led to problems.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'A redução dos custos é essencial.',
      answers: ['The reduction of costs is essential.', 'The reduction in costs is essential.', 'Cost reduction is essential.', 'Reducing costs is essential.'],
    },
    {
      type: 'writing',
      prompt: 'Reescreva este parágrafo em estilo formal usando nominalização: "We tested the app and it performed badly. Users complained a lot because it crashed often. So we decided to redesign the system, and this improved how fast it was by 40%."',
      model: "The testing of the app revealed poor performance. Frequent crashes led to a large number of user complaints. As a result, a decision was made to redesign the system, which resulted in a 40% improvement in speed.",
      checklist: ['Verbos transformados em substantivos', 'Advérbios transformados em adjetivos', 'Conectores formais (led to, resulted in)', 'Tom impessoal'],
    },
  ],
}
