import type { UnitData } from '../types'

export const u07: UnitData = {
  slug: 'modals-deduction-present',
  title: 'Modais de dedução: presente',
  summary: 'must, might, could, can\'t para deduzir: "deve estar", "pode estar", "não pode ser".',
  theory: [
    {
      title: 'O grau de certeza',
      body: ``,
      table: {
        head: ['Modal', 'Certeza', 'Exemplo'],
        rows: [
          ['must', '~95% sim (deve)', 'She **must be** tired. She worked all night.'],
          ['might / may / could', '~50% (pode ser, talvez)', 'He **might be** at home. I\'m not sure.'],
          ["can't", '~95% não (não pode ser)', "That **can't be** Tom. He's in Japan."],
        ],
      },
    },
    {
      title: 'Atenção',
      body: `- O oposto de **must** (dedução) é **can't**, não *mustn't*: *It **can't** be true.* ("It mustn't be true" ✘ — *mustn't* é proibição)
- Para ações em andamento: **modal + be + -ing**: *They **must be sleeping**. The lights are off.*
- *could* para dedução é sempre possibilidade (≈ might), não capacidade.`,
    },
  ],
  vocab: [
    { en: 'must be', pt: 'deve ser/estar (dedução)' },
    { en: "can't be", pt: 'não pode ser' },
    { en: 'might be', pt: 'pode ser, talvez seja' },
    { en: 'to guess', pt: 'adivinhar, supor' },
    { en: 'evidence', pt: 'evidência, prova' },
    { en: 'certain', pt: 'certo, seguro' },
    { en: 'to joke', pt: 'brincar, fazer piada' },
    { en: 'lights', pt: 'luzes' },
    { en: 'rich', pt: 'rico' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She worked all night. She ___ be exhausted. (certeza)', answers: ['must'] },
    { type: 'fill', prompt: "That ___ be Tom. He's in Japan this week. (impossível)", answers: ["can't", 'cannot'] },
    { type: 'fill', prompt: "I'm not sure where he is. He ___ be at the gym. (talvez)", answers: ['might', 'may', 'could'] },
    { type: 'fill', prompt: 'The lights are off. They must be ___ (sleep).', answers: ['sleeping'] },
    { type: 'fill', prompt: "You ___ be joking! That's impossible. (certamente)", answers: ['must'] },
    { type: 'fill', prompt: "He drives a Ferrari. He ___ be rich.", answers: ['must'] },
    {
      type: 'choice',
      prompt: '"Não pode ser verdade."',
      options: ["It mustn't be true.", "It can't be true.", "It doesn't must be true."],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Ela talvez esteja trabalhando."',
      options: ['She might be working.', 'She must working.', 'She might working.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Qual modal expressa MAIS certeza?',
      options: ['might', 'could', 'must'],
      answer: 2,
    },
    { type: 'reorder', words: ['That', "can't", 'be', 'the', 'right', 'answer', '.'], translation: 'Essa não pode ser a resposta certa.' },
    { type: 'reorder', words: ['They', 'might', 'be', 'stuck', 'in', 'traffic', '.'], translation: 'Eles talvez estejam presos no trânsito.' },
    { type: 'fixError', prompt: "He mustn't be at home. His car isn't there.", answers: ["He can't be at home. His car isn't there.", "He cannot be at home. His car isn't there.", "He can't be at home. His car is not there."] },
    { type: 'fixError', prompt: 'She must to be very happy.', answers: ['She must be very happy.'] },
    {
      type: 'transform',
      instruction: 'Reescreva com must (dedução).',
      prompt: "I'm sure she is Italian.",
      answers: ['She must be Italian.'],
    },
    {
      type: 'transform',
      instruction: "Reescreva com can't (dedução).",
      prompt: "I'm sure this isn't your bag.",
      answers: ["This can't be your bag.", 'This cannot be your bag.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Você deve estar cansado depois da viagem.',
      answers: ['You must be tired after the trip.', 'You must be tired after the journey.', 'You must be tired after your trip.'],
    },
    {
      type: 'writing',
      prompt: 'Olhe ao redor (ou imagine uma foto de uma pessoa desconhecida) e escreva 5 deduções sobre ela usando must, might/could e can\'t.',
      model: "The man in the photo must be about forty. He is wearing a suit, so he might be a lawyer or a businessman. He can't be poor, because his watch looks very expensive. He could be waiting for someone. He must be cold, because it is snowing.",
      checklist: ['must = quase certeza', 'might/may/could = possibilidade', "can't = impossível (não mustn't)", 'modal + be + -ing para ações em andamento'],
    },
  ],
}
