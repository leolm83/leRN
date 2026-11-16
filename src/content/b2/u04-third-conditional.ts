import type { UnitData } from '../types'

export const u04: UnitData = {
  slug: 'third-conditional',
  title: 'Condicional 3',
  summary: 'O passado que não aconteceu: "se eu tivesse estudado, teria passado".',
  theory: [
    {
      title: 'Forma',
      body: `**If + Past Perfect, would have + particípio**

Imaginamos um passado **diferente** do que realmente aconteceu:

- *If I **had studied**, I **would have passed**.* — Se eu tivesse estudado, teria passado. (Não estudei, não passei.)
- *If you **had told** me, I **would have helped** you.*
- *She **wouldn't have missed** the flight if she **had left** earlier.*

Também: **could have** (poderia ter), **might have** (talvez tivesse).`,
    },
    {
      title: 'Cuidado com o \'d',
      body: `Na fala, os dois verbos viram **'d**: *If I**'d** known, I**'d** have come.*

- O primeiro **'d** = **had** (depois de *if*)
- O segundo **'d** = **would** (antes de *have*)

Nunca use *would* depois de *if*: "If I would have known" ✘`,
    },
    {
      title: 'Os quatro condicionais',
      body: `- **0**: *If you heat ice, it melts.* (sempre)
- **1**: *If it rains, I'll stay home.* (futuro provável)
- **2**: *If I had money, I'd travel.* (presente/futuro imaginário)
- **3**: *If I had had money, I'd have travelled.* (passado imaginário)`,
    },
  ],
  vocab: [
    { en: 'regret', pt: 'arrependimento' },
    { en: 'to miss', pt: 'perder (voo, ônibus)' },
    { en: 'traffic jam', pt: 'engarrafamento' },
    { en: 'to warn', pt: 'avisar' },
    { en: 'accident', pt: 'acidente' },
    { en: 'to notice', pt: 'perceber, notar' },
    { en: 'to avoid', pt: 'evitar' },
    { en: 'earlier', pt: 'mais cedo' },
    { en: 'luckily', pt: 'por sorte' },
  ],
  exercises: [
    { type: 'fill', prompt: 'If I had studied, I would ___ passed.', answers: ['have'] },
    { type: 'fill', prompt: 'If you ___ told me, I would have helped you.', answers: ['had'] },
    { type: 'fill', prompt: 'She would have caught the train if she had ___ (leave) earlier.', answers: ['left'] },
    { type: 'fill', prompt: "If it hadn't rained, we ___ (go) to the beach.", answers: ['would have gone', "'d have gone"] },
    { type: 'fill', prompt: "I ___ (not / call) you if it hadn't been important.", answers: ["wouldn't have called", 'would not have called'] },
    { type: 'fill', prompt: "If we had left earlier, we ___ have avoided the traffic jam. (poderíamos)", answers: ['could'] },
    {
      type: 'choice',
      prompt: '"Se eu soubesse, teria vindo." (passado)',
      options: ['If I knew, I would come.', 'If I had known, I would have come.', 'If I would have known, I had come.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"If I\'d seen him, I\'d have said hello." — os \'d são…',
      options: ['had … would', 'would … had', 'would … would'],
      answer: 0,
    },
    { type: 'reorder', words: ['If', 'he', 'had', 'warned', 'us', ',', 'we', 'would', 'have', 'stayed', 'home', '.'], translation: 'Se ele tivesse nos avisado, teríamos ficado em casa.' },
    { type: 'fixError', prompt: 'If I would have known, I would have come.', answers: ['If I had known, I would have come.', "If I'd known, I would have come.", "If I had known, I'd have come."] },
    { type: 'fixError', prompt: 'If she had asked me, I would helped her.', answers: ['If she had asked me, I would have helped her.', "If she had asked me, I'd have helped her."] },
    {
      type: 'transform',
      instruction: 'Escreva uma frase no 3º condicional sobre a situação.',
      prompt: "I didn't set the alarm, so I missed the meeting.",
      answers: ['If I had set the alarm, I would not have missed the meeting.', "If I had set the alarm, I wouldn't have missed the meeting.", "If I'd set the alarm, I wouldn't have missed the meeting.", "I wouldn't have missed the meeting if I had set the alarm."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Se você tivesse me ligado, eu teria ido.',
      answers: ['If you had called me, I would have gone.', "If you had called me, I'd have gone.", "If you'd called me, I'd have gone.", 'If you had called me, I would have come.', "If you'd called me, I would have gone.", 'If you had phoned me, I would have gone.'],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: "If we hadn't noticed the smoke, there could have been a terrible accident.",
      answers: ['Se não tivéssemos percebido a fumaça, poderia ter havido um acidente terrível.', 'Se nós não tivéssemos percebido a fumaça, poderia ter acontecido um acidente terrível.', 'Se não tivéssemos notado a fumaça, poderia ter acontecido um acidente terrível.', 'Se não tivéssemos notado a fumaça, poderia ter havido um acidente terrível.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva sobre uma decisão importante da sua vida e o que teria acontecido de diferente (5 frases no 3º condicional).',
      model: "Five years ago I decided to study programming. If I hadn't made that decision, I would have stayed in my old job. I wouldn't have met my current friends. If I had chosen medicine, I would have studied for six more years. Luckily, I think I made the right choice.",
      checklist: ['if + had + particípio', 'would/could/might have + particípio', 'Nunca would depois de if'],
    },
  ],
}
