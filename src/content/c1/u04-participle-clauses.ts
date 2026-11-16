import type { UnitData } from '../types'

export const u04: UnitData = {
  slug: 'participle-clauses',
  title: 'Participle clauses (orações reduzidas)',
  summary: 'Walking home, I saw…; Built in 1900, the house…; Having finished, she left. Concisão na escrita.',
  theory: [
    {
      title: 'Particípio presente (-ing): ação ativa e simultânea',
      body: `Substitui *when/while/because/as + sujeito + verbo* quando **o sujeito é o mesmo**:

- *While I was walking home, I saw an accident.* → ***Walking** home, I saw an accident.*
- *Because she felt tired, she went to bed.* → ***Feeling** tired, she went to bed.*
- Também resume relativas: *The woman **who is sitting** there* → *The woman **sitting** there*`,
    },
    {
      title: 'Particípio passado: sentido passivo',
      body: `- *The house, **which was built** in 1900, …* → *The house, **built** in 1900, …*
- ***Written** in simple English, the book is easy to read.*
- ***Asked** about the decision, the minister refused to comment.*`,
    },
    {
      title: 'Having + particípio: ação anterior',
      body: `- *After she had finished the report, she went home.* → ***Having finished** the report, she went home.*
- Passiva: ***Having been told** the news, he called his family.*
- Negativa: ***Not having** studied, I failed the test.*`,
    },
    {
      title: 'Cuidado: dangling participle',
      body: `O sujeito da oração principal **tem** que ser quem pratica a ação do particípio:

- ***Walking** into the room, **the lights** went out.* ✘ (as luzes não estavam andando!)
- ***Walking** into the room, **I** noticed the lights had gone out.* ✔`,
    },
  ],
  vocab: [
    { en: 'to comment', pt: 'comentar' },
    { en: 'minister', pt: 'ministro' },
    { en: 'to notice', pt: 'perceber' },
    { en: 'to approach', pt: 'aproximar-se' },
    { en: 'concise', pt: 'conciso' },
    { en: 'to refuse', pt: 'recusar-se' },
    { en: 'to publish', pt: 'publicar' },
    { en: 'to surround', pt: 'cercar, rodear' },
    { en: 'evidence', pt: 'evidências, provas' },
  ],
  exercises: [
    { type: 'fill', prompt: '___ (walk) home, I saw an old friend.', answers: ['Walking'] },
    { type: 'fill', prompt: '___ (build) in 1900, the house needs a lot of repairs.', answers: ['Built'] },
    { type: 'fill', prompt: 'Having ___ (finish) the report, she went home.', answers: ['finished'] },
    { type: 'fill', prompt: '___ (feel) tired, he decided to stay in.', answers: ['Feeling'] },
    { type: 'fill', prompt: 'The man ___ (sit) next to me was very loud.', answers: ['sitting'] },
    { type: 'fill', prompt: '___ been told the news, he called his parents.', answers: ['Having'] },
    { type: 'fill', prompt: '___ having studied, I failed the test.', answers: ['Not'] },
    {
      type: 'choice',
      prompt: 'Qual NÃO tem "dangling participle"?',
      options: ['Running for the bus, my phone fell.', 'Running for the bus, I dropped my phone.', 'Running for the bus, the phone dropped.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Publicado em 2010, o livro vendeu milhões."',
      options: ['Publishing in 2010, the book sold millions.', 'Published in 2010, the book sold millions.', 'Having publishing in 2010, the book sold millions.'],
      answer: 1,
    },
    { type: 'reorder', words: ['Surrounded', 'by', 'mountains', ',', 'the', 'village', 'is', 'very', 'quiet', '.'], translation: 'Cercado por montanhas, o vilarejo é muito tranquilo.' },
    { type: 'fixError', prompt: 'Having finish the work, we went for a drink.', answers: ['Having finished the work, we went for a drink.'] },
    { type: 'fixError', prompt: 'Knowing not the answer, she stayed silent.', answers: ['Not knowing the answer, she stayed silent.'] },
    {
      type: 'transform',
      instruction: 'Reduza com particípio (-ing).',
      prompt: 'Because he didn\'t know the way, he asked for directions.',
      answers: ['Not knowing the way, he asked for directions.'],
    },
    {
      type: 'transform',
      instruction: 'Reduza com Having + particípio.',
      prompt: 'After they had analysed the evidence, they reached a decision.',
      answers: ['Having analysed the evidence, they reached a decision.', 'Having analyzed the evidence, they reached a decision.'],
    },
    {
      type: 'transform',
      instruction: 'Reduza a oração relativa.',
      prompt: 'The documents that were sent yesterday contained errors.',
      answers: ['The documents sent yesterday contained errors.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Perguntado sobre o acidente, o motorista se recusou a comentar.',
      answers: ['Asked about the accident, the driver refused to comment.', 'When asked about the accident, the driver refused to comment.'],
    },
    {
      type: 'writing',
      prompt: 'Reescreva este trecho de forma mais concisa usando participle clauses: "I opened the email and I saw that I had got the job. I was very excited and I called my mother. After I had told her, I went out to celebrate. The restaurant, which was located near my house, was full."',
      model: "Opening the email, I saw that I had got the job. Feeling very excited, I called my mother. Having told her, I went out to celebrate. The restaurant, located near my house, was full.",
      checklist: ['-ing para ação ativa simultânea', 'Particípio passado para sentido passivo', 'Having + particípio para ação anterior', 'Mesmo sujeito nas duas orações'],
    },
  ],
}
