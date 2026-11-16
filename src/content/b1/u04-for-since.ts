import type { UnitData } from '../types'

export const u04: UnitData = {
  slug: 'for-since',
  title: 'for, since e How long…?',
  summary: 'Ações que começaram no passado e continuam: "moro aqui há 5 anos" = I have lived here for 5 years.',
  theory: [
    {
      title: 'O "há…" do português',
      body: `Para algo que **começou no passado e continua agora**, o inglês usa o **Present Perfect** (nunca o presente simples):

- *I **have lived** here **for** five years.* — Moro aqui há cinco anos.
- *She **has worked** here **since** 2019.* — Ela trabalha aqui desde 2019.

"I live here for five years" ✘ é um erro muito comum de brasileiros.`,
    },
    {
      title: 'for × since',
      body: `- **for** + **período** (quanto tempo): *for two hours, for ten years, for a long time, for ages*
- **since** + **ponto de partida** (desde quando): *since Monday, since 2010, since I was a child, since 9 o'clock*`,
      table: {
        head: ['for', 'since'],
        rows: [
          ['for three days', 'since Monday'],
          ['for a month', 'since January'],
          ['for twenty years', 'since 2005'],
          ['for a long time', 'since I was a kid'],
        ],
      },
    },
    {
      title: 'How long…?',
      body: `- ***How long have** you **known** her?* — Há quanto tempo você a conhece?
- ***How long has** he **been** a doctor?*

Verbos de estado (*know, be, have, like*) sempre usam essa forma simples.`,
    },
  ],
  vocab: [
    { en: 'for', pt: 'por, há (período)' },
    { en: 'since', pt: 'desde' },
    { en: 'how long', pt: 'há quanto tempo, quanto tempo' },
    { en: 'for ages', pt: 'há séculos, faz tempo' },
    { en: 'to know', pt: 'conhecer, saber' },
    { en: 'married', pt: 'casado' },
    { en: 'neighbour', pt: 'vizinho' },
    { en: 'company', pt: 'empresa' },
    { en: 'childhood', pt: 'infância' },
  ],
  exercises: [
    { type: 'fill', prompt: "I've lived here ___ ten years.", answers: ['for'] },
    { type: 'fill', prompt: 'She has worked at this company ___ 2018.', answers: ['since'] },
    { type: 'fill', prompt: "We've been married ___ June.", answers: ['since'] },
    { type: 'fill', prompt: "I haven't seen him ___ ages.", answers: ['for'] },
    { type: 'fill', prompt: '___ long have you known your best friend?', answers: ['How'] },
    { type: 'fill', prompt: 'They ___ (know) each other since childhood.', answers: ['have known'] },
    { type: 'choice', prompt: '"Moro aqui há três anos."', options: ['I live here for three years.', 'I have lived here for three years.', 'I lived here since three years.'], answer: 1 },
    { type: 'choice', prompt: '___ I was a child', options: ['for', 'since'], answer: 1 },
    { type: 'choice', prompt: '___ two weeks', options: ['for', 'since'], answer: 0 },
    { type: 'reorder', words: ['How', 'long', 'have', 'you', 'been', 'a', 'teacher', '?'], translation: 'Há quanto tempo você é professor?' },
    { type: 'reorder', words: ['He', 'has', 'had', 'that', 'car', 'since', '2015', '.'], translation: 'Ele tem aquele carro desde 2015.' },
    { type: 'fixError', prompt: 'I know her since 2010.', answers: ['I have known her since 2010.', "I've known her since 2010."] },
    { type: 'fixError', prompt: 'She has been here since two hours.', answers: ['She has been here for two hours.', "She's been here for two hours."] },
    {
      type: 'transform',
      instruction: 'Pergunte "há quanto tempo" sobre a frase.',
      prompt: 'They have lived in Recife for six years.',
      answers: ['How long have they lived in Recife?'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ele é meu vizinho há dez anos.',
      answers: ['He has been my neighbour for ten years.', "He's been my neighbour for ten years.", 'He has been my neighbor for ten years.', "He's been my neighbor for ten years."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu estudo inglês desde janeiro.',
      answers: ['I have studied English since January.', "I've studied English since January.", 'I have been studying English since January.', "I've been studying English since January."],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases sobre você usando for e since (onde mora, trabalho/estudo, amigos, hobbies).',
      model: "I have lived in Belo Horizonte since 2015. I have worked as a developer for six years. I have known my best friend since school. I have played the guitar for ten years. I have studied English since January.",
      checklist: ['Present Perfect (não presente simples)', 'for + período', 'since + ponto de partida'],
    },
  ],
}
