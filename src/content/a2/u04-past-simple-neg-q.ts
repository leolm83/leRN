import type { UnitData } from '../types'

export const u04: UnitData = {
  slug: 'past-simple-negative-questions',
  title: 'Past Simple — negativa e perguntas (did)',
  summary: 'O auxiliar did, a volta do verbo à forma básica e as perguntas em que o sujeito é who/what.',
  theory: [
    {
      title: 'did / didn\'t + verbo na forma básica',
      body: `Assim como do/does no presente, o passado usa o auxiliar **did** — **igual para todas as pessoas**.

O passado fica **no auxiliar**, então o verbo principal volta para a **forma básica**:

- *She went.* → *She **didn't go**.* ("didn't went" ✘)
- *They saw it.* → ***Did** they **see** it?* ("Did they saw" ✘)`,
      table: {
        head: ['', 'Exemplo'],
        rows: [
          ['Negativa', "I **didn't** call her."],
          ['Pergunta', '**Did** you call her?'],
          ['Resposta curta', "Yes, I did. / No, I didn't."],
          ['Wh-', 'What **did** you **do** yesterday?'],
        ],
      },
    },
    {
      title: 'To be não usa did',
      body: `- *Were you at home?* ✔ — "Did you be at home?" ✘
- *She wasn't tired.* ✔ — "She didn't be tired" ✘`,
    },
    {
      title: 'Perguntas de sujeito (sem did)',
      body: `Quando **who** ou **what** é o **sujeito** (quem fez a ação), não se usa did e o verbo fica no passado:

- *Who **called** you?* — Quem te ligou? (alguém ligou)
- *Who **did** you **call**?* — Para quem você ligou? (você ligou)
- *What **happened**?* — O que aconteceu?`,
    },
  ],
  vocab: [
    { en: 'to happen', pt: 'acontecer' },
    { en: 'to sleep well', pt: 'dormir bem' },
    { en: 'gift', pt: 'presente' },
    { en: 'lunch', pt: 'almoço' },
    { en: 'question', pt: 'pergunta, questão' },
    { en: 'jacket', pt: 'jaqueta' },
    { en: 'vacation', pt: 'férias' },
    { en: 'class', pt: 'aula, turma' },
    { en: 'email', pt: 'e-mail' },
    { en: 'phone', pt: 'telefone, celular' },
  ],
  exercises: [
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'She went to the party.', answers: ['She did not go to the party.'] },
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'I bought a new car.', answers: ['I did not buy a new car.'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'They saw the movie.', answers: ['Did they see the movie?'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'He called you.', answers: ['Did he call you?'] },
    { type: 'fill', prompt: '___ you sleep well?', answers: ['Did'] },
    { type: 'fill', prompt: 'Where ___ you go on vacation?', answers: ['did'] },
    { type: 'fill', prompt: 'I ___ understand the question. (negativa)', answers: ["didn't", 'did not'] },
    { type: 'fill', prompt: 'Did she like the gift? — Yes, she ___.', answers: ['did'] },
    { type: 'choice', prompt: '"Ela não foi."', options: ["She didn't went.", "She didn't go.", "She doesn't went."], answer: 1 },
    {
      type: 'choice',
      prompt: '"Você estava em casa ontem?"',
      options: ['Did you be at home yesterday?', 'Were you at home yesterday?', 'Was you at home yesterday?'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Quem te ligou?" (quem é o sujeito)',
      options: ['Who did call you?', 'Who called you?', 'Who did you call?'],
      answer: 1,
      explanation: '"Who did you call?" significa "Para quem você ligou?".',
    },
    { type: 'fixError', prompt: 'Did you saw my phone?', answers: ['Did you see my phone?'] },
    { type: 'fixError', prompt: "He didn't came to class.", answers: ["He didn't come to class."] },
    { type: 'fixError', prompt: 'What you did last night?', answers: ['What did you do last night?'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O que você comeu no almoço?',
      answers: ['What did you eat for lunch?', 'What did you have for lunch?'],
    },
    { type: 'translate', from: 'pt', prompt: 'Eu não vi o seu e-mail.', answers: ['I did not see your email.', 'I did not see your e-mail.'] },
    { type: 'translate', from: 'pt', prompt: 'O que aconteceu?', answers: ['What happened?'] },
    { type: 'reorder', words: ['Where', 'did', 'you', 'buy', 'that', 'jacket', '?'], translation: 'Onde você comprou essa jaqueta?' },
  ],
}
