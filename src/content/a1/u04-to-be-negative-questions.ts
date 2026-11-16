import type { UnitData } from '../types'

export const u04: UnitData = {
  slug: 'verb-to-be-negative-questions',
  title: 'Verb to be — negativa, perguntas e question words',
  summary: 'Como negar e perguntar com am/is/are, respostas curtas e as palavras interrogativas (what, where, who, how…).',
  theory: [
    {
      title: 'Negativa: be + not',
      body: `Para negar, coloque **not** depois do verbo. As contrações mais usadas são **isn't** e **aren't**.

Não existe "amn't": a negativa de *I am* é **I am not** ou **I'm not**.`,
      table: {
        head: ['Completa', 'Contração'],
        rows: [
          ['I am not', "I'm not"],
          ['he / she / it is not', "he / she / it isn't  (ou he's not)"],
          ['you / we / they are not', "you / we / they aren't  (ou you're not)"],
        ],
      },
      examples: [
        { en: "She isn't at home.", pt: 'Ela não está em casa.' },
        { en: "I'm not tired.", pt: 'Não estou cansado.' },
      ],
    },
    {
      title: 'Perguntas: o verbo vai para a frente',
      body: `Para perguntar, **inverta** a ordem: o verbo vem antes do sujeito.

- afirmativa: You **are** tired.
- pergunta: **Are** you tired?

**Respostas curtas** repetem o verbo. Na resposta curta afirmativa **não** use contração:

- Yes, I am. ✔ — "Yes, I'm." ✘
- No, I'm not. ✔
- Yes, she is. / No, she isn't.`,
    },
    {
      title: 'Question words (palavras interrogativas)',
      body: `A estrutura é: **question word + be + sujeito**?`,
      table: {
        head: ['Palavra', 'Significado', 'Exemplo'],
        rows: [
          ['What', 'o que / qual', 'What is your name?'],
          ['Where', 'onde', 'Where are you from?'],
          ['Who', 'quem', 'Who is that man?'],
          ['When', 'quando', 'When is your birthday?'],
          ['Why', 'por que', 'Why are you sad?'],
          ['How', 'como', 'How are you?'],
          ['How old', 'quantos anos', 'How old is she?'],
        ],
      },
    },
  ],
  vocab: [
    { en: 'what', pt: 'o que, qual' },
    { en: 'where', pt: 'onde' },
    { en: 'who', pt: 'quem' },
    { en: 'when', pt: 'quando' },
    { en: 'why', pt: 'por que' },
    { en: 'how', pt: 'como' },
    { en: 'school', pt: 'escola' },
    { en: 'sad', pt: 'triste' },
    { en: 'birthday', pt: 'aniversário' },
    { en: 'man', pt: 'homem' },
    { en: 'woman', pt: 'mulher' },
    { en: 'ready', pt: 'pronto' },
  ],
  exercises: [
    {
      type: 'transform',
      instruction: 'Passe para a negativa.',
      prompt: 'She is a doctor.',
      answers: ['She is not a doctor.', "She's not a doctor."],
    },
    {
      type: 'transform',
      instruction: 'Passe para a negativa.',
      prompt: 'They are at school.',
      answers: ['They are not at school.', "They're not at school."],
    },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'You are tired.', answers: ['Are you tired?'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'He is from Spain.', answers: ['Is he from Spain?'] },
    { type: 'fill', prompt: '___ you a student? — Yes, I am.', answers: ['Are'] },
    { type: 'fill', prompt: 'Is Maria at home? — No, she ___.', answers: ["isn't", 'is not', "'s not"] },
    {
      type: 'choice',
      prompt: '"Are you Brazilian?" — Qual é a resposta curta correta?',
      options: ["Yes, I'm.", 'Yes, I am.', 'Yes, I are.'],
      answer: 1,
      explanation: 'Na resposta curta afirmativa não se usa contração.',
    },
    { type: 'fill', prompt: '___ old are you?', answers: ['How'] },
    { type: 'fill', prompt: '___ is your name?', answers: ['What'] },
    { type: 'fill', prompt: '___ are you from?', answers: ['Where'] },
    { type: 'fill', prompt: '___ is that man? — He is my teacher.', answers: ['Who'] },
    {
      type: 'fixError',
      prompt: 'Where you are from?',
      answers: ['Where are you from?'],
      explanation: 'Nas perguntas o verbo vem antes do sujeito.',
    },
    { type: 'fixError', strict: true, prompt: "I amn't hungry.", answers: ['I am not hungry.', "I'm not hungry."], explanation: 'Não existe amn\'t.' },
    { type: 'translate', from: 'pt', prompt: 'Você está com fome?', answers: ['Are you hungry?'] },
    { type: 'translate', from: 'pt', prompt: 'Eles não são meus amigos.', answers: ['They are not my friends.'] },
    { type: 'translate', from: 'pt', prompt: 'Por que você está triste?', answers: ['Why are you sad?'] },
    { type: 'reorder', words: ['Where', 'is', 'your', 'school', '?'], translation: 'Onde fica a sua escola?' },
  ],
}
