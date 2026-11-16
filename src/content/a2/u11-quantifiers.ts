import type { UnitData } from '../types'

export const u11: UnitData = {
  slug: 'quantifiers',
  title: 'Quantificadores: some, any, much, many, a lot of',
  summary: 'Como falar de quantidade com contáveis e incontáveis — e a diferença entre few e a few.',
  theory: [
    {
      title: 'some e any',
      body: `- **some**: frases afirmativas, e também **ofertas e pedidos**: *Would you like **some** coffee? Can I have **some** water?*
- **any**: negativas e perguntas: *I don't have **any** money. Is there **any** sugar?*
- **no** = not any: *There's **no** milk.* = *There isn't **any** milk.* — nunca use os dois juntos ("There isn't no milk" ✘)

O mesmo vale para **something / anything / nothing**, **somebody / anybody / nobody**.`,
    },
    {
      title: 'much, many, a lot of',
      body: ``,
      table: {
        head: ['', 'Incontáveis (water, time, money)', 'Contáveis no plural (books, people)'],
        rows: [
          ['muito(s)', 'much', 'many'],
          ['em afirmativas (mais natural)', 'a lot of / lots of', 'a lot of / lots of'],
          ['pergunta de quantidade', 'How much…?', 'How many…?'],
          ['um pouco / alguns (sentido positivo)', 'a little', 'a few'],
          ['pouco / poucos (sentido negativo)', 'little', 'few'],
          ['demais', 'too much', 'too many'],
        ],
      },
      examples: [
        { en: "I don't have much time.", pt: 'Não tenho muito tempo.' },
        { en: 'How many people came?', pt: 'Quantas pessoas vieram?' },
        { en: 'I have a few friends in London.', pt: 'Tenho alguns amigos em Londres.' },
      ],
    },
    {
      title: 'enough (suficiente)',
      body: `- **enough + substantivo**: *We don't have **enough chairs**.*
- **adjetivo + enough**: *He isn't **old enough** to drive.* (repare na ordem invertida)`,
    },
  ],
  vocab: [
    { en: 'some', pt: 'algum, alguns, um pouco' },
    { en: 'any', pt: 'algum, nenhum (neg./perg.)' },
    { en: 'much', pt: 'muito (incontável)' },
    { en: 'many', pt: 'muitos (contável)' },
    { en: 'a few', pt: 'alguns, uns poucos' },
    { en: 'a little', pt: 'um pouco' },
    { en: 'enough', pt: 'suficiente' },
    { en: 'nobody', pt: 'ninguém' },
    { en: 'nothing', pt: 'nada' },
    { en: 'sugar', pt: 'açúcar' },
    { en: 'cookie', pt: 'biscoito, cookie' },
  ],
  exercises: [
    { type: 'fill', prompt: 'How ___ money do you have?', answers: ['much'] },
    { type: 'fill', prompt: 'How ___ brothers do you have?', answers: ['many'] },
    { type: 'fill', prompt: "I don't have ___ time today.", answers: ['much'] },
    { type: 'fill', prompt: 'There are a ___ of people at the beach.', answers: ['lot'] },
    { type: 'fill', prompt: 'Would you like ___ tea?', answers: ['some'] },
    { type: 'fill', prompt: 'Is there ___ sugar in the kitchen?', answers: ['any'] },
    { type: 'fill', prompt: 'I have a ___ friends in London. (alguns)', answers: ['few'] },
    { type: 'fill', prompt: 'Can I have a ___ milk in my coffee? (um pouco)', answers: ['little'] },
    { type: 'fill', prompt: "He isn't old ___ to drive.", answers: ['enough'] },
    { type: 'choice', prompt: "There isn't ___ milk.", options: ['many', 'much', 'a few'], answer: 1 },
    { type: 'choice', prompt: 'I ate too ___ cookies.', options: ['much', 'many'], answer: 1 },
    {
      type: 'choice',
      prompt: '"Não tem ninguém em casa."',
      options: ["There isn't anybody at home.", "There isn't nobody at home."],
      answer: 0,
      explanation: 'Em inglês não se usa dupla negação.',
    },
    { type: 'fixError', prompt: 'How many money do you need?', answers: ['How much money do you need?'] },
    { type: 'fixError', prompt: 'I have much friends.', answers: ['I have a lot of friends.', 'I have many friends.', 'I have lots of friends.'] },
    { type: 'fixError', prompt: "There aren't some apples.", answers: ["There aren't any apples.", 'There are no apples.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu tenho pouco tempo.',
      answers: ['I have little time.', 'I have very little time.', "I don't have much time."],
    },
    { type: 'translate', from: 'pt', prompt: 'Quantas pessoas vieram à festa?', answers: ['How many people came to the party?'] },
    { type: 'reorder', words: ['We', "don't", 'have', 'enough', 'chairs', 'for', 'everyone'], translation: 'Não temos cadeiras suficientes para todos.' },
  ],
}
