import type { UnitData } from '../types'

export const u09: UnitData = {
  slug: 'superlatives',
  title: 'Superlativos',
  summary: 'the tallest, the most expensive, the best — com in e of.',
  theory: [
    {
      title: 'the + -est / the most',
      body: `O superlativo ("o mais…") segue as **mesmas regras de ortografia** do comparativo, sempre com **the**:`,
      table: {
        head: ['Adjetivo', 'Comparativo', 'Superlativo'],
        rows: [
          ['tall', 'taller', 'the tallest'],
          ['big', 'bigger', 'the biggest'],
          ['happy', 'happier', 'the happiest'],
          ['expensive', 'more expensive', 'the most expensive'],
          ['good', 'better', 'the best'],
          ['bad', 'worse', 'the worst'],
          ['far', 'farther', 'the farthest'],
        ],
      },
    },
    {
      title: 'in ou of?',
      body: `- **in** + lugar ou grupo: *the tallest **in** the class*, *the biggest city **in** Brazil*, *the best player **on** the team*
- **of** + período ou número: *the best day **of** my life*, *the cheapest **of** the three*

Expressão muito comum: **one of the** + superlativo + **plural**:
*She is one of the best **players**.* ("one of the best player" ✘)`,
      examples: [
        { en: 'It was the happiest day of my life.', pt: 'Foi o dia mais feliz da minha vida.' },
        { en: 'What is the biggest country in South America?', pt: 'Qual é o maior país da América do Sul?' },
      ],
    },
  ],
  vocab: [
    { en: 'the best', pt: 'o melhor' },
    { en: 'the worst', pt: 'o pior' },
    { en: 'mountain', pt: 'montanha' },
    { en: 'world', pt: 'mundo' },
    { en: 'country', pt: 'país' },
    { en: 'library', pt: 'biblioteca' },
    { en: 'funny', pt: 'engraçado' },
    { en: 'smart', pt: 'inteligente, esperto' },
    { en: 'player', pt: 'jogador' },
    { en: 'team', pt: 'time, equipe' },
  ],
  exercises: [
    { type: 'fill', prompt: 'Everest is the ___ mountain in the world. (high)', answers: ['highest'] },
    { type: 'fill', prompt: 'This is the ___ restaurant in town. (expensive)', answers: ['most expensive'] },
    { type: 'fill', prompt: 'Today is the ___ day of the year. (hot)', answers: ['hottest'] },
    { type: 'fill', prompt: 'She is the ___ student in the class. (good)', answers: ['best'] },
    { type: 'fill', prompt: 'That was the ___ day of my life. (bad)', answers: ['worst'] },
    { type: 'fill', prompt: 'He is the ___ person I know. (funny)', answers: ['funniest'] },
    { type: 'fill', prompt: 'São Paulo is the biggest city ___ Brazil.', answers: ['in'] },
    { type: 'choice', prompt: '"a mais bonita"', options: ['the more beautiful', 'the most beautiful', 'the beautifulest'], answer: 1 },
    {
      type: 'choice',
      prompt: '"a mais alta da turma"',
      options: ['the tallest of the class', 'the tallest in the class'],
      answer: 1,
      explanation: 'Grupo ou lugar → in.',
    },
    { type: 'fixError', prompt: 'He is the most smart student.', answers: ['He is the smartest student.'] },
    { type: 'fixError', prompt: 'This is the better pizza in the city.', answers: ['This is the best pizza in the city.'] },
    {
      type: 'fixError',
      prompt: 'She is one of the best player on the team.',
      answers: ['She is one of the best players on the team.', 'She is one of the best players in the team.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Qual é o maior país da América do Sul?',
      answers: [
        'What is the biggest country in South America?',
        'What is the largest country in South America?',
        'Which is the biggest country in South America?',
        'Which is the largest country in South America?',
      ],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Este é o livro mais interessante da biblioteca.',
      answers: ['This is the most interesting book in the library.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva com superlativo, começando com "São Paulo".',
      prompt: 'No city in Brazil is bigger than São Paulo.',
      answers: ['São Paulo is the biggest city in Brazil.', 'São Paulo is the largest city in Brazil.'],
    },
    { type: 'reorder', words: ['It', 'was', 'the', 'happiest', 'day', 'of', 'my', 'life'], translation: 'Foi o dia mais feliz da minha vida.' },
  ],
}
