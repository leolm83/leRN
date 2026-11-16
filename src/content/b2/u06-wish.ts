import type { UnitData } from '../types'

export const u06: UnitData = {
  slug: 'wish-if-only',
  title: 'wish e if only',
  summary: 'Desejos e arrependimentos: I wish I had…, I wish I had done…, I wish you would…',
  theory: [
    {
      title: 'Desejo sobre o presente: wish + passado',
      body: `Como no 2º condicional, o passado indica algo **irreal agora**:

- *I **wish** I **had** more time.* — Queria ter mais tempo. (não tenho)
- *I **wish** I **were** taller.* — Queria ser mais alto. (**were** para todas as pessoas na escrita)
- *I **wish** I **could** speak Japanese.*`,
    },
    {
      title: 'Arrependimento sobre o passado: wish + Past Perfect',
      body: `- *I **wish** I **had studied** more.* — Queria ter estudado mais. (não estudei)
- *She **wishes** she **hadn't said** that.*

**If only** é a versão mais enfática: ***If only** I **had listened** to you!* — Se ao menos eu tivesse te ouvido!`,
    },
    {
      title: 'Irritação: wish + would',
      body: `Para reclamar de algo que **outra pessoa** faz (ou não faz) e queremos que mude:

- *I **wish** you **would stop** making that noise.*
- *I **wish** it **would stop** raining.*

Não use *would* com você mesmo: "I wish I would…" ✘ → *I wish I could…*`,
    },
    {
      title: 'wish × hope',
      body: `- **hope** = algo **possível**: *I **hope** you **pass** the exam.*
- **wish** = algo **irreal** ou **impossível**: *I **wish** I **had** passed the exam.*`,
    },
  ],
  vocab: [
    { en: 'to wish', pt: 'desejar, queria que' },
    { en: 'if only', pt: 'se ao menos' },
    { en: 'to hope', pt: 'esperar (ter esperança)' },
    { en: 'to complain', pt: 'reclamar' },
    { en: 'noise', pt: 'barulho' },
    { en: 'to listen to', pt: 'ouvir, escutar' },
    { en: 'to regret', pt: 'arrepender-se' },
    { en: 'tall', pt: 'alto' },
    { en: 'advice', pt: 'conselho' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I wish I ___ (have) more free time. (agora)', answers: ['had'] },
    { type: 'fill', prompt: 'I wish I ___ (study) harder at school. (passado)', answers: ['had studied'] },
    { type: 'fill', prompt: 'I wish I ___ taller. (be)', answers: ['were', 'was'] },
    { type: 'fill', prompt: 'I wish you ___ stop interrupting me! (irritação)', answers: ['would'] },
    { type: 'fill', prompt: 'If ___ I had listened to your advice!', answers: ['only'] },
    { type: 'fill', prompt: 'I ___ you have a great trip! (algo possível)', answers: ['hope'] },
    { type: 'fill', prompt: 'She wishes she ___ (not / say) those things. (passado)', answers: ["hadn't said", 'had not said'] },
    {
      type: 'choice',
      prompt: '"Queria saber falar japonês."',
      options: ['I wish I can speak Japanese.', 'I wish I could speak Japanese.', 'I wish I would speak Japanese.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Queria não ter comido tanto."',
      options: ["I wish I didn't eat so much.", "I wish I hadn't eaten so much.", "I hope I hadn't eaten so much."],
      answer: 1,
    },
    { type: 'reorder', words: ['I', 'wish', 'it', 'would', 'stop', 'raining', '.'], translation: 'Queria que parasse de chover.' },
    { type: 'fixError', prompt: 'I wish I have a car.', answers: ['I wish I had a car.'] },
    { type: 'fixError', prompt: 'I wish I would be rich.', answers: ['I wish I were rich.', 'I wish I was rich.'] },
    {
      type: 'transform',
      instruction: 'Expresse o arrependimento com "I wish".',
      prompt: "I didn't go to the concert.",
      answers: ['I wish I had gone to the concert.', "I wish I'd gone to the concert."],
    },
    {
      type: 'transform',
      instruction: 'Expresse o desejo com "I wish".',
      prompt: "I don't live near the beach.",
      answers: ['I wish I lived near the beach.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Se ao menos eu tivesse mais dinheiro!',
      answers: ['If only I had more money!'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases: 2 desejos sobre o presente, 2 arrependimentos do passado e 1 reclamação com wish + would.',
      model: "I wish I had more time to read. I wish I could play the guitar. I wish I had started learning English earlier. I wish I hadn't sold my old bike. I wish my neighbours would stop playing loud music at night.",
      checklist: ['wish + passado para o presente', 'wish + had + particípio para o passado', 'wish + would só para os outros', 'hope para coisas possíveis'],
    },
  ],
}
