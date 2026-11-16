import type { UnitData } from '../types'

export const u09: UnitData = {
  slug: 'advanced-phrasal-verbs',
  title: 'Phrasal verbs avançados',
  summary: 'Phrasal verbs de três partes e de uso profissional: come up with, carry out, put up with, bring about…',
  theory: [
    {
      title: 'Phrasal verbs de três partes',
      body: `São **inseparáveis**: o objeto vem sempre no fim.

- **come up with** = ter (uma ideia), propor: *She **came up with** a brilliant solution.*
- **put up with** = tolerar, aguentar: *I can't **put up with** this noise.*
- **look forward to** + -ing = aguardar ansiosamente
- **get away with** = sair impune: *He **got away with** cheating.*
- **run out of** = ficar sem
- **catch up with** = alcançar, pôr o papo em dia
- **cut down on** = reduzir (consumo): *I'm **cutting down on** sugar.*
- **face up to** = encarar (problema)`,
    },
    {
      title: 'Uso profissional e acadêmico',
      body: ``,
      table: {
        head: ['Phrasal verb', 'Sentido', 'Exemplo'],
        rows: [
          ['carry out', 'realizar, executar', 'The tests were **carried out** in May.'],
          ['bring about', 'provocar, causar', 'The internet **brought about** huge changes.'],
          ['point out', 'apontar, observar', 'She **pointed out** an error.'],
          ['set up', 'montar, fundar', 'They **set up** a company in 2015.'],
          ['turn down', 'recusar', 'He **turned down** the offer.'],
          ['draw up', 'redigir (contrato, plano)', 'The lawyer **drew up** the contract.'],
          ['phase out', 'eliminar gradualmente', 'Plastic bags are being **phased out**.'],
          ['account for', 'explicar; representar (%)', 'Exports **account for** 30% of GDP.'],
          ['rule out', 'descartar', 'Police have **ruled out** murder.'],
          ['iron out', 'resolver (detalhes)', 'We need to **iron out** a few problems.'],
        ],
      },
    },
  ],
  vocab: [
    { en: 'to come up with', pt: 'ter (ideia), propor' },
    { en: 'to put up with', pt: 'tolerar, aguentar' },
    { en: 'to carry out', pt: 'realizar, executar' },
    { en: 'to bring about', pt: 'provocar, causar' },
    { en: 'to turn down', pt: 'recusar' },
    { en: 'to rule out', pt: 'descartar' },
    { en: 'to account for', pt: 'explicar; representar' },
    { en: 'to phase out', pt: 'eliminar gradualmente' },
    { en: 'to get away with', pt: 'sair impune' },
    { en: 'to cut down on', pt: 'reduzir (consumo)' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She came up ___ a brilliant idea.', answers: ['with'] },
    { type: 'fill', prompt: "I can't put up ___ his rudeness any longer.", answers: ['with'] },
    { type: 'fill', prompt: 'The experiment was carried ___ by a team of scientists.', answers: ['out'] },
    { type: 'fill', prompt: 'He turned ___ the job offer because the salary was too low.', answers: ['down'] },
    { type: 'fill', prompt: "The doctor told me to cut down ___ salt.", answers: ['on'] },
    { type: 'fill', prompt: 'Tourism accounts ___ 10% of the economy.', answers: ['for'] },
    { type: 'fill', prompt: 'The police have ruled ___ the possibility of an accident.', answers: ['out'] },
    { type: 'fill', prompt: 'The new law brought ___ significant changes.', answers: ['about'] },
    {
      type: 'choice',
      prompt: '"Eles montaram uma empresa em 2015."',
      options: ['They set up a company in 2015.', 'They put up a company in 2015.', 'They carried up a company in 2015.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: '"He cheated and got away with it." significa que ele…',
      options: ['foi punido', 'saiu impune', 'fugiu do país'],
      answer: 1,
    },
    { type: 'reorder', words: ['The', 'company', 'is', 'phasing', 'out', 'plastic', 'packaging', '.'], translation: 'A empresa está eliminando gradualmente as embalagens plásticas.' },
    { type: 'fixError', prompt: 'We need to come up a new strategy with.', answers: ['We need to come up with a new strategy.'] },
    { type: 'fixError', prompt: 'She pointed an important mistake out it.', answers: ['She pointed out an important mistake.', 'She pointed an important mistake out.'] },
    {
      type: 'transform',
      instruction: 'Substitua "tolerate" por um phrasal verb.',
      prompt: "I don't know how you tolerate all this noise.",
      answers: ["I don't know how you put up with all this noise."],
    },
    {
      type: 'transform',
      instruction: 'Substitua "conducted" por um phrasal verb (na passiva).',
      prompt: 'The survey was conducted last month.',
      answers: ['The survey was carried out last month.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Precisamos resolver alguns detalhes antes de assinar o contrato.',
      answers: ['We need to iron out some details before signing the contract.', 'We need to iron out a few details before signing the contract.', 'We need to iron out some details before we sign the contract.', 'We need to iron out a few details before we sign the contract.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um breve relatório (5 frases) sobre um projeto na sua empresa/escola usando ao menos 5 phrasal verbs desta unidade.',
      model: "Last year our team set up a new customer support system. First, we carried out a survey to find out what users needed. Then a colleague came up with the idea of a chatbot. We had to iron out several technical problems, and we turned down two expensive offers from suppliers. The project brought about a 30% reduction in waiting times.",
      checklist: ['Partículas corretas', 'Objeto no fim nos de três partes', 'Pronome no meio dos separáveis', 'Tom profissional'],
    },
  ],
}
