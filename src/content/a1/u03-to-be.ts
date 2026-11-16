import type { UnitData } from '../types'

export const u03: UnitData = {
  slug: 'verb-to-be-affirmative',
  title: 'Verb to be — afirmativa',
  summary: 'am, is, are: o verbo que significa "ser" e "estar". Contrações e os usos que mudam em relação ao português.',
  theory: [
    {
      title: 'Ser e estar: um verbo só',
      body: `O verbo **to be** significa **ser** e **estar** ao mesmo tempo. No presente ele tem três formas: **am**, **is** e **are**.`,
      table: {
        head: ['Forma completa', 'Contração', 'Português'],
        rows: [
          ['I am', "I'm", 'eu sou / estou'],
          ['you are', "you're", 'você é / está'],
          ['he is', "he's", 'ele é / está'],
          ['she is', "she's", 'ela é / está'],
          ['it is', "it's", 'ele/ela é / está (coisa)'],
          ['we are', "we're", 'nós somos / estamos'],
          ['they are', "they're", 'eles são / estão'],
        ],
      },
    },
    {
      title: 'Contrações',
      body: `A **contração** junta o pronome e o verbo com um apóstrofo ( **'** ). É muito usada em mensagens e textos informais. Em textos formais (trabalhos, e-mails profissionais) prefira a forma completa.

Cuidado: **it's** (= it is) é diferente de **its** (= dele/dela, possessivo). Você verá isso na lição de possessivos.`,
    },
    {
      title: 'Usos — e onde o português engana',
      body: `- **Nome:** I am Ana.
- **Nacionalidade:** We are Brazilian.
- **Profissão:** She is **a** teacher. — em inglês a profissão leva **a/an**
- **Lugar:** They are at home.
- **Estados e sentimentos:** I am tired. He is hungry.
- **Idade:** I am 25 years old. — idade usa **be**, nunca *have* ("I have 25 years" está errado)
- **Fome, sede, frio, calor, medo:** em português "tenho fome", em inglês **I am hungry**, **I am thirsty**, **I am cold**, **I am hot**, **I am afraid**`,
      examples: [
        { en: 'I am 30 years old.', pt: 'Tenho 30 anos.' },
        { en: 'She is a nurse.', pt: 'Ela é enfermeira.' },
        { en: 'We are hungry.', pt: 'Estamos com fome.' },
        { en: "It's cold today.", pt: 'Está frio hoje.' },
      ],
    },
  ],
  vocab: [
    { en: 'student', pt: 'estudante' },
    { en: 'teacher', pt: 'professor(a)' },
    { en: 'doctor', pt: 'médico(a)' },
    { en: 'nurse', pt: 'enfermeiro(a)' },
    { en: 'tired', pt: 'cansado' },
    { en: 'hungry', pt: 'com fome' },
    { en: 'thirsty', pt: 'com sede' },
    { en: 'afraid', pt: 'com medo' },
    { en: 'home', pt: 'casa, lar' },
    { en: 'old', pt: 'velho; (idade) anos' },
    { en: 'young', pt: 'jovem' },
    { en: 'beautiful', pt: 'bonito(a)' },
    { en: 'city', pt: 'cidade' },
    { en: 'smart', pt: 'inteligente' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I ___ a student.', answers: ['am'] },
    { type: 'fill', prompt: 'She ___ from Canada.', answers: ['is'] },
    { type: 'fill', prompt: 'They ___ my friends.', answers: ['are'] },
    { type: 'fill', prompt: 'It ___ cold today.', answers: ['is'] },
    { type: 'fill', prompt: 'We ___ at home.', answers: ['are'] },
    { type: 'fill', prompt: 'You ___ very smart.', answers: ['are'] },
    { type: 'fill', prompt: 'My mother ___ a nurse.', answers: ['is'], explanation: '"My mother" = she → is.' },
    { type: 'fill', prompt: 'Tom and I ___ brothers.', answers: ['are'], explanation: '"Tom and I" = we → are.' },
    {
      type: 'choice',
      prompt: '"Eu tenho 20 anos." Qual está correto?',
      options: ['I have 20 years.', 'I am 20 years old.', 'I is 20 years old.'],
      answer: 1,
      explanation: 'Idade usa o verbo to be.',
    },
    {
      type: 'transform',
      strict: true,
      instruction: 'Reescreva usando contração.',
      prompt: 'She is tired.',
      answers: ["She's tired."],
    },
    {
      type: 'transform',
      strict: true,
      instruction: 'Reescreva usando contração.',
      prompt: 'We are hungry.',
      answers: ["We're hungry."],
    },
    { type: 'translate', from: 'pt', prompt: 'Eu estou cansado.', answers: ['I am tired.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ela é professora.',
      answers: ['She is a teacher.'],
      explanation: 'Profissão leva o artigo a/an.',
    },
    { type: 'translate', from: 'pt', prompt: 'Nós somos brasileiros.', answers: ['We are Brazilian.', 'We are Brazilians.'] },
    { type: 'translate', from: 'pt', prompt: 'Eles estão com sede.', answers: ['They are thirsty.'] },
    { type: 'fixError', prompt: 'He are my brother.', answers: ['He is my brother.'] },
    {
      type: 'fixError',
      prompt: 'I have 30 years old.',
      answers: ['I am 30 years old.', 'I am 30.', 'I am thirty years old.', 'I am thirty.'],
    },
    { type: 'reorder', words: ['My', 'city', 'is', 'very', 'beautiful'], translation: 'Minha cidade é muito bonita.' },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases com to be sobre você e uma pessoa da sua família (nome, idade, profissão, cidade, como está hoje).',
      model: "My name is Leo. I am 28 years old. I am a developer. My sister is a nurse. She is tired today.",
      checklist: ['Usou am com I, is com he/she/it, are com we/you/they', 'Idade com "be … years old"', 'Profissão com a/an', 'Maiúsculas e ponto final'],
    },
  ],
}
