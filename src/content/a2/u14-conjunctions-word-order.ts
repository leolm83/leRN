import type { UnitData } from '../types'

export const u14: UnitData = {
  slug: 'conjunctions-word-order',
  title: 'Conjunções e ordem da frase',
  summary: 'and, but, or, so, because; also, too, either; e a ordem fixa da frase em inglês (SVO).',
  theory: [
    {
      title: 'A ordem da frase é fixa',
      body: `O português permite mexer bastante na ordem. O inglês **não**:

**Sujeito + Verbo + Objeto + (modo) + (lugar) + (tempo)**

- *I **bought** a new car yesterday.* ✔ — "I bought yesterday a new car" ✘
- *She plays the piano very well.* — nada entre o verbo e o objeto
- O **adjetivo vem antes** do substantivo: *a **red** car* ("a car red" ✘)
- O tempo também pode abrir a frase: *Yesterday, I bought a new car.*`,
    },
    {
      title: 'Conjunções básicas',
      body: ``,
      table: {
        head: ['Conjunção', 'Sentido', 'Exemplo'],
        rows: [
          ['and', 'e (adição)', 'I like tea **and** coffee.'],
          ['but', 'mas (contraste)', 'She likes tea, **but** she doesn\'t like coffee.'],
          ['or', 'ou (alternativa)', 'Do you want pasta **or** pizza?'],
          ['so', 'então, por isso (consequência)', 'I was tired, **so** I went to bed.'],
          ['because', 'porque (causa)', 'I went to bed **because** I was tired.'],
          ['because of', 'por causa de + substantivo', 'The game was cancelled **because of** the rain.'],
        ],
      },
    },
    {
      title: 'Pontuação com conjunções',
      body: `- Use **vírgula antes de so e but** quando eles ligam duas frases completas: *It was late**,** so we took a taxi.*
- Normalmente **não** há vírgula antes de **because**: *I stayed home because I was sick.*
- Na escrita formal, evite uma frase que seja só "Because…" sozinha.`,
    },
    {
      title: 'also, too, either (também)',
      body: `- **also**: antes do verbo principal (depois do be): *I **also** speak Spanish. / She is **also** a teacher.*
- **too**: no fim da frase afirmativa: *I speak Spanish **too**.*
- **either**: no fim da frase **negativa** ("também não"): *I don't like horror movies. My sister doesn't like them **either**.*`,
    },
  ],
  vocab: [
    { en: 'and', pt: 'e' },
    { en: 'but', pt: 'mas' },
    { en: 'or', pt: 'ou' },
    { en: 'so', pt: 'então, por isso' },
    { en: 'because', pt: 'porque' },
    { en: 'because of', pt: 'por causa de' },
    { en: 'also', pt: 'também (antes do verbo)' },
    { en: 'either', pt: 'também não (no fim da negativa)' },
    { en: 'sick', pt: 'doente' },
    { en: 'to cancel', pt: 'cancelar' },
    { en: 'horror movie', pt: 'filme de terror' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I was tired, ___ I went to bed early.', answers: ['so'] },
    { type: 'fill', prompt: 'I went to bed early ___ I was tired.', answers: ['because'] },
    { type: 'fill', prompt: "She likes tea, ___ she doesn't like coffee.", answers: ['but'] },
    { type: 'fill', prompt: 'Do you want pasta ___ pizza?', answers: ['or'] },
    { type: 'fill', prompt: 'The game was cancelled because ___ the rain.', answers: ['of'] },
    { type: 'fill', prompt: "I don't like horror movies. My sister doesn't like them ___.", answers: ['either'] },
    { type: 'fill', prompt: 'I speak Portuguese. I ___ speak Spanish. (também, antes do verbo)', answers: ['also'] },
    {
      type: 'choice',
      prompt: '"Comprei um carro novo ontem."',
      options: ['I bought yesterday a new car.', 'I bought a new car yesterday.', 'Yesterday bought I a new car.'],
      answer: 1,
    },
    { type: 'choice', prompt: '"uma casa grande"', options: ['a house big', 'a big house'], answer: 1 },
    {
      type: 'choice',
      prompt: 'Qual frase está pontuada corretamente?',
      options: ['It was late, so we took a taxi.', 'It was late so, we took a taxi.', 'It was late. So, we took, a taxi.'],
      answer: 0,
    },
    { type: 'reorder', words: ['She', 'plays', 'the', 'piano', 'very', 'well'], translation: 'Ela toca piano muito bem.' },
    { type: 'reorder', words: ['We', 'met', 'at', 'the', 'restaurant', 'last', 'night'], translation: 'Nós nos encontramos no restaurante ontem à noite.' },
    { type: 'fixError', prompt: 'I like very much chocolate.', answers: ['I like chocolate very much.', 'I really like chocolate.'] },
    { type: 'fixError', prompt: 'He has a car red.', answers: ['He has a red car.'] },
    {
      type: 'transform',
      instruction: 'Junte as frases com because.',
      prompt: 'I stayed home. I was sick.',
      answers: ['I stayed home because I was sick.'],
    },
    {
      type: 'transform',
      instruction: 'Junte as frases com so.',
      prompt: "It was raining. We didn't go to the beach.",
      answers: ["It was raining, so we didn't go to the beach."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu estudo inglês porque quero viajar.',
      answers: ['I study English because I want to travel.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um parágrafo de 5–6 frases sobre a sua semana, usando and, but, so e because, com a ordem correta da frase.',
      model: "This week was busy but good. I worked a lot on Monday and Tuesday. On Wednesday I was very tired, so I went to bed early. I didn't go to the gym because it was raining. On Friday I met my friends and we had dinner at a nice restaurant.",
      checklist: ['Sujeito + verbo + objeto + lugar + tempo', 'Vírgula antes de so/but ligando frases', 'because + frase / because of + substantivo', 'Adjetivo antes do substantivo'],
    },
  ],
}
