import type { UnitData } from '../types'

export const u05: UnitData = {
  slug: 'past-perfect',
  title: 'Past Perfect',
  summary: 'had + particípio: o "passado do passado" — o que já tinha acontecido antes de outro fato passado.',
  theory: [
    {
      title: 'Forma e uso',
      body: `**had + particípio passado** (igual para todas as pessoas).

Usamos quando contamos uma história no passado e precisamos voltar **mais para trás**:

- *When I arrived at the station, the train **had left**.* — Quando cheguei, o trem **já tinha saído**.
- *She was nervous because she **had never flown** before.*

Negativa: *hadn't* / Pergunta: ***Had** you **met** him before?*
Contração: *I'd, she'd, they'd* — o **'d** aqui é **had** (antes de particípio), não *would*.`,
    },
    {
      title: 'Past Simple × Past Perfect',
      body: `- *When I arrived, the train **left**.* → cheguei e **depois** o trem saiu (eu vi sair).
- *When I arrived, the train **had left**.* → o trem saiu **antes** de eu chegar.

Com **before** e **after** a ordem já fica clara, então o Past Perfect é opcional:
*After she (had) finished, she went home.*`,
    },
    {
      title: 'by the time, already, never…before',
      body: `- ***By the time** we got there, the film **had** already **started**.* — Quando chegamos, o filme já tinha começado.
- *I **had never seen** snow **before** that trip.*`,
    },
  ],
  vocab: [
    { en: 'by the time', pt: 'quando, até o momento em que' },
    { en: 'before', pt: 'antes' },
    { en: 'after', pt: 'depois de' },
    { en: 'to realise', pt: 'perceber, dar-se conta' },
    { en: 'to forget', pt: 'esquecer' },
    { en: 'wallet', pt: 'carteira' },
    { en: 'snow', pt: 'neve' },
    { en: 'station', pt: 'estação' },
    { en: 'nervous', pt: 'nervoso' },
  ],
  exercises: [
    { type: 'fill', prompt: 'When we arrived, the film ___ already started.', answers: ['had'] },
    { type: 'fill', prompt: 'I realised I had ___ (forget) my wallet.', answers: ['forgotten'] },
    { type: 'fill', prompt: 'She was nervous because she had never ___ (fly) before.', answers: ['flown'] },
    { type: 'fill', prompt: 'By the time I got home, everyone ___ (go) to bed.', answers: ['had gone'] },
    { type: 'fill', prompt: "I ___ (not / see) snow before that trip.", answers: ["hadn't seen", 'had not seen'] },
    { type: 'fill', prompt: '___ you met him before the party?', answers: ['Had'] },
    {
      type: 'choice',
      prompt: '"Quando cheguei à estação, o trem já tinha saído."',
      options: ['When I arrived at the station, the train left.', 'When I arrived at the station, the train had left.', 'When I had arrived at the station, the train has left.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"She\'d finished." — o \'d significa…',
      options: ['would', 'had', 'did'],
      answer: 1,
      explanation: "Antes de particípio (finished), 'd = had.",
    },
    { type: 'reorder', words: ['The', 'shop', 'had', 'closed', 'when', 'we', 'arrived', '.'], translation: 'A loja tinha fechado quando chegamos.' },
    { type: 'reorder', words: ['I', 'had', 'never', 'eaten', 'sushi', 'before', '.'], translation: 'Eu nunca tinha comido sushi antes.' },
    { type: 'fixError', prompt: 'When I got there, she has already left.', answers: ['When I got there, she had already left.', "When I got there, she'd already left."] },
    { type: 'fixError', prompt: 'He had went home before the rain started.', answers: ['He had gone home before the rain started.', 'He went home before the rain started.'] },
    {
      type: 'transform',
      instruction: 'Junte as frases com "when", usando Past Perfect para a ação mais antiga.',
      prompt: 'The concert started. Then we arrived.',
      answers: ['When we arrived, the concert had started.', 'When we arrived, the concert had already started.', 'The concert had started when we arrived.', 'The concert had already started when we arrived.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu tinha esquecido o nome dele.',
      answers: ['I had forgotten his name.', "I'd forgotten his name."],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: 'By the time the police arrived, the thief had escaped.',
      answers: ['Quando a polícia chegou, o ladrão já tinha fugido.', 'Quando a polícia chegou, o ladrão tinha fugido.', 'Quando a polícia chegou, o ladrão já tinha escapado.', 'Quando a polícia chegou, o ladrão tinha escapado.'],
    },
    {
      type: 'writing',
      prompt: 'Conte (5–6 frases) um dia em que algo deu errado porque algo já tinha acontecido antes. Use o Past Simple para a história e o Past Perfect para voltar no tempo.',
      model: "Last Friday was a terrible day. When I woke up, I realised I had forgotten to charge my phone. I ran to the bus stop, but the bus had already left. When I got to the office, the meeting had started. My boss was angry because I had missed the meeting the week before too.",
      checklist: ['had + particípio para a ação mais antiga', 'Past Simple para a sequência principal', 'by the time / when / already'],
    },
  ],
}
