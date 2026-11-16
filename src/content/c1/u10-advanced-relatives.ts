import type { UnitData } from '../types'

export const u10: UnitData = {
  slug: 'advanced-relative-clauses',
  title: 'Orações relativas avançadas',
  summary: 'whom, preposição + which/whom, of which, whereby, quantificadores (most of whom) e which para a frase inteira.',
  theory: [
    {
      title: 'whom e preposições',
      body: `**whom** é o objeto (formal) para pessoas, obrigatório depois de preposição:

- Informal: *The man (who) I spoke **to**…*
- Formal: *The man **to whom** I spoke…*
- *The company **for which** she works…* / *The house **in which** I grew up…*

Depois de preposição **nunca** use *that* ou *who*: "the man to who" ✘, "the house in that" ✘`,
    },
    {
      title: 'Quantificador + of whom / of which',
      body: `Muito usado em textos formais (sempre com vírgula):

- *I have three brothers, **all of whom** live abroad.*
- *She wrote ten books, **two of which** became films.*
- *The students, **most of whom** were tired, …*
- *a house **the roof of which** was damaged* = *a house **whose roof** was damaged*`,
    },
    {
      title: 'which para a frase inteira e whereby',
      body: `- **, which** pode retomar **toda a ideia anterior**: *He didn't call, **which** made me angry.* (o fato de ele não ligar)
- **whereby** = pelo qual, por meio do qual (formal): *a system **whereby** employees can work from home*
- **what** = a coisa que (sem antecedente): *I didn't understand **what** he said.* ("that what" ✘)`,
    },
  ],
  vocab: [
    { en: 'whom', pt: 'quem, o qual (objeto)' },
    { en: 'whereby', pt: 'pelo qual, por meio do qual' },
    { en: 'most of whom', pt: 'a maioria dos quais' },
    { en: 'none of which', pt: 'nenhum dos quais' },
    { en: 'abroad', pt: 'no exterior' },
    { en: 'scheme', pt: 'esquema, programa' },
    { en: 'to damage', pt: 'danificar' },
    { en: 'shareholder', pt: 'acionista' },
    { en: 'to apply', pt: 'candidatar-se; aplicar' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The man to ___ I spoke was very helpful.', answers: ['whom'] },
    { type: 'fill', prompt: 'The company for ___ she works is based in London.', answers: ['which'] },
    { type: 'fill', prompt: 'I have three brothers, all of ___ live abroad.', answers: ['whom'] },
    { type: 'fill', prompt: 'She wrote ten books, two of ___ became films.', answers: ['which'] },
    { type: 'fill', prompt: "He didn't apologise, ___ made me even angrier.", answers: ['which'] },
    { type: 'fill', prompt: 'They introduced a scheme ___ employees can buy shares cheaply. (pelo qual)', answers: ['whereby'] },
    { type: 'fill', prompt: "I didn't understand ___ he said. (o que)", answers: ['what'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['The person to who I wrote never replied.', 'The person to whom I wrote never replied.', 'The person to that I wrote never replied.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"100 candidatos se inscreveram, a maioria dos quais tinha experiência."',
      options: ['100 candidates applied, most of them had experience.', '100 candidates applied, most of whom had experience.', '100 candidates applied, most of which had experience.'],
      answer: 1,
    },
    { type: 'reorder', words: ['This', 'is', 'the', 'house', 'in', 'which', 'I', 'was', 'born', '.'], translation: 'Esta é a casa em que eu nasci.' },
    { type: 'fixError', prompt: 'I lost my keys, what was very annoying.', answers: ['I lost my keys, which was very annoying.'] },
    { type: 'fixError', prompt: 'The shareholders, most of who were present, voted against.', answers: ['The shareholders, most of whom were present, voted against.'] },
    {
      type: 'transform',
      instruction: 'Reescreva no estilo formal (preposição + whom).',
      prompt: 'The colleague I work with is very experienced.',
      answers: ['The colleague with whom I work is very experienced.'],
    },
    {
      type: 'transform',
      instruction: 'Junte com "none of which".',
      prompt: 'They made several suggestions. None of them were useful.',
      answers: ['They made several suggestions, none of which were useful.', 'They made several suggestions, none of which was useful.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ela não veio à reunião, o que surpreendeu todo mundo.',
      answers: ["She didn't come to the meeting, which surprised everyone.", 'She did not come to the meeting, which surprised everyone.', "She didn't come to the meeting, which surprised everybody.", "She didn't attend the meeting, which surprised everyone."],
    },
    {
      type: 'writing',
      prompt: 'Escreva um parágrafo formal (5 frases) descrevendo uma organização (empresa, escola, clube) usando whom, preposição + which, of whom/of which e whereby.',
      model: "The organisation for which I work was founded in 1998. It employs 200 people, most of whom work remotely. The director, with whom I meet every month, is very supportive. The company has developed a programme whereby employees can study at a reduced cost. It has opened four offices, two of which are in Europe.",
      checklist: ['preposição + whom/which', 'Quantificador + of whom/of which, com vírgula', 'whereby', 'Sem that depois de preposição'],
    },
  ],
}
