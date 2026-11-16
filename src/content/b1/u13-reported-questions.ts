import type { UnitData } from '../types'

export const u13: UnitData = {
  slug: 'reported-questions-commands',
  title: 'Discurso indireto: perguntas e pedidos',
  summary: 'asked if/whether, asked where…, told/asked someone to do something.',
  theory: [
    {
      title: 'Perguntas indiretas: ordem de afirmação',
      body: `Na pergunta indireta **não há inversão nem do/did**, e **não há ponto de interrogação**:

- *"Where **do you live**?"* → *She asked me where **I lived**.*
- *"What time **is it**?"* → *He asked what time **it was**.*

Os tempos recuam como nas afirmações.`,
    },
    {
      title: 'Perguntas de sim/não: if / whether',
      body: `Sem palavra interrogativa, use **if** ou **whether**:

- *"**Are** you hungry?"* → *He asked **if** I was hungry.*
- *"**Did** you see it?"* → *She asked **whether** I had seen it.*`,
    },
    {
      title: 'Ordens e pedidos: to + verbo',
      body: `- Ordem: **tell + pessoa + to + verbo**: *"Sit down."* → *He **told me to sit** down.*
- Pedido: **ask + pessoa + to + verbo**: *"Can you help me?"* → *She **asked me to help** her.*
- Negativa: **not to**: *"Don't touch it."* → *She told me **not to touch** it.*`,
    },
    {
      title: 'Perguntas indiretas educadas',
      body: `A mesma ordem aparece em perguntas educadas, muito usadas em e-mails:

- *Could you tell me **where the station is**?* ("where is the station" ✘)
- *Do you know **what time the shop opens**?*`,
    },
  ],
  vocab: [
    { en: 'to ask', pt: 'perguntar, pedir' },
    { en: 'whether', pt: 'se (em perguntas indiretas)' },
    { en: 'to wonder', pt: 'perguntar-se' },
    { en: 'to order', pt: 'ordenar, pedir' },
    { en: 'to warn', pt: 'avisar, alertar' },
    { en: 'to touch', pt: 'tocar' },
    { en: 'to sit down', pt: 'sentar-se' },
    { en: 'quietly', pt: 'em silêncio, baixinho' },
  ],
  exercises: [
    { type: 'fill', prompt: '"Are you hungry?" → He asked ___ I was hungry.', answers: ['if', 'whether'] },
    { type: 'fill', prompt: '"Where do you live?" → She asked me where I ___.', answers: ['lived'] },
    { type: 'fill', prompt: '"Sit down." → The teacher told us ___ sit down.', answers: ['to'] },
    { type: 'fill', prompt: '"Don\'t touch it." → She told me ___ to touch it.', answers: ['not'] },
    { type: 'fill', prompt: '"Can you help me?" → He ___ me to help him.', answers: ['asked'] },
    { type: 'fill', prompt: 'Could you tell me where the bank ___?', answers: ['is'] },
    {
      type: 'choice',
      prompt: '"What time is it?" → He asked…',
      options: ['what time was it.', 'what time it was.', 'what time is it?'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['Do you know where does she live?', 'Do you know where she lives?', 'Do you know where lives she?'],
      answer: 1,
    },
    { type: 'reorder', words: ['She', 'asked', 'me', 'what', 'my', 'name', 'was', '.'], translation: 'Ela me perguntou qual era o meu nome.' },
    { type: 'reorder', words: ['He', 'told', 'us', 'not', 'to', 'be', 'late', '.'], translation: 'Ele nos disse para não nos atrasarmos.' },
    { type: 'fixError', prompt: 'She asked me where did I work.', answers: ['She asked me where I worked.'] },
    { type: 'fixError', prompt: 'He told me to not open the door.', answers: ['He told me not to open the door.'] },
    {
      type: 'transform',
      instruction: 'Passe para o discurso indireto começando com "She asked me".',
      prompt: '"Have you finished the report?"',
      answers: ['She asked me if I had finished the report.', 'She asked me whether I had finished the report.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para o discurso indireto começando com "My mother told me".',
      prompt: '"Clean your room."',
      answers: ['My mother told me to clean my room.'],
    },
    {
      type: 'transform',
      instruction: 'Torne a pergunta educada começando com "Could you tell me".',
      prompt: 'When does the museum open?',
      answers: ['Could you tell me when the museum opens?'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ele me perguntou se eu gostava de café.',
      answers: ['He asked me if I liked coffee.', 'He asked me whether I liked coffee.'],
    },
    {
      type: 'writing',
      prompt: 'Relate uma entrevista de emprego (real ou imaginária): 5 frases com o que perguntaram e pediram.',
      model: "The interviewer asked me why I wanted the job. She asked if I had any experience with clients. Then she asked me where I saw myself in five years. She asked me to describe a difficult situation at work. At the end, she told me to wait for an email.",
      checklist: ['Ordem de afirmação (sem do/did)', 'if/whether para sim/não', 'told/asked + pessoa + to + verbo', 'Sem ponto de interrogação'],
    },
  ],
}
