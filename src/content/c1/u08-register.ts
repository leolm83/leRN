import type { UnitData } from '../types'

export const u08: UnitData = {
  slug: 'register',
  title: 'Registro formal × informal',
  summary: 'Escolher palavras, estruturas e tom de acordo com o leitor: get → obtain, ask for → request.',
  theory: [
    {
      title: 'Marcas do registro formal',
      body: `- **Verbos de uma palavra** (latinos) em vez de phrasal verbs: *find out → discover, put off → postpone*
- **Sem contrações**: *do not, it is*
- **Passiva e impessoalidade**: *It has been decided that…*
- **Nominalização**: *the implementation of*
- **Conectores formais**: *however, furthermore, consequently*
- **Frases completas**, sem gírias nem abreviações (*info, ASAP, gonna*)`,
    },
    {
      title: 'Equivalentes',
      body: ``,
      table: {
        head: ['Informal', 'Formal'],
        rows: [
          ['get', 'obtain / receive'],
          ['ask for', 'request'],
          ['find out', 'discover / ascertain'],
          ['put off', 'postpone'],
          ['go up', 'increase / rise'],
          ['help', 'assist'],
          ['need', 'require'],
          ['start', 'commence / begin'],
          ['enough', 'sufficient'],
          ['about', 'regarding / concerning'],
          ['But', 'However,'],
          ['So', 'Therefore, / Consequently,'],
          ['Sorry for…', 'We apologise for…'],
          ['Thanks for…', 'Thank you for… / We appreciate…'],
        ],
      },
    },
    {
      title: 'Nem tudo é formal',
      body: `Um e-mail para um colega próximo em linguagem muito formal soa **frio ou irônico**. O objetivo é **adequação**: escolha o tom de acordo com o leitor, a relação e o meio (contrato, relatório, chat, e-mail).

**Semi-formal** (o mais comum no trabalho): educado, claro, com algumas contrações e phrasal verbs simples.`,
    },
  ],
  vocab: [
    { en: 'to obtain', pt: 'obter' },
    { en: 'to request', pt: 'solicitar' },
    { en: 'to assist', pt: 'auxiliar, ajudar' },
    { en: 'to require', pt: 'exigir, necessitar' },
    { en: 'to commence', pt: 'iniciar' },
    { en: 'sufficient', pt: 'suficiente' },
    { en: 'regarding', pt: 'a respeito de' },
    { en: 'to apologise', pt: 'desculpar-se' },
    { en: 'to ascertain', pt: 'apurar, verificar' },
    { en: 'inconvenience', pt: 'transtorno, inconveniente' },
  ],
  exercises: [
    { type: 'fill', prompt: 'Informal: "find out" → Formal: ___', answers: ['discover', 'ascertain'] },
    { type: 'fill', prompt: 'Informal: "put off" → Formal: ___', answers: ['postpone'] },
    { type: 'fill', prompt: 'Informal: "help" → Formal: ___', answers: ['assist'] },
    { type: 'fill', prompt: 'Informal: "enough" → Formal: ___', answers: ['sufficient'] },
    { type: 'fill', prompt: 'We ___ for any inconvenience caused. (desculpamo-nos)', answers: ['apologise', 'apologize'] },
    { type: 'fill', prompt: 'I am writing ___ your recent order. (a respeito de)', answers: ['regarding', 'concerning', 'about'] },
    {
      type: 'choice',
      prompt: 'Qual frase é FORMAL?',
      options: ["We need more info ASAP.", 'We require further information as soon as possible.', "Gonna need more info soon."],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Para uma mensagem a um colega próximo, o melhor é…',
      options: ['Dear Sir, I hereby request your assistance.', "Hi Pedro, could you give me a hand with the report?", 'To whom it may concern: assistance is required.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Equivalente formal de "So, we put off the meeting.":',
      options: ['Therefore, the meeting was postponed.', 'So the meeting got put off.', 'Therefore we putted off the meeting.'],
      answer: 0,
    },
    { type: 'reorder', words: ['Applicants', 'are', 'required', 'to', 'submit', 'two', 'references', '.'], translation: 'Os candidatos devem enviar duas referências.' },
    {
      type: 'transform',
      instruction: 'Reescreva em registro formal: "We need you to send us the documents."',
      prompt: 'We need you to send us the documents.',
      answers: ['We require you to send us the documents.', 'Please send us the documents.', 'We would be grateful if you could send us the documents.', 'We kindly request that you send us the documents.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva em registro formal: "Prices went up a lot."',
      prompt: 'Prices went up a lot.',
      answers: ['Prices increased significantly.', 'Prices rose significantly.', 'Prices increased considerably.', 'Prices rose considerably.', 'There was a significant increase in prices.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva em registro formal (comece com "We apologise").',
      prompt: "Sorry we're late with the delivery.",
      answers: ['We apologise for the late delivery.', 'We apologize for the late delivery.', 'We apologise for the delay in delivery.', 'We apologize for the delay in delivery.', 'We apologise for the delay in the delivery.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O curso terá início em março.',
      answers: ['The course will commence in March.', 'The course will begin in March.', 'The course will start in March.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva a mesma mensagem duas vezes (3–4 frases cada): (1) para um amigo e (2) para um cliente — avisando que uma entrega vai atrasar uma semana e pedindo desculpas.',
      model: "Informal: Hey Lucas, bad news — your package is going to be a week late. Sorry about that! I'll let you know as soon as it ships.\n\nFormal: Dear Mr Lima, I regret to inform you that your order will be delayed by one week. We sincerely apologise for any inconvenience this may cause. We will notify you as soon as the item has been dispatched.",
      checklist: ['Informal: contrações, phrasal verbs, tom pessoal', 'Formal: sem contrações, vocabulário latino', 'Formal: apologise / regret to inform / notify', 'Mesma informação nas duas versões'],
    },
  ],
}
