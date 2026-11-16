import type { UnitData } from '../types'

export const u16: UnitData = {
  slug: 'numbers-dates-time',
  title: 'Números, datas e horas por escrito',
  summary: 'Escrever números por extenso, ordinais, datas nos formatos americano e britânico e as horas.',
  theory: [
    {
      title: 'Números cardinais',
      body: `- 1–12: *one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve*
- 13–19 terminam em **-teen**: *thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen*
- dezenas terminam em **-ty**: *twenty, thirty, **forty** (sem u!), fifty, sixty, seventy, eighty, ninety*
- de 21 a 99 usa **hífen**: *twenty-one, forty-five, ninety-nine*
- *hundred, thousand, million* **não têm plural** depois de número: *two hundred*, *three thousand*
- 105 = *one hundred and five* (britânico) ou *one hundred five* (americano)`,
    },
    {
      title: 'Ponto e vírgula: ao contrário do português',
      body: `- **vírgula** separa milhares: *1,000* = mil / *2,500,000* = dois milhões e quinhentos mil
- **ponto** separa decimais: *2.5* = dois vírgula cinco / *$9.99*`,
    },
    {
      title: 'Números ordinais',
      body: `A maioria recebe **-th**. Os irregulares são os mais usados:`,
      table: {
        head: ['Número', 'Ordinal', 'Abreviação'],
        rows: [
          ['1', 'first', '1st'],
          ['2', 'second', '2nd'],
          ['3', 'third', '3rd'],
          ['4', 'fourth', '4th'],
          ['5', 'fifth', '5th'],
          ['8', 'eighth', '8th'],
          ['9', 'ninth', '9th'],
          ['12', 'twelfth', '12th'],
          ['20', 'twentieth', '20th'],
          ['21', 'twenty-first', '21st'],
        ],
      },
    },
    {
      title: 'Datas',
      body: `- **Americano**: mês / dia / ano → *May 5, 2025* ou *May 5th, 2025* — e **05/04/2025 = 4 de maio**
- **Britânico**: dia / mês / ano → *5 May 2025* ou *the 5th of May, 2025*

Meses sempre com maiúscula. Lembre: **on** + data, **in** + mês/ano.`,
    },
    {
      title: 'Horas',
      body: `- *What time is it?* — Que horas são?
- *It's three o'clock.* — São três horas (em ponto).
- *It's half past three.* / *It's three thirty.* — 3:30
- *It's a quarter past two.* — 2:15 / *It's a quarter to five.* — 4:45
- **a.m.** = manhã (meia-noite ao meio-dia) / **p.m.** = tarde e noite`,
    },
  ],
  vocab: [
    { en: 'forty', pt: 'quarenta' },
    { en: 'fifteen', pt: 'quinze' },
    { en: 'fifty', pt: 'cinquenta' },
    { en: 'hundred', pt: 'cem, centena' },
    { en: 'thousand', pt: 'mil' },
    { en: 'first', pt: 'primeiro' },
    { en: 'second', pt: 'segundo' },
    { en: 'third', pt: 'terceiro' },
    { en: 'January', pt: 'janeiro' },
    { en: 'February', pt: 'fevereiro' },
    { en: 'March', pt: 'março' },
    { en: 'April', pt: 'abril' },
    { en: 'May', pt: 'maio' },
    { en: 'June', pt: 'junho' },
    { en: 'July', pt: 'julho' },
    { en: 'August', pt: 'agosto' },
    { en: 'September', pt: 'setembro' },
    { en: 'October', pt: 'outubro' },
    { en: 'November', pt: 'novembro' },
    { en: 'December', pt: 'dezembro' },
  ],
  exercises: [
    { type: 'fill', prompt: '40 = ___', answers: ['forty'], explanation: 'forty não tem u (diferente de four).' },
    { type: 'fill', prompt: '21 = ___', answers: ['twenty-one'], explanation: 'De 21 a 99 usamos hífen.' },
    { type: 'fill', prompt: '3rd = ___', answers: ['third'] },
    { type: 'fill', prompt: '12th = ___', answers: ['twelfth'] },
    { type: 'fill', prompt: '9th = ___', answers: ['ninth'] },
    { type: 'fill', prompt: 'The class starts ___ 9 a.m.', answers: ['at'] },
    { type: 'choice', prompt: '"Mil" em inglês se escreve:', options: ['1.000', '1,000'], answer: 1 },
    {
      type: 'choice',
      prompt: 'No formato americano, 03/04/2025 é:',
      options: ['3 de abril de 2025', '4 de março de 2025'],
      answer: 1,
      explanation: 'Americano: mês/dia/ano.',
    },
    { type: 'choice', prompt: '"Ela tem duzentos livros."', options: ['She has two hundreds books.', 'She has two hundred books.'], answer: 1 },
    { type: 'fixError', prompt: 'There are fourty students.', answers: ['There are forty students.'] },
    { type: 'fixError', prompt: 'My birthday is on the twelveth of May.', answers: ['My birthday is on the twelfth of May.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'São três e meia.',
      answers: ['It is half past three.', 'It is three thirty.', 'It is 3:30.'],
    },
    { type: 'translate', from: 'pt', prompt: 'Que horas são?', answers: ['What time is it?'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Hoje é dia 5 de maio.',
      answers: ['Today is May 5th.', 'Today is May 5.', 'Today is May fifth.', 'Today is the fifth of May.', 'Today is 5 May.', 'Today is the 5th of May.'],
    },
    {
      type: 'transform',
      instruction: 'Escreva o número por extenso.',
      prompt: '365',
      answers: ['three hundred and sixty-five', 'three hundred sixty-five'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 4 frases com datas e horas importantes para você (aniversário, horário de trabalho, um feriado…).',
      model: "My birthday is on March 12th. I start work at 9 a.m. I finish at 6 p.m. Christmas is on December 25th.",
      checklist: ['Meses com maiúscula', 'on + data, at + hora, in + mês', 'Ordinais corretos (1st, 2nd, 3rd, 12th…)'],
    },
  ],
}
