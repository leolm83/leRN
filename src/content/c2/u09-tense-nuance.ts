import type { UnitData } from '../types'

export const u09: UnitData = {
  slug: 'tense-nuance',
  title: 'Nuances de tempo e aspecto',
  summary: 'Passado de distanciamento (I was wondering if…), presente histórico, futuro no passado e verbos de estado no contínuo.',
  theory: [
    {
      title: 'Passado e contínuo para distanciar (polidez)',
      body: `Mover o verbo para o passado e/ou contínuo torna o pedido **mais suave**:

- *I **want** to ask you something.* (direto)
- *I **wanted** to ask you something.* (mais suave)
- *I **was wondering** if you could help me.* (bem educado)
- *Were you **hoping** to leave early?*

O passado aqui **não** fala do passado — é distância social.`,
    },
    {
      title: 'Futuro no passado',
      body: `Para falar do que **ia acontecer** a partir de um ponto passado:

- **was/were going to**: *I **was going to** call you, but I forgot.* — Eu ia te ligar…
- **would**: *She knew she **would** never see him again.*
- **was about to**: *I **was about to** leave when the phone rang.* — Eu estava prestes a sair…
- **was to + verbo** (formal/literário, destino): *It was a decision he **was to regret** for the rest of his life.*`,
    },
    {
      title: 'Verbos de estado no contínuo',
      body: `Alguns verbos de estado aceitam o contínuo com **mudança de sentido** ou para indicar algo **temporário**:

- *I **think** it's a good idea.* (opinião) × *I'm **thinking** about it.* (refletindo)
- *She **has** a car.* (posse) × *She's **having** lunch.* (ação)
- *He **is** rude.* (característica) × *He's **being** rude.* (comportamento agora)
- *I'm **loving** this book!* (informal, entusiasmo momentâneo)`,
    },
    {
      title: 'Presente histórico',
      body: `Em narrativas informais, piadas e resumos de enredo, o **presente** torna a história mais viva:

*So I**'m** walking down the street, and this man **comes** up to me and **asks**…*
*In the novel, the hero **leaves** home and **travels** to London.* (resumo de enredo: sempre presente)`,
    },
  ],
  vocab: [
    { en: 'to wonder', pt: 'perguntar-se' },
    { en: 'to be about to', pt: 'estar prestes a' },
    { en: 'to be going to', pt: 'ir (fazer), pretender' },
    { en: 'plot', pt: 'enredo' },
    { en: 'polite', pt: 'educado' },
    { en: 'to be being', pt: 'estar sendo (comportamento)' },
    { en: 'fate', pt: 'destino' },
    { en: 'temporary', pt: 'temporário' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I was ___ if you could help me with this report. (pedido educado)', answers: ['wondering'] },
    { type: 'fill', prompt: 'I was ___ to call you, but I forgot. (ia)', answers: ['going'] },
    { type: 'fill', prompt: 'I was ___ to leave when the phone rang. (prestes a)', answers: ['about'] },
    { type: 'fill', prompt: 'She knew she ___ never see him again.', answers: ['would'] },
    { type: 'fill', prompt: 'He is usually polite, but today he is ___ very rude. (comportamento agora)', answers: ['being'] },
    { type: 'fill', prompt: "I'm ___ about changing jobs. (refletindo)", answers: ['thinking'] },
    {
      type: 'choice',
      prompt: 'Qual é o pedido MAIS educado?',
      options: ['I want to ask for a day off.', 'I was wondering if I could take a day off.', 'Give me a day off.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Num resumo de enredo, qual tempo é o padrão?',
      options: ['Present Simple', 'Past Perfect', 'Future Continuous'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: '"It was a mistake he was to regret for years." — "was to regret" indica…',
      options: ['obrigação no passado', 'o que o destino reservava (futuro no passado)', 'um plano cancelado'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['I am having a car.', 'I have a car.', 'I am have a car.'],
      answer: 1,
    },
    { type: 'reorder', words: ['We', 'were', 'hoping', 'you', 'could', 'join', 'us', 'for', 'dinner', '.'], translation: 'Estávamos esperando que você pudesse jantar conosco.' },
    { type: 'fixError', prompt: 'I am knowing the answer.', answers: ['I know the answer.'] },
    {
      type: 'transform',
      instruction: 'Torne o pedido mais educado começando com "I was wondering if".',
      prompt: 'Can you send me the file?',
      answers: ['I was wondering if you could send me the file.', 'I was wondering if you could send me the file?'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva o resumo de enredo no presente.',
      prompt: 'The detective found the letter and realised the truth.',
      answers: ['The detective finds the letter and realises the truth.', 'The detective finds the letter and realizes the truth.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu ia te contar, mas você já sabia.',
      answers: ['I was going to tell you, but you already knew.', 'I was going to tell you but you already knew.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva (1) um e-mail curto e educado (3 frases) pedindo um favor a um colega com passado de distanciamento e (2) um resumo de 3 frases do enredo de um filme, no presente.',
      model: "(1) Hi Carla, I was wondering if you could review my presentation before Friday. I wanted to ask you because you know the client well. I was hoping we could talk about it tomorrow.\n\n(2) In the film, a young woman inherits an old hotel in Scotland. She decides to renovate it, but strange things start to happen. Eventually, she discovers a family secret that changes everything.",
      checklist: ['was wondering / wanted / was hoping', 'Resumo de enredo no Present Simple', 'Consistência de tempo em cada texto'],
    },
  ],
}
