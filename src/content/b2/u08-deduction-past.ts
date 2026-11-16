import type { UnitData } from '../types'

export const u08: UnitData = {
  slug: 'modals-past',
  title: 'Modais no passado',
  summary: 'must have, might have, can\'t have (dedução) e should have (arrependimento/crítica).',
  theory: [
    {
      title: 'Dedução sobre o passado: modal + have + particípio',
      body: `- *She **must have left**. Her coat isn't here.* — Ela deve ter saído.
- *He **might / may / could have missed** the bus.* — Ele pode ter perdido o ônibus.
- *They **can't / couldn't have seen** us. It was too dark.* — Eles não podem ter nos visto.`,
    },
    {
      title: 'Crítica e arrependimento: should have',
      body: `- *You **should have told** me!* — Você deveria ter me contado! (não contou)
- *I **shouldn't have eaten** so much.* — Eu não deveria ter comido tanto. (comi)`,
    },
    {
      title: 'could have × couldn\'t have',
      body: `- **could have** + particípio = **havia a possibilidade**, mas não aconteceu: *You **could have** hurt yourself!* (Você podia ter se machucado!)
- **needn't have** + particípio = fez algo desnecessário: *You **needn't have** brought a gift.*

Na fala, *should have* soa como "should've" — **nunca** escreva "should of" ✘.`,
    },
  ],
  vocab: [
    { en: 'must have', pt: 'deve ter (dedução)' },
    { en: 'should have', pt: 'deveria ter' },
    { en: 'could have', pt: 'poderia ter' },
    { en: "can't have", pt: 'não pode ter' },
    { en: 'to hurt', pt: 'machucar' },
    { en: 'to drop', pt: 'deixar cair' },
    { en: 'gift', pt: 'presente' },
    { en: 'apparently', pt: 'aparentemente' },
    { en: 'to oversleep', pt: 'dormir demais, perder a hora' },
  ],
  exercises: [
    { type: 'fill', prompt: "Her coat isn't here. She must ___ left.", answers: ['have'] },
    { type: 'fill', prompt: "He's late. He might have ___ (miss) the bus.", answers: ['missed'] },
    { type: 'fill', prompt: "They ___ have seen us. It was too dark. (impossível)", answers: ["can't", 'cannot', "couldn't", 'could not'] },
    { type: 'fill', prompt: 'You ___ have told me! I would have helped. (deveria)', answers: ['should'] },
    { type: 'fill', prompt: "I ___ have eaten so much. I feel sick. (não deveria)", answers: ["shouldn't", 'should not'] },
    { type: 'fill', prompt: 'Be careful! You could have ___ (hurt) yourself.', answers: ['hurt'] },
    { type: 'fill', prompt: "He looks tired. He must have ___ (sleep) badly.", answers: ['slept'] },
    {
      type: 'choice',
      prompt: '"Você deveria ter estudado."',
      options: ['You should studied.', 'You should have studied.', 'You should of studied.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Ela deve ter esquecido." (dedução)',
      options: ['She must have forgotten.', 'She must forgot.', 'She had to forget.'],
      answer: 0,
    },
    { type: 'reorder', words: ['I', 'must', 'have', 'dropped', 'my', 'keys', 'somewhere', '.'], translation: 'Eu devo ter deixado cair minhas chaves em algum lugar.' },
    { type: 'fixError', prompt: 'You should of called me.', answers: ['You should have called me.', "You should've called me."] },
    { type: 'fixError', prompt: 'He must have went home early.', answers: ['He must have gone home early.'] },
    {
      type: 'transform',
      instruction: 'Reescreva com must have.',
      prompt: "I'm sure they forgot about the meeting.",
      answers: ['They must have forgotten about the meeting.', 'They must have forgotten the meeting.'],
    },
    {
      type: 'transform',
      instruction: "Reescreva com can't have.",
      prompt: "I'm sure she didn't write this. It's full of mistakes.",
      answers: ["She can't have written this. It's full of mistakes.", "She can't have written this.", 'She cannot have written this.', "She couldn't have written this."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu deveria ter acordado mais cedo.',
      answers: ['I should have woken up earlier.', "I should've woken up earlier.", 'I should have got up earlier.', 'I should have gotten up earlier.'],
    },
    {
      type: 'writing',
      prompt: 'Você chegou em casa e encontrou a porta aberta e a cozinha bagunçada. Escreva 5 frases de dedução (must have, might have, can\'t have) e 1 com should have.',
      model: "Someone must have come in while I was out. It can't have been a thief, because nothing is missing. My brother might have used his key. He must have made a sandwich, because there is bread everywhere. He could have cleaned the kitchen! He should have closed the door, too.",
      checklist: ['modal + have + particípio', "can't have (não mustn't have)", 'should have para crítica', 'Nunca "should of"'],
    },
  ],
}
