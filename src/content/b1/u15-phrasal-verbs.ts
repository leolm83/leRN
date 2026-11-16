import type { UnitData } from '../types'

export const u15: UnitData = {
  slug: 'phrasal-verbs',
  title: 'Phrasal verbs comuns',
  summary: 'Verbo + partícula com sentido novo (give up, find out, look after) e onde colocar o objeto.',
  theory: [
    {
      title: 'O que são',
      body: `**Verbo + partícula** (up, out, off, on, down, after…) formando um sentido que nem sempre dá para adivinhar:

- *give* (dar) + *up* → **give up** = desistir
- *find* (achar) + *out* → **find out** = descobrir
- *look* (olhar) + *after* → **look after** = cuidar de

Eles são muito comuns no inglês do dia a dia — aprenda cada um como uma palavra nova.`,
    },
    {
      title: 'Separáveis × inseparáveis',
      body: `- **Separáveis**: o objeto pode ir no meio ou no fim: *Turn **off** the light. / Turn the light **off**.*
- Com **pronome** (it, them, her…), ele **tem** que ir no meio: *Turn **it** off.* ("Turn off it" ✘)
- **Inseparáveis**: o objeto sempre vem depois: *Look **after** the kids. / Look **after** them.*`,
    },
    {
      title: 'Os mais úteis',
      body: ``,
      table: {
        head: ['Phrasal verb', 'Sentido', 'Tipo'],
        rows: [
          ['wake up', 'acordar', '—'],
          ['get up', 'levantar-se', '—'],
          ['give up', 'desistir (de)', 'separável'],
          ['find out', 'descobrir', 'separável'],
          ['turn on / off', 'ligar / desligar', 'separável'],
          ['put on / take off', 'vestir / tirar (roupa)', 'separável'],
          ['pick up', 'buscar, pegar', 'separável'],
          ['fill in', 'preencher', 'separável'],
          ['look after', 'cuidar de', 'inseparável'],
          ['look for', 'procurar', 'inseparável'],
          ['get on with', 'dar-se bem com', 'inseparável'],
          ['run out of', 'ficar sem', 'inseparável'],
        ],
      },
    },
  ],
  vocab: [
    { en: 'to give up', pt: 'desistir' },
    { en: 'to find out', pt: 'descobrir' },
    { en: 'to look after', pt: 'cuidar de' },
    { en: 'to look for', pt: 'procurar' },
    { en: 'to turn off', pt: 'desligar' },
    { en: 'to put on', pt: 'vestir, colocar (roupa)' },
    { en: 'to take off', pt: 'tirar (roupa); decolar' },
    { en: 'to pick up', pt: 'buscar, pegar' },
    { en: 'to fill in', pt: 'preencher' },
    { en: 'to run out of', pt: 'ficar sem' },
    { en: 'to get on with', pt: 'dar-se bem com' },
  ],
  exercises: [
    { type: 'fill', prompt: "Don't give ___! You're almost there.", answers: ['up'] },
    { type: 'fill', prompt: "I'm looking ___ my keys. Have you seen them?", answers: ['for'] },
    { type: 'fill', prompt: 'Can you look ___ my cat while I travel?', answers: ['after'] },
    { type: 'fill', prompt: 'Please fill ___ this form.', answers: ['in', 'out'] },
    { type: 'fill', prompt: "We've run out ___ milk.", answers: ['of'] },
    { type: 'fill', prompt: 'I get ___ well with my colleagues.', answers: ['on'] },
    { type: 'fill', prompt: 'I need to find ___ what time the train leaves.', answers: ['out'] },
    {
      type: 'choice',
      prompt: '"Desligue a TV." (com pronome)',
      options: ['Turn off it.', 'Turn it off.', 'Turn it.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Vou buscar você às 8."',
      options: ["I'll pick up you at 8.", "I'll pick you up at 8.", "I'll up pick you at 8."],
      answer: 1,
    },
    { type: 'choice', prompt: '"put on" significa…', options: ['tirar', 'vestir', 'guardar'], answer: 1 },
    { type: 'reorder', words: ['She', 'took', 'her', 'shoes', 'off', '.'], translation: 'Ela tirou os sapatos.' },
    { type: 'reorder', words: ['He', 'gave', 'up', 'smoking', 'last', 'year', '.'], translation: 'Ele parou de fumar no ano passado.' },
    { type: 'fixError', prompt: 'Put on it, it is cold outside.', answers: ["Put it on, it's cold outside.", 'Put it on, it is cold outside.', "Put it on. It's cold outside.", 'Put it on. It is cold outside.'] },
    { type: 'fixError', prompt: 'Can you look my dog after?', answers: ['Can you look after my dog?'] },
    {
      type: 'transform',
      instruction: 'Troque "the radio" pelo pronome it.',
      prompt: 'Please turn off the radio.',
      answers: ['Please turn it off.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Nós ficamos sem gasolina.',
      answers: ['We ran out of gas.', 'We ran out of petrol.', 'We have run out of gas.', 'We have run out of petrol.', "We've run out of gas.", "We've run out of petrol."],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: 'I found out that she was lying.',
      answers: ['Eu descobri que ela estava mentindo.', 'Descobri que ela estava mentindo.'],
    },
    {
      type: 'writing',
      prompt: 'Descreva sua manhã típica em 5 frases usando pelo menos 4 phrasal verbs (wake up, get up, put on, turn off, pick up…).',
      model: "I wake up at 6:30, but I only get up at 7. I turn on the coffee machine and put on my work clothes. Before I leave, I turn off all the lights. On the way to work, I pick up my colleague. When I arrive, I take off my jacket and start working.",
      checklist: ['Partícula correta', 'Pronome no meio dos separáveis', 'Tempo verbal correto (o verbo é que muda)'],
    },
  ],
}
