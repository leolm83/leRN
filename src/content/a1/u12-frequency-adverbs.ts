import type { UnitData } from '../types'

export const u12: UnitData = {
  slug: 'adverbs-of-frequency',
  title: 'Advérbios de frequência',
  summary: 'always, usually, often, sometimes, rarely, never — e a posição exata deles na frase.',
  theory: [
    {
      title: 'Do sempre ao nunca',
      body: `Advérbios são palavras que modificam o verbo. Os de **frequência** dizem com que frequência algo acontece.`,
      table: {
        head: ['Advérbio', 'Português', 'Frequência'],
        rows: [
          ['always', 'sempre', '100%'],
          ['usually', 'geralmente', '~90%'],
          ['often', 'frequentemente, muitas vezes', '~70%'],
          ['sometimes', 'às vezes', '~50%'],
          ['rarely / seldom', 'raramente', '~10%'],
          ['never', 'nunca', '0%'],
        ],
      },
    },
    {
      title: 'Posição na frase (regra de ouro)',
      body: `- **Antes do verbo principal**: *I **always** drink coffee.*
- **Depois do verbo to be**: *She is **always** late.*
- **Entre o auxiliar e o verbo principal**: *I don't **usually** eat meat.* / *Do you **often** study?*

**Sometimes** também pode ir no começo ou no fim: *Sometimes I study at night.*

**Never** já é negativo: não use com *don't*. *I never eat meat.* ✔ — "I don't never eat meat" ✘`,
      examples: [
        { en: 'He usually goes to work by car.', pt: 'Ele geralmente vai para o trabalho de carro.' },
        { en: 'We are never bored.', pt: 'Nós nunca ficamos entediados.' },
        { en: "They don't often travel.", pt: 'Eles não viajam com frequência.' },
      ],
    },
    {
      title: 'How often? e expressões de frequência',
      body: `Para perguntar: **How often** do you…?

Expressões com mais de uma palavra vão no **final** da frase: *every day*, *once a week* (uma vez por semana), *twice a month* (duas vezes por mês), *three times a year*.`,
    },
  ],
  vocab: [
    { en: 'always', pt: 'sempre' },
    { en: 'usually', pt: 'geralmente' },
    { en: 'often', pt: 'frequentemente' },
    { en: 'sometimes', pt: 'às vezes' },
    { en: 'rarely', pt: 'raramente' },
    { en: 'never', pt: 'nunca' },
    { en: 'once', pt: 'uma vez' },
    { en: 'twice', pt: 'duas vezes' },
    { en: 'late', pt: 'atrasado; tarde' },
    { en: 'early', pt: 'cedo' },
    { en: 'to travel', pt: 'viajar' },
    { en: 'gym', pt: 'academia' },
    { en: 'beach', pt: 'praia' },
  ],
  exercises: [
    { type: 'reorder', words: ['I', 'always', 'drink', 'coffee', 'in', 'the', 'morning'], translation: 'Eu sempre bebo café de manhã.' },
    { type: 'reorder', words: ['She', 'is', 'never', 'late'], translation: 'Ela nunca está atrasada.' },
    { type: 'reorder', words: ['They', 'usually', 'go', 'to', 'the', 'beach'], translation: 'Eles geralmente vão à praia.' },
    { type: 'fill', prompt: 'He ___ eats meat. He is a vegetarian. (nunca)', answers: ['never'] },
    { type: 'fill', prompt: '___ often do you study? — Every day.', answers: ['How'] },
    {
      type: 'choice',
      prompt: '"Ela está sempre cansada."',
      options: ['She always is tired.', 'She is always tired.', 'Always she is tired.'],
      answer: 1,
      explanation: 'Com to be, o advérbio vem depois do verbo.',
    },
    {
      type: 'choice',
      prompt: '"Eu nunca bebo refrigerante."',
      options: ["I don't never drink soda.", 'I never drink soda.', 'I drink never soda.'],
      answer: 1,
    },
    { type: 'fixError', prompt: 'He goes always to the gym.', answers: ['He always goes to the gym.'] },
    { type: 'fixError', prompt: "I don't never watch TV.", answers: ['I never watch TV.', "I don't ever watch TV."] },
    { type: 'fixError', prompt: 'We are late usually.', answers: ['We are usually late.'] },
    {
      type: 'transform',
      instruction: 'Acrescente "often" na posição correta.',
      prompt: 'She reads books.',
      answers: ['She often reads books.'],
    },
    {
      type: 'transform',
      instruction: 'Acrescente "sometimes" na posição correta.',
      prompt: 'I am tired.',
      answers: ['I am sometimes tired.', 'Sometimes I am tired.', 'I am tired sometimes.'],
    },
    {
      type: 'transform',
      instruction: 'Acrescente "usually" na posição correta.',
      prompt: "I don't eat breakfast.",
      answers: ["I don't usually eat breakfast.", "I usually don't eat breakfast."],
      explanation: 'A posição padrão é entre o auxiliar e o verbo principal: don\'t usually eat.',
    },
    { type: 'translate', from: 'pt', prompt: 'Eu raramente como doces.', answers: ['I rarely eat sweets.', 'I seldom eat sweets.', 'I rarely eat candy.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Nós vamos ao cinema uma vez por mês.',
      answers: ['We go to the cinema once a month.', 'We go to the movies once a month.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases sobre seus hábitos usando always, usually, sometimes, rarely e never.',
      model: "I always wake up early. I usually drink coffee in the morning. I sometimes study at night. I rarely eat fast food. I am never late for work.",
      checklist: ['Advérbio antes do verbo principal', 'Advérbio depois de am/is/are', 'never sem don\'t'],
    },
  ],
}
