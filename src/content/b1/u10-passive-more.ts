import type { UnitData } from '../types'

export const u10: UnitData = {
  slug: 'passive-other-tenses',
  title: 'Voz passiva: outros tempos e modais',
  summary: 'will be done, has been done, is being done, can/must be done.',
  theory: [
    {
      title: 'A regra geral',
      body: `A passiva é sempre **be + particípio**. Basta colocar o **be** no tempo da frase ativa:`,
      table: {
        head: ['Tempo', 'Ativa', 'Passiva'],
        rows: [
          ['Present Simple', 'They clean the room.', 'The room **is cleaned**.'],
          ['Present Continuous', 'They are cleaning the room.', 'The room **is being cleaned**.'],
          ['Past Simple', 'They cleaned the room.', 'The room **was cleaned**.'],
          ['Present Perfect', 'They have cleaned the room.', 'The room **has been cleaned**.'],
          ['will', 'They will clean the room.', 'The room **will be cleaned**.'],
          ['going to', 'They are going to clean it.', 'It **is going to be cleaned**.'],
          ['Modal', 'You must clean the room.', 'The room **must be cleaned**.'],
        ],
      },
    },
    {
      title: 'Modais na passiva',
      body: `**modal + be + particípio** — muito usado em avisos e regras:

- *Phones **must be switched off**.* — Os celulares devem ser desligados.
- *This medicine **should be taken** with food.*
- *The tickets **can be bought** online.*`,
    },
    {
      title: 'Uma dica de escrita',
      body: `A passiva deixa o texto mais impessoal e formal. Mas não exagere: em textos do dia a dia, a voz ativa é mais clara e direta.

- Formal: *The meeting **has been cancelled**.*
- Informal: *They**'ve cancelled** the meeting.*`,
    },
  ],
  vocab: [
    { en: 'to cancel', pt: 'cancelar' },
    { en: 'to switch off', pt: 'desligar' },
    { en: 'to repair', pt: 'consertar' },
    { en: 'to deliver', pt: 'entregar' },
    { en: 'to announce', pt: 'anunciar' },
    { en: 'to postpone', pt: 'adiar' },
    { en: 'medicine', pt: 'remédio' },
    { en: 'results', pt: 'resultados' },
    { en: 'online', pt: 'pela internet' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The meeting has ___ cancelled.', answers: ['been'] },
    { type: 'fill', prompt: 'Your order will ___ delivered tomorrow.', answers: ['be'] },
    { type: 'fill', prompt: 'The road is ___ repaired at the moment.', answers: ['being'] },
    { type: 'fill', prompt: 'Phones must be ___ (switch) off during the exam.', answers: ['switched'] },
    { type: 'fill', prompt: 'The results ___ be announced next week. (futuro)', answers: ['will'] },
    { type: 'fill', prompt: 'Tickets can be ___ (buy) online.', answers: ['bought'] },
    {
      type: 'choice',
      prompt: '"O carro está sendo consertado."',
      options: ['The car is repaired.', 'The car is being repaired.', 'The car has repaired.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"O jogo foi adiado." (resultado recente, notícia)',
      options: ['The game has been postponed.', 'The game has postponed.', 'The game is postponing.'],
      answer: 0,
    },
    { type: 'reorder', words: ['This', 'medicine', 'should', 'be', 'taken', 'with', 'food', '.'], translation: 'Este remédio deve ser tomado com comida.' },
    { type: 'reorder', words: ['A', 'new', 'hospital', 'is', 'going', 'to', 'be', 'built', '.'], translation: 'Um novo hospital vai ser construído.' },
    { type: 'fixError', prompt: 'The package will delivered on Monday.', answers: ['The package will be delivered on Monday.'] },
    { type: 'fixError', prompt: 'The house has being painted.', answers: ['The house has been painted.', 'The house is being painted.'] },
    {
      type: 'transform',
      instruction: 'Passe para a voz passiva (sem o agente).',
      prompt: 'They have cancelled the flight.',
      answers: ['The flight has been cancelled.', 'The flight has been canceled.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para a voz passiva (sem o agente).',
      prompt: 'They will announce the winner tomorrow.',
      answers: ['The winner will be announced tomorrow.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O relatório deve ser enviado até sexta.',
      answers: ['The report must be sent by Friday.', 'The report should be sent by Friday.', 'The report has to be sent by Friday.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um aviso (4–5 frases) com regras para usuários de uma biblioteca, usando passiva com modais e will be.',
      model: "Library rules. Phones must be switched off in the reading room. Books can be borrowed for two weeks. Food and drinks must not be brought into the library. Late books will be charged a small fee.",
      checklist: ['modal + be + particípio', 'will be + particípio', 'Tom impessoal'],
    },
  ],
}
