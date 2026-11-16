import type { UnitData } from '../types'

export const u02: UnitData = {
  slug: 'just-already-yet',
  title: 'Present Perfect: just, already, yet',
  summary: 'Ações recentes e resultados no presente; a posição de just, already e yet.',
  theory: [
    {
      title: 'Resultado no presente',
      body: `O Present Perfect liga o passado ao **agora**: o importante é o resultado.

- *I **have lost** my keys.* → agora estou sem as chaves.
- *She **has cut** her hair.* → o cabelo está curto agora.`,
    },
    {
      title: 'just, already, yet',
      body: `- **just** = acabou de (muito recente). Fica **entre have e o particípio**: *I've **just** arrived.*
- **already** = já (antes do esperado). Também **entre have e o particípio**: *She has **already** paid.*
- **yet** = ainda (negativa) / já (pergunta). Fica **no fim da frase**: *I haven't finished **yet**.* (Ainda não terminei.) / *Have you finished **yet**?* (Você já terminou?)

Atenção: em perguntas, "já" é normalmente **yet**, não *already*.`,
    },
    {
      title: 'still (ainda) com a negativa',
      body: `**still** antes de *haven't/hasn't* dá ênfase de impaciência:

*He **still** hasn't called me!* — Ele ainda não me ligou!`,
    },
  ],
  vocab: [
    { en: 'just', pt: 'acabou de, agora mesmo' },
    { en: 'already', pt: 'já' },
    { en: 'yet', pt: 'ainda (neg.) / já (perg.)' },
    { en: 'still', pt: 'ainda' },
    { en: 'to lose', pt: 'perder' },
    { en: 'to pay', pt: 'pagar' },
    { en: 'to reply', pt: 'responder' },
    { en: 'to tidy', pt: 'arrumar' },
    { en: 'bill', pt: 'conta (a pagar)' },
    { en: 'to arrive', pt: 'chegar' },
  ],
  exercises: [
    { type: 'fill', prompt: "I've ___ arrived. I'm still taking my coat off. (acabei de)", answers: ['just'] },
    { type: 'fill', prompt: "Have you done your homework ___?", answers: ['yet'] },
    { type: 'fill', prompt: "She has ___ paid the bill, so we can leave. (já)", answers: ['already'] },
    { type: 'fill', prompt: "I haven't replied to his email ___.", answers: ['yet'] },
    { type: 'fill', prompt: "He ___ hasn't called me! (ainda)", answers: ['still'] },
    { type: 'fill', prompt: 'Oh no! I have ___ (lose) my keys.', answers: ['lost'] },
    {
      type: 'choice',
      prompt: '"Você já terminou?" (pergunta)',
      options: ['Have you already finished yet?', 'Have you finished yet?', 'Did you finished yet?'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Onde fica just?',
      options: ['I just have eaten.', 'I have just eaten.', 'I have eaten just.'],
      answer: 1,
    },
    { type: 'reorder', words: ['They', 'have', 'already', 'left', '.'], translation: 'Eles já foram embora.' },
    { type: 'reorder', words: ['The', 'film', "hasn't", 'started', 'yet', '.'], translation: 'O filme ainda não começou.' },
    { type: 'fixError', prompt: "I haven't yet finished.", answers: ["I haven't finished yet.", 'I have not finished yet.'] },
    { type: 'fixError', prompt: 'She has finished already yet.', answers: ['She has already finished.', "She's already finished.", 'She has finished already.'] },
    {
      type: 'transform',
      instruction: 'Passe para a negativa usando yet.',
      prompt: 'I have tidied my room.',
      answers: ["I haven't tidied my room yet.", 'I have not tidied my room yet.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para pergunta usando yet.',
      prompt: 'The train has arrived.',
      answers: ['Has the train arrived yet?'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Nós acabamos de chegar.',
      answers: ['We have just arrived.', "We've just arrived."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ela ainda não respondeu.',
      answers: ["She hasn't replied yet.", 'She has not replied yet.', "She hasn't answered yet.", 'She has not answered yet.', "She still hasn't replied.", "She still hasn't answered."],
    },
    {
      type: 'writing',
      prompt: 'Você está organizando uma viagem. Escreva 5 frases sobre o que já fez (already), acabou de fazer (just) e ainda não fez (yet).',
      model: "I have already booked the hotel. I have just bought the plane tickets. I haven't packed my suitcase yet. I haven't changed money yet. Have you checked the weather yet?",
      checklist: ['just/already entre have e o particípio', 'yet no fim da frase', 'yet em negativas e perguntas'],
    },
  ],
}
