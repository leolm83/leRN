import type { UnitData } from '../types'

export const u06: UnitData = {
  slug: 'plurals-countable-uncountable',
  title: 'Plural, contáveis e incontáveis',
  summary: 'Regras de ortografia do plural, plurais irregulares e os substantivos que não têm plural em inglês.',
  theory: [
    {
      title: 'Regras de ortografia do plural',
      body: `A regra geral é acrescentar **-s**. As outras regras dependem da terminação:`,
      table: {
        head: ['Terminação', 'Regra', 'Exemplos'],
        rows: [
          ['maioria', '+ s', 'book → books, car → cars'],
          ['-s, -ss, -sh, -ch, -x', '+ es', 'bus → buses, glass → glasses, dish → dishes, watch → watches, box → boxes'],
          ['-o (muitas)', '+ es', 'potato → potatoes, tomato → tomatoes (mas photo → photos, piano → pianos)'],
          ['consoante + y', 'y → ies', 'city → cities, baby → babies, party → parties'],
          ['vogal + y', '+ s', 'day → days, boy → boys, key → keys'],
          ['-f / -fe', 'f → ves', 'knife → knives, leaf → leaves, wife → wives'],
        ],
      },
    },
    {
      title: 'Plurais irregulares',
      body: `Estes precisam ser memorizados — são palavras muito comuns.`,
      table: {
        head: ['Singular', 'Plural'],
        rows: [
          ['man', 'men'],
          ['woman', 'women'],
          ['child', 'children'],
          ['person', 'people'],
          ['foot', 'feet'],
          ['tooth', 'teeth'],
          ['mouse', 'mice'],
          ['fish', 'fish (igual)'],
          ['sheep', 'sheep (igual)'],
        ],
      },
    },
    {
      title: 'Adjetivos não vão para o plural',
      body: `Em inglês o adjetivo **nunca** recebe -s e vem **antes** do substantivo.

- *beautiful houses* ✔ — "beautifuls houses" ✘
- *two big dogs* ✔ — "two dogs bigs" ✘`,
    },
    {
      title: 'Contáveis e incontáveis',
      body: `**Contáveis** podem ser contados: *one apple, two apples*.

**Incontáveis** não têm plural e não usam *a/an*: *water, milk, rice, money, bread, music, time*.

Atenção a palavras que são **contáveis em português mas incontáveis em inglês**:

- **information** — "informations" ✘
- **advice** (conselho) — "an advice" ✘ → *some advice* / *a piece of advice*
- **furniture** (móveis)
- **news** (notícia/notícias) — *The news is good.*
- **homework** (lição de casa)

Para "quantificar" um incontável, use uma unidade: *a glass of water*, *a piece of bread*, *a bottle of milk*.`,
    },
  ],
  vocab: [
    { en: 'child / children', pt: 'criança / crianças' },
    { en: 'person / people', pt: 'pessoa / pessoas' },
    { en: 'woman / women', pt: 'mulher / mulheres' },
    { en: 'knife', pt: 'faca' },
    { en: 'box', pt: 'caixa' },
    { en: 'watch', pt: 'relógio (de pulso)' },
    { en: 'tooth / teeth', pt: 'dente / dentes' },
    { en: 'foot / feet', pt: 'pé / pés' },
    { en: 'water', pt: 'água' },
    { en: 'bread', pt: 'pão' },
    { en: 'money', pt: 'dinheiro' },
    { en: 'advice', pt: 'conselho(s)' },
    { en: 'information', pt: 'informação, informações' },
    { en: 'furniture', pt: 'móveis' },
    { en: 'glass', pt: 'copo; vidro' },
  ],
  exercises: [
    { type: 'fill', prompt: 'one box, two ___', answers: ['boxes'] },
    { type: 'fill', prompt: 'one city, three ___', answers: ['cities'] },
    { type: 'fill', prompt: 'one child, two ___', answers: ['children'] },
    { type: 'fill', prompt: 'one knife, four ___', answers: ['knives'] },
    { type: 'fill', prompt: 'one day, seven ___', answers: ['days'], explanation: 'Vogal + y: só acrescenta -s.' },
    { type: 'fill', prompt: 'one person, ten ___', answers: ['people'] },
    { type: 'fill', prompt: 'one tooth, many ___', answers: ['teeth'] },
    { type: 'fill', prompt: 'one watch, two ___', answers: ['watches'] },
    {
      type: 'choice',
      prompt: '"Preciso de informações."',
      options: ['I need informations.', 'I need information.', 'I need an information.'],
      answer: 1,
      explanation: 'Information é incontável.',
    },
    { type: 'choice', prompt: 'Qual destas palavras é incontável?', options: ['chair', 'water', 'apple', 'bottle'], answer: 1 },
    { type: 'fixError', prompt: 'I have two childs.', answers: ['I have two children.'] },
    {
      type: 'fixError',
      prompt: 'They are beautifuls girls.',
      answers: ['They are beautiful girls.'],
      explanation: 'Adjetivo não vai para o plural.',
    },
    {
      type: 'fixError',
      prompt: 'I need an advice.',
      answers: ['I need some advice.', 'I need advice.', 'I need a piece of advice.'],
    },
    { type: 'translate', from: 'pt', prompt: 'Três mulheres e dois homens.', answers: ['Three women and two men.'] },
    { type: 'translate', from: 'pt', prompt: 'Um copo de água, por favor.', answers: ['A glass of water, please.'] },
    { type: 'transform', instruction: 'Passe a frase para o plural.', prompt: 'The baby is happy.', answers: ['The babies are happy.'] },
    { type: 'transform', instruction: 'Passe a frase para o plural.', prompt: 'The man is tall.', answers: ['The men are tall.'] },
    { type: 'reorder', words: ['The', 'children', 'are', 'in', 'the', 'garden'], translation: 'As crianças estão no jardim.' },
  ],
}
