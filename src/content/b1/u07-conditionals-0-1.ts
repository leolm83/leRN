import type { UnitData } from '../types'

export const u07: UnitData = {
  slug: 'conditionals-zero-first',
  title: 'Condicionais 0 e 1',
  summary: 'Verdades gerais (if + presente, presente) e possibilidades reais no futuro (if + presente, will).',
  theory: [
    {
      title: 'Zero conditional: sempre verdade',
      body: `**If + Present Simple, Present Simple** — fatos e regras gerais (*if* ≈ *when*):

- *If you heat ice, it **melts**.*
- *If I drink coffee at night, I **can't** sleep.*`,
    },
    {
      title: 'First conditional: possibilidade real',
      body: `**If + Present Simple, will + verbo** — algo provável no futuro:

- *If it **rains** tomorrow, we **will stay** home.* — Se chover amanhã, ficaremos em casa.
- *If you **study**, you**'ll pass** the test.*

Atenção: depois de **if** usamos o **presente**, mesmo falando do futuro. "If it will rain" ✘
(Em português usamos o futuro do subjuntivo: "se chover".)`,
    },
    {
      title: 'Vírgula, unless e when',
      body: `- **Vírgula** quando o *if* vem primeiro: *If it rains**,** we'll stay home.* Sem vírgula quando vem depois: *We'll stay home if it rains.*
- **unless** = a menos que, se não: *You'll miss the bus **unless** you hurry.* (= if you don't hurry)
- **when / as soon as / before / after** também usam o presente para o futuro: *I'll call you **when** I **arrive**.*`,
    },
  ],
  vocab: [
    { en: 'if', pt: 'se' },
    { en: 'unless', pt: 'a menos que' },
    { en: 'as soon as', pt: 'assim que' },
    { en: 'to heat', pt: 'aquecer' },
    { en: 'to melt', pt: 'derreter' },
    { en: 'to boil', pt: 'ferver' },
    { en: 'to pass', pt: 'passar (em prova)' },
    { en: 'to miss', pt: 'perder (ônibus, aula); sentir falta' },
    { en: 'to hurry', pt: 'apressar-se' },
  ],
  exercises: [
    { type: 'fill', prompt: 'If you heat water to 100°C, it ___ (boil).', answers: ['boils'] },
    { type: 'fill', prompt: 'If it ___ (rain) tomorrow, we will stay home.', answers: ['rains'] },
    { type: 'fill', prompt: 'If you study hard, you ___ (pass) the exam.', answers: ['will pass', "'ll pass"] },
    { type: 'fill', prompt: "I'll call you as soon as I ___ (arrive).", answers: ['arrive'] },
    { type: 'fill', prompt: "You'll miss the bus ___ you hurry. (a menos que)", answers: ['unless'] },
    { type: 'fill', prompt: "If she doesn't come, I ___ (be) sad.", answers: ['will be', "'ll be"] },
    {
      type: 'choice',
      prompt: '"Se chover, vamos ficar em casa."',
      options: ['If it will rain, we stay home.', 'If it rains, we will stay home.', 'If it rained, we will stay home.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está pontuada corretamente?',
      options: ['If you need help, call me.', 'If you need help call, me.', 'Call me, if you need help.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: '"unless you hurry" =',
      options: ['if you hurry', "if you don't hurry", 'when you hurry'],
      answer: 1,
    },
    { type: 'reorder', words: ['If', 'I', 'see', 'him', ',', 'I', 'will', 'tell', 'him', '.'], translation: 'Se eu o vir, vou contar a ele.' },
    { type: 'reorder', words: ['Plants', 'die', 'if', 'they', "don't", 'get', 'water', '.'], translation: 'As plantas morrem se não recebem água.' },
    { type: 'fixError', prompt: 'If it will be sunny, we will go to the beach.', answers: ["If it is sunny, we will go to the beach.", "If it's sunny, we'll go to the beach."] },
    { type: 'fixError', prompt: 'I will call you when I will arrive.', answers: ['I will call you when I arrive.', "I'll call you when I arrive."] },
    {
      type: 'transform',
      instruction: 'Reescreva com unless.',
      prompt: "If you don't hurry, you will be late.",
      answers: ['Unless you hurry, you will be late.', "Unless you hurry, you'll be late.", 'You will be late unless you hurry.', "You'll be late unless you hurry."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Se você precisar de ajuda, me liga.',
      answers: ['If you need help, call me.', 'If you need any help, call me.', 'Call me if you need help.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Se eu tiver tempo, vou te visitar.',
      answers: ['If I have time, I will visit you.', "If I have time, I'll visit you.", 'If I have time, I will come and visit you.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases sobre seus planos para o fim de semana com condições (if, unless, when).',
      model: "If the weather is nice on Saturday, I'll go cycling in the park. If it rains, I'll stay home and watch a series. I won't go out on Saturday night unless my friends invite me. When I wake up on Sunday, I'll cook a big breakfast. If I have time, I'll study English for an hour.",
      checklist: ['if + presente (nunca will depois de if)', 'will na outra parte', 'Vírgula quando if vem primeiro', 'when/unless + presente'],
    },
  ],
}
