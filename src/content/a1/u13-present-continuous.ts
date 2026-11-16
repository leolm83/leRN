import type { UnitData } from '../types'

export const u13: UnitData = {
  slug: 'present-continuous',
  title: 'Present Continuous',
  summary: 'be + verbo-ing: o que está acontecendo agora, a ortografia do -ing e a diferença para o Present Simple.',
  theory: [
    {
      title: 'Forma: am / is / are + verbo-ing',
      body: `O **Present Continuous** é formado pelo verbo **to be** + verbo com **-ing**. Negativas e perguntas seguem as regras do to be (unidade 4).`,
      table: {
        head: ['', 'Exemplo'],
        rows: [
          ['Afirmativa', 'She **is reading**.'],
          ['Negativa', "She **isn't reading**."],
          ['Pergunta', '**Is** she **reading**?'],
          ['Wh-', 'What **are** you **doing**?'],
        ],
      },
    },
    {
      title: 'Quando usar',
      body: `- ação acontecendo **agora**: *I am studying now.*
- situação **temporária**: *He is living with his parents this month.*
- ação em andamento "nestes dias": *She is learning Spanish this year.*

Palavras comuns: *now*, *right now*, *at the moment*, *today*, *this week*, *Look!*, *Listen!*`,
    },
    {
      title: 'Ortografia do -ing',
      body: ``,
      table: {
        head: ['Regra', 'Exemplos'],
        rows: [
          ['maioria: + ing', 'read → reading, play → playing'],
          ['-e final cai', 'make → making, write → writing, come → coming'],
          ['exceções do -e', 'be → being, see → seeing'],
          ['consoante-vogal-consoante (sílaba tônica): dobra', 'run → running, sit → sitting, swim → swimming, stop → stopping'],
          ['-ie → -ying', 'lie → lying, die → dying'],
          ['-w, -x, -y não dobram', 'fix → fixing, snow → snowing'],
        ],
      },
    },
    {
      title: 'Simple × Continuous e os stative verbs',
      body: `- **Simple**: hábitos e fatos — *She usually **drinks** tea.*
- **Continuous**: agora / temporário — *Today she **is drinking** coffee.*

Alguns verbos de **estado** (não de ação) quase nunca vão para o -ing, mesmo falando de agora: **like, love, hate, want, need, know, understand, believe, remember, own**.

*I want a sandwich now.* ✔ — "I am wanting" ✘`,
    },
  ],
  vocab: [
    { en: 'now', pt: 'agora' },
    { en: 'at the moment', pt: 'no momento' },
    { en: 'to read', pt: 'ler' },
    { en: 'to write', pt: 'escrever' },
    { en: 'to run', pt: 'correr' },
    { en: 'to swim', pt: 'nadar' },
    { en: 'to sit', pt: 'sentar' },
    { en: 'to lie (down)', pt: 'deitar' },
    { en: 'to rain', pt: 'chover' },
    { en: 'to laugh', pt: 'rir' },
    { en: 'to sleep', pt: 'dormir' },
    { en: 'to make', pt: 'fazer, fabricar' },
    { en: 'to do', pt: 'fazer' },
    { en: 'sofa', pt: 'sofá' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She ___ a book now. (read)', answers: ['is reading'] },
    { type: 'fill', prompt: 'They ___ at the moment. (swim)', answers: ['are swimming'] },
    { type: 'fill', prompt: 'I ___ an email. (write)', answers: ['am writing'] },
    { type: 'fill', prompt: 'Look! It ___. (rain)', answers: ['is raining'] },
    { type: 'fill', prompt: 'He is ___ a cake. (make)', answers: ['making'] },
    { type: 'fill', prompt: 'The children are ___ in the park. (run)', answers: ['running'] },
    { type: 'fill', prompt: 'He is ___ on the sofa. (lie)', answers: ['lying'] },
    {
      type: 'choice',
      prompt: '"Eu entendo agora."',
      options: ['I am understanding now.', 'I understand now.'],
      answer: 1,
      explanation: 'Understand é um stative verb.',
    },
    { type: 'choice', prompt: 'Listen! The baby ___.', options: ['cries', 'is crying'], answer: 1 },
    {
      type: 'choice',
      prompt: 'She usually ___ tea, but today she ___ coffee.',
      options: ['drinks / is drinking', 'is drinking / drinks', 'drink / drinking'],
      answer: 0,
    },
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'He is sleeping.', answers: ['He is not sleeping.', "He's not sleeping."] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'You are working today.', answers: ['Are you working today?'] },
    { type: 'fixError', prompt: 'I am want a sandwich.', answers: ['I want a sandwich.'] },
    { type: 'fixError', prompt: 'She is studing now.', answers: ['She is studying now.'], explanation: 'study + ing = studying (o y fica).' },
    { type: 'fixError', prompt: 'They are siting in the garden.', answers: ['They are sitting in the garden.'] },
    { type: 'translate', from: 'pt', prompt: 'O que você está fazendo?', answers: ['What are you doing?'] },
    { type: 'translate', from: 'pt', prompt: 'Nós estamos estudando inglês.', answers: ['We are studying English.'] },
    { type: 'reorder', words: ['Why', 'are', 'you', 'laughing', '?'], translation: 'Por que você está rindo?' },
  ],
}
