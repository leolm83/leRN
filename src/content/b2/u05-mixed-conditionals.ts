import type { UnitData } from '../types'

export const u05: UnitData = {
  slug: 'mixed-conditionals',
  title: 'Condicionais mistas',
  summary: 'Passado que afeta o presente e presente que explica o passado.',
  theory: [
    {
      title: 'Passado → resultado no presente',
      body: `**If + Past Perfect, would + verbo (agora)**

- *If I **had taken** that job, I **would be** rich now.* — Se eu tivesse aceitado aquele emprego, estaria rico agora.
- *If she **hadn't missed** the flight, she **would be** here today.*

A condição é no passado (3º condicional), o resultado é no presente (2º condicional).`,
    },
    {
      title: 'Característica presente → resultado passado',
      body: `**If + Past Simple, would have + particípio**

- *If I **spoke** French, I **would have understood** the film.* — Se eu falasse francês (não falo), teria entendido o filme.
- *If he **weren't** so shy, he **would have asked** her out.*

A condição é algo **permanente** ou **geral** (2º condicional), o resultado é no passado (3º condicional).`,
    },
    {
      title: 'Como decidir',
      body: `Pergunte separadamente para cada metade: **quando** isso é (ou seria) verdade?

- *now / today / still* → **would + verbo**
- *yesterday / last year / then* → **would have + particípio**`,
    },
  ],
  vocab: [
    { en: 'to ask somebody out', pt: 'chamar alguém para sair' },
    { en: 'to take a job', pt: 'aceitar um emprego' },
    { en: 'shy', pt: 'tímido' },
    { en: 'to be in trouble', pt: 'estar em apuros' },
    { en: 'confident', pt: 'confiante' },
    { en: 'abroad', pt: 'no exterior' },
    { en: 'currently', pt: 'atualmente' },
    { en: 'decision', pt: 'decisão' },
  ],
  exercises: [
    { type: 'fill', prompt: 'If I had taken that job, I would ___ rich now.', answers: ['be'] },
    { type: 'fill', prompt: 'If I spoke French, I would have ___ (understand) the film yesterday.', answers: ['understood'] },
    { type: 'fill', prompt: "If she hadn't missed the flight, she ___ (be) here now.", answers: ['would be', "'d be"] },
    { type: 'fill', prompt: "If he ___ so shy, he would have asked her out. (não fosse)", answers: ["weren't", 'were not', "wasn't", 'was not'] },
    { type: 'fill', prompt: 'If I had studied medicine, I ___ (work) in a hospital now.', answers: ['would be working', "'d be working", 'would work', "'d work"] },
    {
      type: 'choice',
      prompt: '"Se eu tivesse dormido mais ontem, não estaria cansado agora."',
      options: ["If I slept more yesterday, I wouldn't be tired now.", "If I had slept more last night, I wouldn't be tired now.", "If I had slept more last night, I wouldn't have been tired now."],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Se eu fosse mais confiante, teria falado na reunião." (sou tímido em geral)',
      options: ['If I were more confident, I would have spoken at the meeting.', 'If I had been more confident, I would speak at the meeting.', 'If I am more confident, I will speak.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Em "If I had saved money, I would be travelling now", a condição é…',
      options: ['presente', 'passado', 'futuro'],
      answer: 1,
    },
    { type: 'reorder', words: ['If', 'we', 'had', 'left', 'earlier', ',', 'we', 'would', 'be', 'there', 'now', '.'], translation: 'Se tivéssemos saído mais cedo, estaríamos lá agora.' },
    { type: 'fixError', prompt: 'If I had learned English as a child, I would have been fluent now.', answers: ['If I had learned English as a child, I would be fluent now.', "If I had learned English as a child, I'd be fluent now.", 'If I had learnt English as a child, I would be fluent now.'] },
    { type: 'fixError', prompt: 'If I knew him better, I would invite him to the party last week.', answers: ['If I knew him better, I would have invited him to the party last week.', "If I knew him better, I'd have invited him to the party last week."] },
    {
      type: 'transform',
      instruction: 'Escreva uma condicional mista (passado → presente).',
      prompt: "I didn't buy that apartment. Now I don't have a place of my own.",
      answers: ['If I had bought that apartment, I would have a place of my own now.', "If I had bought that apartment, I'd have a place of my own now.", "If I'd bought that apartment, I would have a place of my own now.", "If I'd bought that apartment, I'd have a place of my own now."],
    },
    {
      type: 'transform',
      instruction: 'Escreva uma condicional mista (presente → passado).',
      prompt: "I'm not a good cook, so I didn't make dinner for the party.",
      answers: ['If I were a good cook, I would have made dinner for the party.', "If I were a good cook, I'd have made dinner for the party.", 'If I was a good cook, I would have made dinner for the party.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Se eu tivesse estudado mais, teria um emprego melhor hoje.',
      answers: ['If I had studied more, I would have a better job today.', "If I had studied more, I'd have a better job today.", "If I'd studied more, I would have a better job today.", "If I'd studied more, I'd have a better job today.", 'If I had studied harder, I would have a better job today.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 4 frases com condicionais mistas sobre sua vida: duas do tipo passado → presente e duas do tipo presente → passado.',
      model: "If I had started learning English earlier, I would be fluent now. If I hadn't moved to this city, I wouldn't know my best friend. If I were more organised, I would have finished my course last year. If I didn't love coffee so much, I would have slept better last night.",
      checklist: ['Passado → presente: had + particípio / would + verbo', 'Presente → passado: Past Simple / would have + particípio', 'Marcadores de tempo coerentes'],
    },
  ],
}
