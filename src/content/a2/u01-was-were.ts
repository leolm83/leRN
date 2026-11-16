import type { UnitData } from '../types'

export const u01: UnitData = {
  slug: 'was-were',
  title: 'Passado do to be: was / were',
  summary: 'Como dizer "era", "estava", "foi" — negativa, perguntas, "nasci" e as expressões de tempo do passado.',
  theory: [
    {
      title: 'Duas formas: was e were',
      body: `No passado o verbo **to be** tem só duas formas. Ele significa **era / estava / foi / esteve**.`,
      table: {
        head: ['Pessoa', 'Afirmativa', 'Negativa', 'Pergunta'],
        rows: [
          ['I / he / she / it', 'was', "wasn't (was not)", 'Was I / he…?'],
          ['you / we / they', 'were', "weren't (were not)", 'Were you / we / they…?'],
        ],
      },
      examples: [
        { en: 'I was at home yesterday.', pt: 'Eu estava em casa ontem.' },
        { en: "They weren't happy.", pt: 'Eles não estavam felizes.' },
        { en: 'Was the movie good? — Yes, it was.', pt: 'O filme foi bom? — Sim, foi.' },
      ],
    },
    {
      title: 'Nascer = be born',
      body: `Em inglês "nascer" é **be born**, e no passado usa **was / were**:

- *I was born in 1995.* — Eu nasci em 1995. ("I born" ✘)
- *Where were you born?* — Onde você nasceu?`,
    },
    {
      title: 'Expressões de tempo do passado',
      body: `- **yesterday** (ontem), **yesterday morning**
- **last** + night / week / month / year / Monday — *last night* (ontem à noite), sem "the" e sem preposição
- período + **ago** — *two days ago* (dois dias atrás). O **ago** vem **depois** do período
- **in** + ano — *in 2010*`,
    },
  ],
  vocab: [
    { en: 'yesterday', pt: 'ontem' },
    { en: 'last night', pt: 'ontem à noite' },
    { en: 'ago', pt: 'atrás (tempo)' },
    { en: 'to be born', pt: 'nascer' },
    { en: 'party', pt: 'festa' },
    { en: 'weather', pt: 'tempo (clima)' },
    { en: 'terrible', pt: 'terrível' },
    { en: 'easy', pt: 'fácil' },
    { en: 'difficult', pt: 'difícil' },
    { en: 'trip', pt: 'viagem' },
    { en: 'boring', pt: 'chato, entediante' },
    { en: 'crowded', pt: 'lotado' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I ___ at home yesterday.', answers: ['was'] },
    { type: 'fill', prompt: 'They ___ very tired last night.', answers: ['were'] },
    { type: 'fill', prompt: '___ you at the party on Saturday?', answers: ['Were'] },
    { type: 'fill', prompt: 'She ___ at work yesterday. (negativa)', answers: ["wasn't", 'was not'] },
    { type: 'fill', prompt: 'We ___ in Rio last summer.', answers: ['were'] },
    { type: 'fill', prompt: 'The movie ___ really boring.', answers: ['was'] },
    {
      type: 'choice',
      prompt: '"Eu nasci em 1995."',
      options: ['I born in 1995.', 'I was born in 1995.', 'I am born in 1995.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Há dois anos" / "dois anos atrás"',
      options: ['ago two years', 'two years ago', 'before two years'],
      answer: 1,
    },
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'The test was easy.', answers: ['The test was not easy.'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'They were at school.', answers: ['Were they at school?'] },
    { type: 'fixError', prompt: 'We was very happy.', answers: ['We were very happy.'] },
    { type: 'fixError', prompt: 'I were born in Brazil.', answers: ['I was born in Brazil.'] },
    { type: 'fixError', prompt: 'Where you were yesterday?', answers: ['Where were you yesterday?'] },
    { type: 'fixError', prompt: 'I was in Paris the last year.', answers: ['I was in Paris last year.'], explanation: 'last year, sem "the".' },
    { type: 'translate', from: 'pt', prompt: 'Onde você estava ontem à noite?', answers: ['Where were you last night?'] },
    { type: 'translate', from: 'pt', prompt: 'Ela não estava cansada.', answers: ['She was not tired.'] },
    { type: 'translate', from: 'pt', prompt: 'Meus pais nasceram em 1970.', answers: ['My parents were born in 1970.'] },
    { type: 'reorder', words: ['The', 'weather', 'was', 'terrible', 'last', 'week'], translation: 'O tempo estava horrível na semana passada.' },
    {
      type: 'writing',
      prompt: 'Escreva 4 frases sobre onde você estava e como se sentia em momentos do passado (ontem, semana passada, há um ano, quando você nasceu).',
      model: 'I was born in 1996 in Belo Horizonte. Last week I was very busy. Yesterday I was at home all day. A year ago I was in Portugal with my family.',
      checklist: ['was com I/he/she/it, were com you/we/they', 'be born para "nascer"', 'last / ago / yesterday sem preposição'],
    },
  ],
}
