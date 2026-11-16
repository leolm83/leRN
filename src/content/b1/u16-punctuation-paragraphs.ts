import type { UnitData } from '../types'

export const u16: UnitData = {
  slug: 'punctuation-paragraphs',
  title: 'Pontuação e parágrafos',
  summary: 'Vírgula, apóstrofo, maiúsculas e como montar um parágrafo com frase-tópico e conectores.',
  theory: [
    {
      title: 'Vírgula: as regras que mais importam',
      body: `- Depois de expressões de abertura: *However**,** …* / *In the morning**,** …* / *If it rains**,** …*
- Em listas: *I bought apples**,** bananas and grapes.* (a vírgula antes de *and* — "Oxford comma" — é opcional)
- Antes de **but / so** ligando duas frases completas.
- **Não** separe sujeito e verbo com vírgula: "My brother**,** lives in Rio" ✘
- **Não** ligue duas frases completas só com vírgula ("comma splice"): "It was late, I went home" ✘ → *It was late**, so** I went home.* ou *It was late**.** I went home.*`,
    },
    {
      title: 'Apóstrofo',
      body: `- **Contração**: *it's = it is / it has*, *don't, I'm*
- **Posse**: *my sister**'s** car*, *the students**'** books* (plural terminado em -s: só o apóstrofo)
- **its** (sem apóstrofo) = dele/dela para coisas: *The dog wagged **its** tail.*
- Plural **não** leva apóstrofo: *two coffees* ("two coffee's" ✘)`,
    },
    {
      title: 'Maiúsculas em inglês',
      body: `Diferente do português, levam maiúscula:

- dias e meses: *Monday, January*
- nacionalidades e línguas: *Brazilian, English*
- o pronome **I**
- títulos: *The Lord of the Rings*`,
    },
    {
      title: 'Um bom parágrafo',
      body: `- **1.** **Frase-tópico**: a ideia principal. *Living in a big city has many advantages.*
- **2.** **Desenvolvimento**: 2–4 frases com explicações e exemplos, ligadas por conectores: *First, … Also, … For example, …*
- **3.** **Conclusão**: retoma a ideia. *For these reasons, I prefer city life.*

Um parágrafo = **uma** ideia principal. Mudou de ideia? Novo parágrafo.`,
    },
  ],
  vocab: [
    { en: 'comma', pt: 'vírgula' },
    { en: 'full stop', pt: 'ponto final' },
    { en: 'apostrophe', pt: 'apóstrofo' },
    { en: 'capital letter', pt: 'letra maiúscula' },
    { en: 'paragraph', pt: 'parágrafo' },
    { en: 'however', pt: 'no entanto' },
    { en: 'for example', pt: 'por exemplo' },
    { en: 'first of all', pt: 'em primeiro lugar' },
    { en: 'in conclusion', pt: 'concluindo, em conclusão' },
    { en: 'advantage', pt: 'vantagem' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The dog wagged ___ tail. (its / it\'s)', answers: ['its'], strict: true },
    { type: 'fill', prompt: '___ raining again. (its / it\'s)', answers: ["It's"], strict: true },
    { type: 'fill', prompt: 'My meeting is on ___. (segunda-feira)', answers: ['Monday'], strict: true },
    { type: 'fill', prompt: 'She speaks ___ and Spanish. (inglês)', answers: ['English'], strict: true },
    {
      type: 'choice',
      prompt: 'Qual está pontuada corretamente?',
      options: ['It was late, I went home.', 'It was late, so I went home.', 'It was late so, I went home.'],
      answer: 1,
      explanation: 'Duas frases completas não se ligam só com vírgula: use so/but ou ponto final.',
    },
    {
      type: 'choice',
      prompt: 'Qual está correta?',
      options: ['My brother, lives in Rio.', 'My brother lives in Rio.', 'My, brother lives in Rio.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"os livros dos alunos" (vários alunos)',
      options: ["the student's books", "the students' books", "the students's books"],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual é a melhor frase-tópico para um parágrafo sobre exercícios físicos?',
      options: ['I went to the gym yesterday.', 'Regular exercise has many benefits for our health.', 'For example, running is good.'],
      answer: 1,
    },
    { type: 'fixError', prompt: 'However the weather was bad.', answers: ['However, the weather was bad.'], strict: true },
    { type: 'fixError', prompt: 'I bought two coffee\'s and a cake.', answers: ['I bought two coffees and a cake.'], strict: true },
    { type: 'fixError', prompt: 'we arrived on friday.', answers: ['We arrived on Friday.'], strict: true },
    { type: 'fixError', prompt: 'My friend is brazilian, she lives in london.', answers: ['My friend is Brazilian. She lives in London.', 'My friend is Brazilian, and she lives in London.', 'My friend is Brazilian and she lives in London.'], strict: true },
    { type: 'fixError', prompt: 'In the morning I usually read the news.', answers: ['In the morning, I usually read the news.'], strict: true },
    {
      type: 'transform',
      instruction: 'Corrija a "comma splice" usando but.',
      prompt: 'I studied a lot, I failed the test.',
      answers: ['I studied a lot, but I failed the test.'],
      strict: true,
    },
    {
      type: 'transform',
      instruction: 'Escreva com apóstrofo de posse: "o carro da minha irmã".',
      prompt: 'the car of my sister',
      answers: ["my sister's car"],
    },
    {
      type: 'writing',
      prompt: 'Escreva um parágrafo (6–7 frases) sobre as vantagens de aprender inglês: frase-tópico, desenvolvimento com conectores e conclusão.',
      model: "Learning English has many advantages. First of all, it helps you find better jobs, because many companies need people who can communicate with clients abroad. Also, most information on the internet is in English. For example, many programming tutorials are only available in English. However, learning a language takes time and effort. In conclusion, studying English is one of the best investments you can make.",
      checklist: ['Frase-tópico clara', 'Conectores (First of all, Also, For example, However)', 'Vírgula depois dos conectores de abertura', 'Sem comma splice', 'Frase de conclusão'],
    },
  ],
}
