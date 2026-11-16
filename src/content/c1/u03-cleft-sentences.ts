import type { UnitData } from '../types'

export const u03: UnitData = {
  slug: 'cleft-sentences',
  title: 'Cleft sentences (frases clivadas)',
  summary: 'It was John who…, What I need is…, All I want is…: destacando a informação principal.',
  theory: [
    {
      title: 'It is/was … that/who …',
      body: `Destaca **um elemento** da frase — como "foi … que" em português:

- *John broke the window.* → ***It was John who** broke the window.* (não outra pessoa)
- *I met her in Rome.* → ***It was in Rome that** I met her.*
- *It's not the money **that** worries me, it's the time.*`,
    },
    {
      title: 'What … is/was …',
      body: `Destaca a **ação ou o objeto**, colocando-o no fim (posição de destaque em inglês):

- *I need a holiday.* → ***What I need is** a holiday.*
- *She hates rudeness.* → ***What she hates is** rudeness.*
- Para ações, use **do**: ***What I did was (to) call** the police.* / ***What you should do is** talk to her.*`,
    },
    {
      title: 'Variações',
      body: `- **All I want is** some peace. — Tudo o que eu quero é…
- **The thing that** annoys me **is** his attitude.
- **The reason (why)** I left **was that** I was bored.
- **The place where** we met **was** a small café.
- **The person who** helped me most **was** my teacher.`,
    },
  ],
  vocab: [
    { en: 'rudeness', pt: 'grosseria' },
    { en: 'to annoy', pt: 'irritar' },
    { en: 'attitude', pt: 'atitude' },
    { en: 'peace', pt: 'paz' },
    { en: 'to emphasise', pt: 'enfatizar' },
    { en: 'honesty', pt: 'honestidade' },
    { en: 'to appreciate', pt: 'valorizar, apreciar' },
    { en: 'to bother', pt: 'incomodar' },
  ],
  exercises: [
    { type: 'fill', prompt: 'It was John ___ broke the window.', answers: ['who', 'that'] },
    { type: 'fill', prompt: 'It was in Rome ___ I met her.', answers: ['that'] },
    { type: 'fill', prompt: '___ I need is a long holiday.', answers: ['What'] },
    { type: 'fill', prompt: '___ I want is some peace and quiet. (tudo o que)', answers: ['All'] },
    { type: 'fill', prompt: 'What I did ___ call the police.', answers: ['was'] },
    { type: 'fill', prompt: 'The reason I left ___ that I was bored.', answers: ['was'] },
    {
      type: 'choice',
      prompt: '"Foi a Maria que ligou, não a Ana."',
      options: ['It was Maria who called, not Ana.', 'Was Maria who called, not Ana.', 'It was Maria which called, not Ana.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Qual destaca a AÇÃO?',
      options: ['What I did was apologise.', 'What I did it was apologise.', 'What did I was apologise.'],
      answer: 0,
    },
    { type: 'reorder', words: ['What', 'I', 'appreciate', 'most', 'is', 'honesty', '.'], translation: 'O que eu mais valorizo é a honestidade.' },
    { type: 'reorder', words: ['It', "wasn't", 'until', 'midnight', 'that', 'she', 'arrived', '.'], translation: 'Ela só chegou à meia-noite.' },
    { type: 'fixError', prompt: 'What I need it is more time.', answers: ['What I need is more time.'] },
    { type: 'fixError', prompt: 'Was my sister who told me the news.', answers: ['It was my sister who told me the news.', 'It was my sister that told me the news.'] },
    {
      type: 'transform',
      instruction: 'Destaque "his attitude" começando com "What".',
      prompt: 'His attitude bothers me.',
      answers: ['What bothers me is his attitude.'],
    },
    {
      type: 'transform',
      instruction: 'Destaque "last Friday" começando com "It was".',
      prompt: 'We signed the contract last Friday.',
      answers: ['It was last Friday that we signed the contract.', 'It was last Friday when we signed the contract.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "What you should do".',
      prompt: 'You should talk to your manager.',
      answers: ['What you should do is talk to your manager.', 'What you should do is to talk to your manager.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O que me preocupa é o prazo.',
      answers: ['What worries me is the deadline.', 'What concerns me is the deadline.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases sobre o que você valoriza num emprego, usando ao menos 3 tipos de cleft sentence (It is…that, What…is, All…is, The reason…is).',
      model: "What I value most in a job is flexibility. It is not the salary that motivates me, but the chance to learn. All I ask for is respect and clear communication. The reason I left my last job was that I had no time for my family. What I would like to do next is lead a small team.",
      checklist: ['It is/was + destaque + that/who', 'What + sujeito + verbo + is', 'Sem pronome extra ("What I need it is" ✘)'],
    },
  ],
}
