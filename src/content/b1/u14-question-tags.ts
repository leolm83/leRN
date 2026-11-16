import type { UnitData } from '../types'

export const u14: UnitData = {
  slug: 'question-tags',
  title: 'Question tags',
  summary: 'O "né?", "não é?" do inglês: It\'s cold, isn\'t it? / You don\'t smoke, do you?',
  theory: [
    {
      title: 'A regra',
      body: `A tag repete o **auxiliar** da frase com o **pronome** do sujeito, e **inverte** a polaridade:

- Frase **afirmativa** → tag **negativa**: *It's cold, **isn't it**?*
- Frase **negativa** → tag **afirmativa**: *You don't smoke, **do you**?*

Sempre com **vírgula** antes da tag e **?** no fim.`,
    },
    {
      title: 'Qual auxiliar usar',
      body: `- be: *She **is** tired, **isn't she**?*
- Present Simple (sem auxiliar visível) → **do/does**: *You **like** jazz, **don't you**? / He **works** here, **doesn't he**?*
- Past Simple → **did**: *They **left** early, **didn't they**?*
- Present Perfect → **have/has**: *You**'ve** been there, **haven't you**?*
- Modais → o próprio modal: *She **can** swim, **can't she**? / You**'ll** come, **won't you**?*`,
    },
    {
      title: 'Casos especiais',
      body: `- **I am** → ***aren't I***: *I'm late, aren't I?*
- **Let's** → ***shall we***: *Let's go, shall we?*
- Imperativo → ***will you***: *Close the door, will you?*
- **never, nothing, nobody** já são negativos → tag afirmativa: *She **never** calls, **does she**?*
- **there is** → ***isn't there***: *There's a problem, isn't there?*`,
    },
  ],
  vocab: [
    { en: 'tag', pt: 'etiqueta; pergunta curta no fim' },
    { en: 'to agree', pt: 'concordar' },
    { en: 'to confirm', pt: 'confirmar' },
    { en: 'weather', pt: 'tempo, clima' },
    { en: 'lovely', pt: 'lindo, ótimo' },
    { en: 'boring', pt: 'chato, entediante' },
    { en: 'expensive', pt: 'caro' },
    { en: 'right?', pt: 'né? certo? (informal)' },
  ],
  exercises: [
    { type: 'fill', prompt: "It's cold today, ___ it?", answers: ["isn't", 'is not'] },
    { type: 'fill', prompt: "You don't smoke, ___ you?", answers: ['do'] },
    { type: 'fill', prompt: 'She works in a bank, ___ she?', answers: ["doesn't", 'does not'] },
    { type: 'fill', prompt: 'They left early, ___ they?', answers: ["didn't", 'did not'] },
    { type: 'fill', prompt: "You've been to Rome, ___ you?", answers: ["haven't", 'have not'] },
    { type: 'fill', prompt: 'He can drive, ___ he?', answers: ["can't", 'cannot'] },
    { type: 'fill', prompt: "I'm late, ___ I?", answers: ["aren't"] },
    { type: 'fill', prompt: "Let's order a pizza, ___ we?", answers: ['shall'] },
    {
      type: 'choice',
      prompt: 'She never calls you, ___?',
      options: ["doesn't she", 'does she', "isn't she"],
      answer: 1,
      explanation: 'never já é negativo, então a tag é afirmativa.',
    },
    {
      type: 'choice',
      prompt: "You'll help me, ___?",
      options: ["won't you", "don't you", "aren't you"],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: "There's a problem, ___?",
      options: ["isn't it", "isn't there", "doesn't it"],
      answer: 1,
    },
    { type: 'reorder', words: ['The', 'film', 'was', 'boring', ',', "wasn't", 'it', '?'], translation: 'O filme foi chato, não foi?' },
    { type: 'fixError', prompt: "He likes football, isn't he?", answers: ["He likes football, doesn't he?"] },
    { type: 'fixError', prompt: "You didn't call her, didn't you?", answers: ["You didn't call her, did you?"] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Está caro, não está?',
      answers: ["It's expensive, isn't it?", "It is expensive, isn't it?"],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Você mora aqui, né?',
      answers: ["You live here, don't you?", 'You live here, right?'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases que você usaria para puxar conversa com alguém, cada uma com uma question tag diferente (be, do, did, have, can).',
      model: "Lovely weather today, isn't it? You work on the third floor, don't you? You went to the conference last week, didn't you? You've worked here for a long time, haven't you? You can speak Spanish, can't you?",
      checklist: ['Afirmativa → tag negativa (e vice-versa)', 'Mesmo auxiliar e pronome', 'Vírgula antes da tag e ? no fim'],
    },
  ],
}
