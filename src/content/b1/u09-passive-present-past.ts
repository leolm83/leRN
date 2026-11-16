import type { UnitData } from '../types'

export const u09: UnitData = {
  slug: 'passive-present-past',
  title: 'Voz passiva: presente e passado',
  summary: 'be + particípio: "English is spoken here", "The bridge was built in 1900".',
  theory: [
    {
      title: 'Forma',
      body: `**be (no tempo certo) + particípio passado**

- Presente: *English **is spoken** in many countries.* / *These cars **are made** in Japan.*
- Passado: *The bridge **was built** in 1900.* / *The windows **were broken**.*

O objeto da frase ativa vira o sujeito da passiva:
*Someone **stole** my bike.* → *My bike **was stolen**.*`,
    },
    {
      title: 'Quando usar',
      body: `- Quando **não sabemos** ou **não importa** quem fez: *My phone was stolen.*
- Quando o foco é a **ação ou o resultado**: *The museum is visited by thousands of people.*
- É muito comum em textos formais, notícias e instruções.

Para dizer quem fez, use **by**: *Hamlet **was written by** Shakespeare.*`,
    },
    {
      title: 'Negativa e pergunta',
      body: `Mexemos só no **be**:

- *The email **wasn't sent**.*
- ***Is** breakfast **included**?*
- ***Where were** these photos **taken**?*`,
    },
  ],
  vocab: [
    { en: 'to build', pt: 'construir' },
    { en: 'to steal', pt: 'roubar' },
    { en: 'to invent', pt: 'inventar' },
    { en: 'to grow', pt: 'cultivar, crescer' },
    { en: 'to include', pt: 'incluir' },
    { en: 'to make', pt: 'fazer, fabricar' },
    { en: 'bridge', pt: 'ponte' },
    { en: 'painting', pt: 'pintura, quadro' },
    { en: 'by', pt: 'por (agente da passiva)' },
    { en: 'worldwide', pt: 'no mundo todo' },
  ],
  exercises: [
    { type: 'fill', prompt: 'English ___ spoken in many countries.', answers: ['is'] },
    { type: 'fill', prompt: 'The bridge was ___ (build) in 1900.', answers: ['built'] },
    { type: 'fill', prompt: 'My bike ___ stolen last night.', answers: ['was'] },
    { type: 'fill', prompt: 'Coffee ___ grown in Brazil and Colombia.', answers: ['is'] },
    { type: 'fill', prompt: 'These photos were taken ___ my grandfather.', answers: ['by'] },
    { type: 'fill', prompt: '___ breakfast included in the price?', answers: ['Is'] },
    { type: 'fill', prompt: 'The Mona Lisa was ___ (paint) by Leonardo da Vinci.', answers: ['painted'] },
    {
      type: 'choice',
      prompt: '"O telefone foi inventado por Bell."',
      options: ['The telephone invented by Bell.', 'The telephone was invented by Bell.', 'The telephone is invent by Bell.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual frase está na voz passiva?',
      options: ['They make cars here.', 'Cars are made here.', 'Cars make noise.'],
      answer: 1,
    },
    { type: 'reorder', words: ['The', 'windows', 'were', 'cleaned', 'yesterday', '.'], translation: 'As janelas foram limpas ontem.' },
    { type: 'fixError', prompt: 'The letter was wrote by my mother.', answers: ['The letter was written by my mother.'] },
    { type: 'fixError', prompt: 'These shoes are make in Italy.', answers: ['These shoes are made in Italy.'] },
    {
      type: 'transform',
      instruction: 'Passe para a voz passiva (sem by).',
      prompt: 'Someone stole my wallet.',
      answers: ['My wallet was stolen.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para a voz passiva (com by).',
      prompt: 'Millions of people watch this show.',
      answers: ['This show is watched by millions of people.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Esta casa foi construída em 1950.',
      answers: ['This house was built in 1950.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O e-mail não foi enviado.',
      answers: ["The email wasn't sent.", 'The email was not sent.', "The e-mail wasn't sent.", 'The e-mail was not sent.'],
    },
    {
      type: 'writing',
      prompt: 'Descreva sua cidade ou um produto brasileiro em 5 frases usando a voz passiva (presente e passado).',
      model: "My city was founded in 1897. It is known for its cheese bread and its friendly people. Coffee is grown in the region around the city. A famous church was built by Oscar Niemeyer in the 1940s. Many festivals are organised there every year.",
      checklist: ['be + particípio', 'is/are para o presente, was/were para o passado', 'by só quando o agente importa'],
    },
  ],
}
