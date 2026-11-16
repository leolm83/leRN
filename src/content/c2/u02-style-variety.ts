import type { UnitData } from '../types'

export const u02: UnitData = {
  slug: 'style-variety',
  title: 'Estilo: paralelismo, ritmo e variedade',
  summary: 'Estruturas paralelas, variação no tamanho das frases, fronting e o lugar da informação nova.',
  theory: [
    {
      title: 'Paralelismo',
      body: `Itens de uma lista ou comparação devem ter a **mesma forma gramatical**:

- ✘ *She likes **reading**, **to swim** and **cooking**.*
- ✔ *She likes **reading**, **swimming** and **cooking**.*
- ✘ *The job requires **creativity**, **being patient** and **that you work hard**.*
- ✔ *The job requires **creativity**, **patience** and **dedication**.*

Pares correlativos também: *not only **X** but also **Y**, either **X** or **Y**, both **X** and **Y*** — X e Y com a mesma forma.`,
    },
    {
      title: 'Ritmo e variedade',
      body: `Frases todas do mesmo tamanho cansam. Alterne:

- frases longas, com subordinação, para explicar e conectar ideias;
- frases **curtas** para dar **impacto**.

*The team had worked for months, testing every feature and fixing hundreds of bugs before the launch. It failed anyway.*`,
    },
    {
      title: 'Informação conhecida → nova (end-focus)',
      body: `Em inglês, a posição de destaque é o **fim** da frase. Comece com o que o leitor já sabe e termine com a novidade:

*The company launched a new app. **The app** was developed **by a team of only three people**.*

**Fronting** (antecipar um elemento) cria ênfase ou contraste:
- ***Particularly important** is the final section.*
- ***This** I cannot accept.*
- ***Gone** are the days when…*`,
    },
  ],
  vocab: [
    { en: 'parallelism', pt: 'paralelismo' },
    { en: 'rhythm', pt: 'ritmo' },
    { en: 'impact', pt: 'impacto' },
    { en: 'to emphasise', pt: 'enfatizar' },
    { en: 'consistent', pt: 'consistente, coerente' },
    { en: 'dedication', pt: 'dedicação' },
    { en: 'patience', pt: 'paciência' },
    { en: 'flow', pt: 'fluidez' },
    { en: 'monotonous', pt: 'monótono' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She enjoys hiking, swimming and ___ (cycle).', answers: ['cycling'] },
    { type: 'fill', prompt: 'The role requires creativity, patience and ___. (dedicação)', answers: ['dedication'] },
    { type: 'fill', prompt: 'You can either call me ___ send me an email.', answers: ['or'] },
    { type: 'fill', prompt: 'He is not only talented ___ also hard-working.', answers: ['but'] },
    { type: 'fill', prompt: '___ are the days when people wrote letters by hand. (fronting)', answers: ['Gone'] },
    {
      type: 'choice',
      prompt: 'Qual frase tem paralelismo correto?',
      options: [
        'The course teaches you how to write, to speak and listening.',
        'The course teaches you how to write, speak and listen.',
        'The course teaches you writing, to speak and how to listen.',
      ],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual frase tem paralelismo correto?',
      options: ['She was both intelligent and a hard worker.', 'She was both intelligent and hard-working.', 'She was both intelligence and hard-working.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual segunda frase segue melhor o princípio "conhecido → novo"? "Researchers discovered a new species of frog."',
      options: ['A small lake in the Amazon is where the frog was found.', 'The frog was found in a small lake in the Amazon.'],
      answer: 1,
    },
    { type: 'fixError', prompt: 'My goals are to improve my English, getting a better job and travel more.', answers: ['My goals are to improve my English, get a better job and travel more.', 'My goals are to improve my English, to get a better job and to travel more.'] },
    { type: 'fixError', prompt: 'The manager praised her for her accuracy, speed and because she was reliable.', answers: ['The manager praised her for her accuracy, speed and reliability.'] },
    { type: 'fixError', prompt: 'Either you accept the offer or rejecting it.', answers: ['Either you accept the offer or you reject it.', 'You either accept the offer or reject it.', 'Either accept the offer or reject it.'] },
    {
      type: 'transform',
      instruction: 'Use fronting começando com "Particularly worrying".',
      prompt: 'The rise in youth unemployment is particularly worrying.',
      answers: ['Particularly worrying is the rise in youth unemployment.'],
    },
    {
      type: 'reorder',
      words: ['Not', 'only', 'did', 'she', 'write', 'the', 'report', ',', 'but', 'she', 'also', 'presented', 'it', '.'],
      translation: 'Ela não só escreveu o relatório como também o apresentou.',
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O candidato ideal é organizado, criativo e confiável.',
      answers: ['The ideal candidate is organised, creative and reliable.', 'The ideal candidate is organized, creative and reliable.', 'The ideal candidate is organised, creative, and reliable.', 'The ideal candidate is organized, creative, and reliable.'],
    },
    {
      type: 'writing',
      prompt: 'Reescreva o parágrafo variando o tamanho das frases (inclua ao menos uma frase curta de impacto) e corrigindo o paralelismo: "I moved to London in 2019. I didn\'t know anyone there. I wanted to find a job, improving my English and to make friends. The first months were hard. I felt lonely. Things changed when I joined a running club."',
      model: "When I moved to London in 2019, I didn't know a single person. I wanted to find a job, improve my English and make friends, but the first months were hard and I often felt lonely. Then I joined a running club. Everything changed.",
      checklist: ['Paralelismo nas listas', 'Frases longas e curtas alternadas', 'Uma frase curta de impacto', 'Conectores que dão fluidez'],
    },
  ],
}
