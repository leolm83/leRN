import type { UnitData } from '../types'

export const u05: UnitData = {
  slug: 'confusable-words',
  title: 'Precisão lexical: palavras confundidas',
  summary: 'affect/effect, imply/infer, fewer/less, comprise, ensure/insure e falsos cognatos traiçoeiros.',
  theory: [
    {
      title: 'Pares confundidos até por nativos',
      body: ``,
      table: {
        head: ['Par', 'Diferença'],
        rows: [
          ['affect / effect', '**affect** = verbo (afetar) · **effect** = substantivo (efeito)'],
          ['imply / infer', '**imply** = insinuar (quem fala) · **infer** = deduzir (quem ouve)'],
          ['fewer / less', '**fewer** + contáveis (fewer people) · **less** + incontáveis (less time)'],
          ['ensure / insure', '**ensure** = garantir · **insure** = fazer seguro'],
          ['principal / principle', '**principal** = principal, diretor · **principle** = princípio'],
          ['complement / compliment', '**complement** = complementar · **compliment** = elogio'],
          ['comprise / consist of', '**comprise** sem *of*: The team **comprises** five people.'],
          ['economic / economical', '**economic** = da economia · **economical** = econômico, que poupa'],
          ['historic / historical', '**historic** = marcante · **historical** = relativo à história'],
          ['continual / continuous', '**continual** = repetido com pausas · **continuous** = sem interrupção'],
        ],
      },
    },
    {
      title: 'Falsos cognatos que ainda escapam no C2',
      body: `- **actually** = na verdade (não "atualmente" → *currently*)
- **eventually** = finalmente, com o tempo (não "eventualmente" → *occasionally*)
- **pretend** = fingir (não "pretender" → *intend*)
- **sensible** = sensato (não "sensível" → *sensitive*)
- **assist** = ajudar (não "assistir" → *watch / attend*)
- **resume** = retomar (não "resumir" → *summarise*)
- **realise** = perceber (não "realizar" → *carry out / fulfil*)
- **fabric** = tecido (não "fábrica" → *factory*)`,
    },
  ],
  vocab: [
    { en: 'to affect', pt: 'afetar' },
    { en: 'effect', pt: 'efeito' },
    { en: 'to imply', pt: 'insinuar, implicar' },
    { en: 'to infer', pt: 'deduzir, inferir' },
    { en: 'to ensure', pt: 'garantir' },
    { en: 'principle', pt: 'princípio' },
    { en: 'compliment', pt: 'elogio' },
    { en: 'currently', pt: 'atualmente' },
    { en: 'to intend', pt: 'pretender' },
    { en: 'sensitive', pt: 'sensível' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The new law will ___ thousands of families. (affect/effect)', answers: ['affect'], strict: true },
    { type: 'fill', prompt: 'The medicine had no ___ on him. (affect/effect)', answers: ['effect'], strict: true },
    { type: 'fill', prompt: 'There were ___ people at the meeting than last time. (fewer/less)', answers: ['fewer'], strict: true },
    { type: 'fill', prompt: 'I have ___ free time this year. (fewer/less)', answers: ['less'], strict: true },
    { type: 'fill', prompt: 'Please ___ that all doors are locked. (ensure/insure)', answers: ['ensure'], strict: true },
    { type: 'fill', prompt: 'It is a matter of ___. (principal/principle)', answers: ['principle'], strict: true },
    { type: 'fill', prompt: 'She paid me a lovely ___. (complement/compliment)', answers: ['compliment'], strict: true },
    { type: 'fill', prompt: 'The committee ___ seven members. (comprises / comprises of)', answers: ['comprises'], strict: true },
    {
      type: 'choice',
      prompt: '"Are you saying I\'m lying?" — quem fala acusa o outro de…',
      options: ['inferring', 'implying'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Atualmente moro em Curitiba."',
      options: ['Actually I live in Curitiba.', 'Currently I live in Curitiba.', 'Eventually I live in Curitiba.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Pretendo mudar de emprego."',
      options: ['I pretend to change jobs.', 'I intend to change jobs.', 'I attend to change jobs.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'A small car is more ___ to run.',
      options: ['economic', 'economical'],
      answer: 1,
    },
    { type: 'fixError', prompt: 'She is very sensible and cries at every film.', answers: ['She is very sensitive and cries at every film.'] },
    { type: 'fixError', prompt: 'After years of hard work, she actually became the director.', answers: ['After years of hard work, she eventually became the director.', 'After years of hard work, she finally became the director.'] },
    { type: 'fixError', prompt: 'The report consists five chapters.', answers: ['The report consists of five chapters.', 'The report comprises five chapters.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Vou resumir os pontos principais.',
      answers: ['I will summarise the main points.', "I'll summarise the main points.", 'I will summarize the main points.', "I'll summarize the main points."],
    },
    {
      type: 'writing',
      prompt: 'Escreva 6 frases sobre seu trabalho ou seus estudos usando corretamente: affect, effect, fewer, less, ensure e eventually.',
      model: "The new schedule has affected the whole team. One positive effect is that we have fewer meetings. As a result, we spend less time travelling. Our manager wants to ensure that everyone meets the deadlines. At first the change was difficult, but eventually we adapted. Currently, productivity is higher than ever.",
      checklist: ['affect (verbo) × effect (substantivo)', 'fewer + contáveis / less + incontáveis', 'eventually = finalmente', 'Nenhum falso cognato'],
    },
  ],
}
