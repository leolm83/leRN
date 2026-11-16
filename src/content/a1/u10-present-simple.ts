import type { UnitData } from '../types'

export const u10: UnitData = {
  slug: 'present-simple-affirmative',
  title: 'Present Simple — afirmativa',
  summary: 'O presente dos hábitos e fatos, e a regra mais importante do inglês básico: o -s da terceira pessoa.',
  theory: [
    {
      title: 'Quando usar',
      body: `O **Present Simple** expressa:

- **hábitos e rotinas**: *I drink coffee every morning.*
- **fatos e verdades gerais**: *Water boils at 100 degrees.*
- **situações permanentes**: *She lives in London.*

Ele **não** é usado para algo acontecendo agora (para isso existe o Present Continuous, unidade 13).`,
    },
    {
      title: 'Forma: o -s de he / she / it',
      body: `O verbo fica na forma básica para todas as pessoas, **exceto he / she / it**, que recebem **-s**.`,
      table: {
        head: ['Pessoa', 'Verbo work'],
        rows: [
          ['I / you / we / they', 'work'],
          ['he / she / it', 'work**s**'],
        ],
      },
      examples: [
        { en: 'I work in a bank.', pt: 'Eu trabalho em um banco.' },
        { en: 'She works in a bank.', pt: 'Ela trabalha em um banco.' },
        { en: 'My parents live in Recife.', pt: 'Meus pais moram em Recife.' },
      ],
    },
    {
      title: 'Ortografia da terceira pessoa',
      body: `Mesmas ideias do plural dos substantivos:`,
      table: {
        head: ['Terminação', 'Regra', 'Exemplos'],
        rows: [
          ['maioria', '+ s', 'work → works, play → plays'],
          ['-s, -sh, -ch, -x, -o', '+ es', 'watch → watches, wash → washes, fix → fixes, go → goes, do → does'],
          ['consoante + y', 'y → ies', 'study → studies, cry → cries'],
          ['vogal + y', '+ s', 'play → plays, buy → buys'],
          ['have', 'irregular', 'have → **has**'],
        ],
      },
    },
    {
      title: 'Expressões de tempo',
      body: `Normalmente vão no **final** da frase: *every day*, *every week*, *on Mondays*, *in the morning*, *at night*, *on weekends*.`,
    },
  ],
  vocab: [
    { en: 'to work', pt: 'trabalhar' },
    { en: 'to live', pt: 'morar, viver' },
    { en: 'to study', pt: 'estudar' },
    { en: 'to watch', pt: 'assistir' },
    { en: 'to go', pt: 'ir' },
    { en: 'to drink', pt: 'beber' },
    { en: 'to eat', pt: 'comer' },
    { en: 'to cook', pt: 'cozinhar' },
    { en: 'to speak', pt: 'falar (um idioma)' },
    { en: 'to wake up', pt: 'acordar' },
    { en: 'to close', pt: 'fechar' },
    { en: 'to play', pt: 'jogar, tocar, brincar' },
    { en: 'every day', pt: 'todo dia' },
    { en: 'dinner', pt: 'jantar' },
    { en: 'language', pt: 'idioma' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She ___ in a bank. (work)', answers: ['works'] },
    { type: 'fill', prompt: 'He ___ TV every night. (watch)', answers: ['watches'] },
    { type: 'fill', prompt: 'My father ___ to work by bus. (go)', answers: ['goes'] },
    { type: 'fill', prompt: 'Maria ___ English. (study)', answers: ['studies'] },
    { type: 'fill', prompt: 'The baby ___ a lot. (cry)', answers: ['cries'] },
    { type: 'fill', prompt: 'She ___ two cats. (have)', answers: ['has'] },
    { type: 'fill', prompt: 'We ___ in Recife. (live)', answers: ['live'] },
    { type: 'fill', prompt: 'He ___ soccer on Sundays. (play)', answers: ['plays'], explanation: 'Vogal + y: só -s.' },
    { type: 'fill', prompt: 'The shop ___ at 6 p.m. (close)', answers: ['closes'] },
    {
      type: 'choice',
      prompt: '"Ele gosta de café."',
      options: ['He like coffee.', 'He likes coffee.', 'He is like coffee.'],
      answer: 1,
      explanation: 'Like não leva preposição "of": like coffee.',
    },
    { type: 'fixError', prompt: 'She speak three languages.', answers: ['She speaks three languages.'] },
    { type: 'fixError', prompt: 'My brother haves a car.', answers: ['My brother has a car.'] },
    { type: 'fixError', prompt: 'They works at night.', answers: ['They work at night.'] },
    { type: 'translate', from: 'pt', prompt: 'Eu bebo água todo dia.', answers: ['I drink water every day.'] },
    { type: 'translate', from: 'pt', prompt: 'Ela mora em Londres.', answers: ['She lives in London.'] },
    {
      type: 'transform',
      instruction: 'Reescreva com "He" como sujeito.',
      prompt: 'I go to school every day.',
      answers: ['He goes to school every day.'],
    },
    { type: 'reorder', words: ['My', 'mother', 'cooks', 'dinner', 'every', 'night'], translation: 'Minha mãe faz o jantar toda noite.' },
    {
      type: 'writing',
      prompt: 'Escreva 4 frases sobre a sua rotina e 3 sobre a rotina de outra pessoa (he/she).',
      model: 'I wake up at 7 a.m. I drink coffee and I go to work. I work from home. I study English at night. My sister works in a hospital. She wakes up at 5 a.m. She goes to work by bus.',
      checklist: ['Verbo na forma básica com I/you/we/they', '-s / -es / -ies com he/she/it', 'has (e não haves)', 'Expressões de tempo no final'],
    },
  ],
}
