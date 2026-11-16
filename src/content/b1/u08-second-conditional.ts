import type { UnitData } from '../types'

export const u08: UnitData = {
  slug: 'second-conditional',
  title: 'Condicional 2',
  summary: 'Situações imaginárias ou improváveis: "se eu fosse rico, eu viajaria" = If I were rich, I would travel.',
  theory: [
    {
      title: 'Forma',
      body: `**If + Past Simple, would + verbo** — situações **hipotéticas** (presente ou futuro irreal):

- *If I **had** more money, I **would buy** a house.* — Se eu tivesse mais dinheiro, compraria uma casa.
- *If she **lived** closer, we**'d see** each other more.*

O passado aqui **não** fala do passado: ele indica que a situação é **imaginária**.`,
    },
    {
      title: 'If I were…',
      body: `Com **be**, o mais correto (e o esperado na escrita) é **were** para todas as pessoas:

- *If I **were** you, I would accept the offer.* — Se eu fosse você, aceitaria.
- *If he **were** taller, he would play basketball.*

*If I was…* é comum na fala informal, mas use **were** nos textos.`,
    },
    {
      title: '1º × 2º condicional',
      body: `- *If I **win** the game, I**'ll** celebrate.* → é bem possível.
- *If I **won** the lottery, I**'d** travel the world.* → muito improvável.

Também: **could** (poderia) e **might** (talvez) no lugar de *would*: *If I had a car, I **could** drive you home.*
O **'d** aqui é **would** (antes de verbo base).`,
    },
  ],
  vocab: [
    { en: 'would', pt: '-ria (futuro do pretérito)' },
    { en: 'could', pt: 'poderia' },
    { en: 'lottery', pt: 'loteria' },
    { en: 'to accept', pt: 'aceitar' },
    { en: 'offer', pt: 'oferta, proposta' },
    { en: 'rich', pt: 'rico' },
    { en: 'to quit', pt: 'largar, pedir demissão' },
    { en: 'to afford', pt: 'ter dinheiro para' },
    { en: 'island', pt: 'ilha' },
  ],
  exercises: [
    { type: 'fill', prompt: 'If I ___ (have) more time, I would learn the piano.', answers: ['had'] },
    { type: 'fill', prompt: 'If I were rich, I ___ (buy) an island.', answers: ['would buy', "'d buy"] },
    { type: 'fill', prompt: 'If I ___ you, I would accept the offer.', answers: ['were'] },
    { type: 'fill', prompt: 'If she lived closer, we ___ (see) each other more often.', answers: ['would see', "'d see"] },
    { type: 'fill', prompt: "If they could afford it, they ___ (not / rent) an apartment.", answers: ["wouldn't rent", 'would not rent'] },
    { type: 'fill', prompt: 'What ___ you do if you won the lottery?', answers: ['would'] },
    {
      type: 'choice',
      prompt: '"Se eu fosse você, eu pediria demissão."',
      options: ['If I am you, I will quit.', 'If I were you, I would quit.', 'If I would be you, I quit.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual frase indica algo MUITO improvável?',
      options: ['If I win the lottery, I will travel.', 'If I won the lottery, I would travel.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"If I had a car, I\'d drive you home." — o \'d significa…',
      options: ['had', 'would', 'did'],
      answer: 1,
    },
    { type: 'reorder', words: ['If', 'I', 'had', 'a', 'car', ',', 'I', 'could', 'drive', 'you', 'home', '.'], translation: 'Se eu tivesse um carro, poderia te levar para casa.' },
    { type: 'fixError', prompt: 'If I would have money, I would travel.', answers: ['If I had money, I would travel.', "If I had money, I'd travel."] },
    { type: 'fixError', prompt: 'If I won the lottery, I will buy a house.', answers: ['If I won the lottery, I would buy a house.', "If I won the lottery, I'd buy a house."] },
    {
      type: 'transform',
      instruction: 'Transforme em situação hipotética (2º condicional).',
      prompt: "I don't have a car, so I can't drive to work.",
      answers: ['If I had a car, I could drive to work.', 'If I had a car, I would drive to work.', "If I had a car, I'd drive to work."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Se eu falasse inglês fluentemente, eu trabalharia no exterior.',
      answers: ['If I spoke English fluently, I would work abroad.', "If I spoke English fluently, I'd work abroad.", 'If I spoke fluent English, I would work abroad.', "If I spoke fluent English, I'd work abroad."],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: 'What would you do if you lost your job?',
      answers: ['O que você faria se perdesse o emprego?', 'O que você faria se perdesse seu emprego?', 'O que você faria se você perdesse o emprego?', 'O que você faria se você perdesse seu emprego?'],
    },
    {
      type: 'writing',
      prompt: 'Responda por escrito (5 frases): "What would you do if you won a million dollars?"',
      model: "If I won a million dollars, I would quit my job. I would buy a small house near the beach. I would travel around Asia for a year. If I had enough money left, I would help my parents. I wouldn't buy an expensive car.",
      checklist: ['if + Past Simple', 'would/could + verbo base', 'were com be', 'Nunca would depois de if'],
    },
  ],
}
