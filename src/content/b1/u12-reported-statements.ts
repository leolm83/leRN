import type { UnitData } from '../types'

export const u12: UnitData = {
  slug: 'reported-statements',
  title: 'Discurso indireto: afirmações',
  summary: 'Contar o que alguém disse: "I\'m tired" → She said (that) she was tired.',
  theory: [
    {
      title: 'Voltar um tempo (backshift)',
      body: `Quando o verbo introdutório está no passado (*said, told*), o verbo da fala **recua um tempo**:`,
      table: {
        head: ['Discurso direto', 'Discurso indireto'],
        rows: [
          ['"I **am** tired."', 'She said she **was** tired.'],
          ['"I **work** here."', 'He said he **worked** there.'],
          ['"I **am working**."', 'He said he **was working**.'],
          ['"I **saw** it."', 'She said she **had seen** it.'],
          ['"I **have finished**."', 'He said he **had finished**.'],
          ['"I **will** call."', 'She said she **would** call.'],
          ['"I **can** swim."', 'He said he **could** swim.'],
        ],
      },
    },
    {
      title: 'say × tell',
      body: `- **say** + (that) + frase: *She **said** (that) she was tired.*
- **tell** + **pessoa** + (that) + frase: *She **told me** (that) she was tired.*

"She said me" ✘ / "She told that" ✘
O **that** é opcional nos dois casos.`,
    },
    {
      title: 'Outras mudanças',
      body: `Pronomes, lugares e tempos também mudam conforme o ponto de vista:

- *I → he/she, my → his/her*
- *here → there, now → then*
- *today → that day, tomorrow → the next day, yesterday → the day before*
- *this → that, ago → before*

*"I'll see you tomorrow."* → *He said he would see me **the next day**.*`,
    },
  ],
  vocab: [
    { en: 'to say', pt: 'dizer' },
    { en: 'to tell', pt: 'dizer a, contar' },
    { en: 'to explain', pt: 'explicar' },
    { en: 'to mention', pt: 'mencionar' },
    { en: 'to promise', pt: 'prometer' },
    { en: 'the next day', pt: 'o dia seguinte' },
    { en: 'the day before', pt: 'o dia anterior' },
    { en: 'then', pt: 'então, naquele momento' },
    { en: 'tired', pt: 'cansado' },
  ],
  exercises: [
    { type: 'fill', prompt: '"I am tired." → She said she ___ tired.', answers: ['was'] },
    { type: 'fill', prompt: '"I will call you." → He said he ___ call me.', answers: ['would'] },
    { type: 'fill', prompt: '"I can swim." → She said she ___ swim.', answers: ['could'] },
    { type: 'fill', prompt: '"I have finished." → He said he ___ finished.', answers: ['had'] },
    { type: 'fill', prompt: 'She ___ me that she was moving to Spain. (say/tell)', answers: ['told'] },
    { type: 'fill', prompt: 'He ___ that he was busy. (say/tell)', answers: ['said'] },
    { type: 'fill', prompt: '"I\'ll do it tomorrow." → She said she would do it the ___ day.', answers: ['next', 'following'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['He said me that he was hungry.', 'He told me that he was hungry.', 'He told that he was hungry.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"I saw the film." → She said she…',
      options: ['saw the film.', 'had seen the film.', 'has seen the film.'],
      answer: 1,
    },
    { type: 'reorder', words: ['She', 'told', 'me', 'she', 'was', 'leaving', '.'], translation: 'Ela me disse que estava indo embora.' },
    { type: 'fixError', prompt: 'She said me she was happy.', answers: ['She told me she was happy.', 'She told me that she was happy.', 'She said she was happy.', 'She said that she was happy.'] },
    { type: 'fixError', prompt: 'He said that he will help us.', answers: ['He said that he would help us.', 'He said he would help us.'] },
    {
      type: 'transform',
      instruction: 'Passe para o discurso indireto começando com "She said".',
      prompt: '"I live in London."',
      answers: ['She said she lived in London.', 'She said that she lived in London.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para o discurso indireto começando com "He told me".',
      prompt: '"I am working on a new project."',
      answers: ['He told me he was working on a new project.', 'He told me that he was working on a new project.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para o discurso indireto começando com "They said".',
      prompt: '"We visited Paris last year."',
      answers: ['They said they had visited Paris the year before.', 'They said that they had visited Paris the year before.', 'They said they had visited Paris the previous year.', 'They said that they had visited Paris the previous year.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ele me disse que estava cansado.',
      answers: ['He told me he was tired.', 'He told me that he was tired.'],
    },
    {
      type: 'writing',
      prompt: 'Lembre de uma conversa recente e relate 5 coisas que a pessoa disse, usando said/told e o recuo dos tempos.',
      model: "Yesterday I talked to my sister. She told me she was looking for a new job. She said she had applied to three companies. She said one of them had called her the day before. She told me she would have an interview the next week. She said she was very nervous.",
      checklist: ['said / told + pessoa', 'Recuo dos tempos (am → was, will → would…)', 'Pronomes e expressões de tempo ajustados'],
    },
  ],
}
