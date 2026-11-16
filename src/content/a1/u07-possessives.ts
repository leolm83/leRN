import type { UnitData } from '../types'

export const u07: UnitData = {
  slug: 'possessives',
  title: "Possessivos: my, mine e o 's",
  summary: "Adjetivos e pronomes possessivos, o genitivo 's e a diferença entre his e her.",
  theory: [
    {
      title: 'Adjetivos possessivos (antes do substantivo)',
      body: `Vêm **antes** de um substantivo e **não mudam** no plural: *my book*, *my books*.`,
      table: {
        head: ['Pronome', 'Possessivo', 'Exemplo'],
        rows: [
          ['I', 'my', 'my car'],
          ['you', 'your', 'your house'],
          ['he', 'his', 'his name'],
          ['she', 'her', 'her name'],
          ['it', 'its', 'its color'],
          ['we', 'our', 'our friends'],
          ['they', 'their', 'their children'],
        ],
      },
    },
    {
      title: 'his ou her? Depende do DONO',
      body: `Em português "seu/sua" concorda com a coisa possuída. Em inglês **his/her** concorda com o **dono**.

- O irmão **da Ana** → **her** brother (o dono é ela)
- A mãe **do Pedro** → **his** mother (o dono é ele)

E cuidado com **its** (dele/dela, para coisas) × **it's** (= it is).`,
      examples: [
        { en: 'Ana loves her brother.', pt: 'Ana ama o irmão dela.' },
        { en: 'Pedro calls his mother every day.', pt: 'Pedro liga para a mãe dele todo dia.' },
        { en: 'The dog is eating its food.', pt: 'O cachorro está comendo a comida dele.' },
      ],
    },
    {
      title: 'Pronomes possessivos (sozinhos)',
      body: `Substituem o substantivo: *mine, yours, his, hers, ours, theirs*. Nunca levam artigo nem apóstrofo ("your's" ✘).`,
      examples: [
        { en: 'This book is mine.', pt: 'Este livro é meu.' },
        { en: 'Is this pen yours?', pt: 'Esta caneta é sua?' },
        { en: 'The house is theirs.', pt: 'A casa é deles.' },
      ],
    },
    {
      title: "Genitivo 's (o carro do João)",
      body: `Para dizer de quem é algo, coloque o **dono primeiro** + **'s**:

- o carro do João → **John's car**
- a casa da minha mãe → **my mother's house**

Plural terminado em **-s**: só o apóstrofo → *my parents' house* (a casa dos meus pais).

Plural irregular (sem -s): **'s** → *the children's toys*.`,
    },
  ],
  vocab: [
    { en: 'husband', pt: 'marido' },
    { en: 'wife', pt: 'esposa' },
    { en: 'parents', pt: 'pais (pai e mãe)' },
    { en: 'son', pt: 'filho' },
    { en: 'daughter', pt: 'filha' },
    { en: 'pen', pt: 'caneta' },
    { en: 'key', pt: 'chave' },
    { en: 'bag', pt: 'bolsa, mochila' },
    { en: 'color', pt: 'cor' },
    { en: 'toy', pt: 'brinquedo' },
    { en: 'big', pt: 'grande' },
    { en: 'small', pt: 'pequeno' },
  ],
  exercises: [
    { type: 'fill', prompt: 'This is Pedro. ___ car is red.', answers: ['His'] },
    { type: 'fill', prompt: 'Ana and her husband love ___ house.', answers: ['their'] },
    { type: 'fill', prompt: 'I love ___ mother.', answers: ['my'] },
    { type: 'fill', prompt: 'The dog is eating ___ food.', answers: ['its'] },
    { type: 'fill', prompt: 'Maria is talking to ___ brother.', answers: ['her'], explanation: 'O dono é Maria → her.' },
    { type: 'fill', prompt: 'This pen is not yours. It is ___. (meu)', answers: ['mine'] },
    { type: 'fill', prompt: 'These books are ___. (nossos)', answers: ['ours'] },
    {
      type: 'choice',
      prompt: '"O carro do João"',
      options: ['the car of John', "John's car", 'John car'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"A casa dos meus pais" (pai e mãe)',
      options: ["my parents's house", "my parents' house", "my parent's house"],
      answer: 1,
      explanation: "Plural terminado em -s recebe só o apóstrofo. \"my parent's\" seria de um só dos pais.",
    },
    { type: 'fixError', prompt: "It's color is blue.", answers: ['Its color is blue.'], explanation: "it's = it is; possessivo é its." },
    { type: 'fixError', prompt: 'This is my sister car.', answers: ["This is my sister's car."] },
    { type: 'fixError', prompt: 'They are mys friends.', answers: ['They are my friends.'] },
    { type: 'translate', from: 'pt', prompt: 'O nome dela é Julia.', answers: ['Her name is Julia.'] },
    { type: 'translate', from: 'pt', prompt: 'O livro é seu?', answers: ['Is the book yours?'] },
    { type: 'translate', from: 'pt', prompt: 'O cachorro do meu irmão é grande.', answers: ["My brother's dog is big."] },
    { type: 'reorder', words: ['Their', 'house', 'is', 'very', 'old'], translation: 'A casa deles é muito velha.' },
  ],
}
