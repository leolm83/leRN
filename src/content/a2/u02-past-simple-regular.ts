import type { UnitData } from '../types'

export const u02: UnitData = {
  slug: 'past-simple-regular',
  title: 'Past Simple — verbos regulares',
  summary: 'O passado de ações concluídas e a ortografia do -ed.',
  theory: [
    {
      title: 'Quando usar',
      body: `O **Past Simple** fala de ações **terminadas** em um momento **definido** do passado (ontem, em 2019, há dois dias).

Ele corresponde ao pretérito perfeito ("trabalhei") e muitas vezes ao imperfeito ("trabalhava") do português.

Boa notícia: a forma é **igual para todas as pessoas** — nada de -s na terceira pessoa.`,
      examples: [
        { en: 'I worked yesterday.', pt: 'Eu trabalhei ontem.' },
        { en: 'She lived in Lisbon in 2019.', pt: 'Ela morou em Lisboa em 2019.' },
        { en: 'They watched a movie last night.', pt: 'Eles assistiram a um filme ontem à noite.' },
      ],
    },
    {
      title: 'Ortografia do -ed',
      body: ``,
      table: {
        head: ['Regra', 'Exemplos'],
        rows: [
          ['maioria: + ed', 'work → worked, open → opened, visit → visited'],
          ['termina em -e: + d', 'live → lived, like → liked, close → closed'],
          ['consoante + y: y → ied', 'study → studied, cry → cried, try → tried'],
          ['vogal + y: + ed', 'play → played, stay → stayed, enjoy → enjoyed'],
          ['consoante-vogal-consoante com sílaba tônica no fim: dobra', 'stop → stopped, plan → planned, prefer → preferred'],
          ['não dobram: -w, -x, -y, ou tônica no início', 'fix → fixed, show → showed, visit → visited, listen → listened'],
        ],
      },
    },
  ],
  vocab: [
    { en: 'to visit', pt: 'visitar' },
    { en: 'to stop', pt: 'parar' },
    { en: 'to plan', pt: 'planejar' },
    { en: 'to try', pt: 'tentar, experimentar' },
    { en: 'to stay', pt: 'ficar, hospedar-se' },
    { en: 'to clean', pt: 'limpar' },
    { en: 'to fix', pt: 'consertar' },
    { en: 'to listen', pt: 'escutar' },
    { en: 'to arrive', pt: 'chegar' },
    { en: 'to travel', pt: 'viajar' },
    { en: 'grandparents', pt: 'avós' },
    { en: 'museum', pt: 'museu' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She ___ English for two years. (study)', answers: ['studied'] },
    { type: 'fill', prompt: 'We ___ the museum yesterday. (visit)', answers: ['visited'] },
    { type: 'fill', prompt: 'He ___ the car at the red light. (stop)', answers: ['stopped'] },
    { type: 'fill', prompt: 'I ___ in Lisbon in 2019. (live)', answers: ['lived'] },
    { type: 'fill', prompt: 'They ___ soccer last Sunday. (play)', answers: ['played'] },
    { type: 'fill', prompt: 'The baby ___ all night. (cry)', answers: ['cried'] },
    { type: 'fill', prompt: 'We ___ a trip to Chile. (plan)', answers: ['planned'] },
    { type: 'fill', prompt: 'She ___ her bike. (fix)', answers: ['fixed'] },
    { type: 'fill', prompt: 'We ___ at a small hotel. (stay)', answers: ['stayed'] },
    { type: 'choice', prompt: 'Passado de study:', options: ['studyed', 'studied', 'studed'], answer: 1 },
    {
      type: 'choice',
      prompt: '"Eu trabalhei ontem."',
      options: ['I work yesterday.', 'I worked yesterday.', 'I workd yesterday.'],
      answer: 1,
    },
    { type: 'fixError', prompt: 'She stoped the car.', answers: ['She stopped the car.'] },
    { type: 'fixError', prompt: 'He playd video games all day.', answers: ['He played video games all day.'] },
    { type: 'fixError', prompt: 'Yesterday I watch a movie.', answers: ['Yesterday I watched a movie.', 'I watched a movie yesterday.'] },
    { type: 'translate', from: 'pt', prompt: 'Eu morei em Curitiba por cinco anos.', answers: ['I lived in Curitiba for five years.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eles chegaram tarde.',
      answers: ['They arrived late.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para o passado, trocando "every day" por "yesterday".',
      prompt: 'I clean my room every day.',
      answers: ['I cleaned my room yesterday.'],
    },
    { type: 'reorder', words: ['We', 'visited', 'my', 'grandparents', 'last', 'weekend'], translation: 'Nós visitamos meus avós no fim de semana passado.' },
  ],
}
