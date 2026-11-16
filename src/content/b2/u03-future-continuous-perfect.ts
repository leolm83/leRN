import type { UnitData } from '../types'

export const u03: UnitData = {
  slug: 'future-continuous-perfect',
  title: 'Future Continuous e Future Perfect',
  summary: 'will be doing (estarei fazendo) e will have done (terei feito).',
  theory: [
    {
      title: 'Future Continuous: will be + -ing',
      body: `Ação **em andamento** num momento do futuro:

- *This time tomorrow, I **will be flying** to Lisbon.* — Amanhã a esta hora estarei voando.
- *Don't call at 8 — we**'ll be having** dinner.*

Também para perguntar educadamente sobre planos: ***Will** you **be using** the car tonight?*`,
    },
    {
      title: 'Future Perfect: will have + particípio',
      body: `Ação **concluída antes** de um momento do futuro, quase sempre com **by** (até):

- ***By** 2030, I **will have finished** university.* — Até 2030 terei terminado a faculdade.
- *By the time you arrive, we**'ll have eaten**.*
- Negativa: *I **won't have finished** by Friday.*`,
    },
    {
      title: 'Future Perfect Continuous (bônus)',
      body: `**will have been + -ing** — duração até um ponto futuro:

*In June I **will have been working** here for ten years.* — Em junho farei dez anos trabalhando aqui.`,
    },
  ],
  vocab: [
    { en: 'this time tomorrow', pt: 'amanhã a esta hora' },
    { en: 'by', pt: 'até (prazo)' },
    { en: 'by the time', pt: 'quando, até o momento em que' },
    { en: 'deadline', pt: 'prazo' },
    { en: 'to retire', pt: 'aposentar-se' },
    { en: 'to complete', pt: 'concluir' },
    { en: 'mortgage', pt: 'financiamento imobiliário' },
    { en: 'to pay off', pt: 'quitar' },
    { en: 'anniversary', pt: 'aniversário (de evento)' },
  ],
  exercises: [
    { type: 'fill', prompt: 'This time tomorrow I will be ___ (lie) on the beach.', answers: ['lying'] },
    { type: 'fill', prompt: "Don't call at 8. We'll ___ having dinner.", answers: ['be'] },
    { type: 'fill', prompt: 'By 2030, I will have ___ (finish) university.', answers: ['finished'] },
    { type: 'fill', prompt: 'By the time you arrive, we will ___ eaten.', answers: ['have'] },
    { type: 'fill', prompt: '___ the end of the year, they will have paid off the mortgage. (até)', answers: ['By'] },
    { type: 'fill', prompt: "I ___ (not / finish) the report by Friday. It's too long.", answers: ["won't have finished", 'will not have finished'] },
    {
      type: 'choice',
      prompt: '"Amanhã a esta hora estarei trabalhando."',
      options: ['This time tomorrow I will work.', 'This time tomorrow I will be working.', 'This time tomorrow I will have worked.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Até sexta eu terei terminado."',
      options: ['By Friday I will have finished.', 'Until Friday I will finish.', 'By Friday I will be finishing.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Pergunta educada sobre planos:',
      options: ['Will you be using the car tonight?', 'Will you have used the car tonight?', 'Are you use the car tonight?'],
      answer: 0,
    },
    { type: 'reorder', words: ['She', 'will', 'have', 'retired', 'by', '2035', '.'], translation: 'Ela terá se aposentado até 2035.' },
    { type: 'fixError', prompt: 'By next month I will finish have the course.', answers: ['By next month I will have finished the course.', "By next month I'll have finished the course."] },
    { type: 'fixError', prompt: 'At 10 tonight I will watching the game.', answers: ['At 10 tonight I will be watching the game.', "At 10 tonight I'll be watching the game."] },
    {
      type: 'transform',
      instruction: 'Reescreva com o Future Perfect e "by Monday".',
      prompt: 'I will finish the project before Monday.',
      answers: ['I will have finished the project by Monday.', "I'll have finished the project by Monday."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Em junho farei dez anos trabalhando aqui.',
      answers: ['In June I will have been working here for ten years.', "In June I'll have been working here for ten years.", 'In June I will have worked here for ten years.', "In June I'll have worked here for ten years."],
    },
    {
      type: 'writing',
      prompt: 'Imagine sua vida daqui a 5 anos. Escreva 5 frases: o que estará fazendo (will be -ing) e o que terá conquistado (will have + particípio).',
      model: "In five years, I will be living in a bigger apartment. I will be working as a senior developer. By then, I will have reached C1 level in English. I will have travelled to at least three new countries. I will also have paid off my car.",
      checklist: ['will be + -ing para ação em andamento', 'will have + particípio para ação concluída', 'by + prazo'],
    },
  ],
}
