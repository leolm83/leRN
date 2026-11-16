import type { UnitData } from '../types'

export const u01: UnitData = {
  slug: 'present-perfect',
  title: 'Present Perfect: forma e experiências',
  summary: 'have/has + particípio passado; ever, never e experiências de vida; been × gone.',
  theory: [
    {
      title: 'Forma',
      body: `**have / has + particípio passado** (a 3ª coluna dos irregulares; -ed nos regulares).

- *I **have visited** London.* — Eu já visitei Londres.
- *She **has seen** that film.*
- Negativa: *I **haven't** finished.* / *He **hasn't** called.*
- Pergunta: ***Have** you **eaten**? **Has** she **arrived**?*

Contrações: *I've, you've, we've, they've, he's, she's, it's* (aqui o **'s = has**, não *is*).`,
      table: {
        head: ['Base', 'Past Simple', 'Particípio'],
        rows: [
          ['be', 'was/were', 'been'],
          ['do', 'did', 'done'],
          ['go', 'went', 'gone'],
          ['see', 'saw', 'seen'],
          ['eat', 'ate', 'eaten'],
          ['write', 'wrote', 'written'],
          ['take', 'took', 'taken'],
          ['speak', 'spoke', 'spoken'],
          ['break', 'broke', 'broken'],
          ['fly', 'flew', 'flown'],
          ['meet', 'met', 'met'],
          ['buy', 'bought', 'bought'],
        ],
      },
    },
    {
      title: 'Experiências: ever e never',
      body: `O Present Perfect fala de experiências **na vida até agora**, sem dizer **quando**.

- ***Have** you **ever** been to Japan?* — Você já foi ao Japão (alguma vez)?
- *I have **never** eaten sushi.* — Nunca comi sushi.
- *She has **never** flown.*

**ever** aparece em perguntas; **never** já é negativo (não use *haven't never* ✘).
Se você disser **quando** (*yesterday, in 2019*), use o Past Simple — veja a unidade 3.`,
    },
    {
      title: 'been × gone',
      body: `- **has been to** Paris = foi e **já voltou** (experiência).
- **has gone to** Paris = foi e **ainda está lá**.

*Where's Ana? — She **has gone** to the bank.* (Ela está no banco agora.)
*I **have been** to Paris twice.* (Já estive lá duas vezes.)`,
    },
  ],
  vocab: [
    { en: 'ever', pt: 'alguma vez, já (em perguntas)' },
    { en: 'never', pt: 'nunca' },
    { en: 'twice', pt: 'duas vezes' },
    { en: 'three times', pt: 'três vezes' },
    { en: 'abroad', pt: 'no exterior' },
    { en: 'experience', pt: 'experiência' },
    { en: 'to try', pt: 'experimentar, tentar' },
    { en: 'to climb', pt: 'escalar, subir' },
    { en: 'mountain', pt: 'montanha' },
    { en: 'to win', pt: 'ganhar, vencer' },
    { en: 'prize', pt: 'prêmio' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I have ___ (see) that movie three times.', answers: ['seen'] },
    { type: 'fill', prompt: 'She ___ visited Japan twice.', answers: ['has'] },
    { type: 'fill', prompt: 'Have you ___ eaten Indian food?', answers: ['ever'] },
    { type: 'fill', prompt: 'We have never ___ (fly) in a helicopter.', answers: ['flown'] },
    { type: 'fill', prompt: 'He has ___ (write) two books.', answers: ['written'] },
    { type: 'fill', prompt: "They ___ finished the project. (ainda não terminaram, negativa)", answers: ["haven't", 'have not'] },
    { type: 'fill', prompt: "Where's Paulo? — He has ___ to the supermarket. (está lá agora)", answers: ['gone'] },
    { type: 'fill', prompt: 'I have ___ to Paris twice. (fui e voltei)', answers: ['been'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['I have never ate sushi.', 'I have never eaten sushi.', "I haven't never eaten sushi."],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"She\'s won a prize." — o \'s significa…',
      options: ['is', 'has', 'possessivo'],
      answer: 1,
      explanation: 'Depois de \'s vem um particípio (won), então é has: She has won a prize.',
    },
    { type: 'reorder', words: ['Have', 'you', 'ever', 'climbed', 'a', 'mountain', '?'], translation: 'Você já escalou uma montanha?' },
    { type: 'reorder', words: ['She', 'has', 'never', 'been', 'abroad', '.'], translation: 'Ela nunca foi ao exterior.' },
    { type: 'fixError', prompt: 'He have broken his phone.', answers: ['He has broken his phone.', "He's broken his phone."] },
    { type: 'fixError', prompt: 'I have spoke to the manager.', answers: ['I have spoken to the manager.', "I've spoken to the manager."] },
    {
      type: 'transform',
      instruction: 'Passe para pergunta.',
      prompt: 'She has met your parents.',
      answers: ['Has she met your parents?'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu nunca estive no Brasil.',
      answers: ['I have never been to Brazil.', "I've never been to Brazil."],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: 'Have you ever tried Japanese food?',
      answers: ['Você já experimentou comida japonesa?', 'Você alguma vez já experimentou comida japonesa?', 'Você já provou comida japonesa?'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases sobre experiências da sua vida: 3 coisas que você já fez e 2 que nunca fez.',
      model: "I have been to Argentina. I have eaten sushi many times. I have read all the Harry Potter books. I have never flown in a helicopter. I have never won a prize.",
      checklist: ['have/has + particípio', 'never sem outra negativa', 'Sem dizer quando (sem yesterday, in 2020…)', 'been to para lugares visitados'],
    },
  ],
}
