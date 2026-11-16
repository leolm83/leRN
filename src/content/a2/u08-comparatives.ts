import type { UnitData } from '../types'

export const u08: UnitData = {
  slug: 'comparatives',
  title: 'Comparativos (e as … as)',
  summary: 'taller, more expensive, better, worse — e como dizer "tão … quanto".',
  theory: [
    {
      title: 'Adjetivos curtos: + er than',
      body: `Adjetivos de **uma sílaba** (e de duas terminadas em **-y**) recebem **-er** + **than** (do que).`,
      table: {
        head: ['Regra', 'Exemplos'],
        rows: [
          ['+ er', 'tall → taller, old → older, cheap → cheaper'],
          ['termina em -e: + r', 'nice → nicer, large → larger'],
          ['consoante-vogal-consoante: dobra', 'big → bigger, hot → hotter, thin → thinner'],
          ['consoante + y: y → ier', 'happy → happier, easy → easier, busy → busier'],
        ],
      },
    },
    {
      title: 'Adjetivos longos: more … than',
      body: `Adjetivos de **duas sílabas ou mais** (que não terminam em -y) usam **more**:

- *expensive → **more** expensive*
- *interesting → **more** interesting*

Nunca use os dois juntos: "more taller" ✘.

Para "menos": **less** + adjetivo → *less expensive*.`,
    },
    {
      title: 'Irregulares e intensificadores',
      body: `- **good → better** (melhor)
- **bad → worse** (pior)
- **far → farther / further** (mais longe)

Para "muito mais": **much / a lot / far** + comparativo → *much bigger*, *a lot more expensive*.`,
    },
    {
      title: 'Igualdade: as … as',
      body: `- *She is **as** tall **as** her mother.* — Ela é tão alta quanto a mãe.
- *This phone is **not as** expensive **as** that one.* — não é tão caro quanto

Depois de **than** e **as**, no inglês do dia a dia, usa-se o pronome objeto: *older than **me***. Na escrita formal: *older than **I am***.`,
    },
  ],
  vocab: [
    { en: 'tall', pt: 'alto (pessoa)' },
    { en: 'high', pt: 'alto (montanha, preço)' },
    { en: 'cheap', pt: 'barato' },
    { en: 'expensive', pt: 'caro' },
    { en: 'better', pt: 'melhor' },
    { en: 'worse', pt: 'pior' },
    { en: 'than', pt: 'do que' },
    { en: 'quiet', pt: 'quieto, silencioso' },
    { en: 'traffic', pt: 'trânsito' },
    { en: 'fast', pt: 'rápido' },
    { en: 'busy', pt: 'ocupado, movimentado' },
    { en: 'thin', pt: 'magro, fino' },
  ],
  exercises: [
    { type: 'fill', prompt: 'My brother is ___ than me. (tall)', answers: ['taller'] },
    { type: 'fill', prompt: 'This book is ___ than that one. (interesting)', answers: ['more interesting'] },
    { type: 'fill', prompt: 'Today is ___ than yesterday. (hot)', answers: ['hotter'] },
    { type: 'fill', prompt: 'English is ___ than Chinese. (easy)', answers: ['easier'] },
    { type: 'fill', prompt: 'My new job is ___ than the old one. (good)', answers: ['better'] },
    { type: 'fill', prompt: 'The traffic is ___ today than yesterday. (bad)', answers: ['worse'] },
    { type: 'fill', prompt: 'She is as tall ___ her mother.', answers: ['as'] },
    { type: 'choice', prompt: '"mais caro do que"', options: ['more expensive that', 'more expensive than', 'expensiver than'], answer: 1 },
    { type: 'choice', prompt: 'Your car is ___ mine.', options: ['more fast than', 'faster than', 'more faster than'], answer: 1 },
    { type: 'fixError', prompt: 'He is more taller than his father.', answers: ['He is taller than his father.'] },
    { type: 'fixError', prompt: 'This phone is cheaper that the other one.', answers: ['This phone is cheaper than the other one.'] },
    { type: 'fixError', prompt: 'Rio is more big than Recife.', answers: ['Rio is bigger than Recife.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O meu irmão é mais velho do que eu.',
      answers: ['My brother is older than me.', 'My brother is older than I am.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O inverno aqui não é tão frio quanto no Canadá.',
      answers: ['Winter here is not as cold as in Canada.', 'The winter here is not as cold as in Canada.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "Bia" e usando not as … as.',
      prompt: 'Ana is taller than Bia.',
      answers: ['Bia is not as tall as Ana.'],
    },
    { type: 'reorder', words: ['Cats', 'are', 'much', 'quieter', 'than', 'dogs'], translation: 'Gatos são muito mais quietos do que cachorros.' },
  ],
}
