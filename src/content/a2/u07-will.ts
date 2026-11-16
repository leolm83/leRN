import type { UnitData } from '../types'

export const u07: UnitData = {
  slug: 'future-will',
  title: 'Futuro com will (e will × going to)',
  summary: 'Decisões na hora, promessas, ofertas e previsões com will — e quando preferir going to.',
  theory: [
    {
      title: 'Forma',
      body: `**will + verbo na forma básica** — igual para todas as pessoas, sem -s e sem to.

- contração: **'ll** → *I'll*, *she'll*, *they'll*
- negativa: **will not** = **won't**
- pergunta: ***Will** you help me?*`,
    },
    {
      title: 'Quando usar will',
      body: `- **decisão tomada na hora**: *The phone is ringing. — I'**ll** answer it!*
- **promessas**: *I **will** call you later. I promise.*
- **ofertas e pedidos**: *I'**ll** help you with that box. / **Will** you open the window, please?*
- **previsões e opiniões** (sem evidência visível), muito com *I think*, *probably*, *maybe*: *I think it **will** be hot tomorrow.*
- **fatos futuros**: *I'**ll** be 30 next year.*`,
    },
    {
      title: 'will × going to',
      body: ``,
      table: {
        head: ['will', 'going to'],
        rows: [
          ['decidi agora: *I\'ll buy the tickets.*', 'já tinha decidido: *I\'m going to buy the tickets tonight.*'],
          ['opinião: *I think it will rain.*', 'evidência: *Look at the clouds! It\'s going to rain.*'],
          ['promessa / oferta', 'plano / intenção'],
        ],
      },
    },
  ],
  vocab: [
    { en: 'to promise', pt: 'prometer' },
    { en: 'to answer', pt: 'responder, atender' },
    { en: 'to win', pt: 'ganhar, vencer' },
    { en: 'to pass an exam', pt: 'passar numa prova' },
    { en: 'to worry', pt: 'preocupar-se' },
    { en: 'later', pt: 'mais tarde' },
    { en: 'probably', pt: 'provavelmente' },
    { en: 'maybe', pt: 'talvez' },
    { en: 'on time', pt: 'na hora, pontualmente' },
    { en: 'ticket', pt: 'ingresso, passagem' },
    { en: 'show', pt: 'espetáculo, show' },
  ],
  exercises: [
    { type: 'fill', prompt: "You're hungry? I ___ make you a sandwich.", answers: ['will'] },
    { type: 'fill', prompt: 'I think she ___ pass the exam.', answers: ['will'] },
    { type: 'fill', prompt: "Don't worry, I ___ tell anyone. (negativa)", answers: ["won't", 'will not'] },
    { type: 'fill', prompt: '___ you help me with this box?', answers: ['Will'] },
    { type: 'fill', prompt: 'Next year I ___ be 30.', answers: ['will'] },
    {
      type: 'choice',
      prompt: 'The phone is ringing. — I ___ answer it!',
      options: ["'m going to", "'ll"],
      answer: 1,
      explanation: 'Decisão tomada na hora: will.',
    },
    {
      type: 'choice',
      prompt: 'We bought the tickets last week. We ___ see the show on Friday.',
      options: ['will', 'are going to'],
      answer: 1,
      explanation: 'Plano decidido antes: going to.',
    },
    { type: 'choice', prompt: 'Qual está correto?', options: ['She will to call.', 'She will call.', 'She wills call.'], answer: 1 },
    { type: 'fixError', prompt: 'He will comes tomorrow.', answers: ['He will come tomorrow.'] },
    { type: 'fixError', prompt: 'I will to study tonight.', answers: ['I will study tonight.'] },
    { type: 'fixError', prompt: 'It not will rain.', answers: ['It will not rain.'] },
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'They will win the game.', answers: ['They will not win the game.'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'She will be at the meeting.', answers: ['Will she be at the meeting?'] },
    { type: 'translate', from: 'pt', prompt: 'Eu te ligo mais tarde.', answers: ['I will call you later.'] },
    { type: 'translate', from: 'pt', prompt: 'Acho que vai fazer calor amanhã.', answers: ['I think it will be hot tomorrow.'] },
    { type: 'reorder', words: ['I', 'promise', 'I', 'will', 'be', 'on', 'time'], translation: 'Prometo que vou chegar na hora.' },
    {
      type: 'writing',
      prompt: 'Escreva 3 previsões sobre o seu futuro (I think… will) e 2 promessas para você mesmo (I will / I won\'t).',
      model: "I think I will speak English well in two years. I think I will travel to Canada. Maybe I will change jobs. I will study every day. I won't give up.",
      checklist: ['will + verbo básico (sem to, sem -s)', "won't na negativa", 'I think / maybe para opiniões'],
    },
  ],
}
