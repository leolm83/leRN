import type { UnitData } from '../types'

export const u12: UnitData = {
  slug: 'should-must-have-to',
  title: 'should, must, have to',
  summary: 'Conselho, obrigação e proibição — e a diferença crucial entre mustn\'t e don\'t have to.',
  theory: [
    {
      title: 'should: conselho',
      body: `**should + verbo** = deveria. **shouldn't** = não deveria.

- *You **should** sleep more.*
- *You **shouldn't** drink so much coffee.*
- ***Should** I call her?*`,
    },
    {
      title: 'must e have to: obrigação',
      body: `- **must**: obrigação forte, regras, ou algo que **o próprio falante** considera necessário: *I **must** finish this today. You **must** wear a seatbelt.*
- **have to**: obrigação vinda **de fora** (trabalho, lei, circunstâncias): *I **have to** wear a uniform at work.*

**have to** é um verbo normal: conjuga (*she **has to***), usa do/does/did (*Do you **have to** work?*) e tem passado: **had to**.

O passado de *must* também é **had to**: *Yesterday I **had to** wake up at 5.*`,
    },
    {
      title: "mustn't × don't have to",
      body: `Parecem iguais, mas são opostos:

- **mustn't** = **proibido**: *You **mustn't** smoke here.* (Não pode fumar aqui.)
- **don't have to** = **não é necessário**: *You **don't have to** come.* (Você não precisa vir — mas pode.)`,
    },
    {
      title: 'Regras dos modais (should, must, can, will)',
      body: `- sem -s: *he **should*** ("he shoulds" ✘)
- sem to depois: *should **go*** ("should to go" ✘)
- sem do nas perguntas: ***Should** I go?* ("Do I should" ✘)`,
    },
  ],
  vocab: [
    { en: 'should', pt: 'deveria' },
    { en: 'must', pt: 'dever, ter que (forte)' },
    { en: 'have to', pt: 'ter que, precisar' },
    { en: 'had to', pt: 'tive que, teve que' },
    { en: 'seatbelt', pt: 'cinto de segurança' },
    { en: 'uniform', pt: 'uniforme' },
    { en: 'to smoke', pt: 'fumar' },
    { en: 'forbidden', pt: 'proibido' },
    { en: 'report', pt: 'relatório' },
    { en: 'to bring', pt: 'trazer' },
    { en: 'advice', pt: 'conselho' },
  ],
  exercises: [
    { type: 'fill', prompt: 'You look tired. You ___ go to bed early.', answers: ['should'] },
    { type: 'fill', prompt: 'She ___ wear a uniform at work. (tem que)', answers: ['has to'] },
    { type: 'fill', prompt: "You ___ smoke here. It's forbidden.", answers: ["mustn't", 'must not'] },
    { type: 'fill', prompt: "Tomorrow is Sunday, so I ___ work. (não preciso)", answers: ["don't have to", 'do not have to'] },
    { type: 'fill', prompt: '___ I bring anything to the party?', answers: ['Should'] },
    { type: 'fill', prompt: 'Yesterday I ___ wake up at 5 a.m. (tive que)', answers: ['had to'] },
    { type: 'choice', prompt: 'Qual está correto?', options: ['She have to work.', 'She has to work.', 'She must to work.'], answer: 1 },
    {
      type: 'choice',
      prompt: '"Você não precisa vir." (não é necessário)',
      options: ["You mustn't come.", "You don't have to come."],
      answer: 1,
      explanation: "mustn't = proibido.",
    },
    {
      type: 'choice',
      prompt: '"Ele deveria estudar mais."',
      options: ['He should study more.', 'He should to study more.', 'He shoulds study more.'],
      answer: 0,
    },
    { type: 'fixError', prompt: 'You should to drink more water.', answers: ['You should drink more water.'] },
    { type: 'fixError', prompt: 'He musts finish the report.', answers: ['He must finish the report.'] },
    { type: 'fixError', prompt: 'Do I must pay now?', answers: ['Do I have to pay now?', 'Must I pay now?'] },
    { type: 'fixError', prompt: "She don't have to work on Fridays.", answers: ["She doesn't have to work on Fridays."] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Você deveria ligar para a sua mãe.',
      answers: ['You should call your mother.', 'You should call your mom.', 'You should call your mum.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Nós tivemos que esperar uma hora.',
      answers: ['We had to wait for an hour.', 'We had to wait an hour.', 'We had to wait for one hour.', 'We had to wait one hour.'],
    },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'He has to work today.', answers: ['Does he have to work today?'] },
    {
      type: 'writing',
      prompt: "Escreva 5 conselhos para alguém que está começando a aprender inglês, usando should, shouldn't, have to e don't have to.",
      model: "You should study a little every day. You shouldn't translate everything word by word. You have to learn the irregular verbs. You don't have to speak perfectly to start writing. You should read short texts in English.",
      checklist: ['Modal + verbo básico, sem to (exceto have to)', "don't have to = não é necessário", 'Nada de -s depois de should/must'],
    },
  ],
}
