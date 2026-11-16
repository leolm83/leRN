import type { UnitData } from '../types'

export const u15: UnitData = {
  slug: 'argumentative-essay',
  title: 'Redação argumentativa',
  summary: 'Estrutura de um ensaio de opinião: introdução com tese, argumentos, contra-argumento e conclusão.',
  theory: [
    {
      title: 'Estrutura (4–5 parágrafos)',
      body: `- **Introdução**: apresente o tema e a sua **tese** (posição). *Many people believe that… In my opinion, …*
- **Argumento 1**: frase-tópico + explicação + exemplo.
- **Argumento 2**: mesma estrutura.
- **Contra-argumento**: reconheça o outro lado e responda. *It could be argued that… However, …*
- **Conclusão**: retome a tese com outras palavras; não traga ideias novas. *In conclusion, …*`,
    },
    {
      title: 'Frases úteis',
      body: ``,
      table: {
        head: ['Função', 'Expressões'],
        rows: [
          ['Opinião', 'In my view, · I strongly believe that · It seems to me that'],
          ['Adicionar', 'Furthermore, · Moreover, · In addition, · What is more,'],
          ['Exemplificar', 'For instance, · For example, · such as'],
          ['Contrastar', 'However, · On the other hand, · Nevertheless,'],
          ['Contra-argumento', 'It could be argued that… · Some people claim that…'],
          ['Concluir', 'In conclusion, · To sum up, · All things considered,'],
        ],
      },
    },
    {
      title: 'Registro acadêmico',
      body: `- Sem contrações: *do not*, *it is*.
- Evite *I think* repetido; varie com *In my view*, *I would argue that*.
- Evite generalizações absolutas (*everybody, always*): prefira *many people*, *often*.
- Evite linguagem informal (*a lot of, stuff, kids*): use *many / a great deal of, things/aspects, children*.`,
    },
  ],
  vocab: [
    { en: 'essay', pt: 'redação, ensaio' },
    { en: 'thesis', pt: 'tese' },
    { en: 'argument', pt: 'argumento' },
    { en: 'furthermore', pt: 'além disso' },
    { en: 'moreover', pt: 'além do mais' },
    { en: 'for instance', pt: 'por exemplo' },
    { en: 'to claim', pt: 'afirmar, alegar' },
    { en: 'to sum up', pt: 'resumindo' },
    { en: 'drawback', pt: 'desvantagem' },
    { en: 'benefit', pt: 'benefício' },
  ],
  exercises: [
    { type: 'fill', prompt: 'In ___, social media has more benefits than drawbacks. (conclusão)', answers: ['conclusion'] },
    { type: 'fill', prompt: 'It could be ___ that technology isolates people. (contra-argumento)', answers: ['argued'] },
    { type: 'fill', prompt: 'Public transport reduces pollution. ___, it is cheaper than driving. (além disso)', answers: ['Furthermore', 'Moreover', 'In addition', 'What is more'] },
    { type: 'fill', prompt: 'Many cities, ___ instance, have banned cars from their centres.', answers: ['for'] },
    { type: 'fill', prompt: 'To ___ up, both options have advantages.', answers: ['sum'] },
    {
      type: 'choice',
      prompt: 'Qual é a melhor tese para uma introdução?',
      options: ['Phones are things.', 'In my view, schools should limit the use of mobile phones in class.', 'Yesterday I used my phone a lot.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual frase é mais adequada a um ensaio formal?',
      options: ["Kids don't get enough exercise nowadays.", 'Children do not get enough exercise nowadays.', "Kids don't do a lot of sports, you know."],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'O que NÃO deve aparecer na conclusão?',
      options: ['A tese reformulada', 'Um resumo dos argumentos', 'Um argumento totalmente novo'],
      answer: 2,
    },
    {
      type: 'choice',
      prompt: 'Qual generalização é mais adequada?',
      options: ['Everybody hates working on weekends.', 'Many people prefer not to work on weekends.', 'All people always hate weekends at work.'],
      answer: 1,
    },
    { type: 'reorder', words: ['Some', 'people', 'claim', 'that', 'homework', 'is', 'unnecessary', '.'], translation: 'Algumas pessoas afirmam que o dever de casa é desnecessário.' },
    {
      type: 'choice',
      prompt: 'Qual versão é mais adequada a um ensaio? "I think it\'s a good idea and I think everybody agrees."',
      options: ["I think it's a good idea and I think everybody agrees.", 'In my view, it is a good idea, and many people agree.', "It's a good idea, everybody agrees, I think."],
      answer: 1,
    },
    {
      type: 'transform',
      instruction: 'Reescreva em registro formal (sem contrações e sem "a lot of").',
      prompt: "A lot of students don't have time to cook.",
      answers: ['Many students do not have time to cook.', 'A large number of students do not have time to cook.'],
      strict: true,
    },
    {
      type: 'transform',
      instruction: 'Transforme em contra-argumento começando com "It could be argued that".',
      prompt: 'Online classes are less effective.',
      answers: ['It could be argued that online classes are less effective.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Por outro lado, há algumas desvantagens.',
      answers: ['On the other hand, there are some drawbacks.', 'On the other hand, there are some disadvantages.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um ensaio de 4 parágrafos (180–220 palavras): "Should working from home become the norm?"',
      model: "Since the pandemic, working from home has become common in many industries. In my view, it should become the norm for jobs that can be done remotely.\n\nFirstly, remote work saves time and money. Employees do not need to commute, which reduces stress and pollution. For instance, a worker who spends two hours a day in traffic gains ten hours a week.\n\nIt could be argued that working from home makes collaboration more difficult. However, modern tools allow teams to communicate effectively, and occasional face-to-face meetings can solve this problem.\n\nIn conclusion, although remote work is not suitable for every profession, its benefits clearly outweigh its drawbacks. Companies should therefore offer it as the standard option whenever possible.",
      checklist: ['Introdução com tese clara', 'Cada parágrafo com frase-tópico', 'Exemplo concreto', 'Contra-argumento + resposta', 'Conclusão sem ideias novas', 'Registro formal, sem contrações'],
    },
  ],
}
