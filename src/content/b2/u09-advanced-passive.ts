import type { UnitData } from '../types'

export const u09: UnitData = {
  slug: 'advanced-passive',
  title: 'Passiva avançada',
  summary: 'It is said that…, He is believed to…, be supposed to e a passiva com dois objetos.',
  theory: [
    {
      title: 'Passiva impessoal: It is said that…',
      body: `Usada em notícias e textos formais para relatar opiniões gerais (*say, believe, think, know, report, expect*):

- ***It is said that** the house is haunted.* — Dizem que a casa é mal-assombrada.
- ***It was reported that** two people were injured.*`,
    },
    {
      title: 'Sujeito + be said to…',
      body: `A mesma ideia, começando pela pessoa ou coisa:

- *The house **is said to be** haunted.*
- *He **is believed to live** in Spain.* — Acredita-se que ele more na Espanha.
- Para o passado, **to have + particípio**: *She **is thought to have left** the country.* — Acredita-se que ela tenha deixado o país.`,
    },
    {
      title: 'be supposed to',
      body: `- Expectativa / regra: *You **are supposed to** wear a helmet.* — Era para você usar capacete.
- O que se diz: *This restaurant **is supposed to be** excellent.*
- Plano que não deu certo: *The train **was supposed to** arrive at 9.*`,
    },
    {
      title: 'Verbos com dois objetos',
      body: `*They gave **me** **a prize**.* → duas passivas possíveis, a primeira é mais natural:

- ***I was given** a prize.*
- *A prize was given to me.*

Também com *send, offer, show, tell, ask*: *I **was offered** a job. We **were told** to wait.*`,
    },
  ],
  vocab: [
    { en: 'haunted', pt: 'mal-assombrado' },
    { en: 'to believe', pt: 'acreditar' },
    { en: 'to report', pt: 'relatar, noticiar' },
    { en: 'to expect', pt: 'esperar, prever' },
    { en: 'to injure', pt: 'ferir' },
    { en: 'helmet', pt: 'capacete' },
    { en: 'suspect', pt: 'suspeito' },
    { en: 'to estimate', pt: 'estimar' },
    { en: 'to award', pt: 'conceder, premiar' },
  ],
  exercises: [
    { type: 'fill', prompt: 'It is ___ that the house is haunted. (say)', answers: ['said'] },
    { type: 'fill', prompt: 'He is believed ___ live in Spain.', answers: ['to'] },
    { type: 'fill', prompt: 'You are ___ to wear a helmet here.', answers: ['supposed'] },
    { type: 'fill', prompt: 'The suspect is thought to ___ left the country. (passado)', answers: ['have'] },
    { type: 'fill', prompt: 'I ___ offered a new job last week.', answers: ['was'] },
    { type: 'fill', prompt: 'It ___ expected that prices will rise next year.', answers: ['is'] },
    { type: 'fill', prompt: 'The train was supposed ___ arrive at 9, but it was late.', answers: ['to'] },
    {
      type: 'choice',
      prompt: '"Dizem que ele é muito rico."',
      options: ['He is said to be very rich.', 'He says to be very rich.', 'It is said him to be very rich.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Forma mais natural na passiva: "They gave me a prize."',
      options: ['I was given a prize.', 'Me was given a prize.', 'I was gave a prize.'],
      answer: 0,
    },
    { type: 'reorder', words: ['This', 'restaurant', 'is', 'supposed', 'to', 'be', 'excellent', '.'], translation: 'Dizem que este restaurante é excelente.' },
    { type: 'fixError', prompt: 'She is said that she is the best player.', answers: ['She is said to be the best player.', 'It is said that she is the best player.'] },
    { type: 'fixError', prompt: 'We were told wait outside.', answers: ['We were told to wait outside.'] },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "The painting".',
      prompt: 'It is believed that the painting is worth millions.',
      answers: ['The painting is believed to be worth millions.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "It is".',
      prompt: 'The thief is thought to be in the city.',
      answers: ['It is thought that the thief is in the city.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para a voz passiva começando com "She".',
      prompt: 'The company offered her a promotion.',
      answers: ['She was offered a promotion.', 'She was offered a promotion by the company.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Estima-se que mil pessoas participaram.',
      answers: ['It is estimated that a thousand people took part.', 'It is estimated that one thousand people took part.', 'It is estimated that a thousand people participated.', 'It is estimated that one thousand people participated.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva uma pequena notícia (5 frases) sobre um evento real ou inventado usando passiva impessoal (It is reported that…, is believed to…) e be supposed to.',
      model: "A fire broke out in a shopping centre in the city centre last night. It is reported that nobody was seriously injured. The fire is believed to have started in a restaurant kitchen. More than 300 people were evacuated. The shopping centre was supposed to reopen today, but it will remain closed until next week.",
      checklist: ['It is said/reported/believed that…', 'sujeito + is believed to + verbo', 'to have + particípio para o passado', 'Tom formal de notícia'],
    },
  ],
}
