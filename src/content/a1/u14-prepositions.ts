import type { UnitData } from '../types'

export const u14: UnitData = {
  slug: 'prepositions-time-place',
  title: 'Preposições de tempo e lugar',
  summary: 'in, on, at para tempo e lugar, e as preposições de posição (under, next to, between…).',
  theory: [
    {
      title: 'Tempo: at, on, in',
      body: `Pense do mais **específico** para o mais **amplo**:`,
      table: {
        head: ['Preposição', 'Uso', 'Exemplos'],
        rows: [
          ['at', 'horas e momentos exatos', 'at 7 o\'clock, at noon, at night, at the weekend'],
          ['on', 'dias e datas', 'on Monday, on May 5th, on my birthday, on Christmas Day'],
          ['in', 'meses, anos, estações, partes do dia, períodos', 'in July, in 2025, in summer, in the morning, in the evening'],
        ],
      },
    },
    {
      title: 'Sem preposição',
      body: `Antes de **next, last, this, every** não se usa preposição:

- *See you next Monday.* — "on next Monday" ✘
- *I study every day.*
- *We travel this weekend.*`,
    },
    {
      title: 'Lugar: in, on, at',
      body: ``,
      table: {
        head: ['Preposição', 'Uso', 'Exemplos'],
        rows: [
          ['in', 'dentro; cidades e países', 'in the box, in the car, in São Paulo, in Brazil'],
          ['on', 'sobre uma superfície; andares', 'on the table, on the wall, on the second floor'],
          ['at', 'ponto específico, local de atividade, endereço com número', 'at home, at work, at school, at the bus stop, at 25 Oak Street'],
        ],
      },
    },
    {
      title: 'Posição',
      body: `- **under** — embaixo de
- **next to** — ao lado de
- **between** — entre (duas coisas)
- **behind** — atrás de
- **in front of** — na frente de
- **near** — perto de
- **across from** — em frente a (do outro lado)

Para intervalos: **from** Monday **to** Friday (de segunda a sexta).`,
      examples: [
        { en: 'The cat is under the bed.', pt: 'O gato está embaixo da cama.' },
        { en: 'The pharmacy is between the bank and the market.', pt: 'A farmácia fica entre o banco e o mercado.' },
      ],
    },
  ],
  vocab: [
    { en: 'under', pt: 'embaixo de' },
    { en: 'next to', pt: 'ao lado de' },
    { en: 'between', pt: 'entre' },
    { en: 'behind', pt: 'atrás de' },
    { en: 'in front of', pt: 'na frente de' },
    { en: 'wall', pt: 'parede' },
    { en: 'floor', pt: 'chão; andar' },
    { en: 'bed', pt: 'cama' },
    { en: 'pharmacy', pt: 'farmácia' },
    { en: 'market', pt: 'mercado' },
    { en: 'meeting', pt: 'reunião' },
    { en: 'summer', pt: 'verão' },
    { en: 'winter', pt: 'inverno' },
    { en: 'noon', pt: 'meio-dia' },
  ],
  exercises: [
    { type: 'fill', prompt: "The meeting is ___ 3 o'clock.", answers: ['at'] },
    { type: 'fill', prompt: 'My birthday is ___ June.', answers: ['in'] },
    { type: 'fill', prompt: "I don't work ___ Sundays.", answers: ['on'] },
    { type: 'fill', prompt: 'Her birthday is ___ May 10th.', answers: ['on'] },
    { type: 'fill', prompt: 'I study ___ the morning.', answers: ['in'] },
    { type: 'fill', prompt: 'We sleep ___ night.', answers: ['at'] },
    { type: 'fill', prompt: 'The keys are ___ the table.', answers: ['on'] },
    { type: 'fill', prompt: 'My parents live ___ Portugal.', answers: ['in'] },
    { type: 'fill', prompt: 'He is ___ home now.', answers: ['at'] },
    { type: 'fill', prompt: 'The cat is ___ the box.', answers: ['in'] },
    {
      type: 'choice',
      prompt: '"Te vejo na próxima segunda."',
      options: ['See you on next Monday.', 'See you next Monday.', 'See you in next Monday.'],
      answer: 1,
    },
    { type: 'fixError', prompt: 'I go to the gym in Mondays.', answers: ['I go to the gym on Mondays.'] },
    { type: 'fixError', prompt: 'She is in home.', answers: ['She is at home.'] },
    { type: 'fixError', prompt: 'We live in the third floor.', answers: ['We live on the third floor.'] },
    { type: 'translate', from: 'pt', prompt: 'O quadro está na parede.', answers: ['The picture is on the wall.', 'The painting is on the wall.'] },
    { type: 'translate', from: 'pt', prompt: 'Eu trabalho de segunda a sexta.', answers: ['I work from Monday to Friday.'] },
    { type: 'translate', from: 'pt', prompt: 'O gato está embaixo da cama.', answers: ['The cat is under the bed.'] },
    { type: 'reorder', words: ['The', 'bank', 'is', 'next', 'to', 'the', 'school'], translation: 'O banco fica ao lado da escola.' },
  ],
}
