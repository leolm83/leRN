import type { UnitData } from '../types'

export const u05: UnitData = {
  slug: 'subjunctive-unreal-past',
  title: 'Subjuntivo e passado irreal',
  summary: 'I insist that he be…, It\'s essential that she attend…; It\'s time we left, I\'d rather you didn\'t, as if.',
  theory: [
    {
      title: 'Subjuntivo (formal)',
      body: `Depois de verbos e expressões de **exigência, recomendação ou importância**, o inglês formal usa o **verbo na forma base** — sem -s, sem *to*, para todas as pessoas:

- Verbos: *insist, demand, recommend, suggest, request, propose, require*
- Expressões: *It is essential / vital / important / crucial / necessary that…*

- *The doctor recommended that he **stop** smoking.* ("stops" ✘)
- *It is essential that every student **attend** the meeting.*
- Negativa: ***not** + base*: *I suggest that she **not be** told.*
- Com be: *They demanded that the law **be** changed.*

No inglês britânico informal também se usa *should*: *I suggest that he **should** go.*`,
    },
    {
      title: 'Passado irreal',
      body: `Algumas expressões pedem o **passado** para falar do **presente**:

- **It's (high / about) time** + passado: *It's time we **left**.* — Já está na hora de irmos.
- **would rather** + outra pessoa + passado: *I'd rather you **didn't** smoke here.* — Prefiro que você não fume aqui.
- **as if / as though** + passado (irreal): *He talks **as if** he **were** the boss.* (ele não é)
- **suppose / imagine** + passado: *Suppose you **lost** your job.*

Mas com o mesmo sujeito: *I'd rather **stay** home.* (would rather + verbo base)`,
    },
  ],
  vocab: [
    { en: 'to insist', pt: 'insistir' },
    { en: 'to demand', pt: 'exigir' },
    { en: 'to recommend', pt: 'recomendar' },
    { en: 'to request', pt: 'solicitar' },
    { en: 'essential', pt: 'essencial' },
    { en: 'crucial', pt: 'crucial' },
    { en: 'would rather', pt: 'preferiria' },
    { en: 'as if', pt: 'como se' },
    { en: 'to attend', pt: 'comparecer, frequentar' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The doctor recommended that he ___ (stop) smoking.', answers: ['stop'] },
    { type: 'fill', prompt: 'It is essential that every employee ___ (attend) the training.', answers: ['attend'] },
    { type: 'fill', prompt: 'They demanded that the law ___ (be) changed.', answers: ['be'] },
    { type: 'fill', prompt: "It's time we ___ (go) home.", answers: ['went'] },
    { type: 'fill', prompt: "I'd rather you ___ (not / tell) anyone.", answers: ["didn't tell", 'did not tell'] },
    { type: 'fill', prompt: 'He talks as if he ___ the boss.', answers: ['were', 'was'] },
    { type: 'fill', prompt: "I'd rather ___ (stay) at home tonight.", answers: ['stay'] },
    { type: 'fill', prompt: 'I suggest that she ___ be told until tomorrow.', answers: ['not'] },
    {
      type: 'choice',
      prompt: 'Qual está correto (formal)?',
      options: ['I insist that he comes.', 'I insist that he come.', 'I insist that he to come.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Já está na hora de você arrumar um emprego."',
      options: ["It's time you get a job.", "It's time you got a job.", "It's time you will get a job."],
      answer: 1,
    },
    { type: 'reorder', words: ['It', 'is', 'vital', 'that', 'he', 'be', 'informed', 'immediately', '.'], translation: 'É vital que ele seja informado imediatamente.' },
    { type: 'fixError', prompt: 'The manager requested that she sends the report.', answers: ['The manager requested that she send the report.', 'The manager requested that she should send the report.'] },
    { type: 'fixError', prompt: "I'd rather you don't call me at work.", answers: ["I'd rather you didn't call me at work.", 'I would rather you did not call me at work.', "I would rather you didn't call me at work."] },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "It is important that".',
      prompt: 'Everyone must arrive on time.',
      answers: ['It is important that everyone arrive on time.', 'It is important that everyone arrives on time.', 'It is important that everyone should arrive on time.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "I\'d rather you".',
      prompt: "Please don't use my computer.",
      answers: ["I'd rather you didn't use my computer.", 'I would rather you did not use my computer.', "I would rather you didn't use my computer."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ela age como se nada tivesse acontecido.',
      answers: ['She acts as if nothing had happened.', 'She acts as though nothing had happened.', 'She is acting as if nothing had happened.', "She's acting as if nothing had happened."],
    },
    {
      type: 'writing',
      prompt: 'Escreva um comunicado formal (5 frases) de uma empresa sobre novas regras, usando subjuntivo (It is essential that…, We request that…) e uma frase com It is time…',
      model: "Following the recent security incident, the management has decided to introduce new rules. It is essential that every employee change their password by Friday. We request that visitors be accompanied at all times. We also recommend that staff not leave laptops unattended. It is time we took data protection more seriously.",
      checklist: ['Verbo base depois de recommend/insist/essential that', 'not + base na negativa', 'be + particípio para passiva', 'It is time + passado'],
    },
  ],
}
