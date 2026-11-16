import type { UnitData } from '../types'

export const u14: UnitData = {
  slug: 'collocations',
  title: 'Collocations',
  summary: 'Palavras que "andam juntas": make a decision, do homework, heavy rain, strong coffee.',
  theory: [
    {
      title: 'O que são collocations',
      body: `Combinações que soam **naturais** para um nativo. A tradução literal muitas vezes falha:

- *tomar uma decisão* → **make** a decision ("take a decision" é raro)
- *chuva forte* → **heavy** rain ("strong rain" ✘)
- *café forte* → **strong** coffee
- *cometer um erro* → **make** a mistake ("do a mistake" ✘)`,
    },
    {
      title: 'make × do',
      body: ``,
      table: {
        head: ['make (criar, produzir)', 'do (tarefas, atividades)'],
        rows: [
          ['make a decision', 'do homework'],
          ['make a mistake', 'do the dishes'],
          ['make money', 'do exercise'],
          ['make a phone call', 'do business'],
          ['make progress', 'do your best'],
          ['make an effort', 'do research'],
          ['make friends', 'do someone a favour'],
          ['make a complaint', 'do damage'],
        ],
      },
    },
    {
      title: 'Outras combinações frequentes',
      body: `- **have / take**: *have a shower, have breakfast, take a photo, take a break, take a risk, take place* (acontecer)
- **pay**: *pay attention, pay a visit, pay a compliment*
- **adjetivo + substantivo**: *heavy traffic, strong wind, high price, deep sleep, close friend, bitter disappointment*
- **advérbio + adjetivo**: *highly recommended, deeply worried, fully aware, bitterly cold*

Dica: anote collocations inteiras, não palavras soltas.`,
    },
  ],
  vocab: [
    { en: 'to make a decision', pt: 'tomar uma decisão' },
    { en: 'to make a mistake', pt: 'cometer um erro' },
    { en: 'to do research', pt: 'fazer pesquisa' },
    { en: 'to take a risk', pt: 'correr um risco' },
    { en: 'to pay attention', pt: 'prestar atenção' },
    { en: 'heavy rain', pt: 'chuva forte' },
    { en: 'heavy traffic', pt: 'trânsito intenso' },
    { en: 'close friend', pt: 'amigo próximo' },
    { en: 'to take place', pt: 'acontecer, ser realizado' },
    { en: 'highly recommended', pt: 'altamente recomendado' },
  ],
  exercises: [
    { type: 'fill', prompt: 'We need to ___ a decision today.', answers: ['make'] },
    { type: 'fill', prompt: 'Have you ___ your homework?', answers: ['done'] },
    { type: 'fill', prompt: "Don't worry, everyone ___ mistakes.", answers: ['makes'] },
    { type: 'fill', prompt: 'There was ___ rain all night. (forte)', answers: ['heavy'] },
    { type: 'fill', prompt: 'Please ___ attention to the instructions.', answers: ['pay'] },
    { type: 'fill', prompt: 'The conference will ___ place in March.', answers: ['take'] },
    { type: 'fill', prompt: "I'll ___ my best to finish on time.", answers: ['do'] },
    { type: 'fill', prompt: "She's a ___ friend of mine. (próxima)", answers: ['close'] },
    {
      type: 'choice',
      prompt: '"Este restaurante é altamente recomendado."',
      options: ['This restaurant is highly recommended.', 'This restaurant is tall recommended.', 'This restaurant is strongly recommended high.'],
      answer: 0,
    },
    { type: 'choice', prompt: 'café ___', options: ['heavy coffee', 'strong coffee', 'hard coffee'], answer: 1 },
    { type: 'choice', prompt: '___ progress', options: ['do', 'make', 'take'], answer: 1 },
    { type: 'choice', prompt: '___ a risk', options: ['make', 'do', 'take'], answer: 2 },
    { type: 'fixError', prompt: 'I did a mistake in the report.', answers: ['I made a mistake in the report.'] },
    { type: 'fixError', prompt: 'There was a strong traffic on the way home.', answers: ['There was heavy traffic on the way home.', 'There was a lot of traffic on the way home.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Preciso fazer uma ligação.',
      answers: ['I need to make a phone call.', 'I need to make a call.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Você pode me fazer um favor?',
      answers: ['Can you do me a favour?', 'Can you do me a favor?', 'Could you do me a favour?', 'Could you do me a favor?'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um parágrafo (5–6 frases) sobre um projeto difícil no trabalho ou nos estudos, usando ao menos 6 collocations desta unidade.',
      model: "Last year I had to make a difficult decision at work. We were doing research for a new product, and I realised we had made a serious mistake in the data. I decided to take a risk and tell my manager. She paid close attention to what I said and thanked me. We made a lot of progress after that, and the product launch took place in December.",
      checklist: ['make × do corretos', 'take/pay nas combinações certas', 'Adjetivos naturais (heavy, strong, close)'],
    },
  ],
}
