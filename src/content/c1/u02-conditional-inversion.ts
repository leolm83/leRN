import type { UnitData } from '../types'

export const u02: UnitData = {
  slug: 'conditional-inversion',
  title: 'Inversão nas condicionais e alternativas ao if',
  summary: 'Should you need…, Were I…, Had I known…; provided that, as long as, but for, otherwise.',
  theory: [
    {
      title: 'Condicionais sem if',
      body: `Na escrita formal, podemos **retirar o if** e inverter o auxiliar:

- 1º: *If you need help* → ***Should you need** help, please contact us.*
- 2º: *If I were in your position* → ***Were I** in your position, I would resign.*
- 2º com verbo: *If he were to fail* → ***Were he to fail**, …*
- 3º: *If I had known* → ***Had I known**, I would have called.*

Negativa: o *not* **não** contrai: ***Had it not been** for your help, …* ("Hadn't it been" ✘)`,
    },
    {
      title: 'Alternativas ao if',
      body: `- **provided (that) / providing / as long as / on condition that** = desde que: *You can borrow the car **as long as** you drive carefully.*
- **unless** = a menos que: *We'll go **unless** it rains.*
- **suppose / supposing / imagine** = e se: ***Supposing** you lost your job, what would you do?*
- **otherwise** = senão: *Hurry up, **otherwise** we'll be late.*
- **but for / if it weren't for / if it hadn't been for** + substantivo = se não fosse por: ***But for** her help, I would have failed.*
- **in case** = caso (precaução, não condição): *Take an umbrella **in case** it rains.*`,
    },
  ],
  vocab: [
    { en: 'provided that', pt: 'desde que, contanto que' },
    { en: 'as long as', pt: 'desde que, contanto que' },
    { en: 'on condition that', pt: 'com a condição de que' },
    { en: 'otherwise', pt: 'senão, caso contrário' },
    { en: 'but for', pt: 'não fosse por' },
    { en: 'in case', pt: 'caso, por precaução' },
    { en: 'to resign', pt: 'pedir demissão, renunciar' },
    { en: 'to hesitate', pt: 'hesitar' },
    { en: 'further', pt: 'adicional, mais' },
  ],
  exercises: [
    { type: 'fill', prompt: '___ you need any further information, do not hesitate to contact us.', answers: ['Should'] },
    { type: 'fill', prompt: '___ I in your position, I would accept the offer.', answers: ['Were'] },
    { type: 'fill', prompt: '___ I known about the problem, I would have helped.', answers: ['Had'] },
    { type: 'fill', prompt: 'Had it ___ been for your help, I would have failed.', answers: ['not'] },
    { type: 'fill', prompt: 'You can stay as ___ as you keep quiet.', answers: ['long'] },
    { type: 'fill', prompt: 'Take a jacket in ___ it gets cold.', answers: ['case'] },
    { type: 'fill', prompt: "Leave now, ___ you'll miss the train. (senão)", answers: ['otherwise', 'or'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ["Hadn't it been for the rain, we would have won.", 'Had it not been for the rain, we would have won.', 'Had not it been for the rain, we would have won.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Leve dinheiro caso precise." (precaução)',
      options: ['Take some money if you need it.', 'Take some money in case you need it.', 'Take some money unless you need it.'],
      answer: 1,
    },
    { type: 'reorder', words: ['Were', 'he', 'to', 'resign', ',', 'the', 'company', 'would', 'collapse', '.'], translation: 'Se ele renunciasse, a empresa entraria em colapso.' },
    { type: 'fixError', prompt: 'Should you will need help, call this number.', answers: ['Should you need help, call this number.'] },
    { type: 'fixError', prompt: 'Had I knew the truth, I would have told you.', answers: ['Had I known the truth, I would have told you.'] },
    {
      type: 'transform',
      instruction: 'Reescreva sem "if", começando com "Had".',
      prompt: 'If we had left earlier, we would have caught the train.',
      answers: ['Had we left earlier, we would have caught the train.', "Had we left earlier, we'd have caught the train."],
    },
    {
      type: 'transform',
      instruction: 'Reescreva sem "if", começando com "Should".',
      prompt: 'If you have any questions, please ask the receptionist.',
      answers: ['Should you have any questions, please ask the receptionist.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva com "But for".',
      prompt: "If it hadn't been for the map, we would have got lost.",
      answers: ['But for the map, we would have got lost.', 'But for the map, we would have gotten lost.', "But for the map, we'd have got lost."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Você pode usar o carro desde que o devolva amanhã.',
      answers: ['You can use the car as long as you return it tomorrow.', 'You can use the car provided that you return it tomorrow.', 'You can use the car provided you return it tomorrow.', 'You can use the car as long as you bring it back tomorrow.', 'You can use the car providing you return it tomorrow.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um aviso formal de um hotel para hóspedes (5 frases), usando Should you…, provided that, in case e otherwise.',
      model: "Dear guests, welcome to our hotel. Should you require any assistance, please call reception by dialling 0. Late check-out is available provided that you inform us before 10 a.m. We recommend keeping valuables in the safe in case you leave the room unlocked. Please return your key card when you leave; otherwise, a fee of $10 will be charged.",
      checklist: ['Should + sujeito + verbo base', 'provided that / as long as + presente', 'in case = precaução', 'otherwise = senão'],
    },
  ],
}
