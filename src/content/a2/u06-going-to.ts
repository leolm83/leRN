import type { UnitData } from '../types'

export const u06: UnitData = {
  slug: 'future-going-to',
  title: 'Futuro com going to',
  summary: 'Planos e intenções, previsões com evidência e o Present Continuous para compromissos marcados.',
  theory: [
    {
      title: 'be going to + verbo',
      body: `Forma: **am / is / are + going to + verbo na forma básica**.

- *I'm **going to visit** my parents next week.*
- *She **isn't going to buy** that car.*
- ***Are** you **going to watch** the game?*`,
    },
    {
      title: 'Quando usar',
      body: `- **Planos e intenções** já decididos antes de falar: *We're going to travel in July.*
- **Previsões com evidência** (você está vendo um sinal): *Look at those clouds! It's going to rain.*`,
    },
    {
      title: 'Present Continuous para compromissos',
      body: `Para algo **combinado**, com data/hora/lugar definidos, o inglês usa muito o **Present Continuous**:

- *I'm **meeting** Ana tomorrow at five.* — Vou encontrar a Ana amanhã às cinco.
- *We're **flying** to Lisbon on Friday.*

Expressões de futuro: *tomorrow*, *tonight*, *next week*, *this weekend*, *in two days* (daqui a dois dias).`,
    },
  ],
  vocab: [
    { en: 'tomorrow', pt: 'amanhã' },
    { en: 'tonight', pt: 'hoje à noite' },
    { en: 'next week', pt: 'semana que vem' },
    { en: 'cloud', pt: 'nuvem' },
    { en: 'to sell', pt: 'vender' },
    { en: 'to go out', pt: 'sair (para se divertir)' },
    { en: 'to fly', pt: 'voar, ir de avião' },
    { en: 'to fall', pt: 'cair' },
    { en: 'medicine', pt: 'medicina; remédio' },
    { en: 'dress', pt: 'vestido' },
    { en: 'game', pt: 'jogo, partida' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I ___ visit my grandmother next weekend.', answers: ['am going to'] },
    { type: 'fill', prompt: 'They ___ buy a new house.', answers: ['are going to'] },
    { type: 'fill', prompt: 'Look at the sky! It ___ rain.', answers: ['is going to'] },
    { type: 'fill', prompt: 'She ___ study medicine. (negativa)', answers: ["isn't going to", 'is not going to'] },
    { type: 'fill', prompt: '___ you going to watch the game?', answers: ['Are'] },
    { type: 'choice', prompt: 'Look! That glass ___ fall!', options: ['is going to', 'goes to', 'is go to'], answer: 0 },
    {
      type: 'choice',
      prompt: '"Vou viajar amanhã."',
      options: ['I go to travel tomorrow.', "I'm going to travel tomorrow.", "I'm going travel tomorrow."],
      answer: 1,
    },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'He is going to sell his car.', answers: ['Is he going to sell his car?'] },
    {
      type: 'transform',
      instruction: 'Passe para o futuro com going to, trocando "every Saturday" por "next Saturday".',
      prompt: 'I clean my room every Saturday.',
      answers: ['I am going to clean my room next Saturday.'],
    },
    { type: 'fixError', prompt: 'We going to travel in July.', answers: ['We are going to travel in July.'] },
    { type: 'fixError', prompt: 'She is going to buys a dress.', answers: ['She is going to buy a dress.'] },
    { type: 'fixError', prompt: "I'm going to visit my parents last week.", answers: ["I'm going to visit my parents next week."] },
    { type: 'translate', from: 'pt', prompt: 'O que você vai fazer neste fim de semana?', answers: ['What are you going to do this weekend?'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Nós não vamos sair hoje à noite.',
      answers: ['We are not going to go out tonight.', 'We are not going out tonight.'],
    },
    {
      type: 'reorder',
      words: ['I', 'am', 'meeting', 'Ana', 'at', 'five', 'tomorrow'],
      alternatives: ['I am meeting Ana tomorrow at five'],
      translation: 'Vou encontrar a Ana às cinco amanhã.',
    },
    {
      type: 'writing',
      prompt: 'Escreva 4 frases sobre seus planos para o próximo mês (going to) e 1 compromisso já marcado (Present Continuous).',
      model: "Next month I'm going to start a new course. I'm going to study English every day. My sister is going to visit me. We aren't going to travel. I'm seeing the dentist on the 10th.",
      checklist: ['be + going to + verbo básico', 'Negativa com not depois do be', 'Expressões de futuro (next…, this…)'],
    },
  ],
}
