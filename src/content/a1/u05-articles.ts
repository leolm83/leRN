import type { UnitData } from '../types'

export const u05: UnitData = {
  slug: 'articles',
  title: 'Artigos: a, an, the',
  summary: 'Quando usar a, an, the — e quando não usar artigo nenhum (onde o português mais engana).',
  theory: [
    {
      title: 'a / an = um, uma',
      body: `**a** e **an** significam "um" ou "uma" e só são usados com **substantivos contáveis no singular**.

A escolha depende do **som** da palavra seguinte, não da letra:

- **a** antes de som de consoante: *a car*, *a house*, *a university* (soa "iu")
- **an** antes de som de vogal: *an apple*, *an egg*, *an umbrella*, *an hour* (o h é mudo)`,
      examples: [
        { en: 'I have a car.', pt: 'Eu tenho um carro.' },
        { en: 'She eats an apple every day.', pt: 'Ela come uma maçã todo dia.' },
        { en: 'He is an engineer.', pt: 'Ele é engenheiro.' },
      ],
    },
    {
      title: 'the = o, a, os, as',
      body: `**the** é igual para singular, plural, masculino e feminino. Use quando os dois lados sabem **de qual coisa específica** se fala, ou quando ela é única.`,
      examples: [
        { en: 'I have a cat. The cat is black.', pt: 'Tenho um gato. O gato é preto.' },
        { en: 'The sun is hot.', pt: 'O sol é quente.' },
        { en: 'Close the door, please.', pt: 'Feche a porta, por favor.' },
      ],
    },
    {
      title: 'Sem artigo (zero article)',
      body: `Aqui o português usa artigo e o inglês **não**:

- **generalizações** com plural ou incontável: *Dogs are friendly.* (Os cães são amigáveis.) / *I love music.* (Eu amo **a** música.)
- **nomes de pessoas**: *Ana is here.* (A Ana está aqui.)
- **a maioria dos países e cidades**: *I live in Brazil.* — exceções: *the United States*, *the UK*
- **idiomas e matérias**: *English is easy.*
- **refeições**: *I have breakfast at 7.*
- expressões fixas: *at home*, *at work*, *at school*, *by bus*

E o contrário — o inglês usa artigo onde o português não usa:

- **profissões**: *She is a doctor.* (Ela é médica.)`,
    },
  ],
  vocab: [
    { en: 'apple', pt: 'maçã' },
    { en: 'egg', pt: 'ovo' },
    { en: 'umbrella', pt: 'guarda-chuva' },
    { en: 'hour', pt: 'hora' },
    { en: 'engineer', pt: 'engenheiro(a)' },
    { en: 'university', pt: 'universidade' },
    { en: 'sun', pt: 'sol' },
    { en: 'door', pt: 'porta' },
    { en: 'table', pt: 'mesa' },
    { en: 'music', pt: 'música' },
    { en: 'breakfast', pt: 'café da manhã' },
    { en: 'honest', pt: 'honesto' },
    { en: 'house', pt: 'casa (construção)' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She is ___ engineer.', answers: ['an'] },
    { type: 'fill', prompt: 'I have ___ car.', answers: ['a'] },
    { type: 'fill', prompt: 'The class is ___ hour long.', answers: ['an'], explanation: 'O h de hour é mudo: som de vogal → an.' },
    { type: 'fill', prompt: 'He studies at ___ university.', answers: ['a'], explanation: 'University começa com som de "iu" (consoante) → a.' },
    { type: 'fill', prompt: '___ sun is very hot today.', answers: ['The'] },
    { type: 'fill', prompt: 'I have a cat. ___ cat is black.', answers: ['The'] },
    {
      type: 'choice',
      prompt: '"Eu amo música." Qual está correto?',
      options: ['I love the music.', 'I love music.', 'I love a music.'],
      answer: 1,
      explanation: 'Falando em geral, sem artigo.',
    },
    {
      type: 'choice',
      prompt: '"Ela é médica." Qual está correto?',
      options: ['She is doctor.', 'She is a doctor.', 'She is the doctor.'],
      answer: 1,
      explanation: 'Profissão leva a/an.',
    },
    { type: 'choice', prompt: 'Qual está correto?', options: ['an house', 'an umbrella', 'an car'], answer: 1 },
    { type: 'fixError', prompt: 'I want a apple.', answers: ['I want an apple.'] },
    { type: 'fixError', prompt: 'He is teacher.', answers: ['He is a teacher.'] },
    { type: 'fixError', prompt: 'I live in the Brazil.', answers: ['I live in Brazil.'], explanation: 'Nomes de países, em geral, não levam artigo.' },
    { type: 'fixError', prompt: 'The dogs are friendly animals in general.', answers: ['Dogs are friendly animals in general.'], explanation: 'Generalização com plural: sem the.' },
    { type: 'translate', from: 'pt', prompt: 'Eu tenho um irmão e uma irmã.', answers: ['I have a brother and a sister.'] },
    { type: 'translate', from: 'pt', prompt: 'O livro está na mesa.', answers: ['The book is on the table.'] },
    { type: 'translate', from: 'pt', prompt: 'A Ana é engenheira.', answers: ['Ana is an engineer.'] },
    { type: 'reorder', words: ['She', 'is', 'an', 'honest', 'person'], translation: 'Ela é uma pessoa honesta.' },
  ],
}
