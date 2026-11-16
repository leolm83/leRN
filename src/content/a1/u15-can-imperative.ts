import type { UnitData } from '../types'

export const u15: UnitData = {
  slug: 'can-imperative',
  title: 'Can e o imperativo',
  summary: 'Habilidade, permissão e pedidos com can; ordens e instruções com o imperativo; sugestões com let\'s.',
  theory: [
    {
      title: 'Can: poder / saber fazer',
      body: `**can** expressa:

- **habilidade**: *She can speak four languages.* (Ela sabe falar quatro idiomas.)
- **permissão**: *You can sit here.*
- **pedido**: *Can you help me?*
- **possibilidade**: *It can be cold in July.*

Regras de forma — *can* é um **verbo modal**:

- é **igual para todas as pessoas**: *she can* — "she cans" ✘
- é seguido do verbo **sem to**: *I can swim* — "I can to swim" ✘
- negativa: **cannot** (escrito junto) ou **can't**
- pergunta: inverta — *Can you…?* (não usa do: "Do you can" ✘)
- resposta curta: *Yes, I can. / No, I can't.*`,
    },
    {
      title: 'Imperativo: ordens, instruções, pedidos',
      body: `Use o verbo na **forma básica**, **sem sujeito**:

- *Open the door.* (Abra a porta.)
- *Turn left.* (Vire à esquerda.)

Negativo: **Don't** + verbo → *Don't run!* (Não corra!)

Educado: acrescente **please** no começo ou no fim.

Sugestão (vamos…): **Let's** + verbo → *Let's go!* / *Let's study!*`,
      examples: [
        { en: 'Please close the window.', pt: 'Por favor, feche a janela.' },
        { en: "Don't touch that!", pt: 'Não toque nisso!' },
        { en: "Let's eat.", pt: 'Vamos comer.' },
      ],
    },
  ],
  vocab: [
    { en: 'can', pt: 'poder, conseguir, saber (habilidade)' },
    { en: 'to open', pt: 'abrir' },
    { en: 'to turn', pt: 'virar' },
    { en: 'left', pt: 'esquerda' },
    { en: 'to touch', pt: 'tocar' },
    { en: 'to wait', pt: 'esperar' },
    { en: 'to sing', pt: 'cantar' },
    { en: 'to dance', pt: 'dançar' },
    { en: 'to come', pt: 'vir' },
    { en: 'to sit down', pt: 'sentar-se' },
    { en: 'piano', pt: 'piano' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She ___ speak four languages.', answers: ['can'] },
    { type: 'fill', prompt: "I ___ swim. I never learned. (negativa)", answers: ["can't", 'cannot'] },
    { type: 'fill', prompt: '___ I open the window?', answers: ['Can'] },
    { type: 'choice', prompt: 'Qual está correto?', options: ['She cans dance.', 'She can dance.', 'She can to dance.'], answer: 1 },
    { type: 'choice', prompt: '"Não corra!"', options: ['Not run!', "Don't run!", 'No run!'], answer: 1 },
    { type: 'fixError', prompt: 'He can to drive.', answers: ['He can drive.'] },
    { type: 'fixError', prompt: 'Do you can help me?', answers: ['Can you help me?'] },
    { type: 'fixError', prompt: 'She cans cook.', answers: ['She can cook.'] },
    { type: 'fixError', prompt: 'You not touch that!', answers: ["Don't touch that!"] },
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'They can come today.', answers: ['They cannot come today.'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'You can play the piano.', answers: ['Can you play the piano?'] },
    { type: 'transform', instruction: 'Passe para o imperativo negativo.', prompt: 'Open the window.', answers: ["Don't open the window."] },
    { type: 'translate', from: 'pt', prompt: 'Não toque nisso!', answers: ["Don't touch that!", "Don't touch it!", "Don't touch this!"] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Feche a porta, por favor.',
      answers: ['Close the door, please.', 'Please close the door.', 'Shut the door, please.', 'Please shut the door.'],
    },
    { type: 'translate', from: 'pt', prompt: 'Vamos estudar!', answers: ["Let's study!", 'Let us study!'] },
    { type: 'reorder', words: ['Can', 'you', 'help', 'me', ',', 'please', '?'], translation: 'Você pode me ajudar, por favor?' },
    {
      type: 'writing',
      prompt: 'Escreva 3 frases sobre o que você sabe e não sabe fazer (can / can\'t) e 3 instruções no imperativo (uma negativa).',
      model: "I can cook. I can't sing. My brother can play the guitar. Wash your hands. Sit down, please. Don't be late.",
      checklist: ['can sem -s e sem to', "can't ou cannot (junto)", 'Imperativo sem sujeito', "Don't + verbo para proibir"],
    },
  ],
}
