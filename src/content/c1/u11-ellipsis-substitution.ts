import type { UnitData } from '../types'

export const u11: UnitData = {
  slug: 'ellipsis-substitution',
  title: 'Elipse e substituição',
  summary: 'Evitar repetição: so/not, do so, one/ones, that/those, e omitir palavras com naturalidade.',
  theory: [
    {
      title: 'Substituição',
      body: `- **one / ones** substituem substantivos contáveis: *I don't like the red shirt. I prefer the blue **one**.*
- **that / those** (formal) substituem substantivo + of: *The population of Brazil is larger than **that** of Argentina.*
- **do so** substitui uma ação (formal): *He promised to call, but he didn't **do so**.*
- **so / not** substituem uma frase depois de *think, hope, expect, believe, suppose, be afraid*:
  *Will it rain? — I think **so**. / I hope **not**. / I'm afraid **so**.*
  Com *think/believe/expect*, a negativa mais comum é *I don't think so*.`,
    },
    {
      title: 'Elipse (omissão)',
      body: `- Depois do auxiliar: *She can swim, but I **can't**.* / *I haven't finished, but Tom **has**.*
- Com *to*: *I wanted to go, but I wasn't able **to**.* / *You can leave if you want **to**.*
- Em listas e coordenadas: *She sings and (she) plays the guitar.*
- **so / neither / nor + auxiliar + sujeito** (eu também / eu também não):
  *I love jazz. — **So do I**.* / *I can't swim. — **Neither can I**.*`,
    },
  ],
  vocab: [
    { en: 'so do I', pt: 'eu também' },
    { en: 'neither can I', pt: 'eu também não (consigo)' },
    { en: 'I hope not', pt: 'espero que não' },
    { en: "I'm afraid so", pt: 'infelizmente sim' },
    { en: 'to do so', pt: 'fazê-lo (formal)' },
    { en: 'population', pt: 'população' },
    { en: 'previous', pt: 'anterior' },
    { en: 'to repeat', pt: 'repetir' },
    { en: 'redundant', pt: 'redundante' },
  ],
  exercises: [
    { type: 'fill', prompt: "I don't like this jacket. I prefer the black ___.", answers: ['one'] },
    { type: 'fill', prompt: 'These shoes are cheaper than the ___ I bought last year.', answers: ['ones'] },
    { type: 'fill', prompt: 'The climate of Brazil is warmer than ___ of Canada.', answers: ['that'] },
    { type: 'fill', prompt: 'Is she coming? — I hope ___. (espero que sim)', answers: ['so'] },
    { type: 'fill', prompt: 'Will it rain tomorrow? — I hope ___. (espero que não)', answers: ['not'] },
    { type: 'fill', prompt: 'I love chocolate. — So ___ I.', answers: ['do'] },
    { type: 'fill', prompt: "I can't drive. — ___ can I. (eu também não)", answers: ['Neither', 'Nor'] },
    { type: 'fill', prompt: 'He promised to pay, but he never did ___. (formal)', answers: ['so'] },
    {
      type: 'choice',
      prompt: '"Você vai à festa?" — "Acho que não."',
      options: ["I don't think so.", 'I think not so.', "I don't think it."],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: '"I haven\'t seen that film." — "Eu também não."',
      options: ['So have I.', "Neither have I.", "Neither haven't I."],
      answer: 1,
    },
    { type: 'reorder', words: ['I', 'wanted', 'to', 'help', ',', 'but', 'I', "wasn't", 'able', 'to', '.'], translation: 'Eu queria ajudar, mas não pude.' },
    { type: 'fixError', prompt: 'She can speak German, but I can\'t speak German.', answers: ["She can speak German, but I can't.", 'She can speak German, but I cannot.'] },
    { type: 'fixError', prompt: 'I went to the party and so went my sister.', answers: ['I went to the party and so did my sister.', 'I went to the party, and so did my sister.'] },
    {
      type: 'transform',
      instruction: 'Evite a repetição usando "those".',
      prompt: 'The results of this year are better than the results of last year.',
      answers: ["This year's results are better than those of last year.", 'The results of this year are better than those of last year.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ele não terminou o relatório, mas eu terminei.',
      answers: ["He hasn't finished the report, but I have.", "He didn't finish the report, but I did.", 'He has not finished the report, but I have.', 'He did not finish the report, but I did.'],
    },
    {
      type: 'writing',
      prompt: 'Reescreva o texto eliminando repetições com one(s), so/not, do so, elipse e so/neither: "My brother likes coffee and I like coffee. He bought a new car and the new car is faster than the old car. I asked if he would lend it to me. He said he would lend it to me. I wanted to drive to the beach, but I couldn\'t drive to the beach."',
      model: "My brother likes coffee and so do I. He bought a new car, which is faster than the old one. I asked if he would lend it to me, and he said he would. I wanted to drive to the beach, but I couldn't.",
      checklist: ['so/neither + auxiliar + sujeito', 'one/ones no lugar do substantivo', 'Elipse depois do auxiliar', 'Texto mais curto e natural'],
    },
  ],
}
