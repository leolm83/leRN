import type { UnitData } from '../types'

export const u01: UnitData = {
  slug: 'concision',
  title: 'Concisão: cortando palavras',
  summary: 'Eliminar redundâncias, expressões infladas e construções fracas — escrever com menos palavras e mais força.',
  theory: [
    {
      title: 'Expressões infladas',
      body: `Muitas expressões longas têm um equivalente de uma palavra:`,
      table: {
        head: ['Prolixo', 'Conciso'],
        rows: [
          ['due to the fact that', 'because'],
          ['in order to', 'to'],
          ['at this point in time', 'now'],
          ['in the event that', 'if'],
          ['a large number of', 'many'],
          ['in spite of the fact that', 'although'],
          ['has the ability to', 'can'],
          ['with regard to', 'about'],
          ['it is possible that', 'may / might'],
          ['make a decision', 'decide'],
          ['conduct an investigation', 'investigate'],
        ],
      },
    },
    {
      title: 'Redundâncias',
      body: `Palavras que repetem o que já está dito — corte a parte entre parênteses:

- *(past) history, (end) result, (free) gift, (basic) fundamentals*
- *(completely) unanimous, (future) plans, (close) proximity*
- *revert (back), repeat (again), collaborate (together)*`,
    },
    {
      title: 'Construções fracas',
      body: `- **There is/are … who/that**: *There are many people who believe…* → *Many people believe…*
- **It is … that**: *It is clear that the plan failed* → *Clearly, the plan failed.*
- **Verbos escondidos em substantivos** (excesso de nominalização): *make an analysis of* → *analyse*
- **Passiva sem motivo**: *The report was written by Ana* → *Ana wrote the report.*
- **Advérbios vazios**: *very, really, quite, basically, actually* — corte ou use uma palavra mais precisa: *very tired → exhausted*`,
    },
  ],
  vocab: [
    { en: 'wordy', pt: 'prolixo' },
    { en: 'concise', pt: 'conciso' },
    { en: 'redundant', pt: 'redundante' },
    { en: 'to trim', pt: 'aparar, enxugar' },
    { en: 'unanimous', pt: 'unânime' },
    { en: 'proximity', pt: 'proximidade' },
    { en: 'outcome', pt: 'resultado' },
    { en: 'to streamline', pt: 'simplificar, otimizar' },
    { en: 'verbose', pt: 'verborrágico' },
  ],
  exercises: [
    { type: 'fill', prompt: '"due to the fact that" → ___', answers: ['because', 'since', 'as'] },
    { type: 'fill', prompt: '"at this point in time" → ___', answers: ['now'] },
    { type: 'fill', prompt: '"in the event that" → ___', answers: ['if'] },
    { type: 'fill', prompt: '"a large number of" → ___', answers: ['many'] },
    { type: 'fill', prompt: '"has the ability to" → ___', answers: ['can'] },
    { type: 'fill', prompt: '"conduct an investigation into" → ___', answers: ['investigate'] },
    {
      type: 'choice',
      prompt: 'Qual NÃO tem redundância?',
      options: ['We must revert back to the old system.', 'The final outcome was positive.', 'The outcome was positive.'],
      answer: 2,
    },
    {
      type: 'choice',
      prompt: 'Versão mais concisa:',
      options: ['There are many students who find grammar difficult.', 'Many students find grammar difficult.', 'It is a fact that there are students who find grammar difficult.'],
      answer: 1,
    },
    {
      type: 'transform',
      instruction: 'Reescreva de forma concisa (máx. 6 palavras).',
      prompt: 'In spite of the fact that it was raining, we went out.',
      answers: ['Although it was raining, we went out.', 'Despite the rain, we went out.', 'We went out despite the rain.'],
    },
    {
      type: 'transform',
      instruction: 'Elimine a redundância.',
      prompt: 'The committee reached a completely unanimous decision.',
      answers: ['The committee reached a unanimous decision.', 'The committee decided unanimously.'],
    },
    {
      type: 'transform',
      instruction: 'Troque a nominalização pelo verbo.',
      prompt: 'The team made an analysis of the data.',
      answers: ['The team analysed the data.', 'The team analyzed the data.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva sem "It is … that".',
      prompt: 'It is clear that the strategy has failed.',
      answers: ['Clearly, the strategy has failed.', 'The strategy has clearly failed.', 'The strategy clearly failed.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva de forma concisa.',
      prompt: 'We would like to take this opportunity to thank you for your help.',
      answers: ['Thank you for your help.', 'We thank you for your help.', 'Thanks for your help.'],
    },
    { type: 'fixError', prompt: 'We need to collaborate together on this project.', answers: ['We need to collaborate on this project.', 'We need to work together on this project.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Para economizar tempo, decidimos cancelar a reunião. (forma concisa)',
      answers: ['To save time, we cancelled the meeting.', 'To save time, we canceled the meeting.', 'To save time, we decided to cancel the meeting.'],
    },
    {
      type: 'writing',
      prompt: 'Corte este parágrafo para no máximo metade do tamanho, sem perder informação: "At this point in time, it is our belief that there are a large number of customers who are not completely satisfied with the service. Due to the fact that this is the case, we have made the decision to conduct an investigation into the reasons for this. In the event that we find problems, we will make changes to the process in order to improve it."',
      model: "We believe many customers are dissatisfied with the service, so we have decided to investigate why. If we find problems, we will change the process.",
      checklist: ['Expressões infladas substituídas', 'Redundâncias eliminadas', 'Sem "there are … who"', 'Verbos em vez de nominalizações', 'Nenhuma informação perdida'],
    },
  ],
}
