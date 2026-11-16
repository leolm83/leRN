import type { UnitData } from '../types'

export const u06: UnitData = {
  slug: 'used-to',
  title: 'used to',
  summary: 'Hábitos e situações do passado que não existem mais: "eu costumava…" / "eu…-ava".',
  theory: [
    {
      title: 'used to + verbo',
      body: `**used to + verbo na forma base** = hábito ou estado do passado que **mudou**.

- *I **used to play** football every day.* — Eu jogava (costumava jogar) futebol todo dia.
- *She **used to have** long hair.* — Ela tinha cabelo comprido (não tem mais).

É o jeito natural de traduzir o **pretérito imperfeito** de hábito ("eu jogava", "nós morávamos").`,
    },
    {
      title: 'Negativa e pergunta',
      body: `Com **did**, o *used* perde o **-d**:

- *I **didn't use to** like vegetables.*
- ***Did** you **use to** live here?*

Também é comum: *I **never used to** like vegetables.*`,
    },
    {
      title: 'Cuidado com parecidos',
      body: `- **used to + verbo**: hábito passado — *I used to work at night.*
- **be used to + -ing**: estar acostumado — *I **am used to** work**ing** at night.*
- **use** (presente) = usar: *I use my phone a lot.*

Para hábito **atual**, use o Present Simple com *usually*: *I usually wake up early.* ("I use to wake up" ✘)`,
    },
  ],
  vocab: [
    { en: 'used to', pt: 'costumava' },
    { en: 'to be used to', pt: 'estar acostumado a' },
    { en: 'to get used to', pt: 'acostumar-se a' },
    { en: 'long hair', pt: 'cabelo comprido' },
    { en: 'countryside', pt: 'interior, campo' },
    { en: 'shy', pt: 'tímido' },
    { en: 'vegetables', pt: 'legumes, verduras' },
    { en: 'anymore', pt: 'não mais (em negativas)' },
    { en: 'nowadays', pt: 'hoje em dia' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I ___ to play football every weekend when I was a kid.', answers: ['used'] },
    { type: 'fill', prompt: "She didn't ___ to like coffee, but now she loves it.", answers: ['use'] },
    { type: 'fill', prompt: 'Did you ___ to live in the countryside?', answers: ['use'] },
    { type: 'fill', prompt: 'He used to ___ (be) very shy.', answers: ['be'] },
    { type: 'fill', prompt: "I don't smoke ___. (não mais)", answers: ['anymore', 'any more'] },
    { type: 'fill', prompt: "I'm used to ___ (work) at night.", answers: ['working'] },
    {
      type: 'choice',
      prompt: '"Eu morava em Recife."',
      options: ['I use to live in Recife.', 'I used to live in Recife.', 'I used to living in Recife.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ["I didn't used to like it.", "I didn't use to like it.", "I don't used to like it."],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Eu geralmente acordo cedo." (hábito atual)',
      options: ['I use to wake up early.', 'I used to wake up early.', 'I usually wake up early.'],
      answer: 2,
    },
    { type: 'reorder', words: ['We', 'used', 'to', 'go', 'to', 'the', 'beach', 'every', 'summer', '.'], translation: 'Nós íamos à praia todo verão.' },
    { type: 'fixError', prompt: 'My father used to working in a bank.', answers: ['My father used to work in a bank.'] },
    { type: 'fixError', prompt: 'Did you used to have a dog?', answers: ['Did you use to have a dog?'] },
    {
      type: 'transform',
      instruction: 'Reescreva com used to.',
      prompt: 'When I was a child, I played video games every day. I don\'t now.',
      answers: ['I used to play video games every day.', 'When I was a child, I used to play video games every day.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ela tinha cabelo comprido.',
      answers: ['She used to have long hair.', 'She had long hair.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu não gostava de legumes.',
      answers: ["I didn't use to like vegetables.", 'I did not use to like vegetables.', 'I never used to like vegetables.', "I didn't like vegetables."],
    },
    {
      type: 'writing',
      prompt: 'Compare sua vida de 10 anos atrás com a de hoje: 5 frases com used to / didn\'t use to e o presente.',
      model: "Ten years ago I used to live with my parents. I used to take the bus to school every day. I didn't use to drink coffee, but nowadays I drink three cups a day. I used to be very shy. Now I work from home and I don't play video games anymore.",
      checklist: ['used to + verbo base', "didn't use to (sem -d)", 'Present Simple para o hoje', 'anymore em frases negativas'],
    },
  ],
}
