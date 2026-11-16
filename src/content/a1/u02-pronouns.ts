import type { UnitData } from '../types'

export const u02: UnitData = {
  slug: 'personal-pronouns',
  title: 'Pronomes pessoais (sujeito e objeto)',
  summary: 'I, you, he, she, it, we, they — e me, him, her, us, them. Em inglês o sujeito nunca pode ser omitido.',
  theory: [
    {
      title: 'Pronomes sujeito (subject pronouns)',
      body: `O pronome sujeito vem **antes do verbo** e indica quem faz a ação.

Duas diferenças importantes do português:

- **you** serve para "você" e "vocês" (singular e plural)
- **it** é usado para coisas, animais e ideias — não existe "ele/ela" para objetos
- **they** serve para "eles" e "elas"`,
      table: {
        head: ['Inglês', 'Português'],
        rows: [
          ['I', 'eu'],
          ['you', 'você / vocês'],
          ['he', 'ele (pessoa)'],
          ['she', 'ela (pessoa)'],
          ['it', 'ele / ela (coisa, animal)'],
          ['we', 'nós'],
          ['they', 'eles / elas'],
        ],
      },
    },
    {
      title: 'O sujeito é obrigatório',
      body: `Em português dizemos "Sou brasileiro" ou "Está chovendo" sem sujeito. Em inglês **toda frase precisa de sujeito**.

Quando não há um sujeito real (tempo, clima, horas, distância), usamos **it**.`,
      examples: [
        { en: 'I am Brazilian.', pt: 'Sou brasileiro.' },
        { en: 'It is raining.', pt: 'Está chovendo.' },
        { en: 'It is cold today.', pt: 'Está frio hoje.' },
        { en: 'It is late.', pt: 'É tarde.' },
      ],
    },
    {
      title: 'Pronomes objeto (object pronouns)',
      body: `Depois de um **verbo** ou de uma **preposição** (to, with, for…), usamos a forma objeto. Em inglês ela vem **depois** do verbo — o contrário do português "Ele **me** ama".`,
      table: {
        head: ['Sujeito', 'Objeto', 'Exemplo'],
        rows: [
          ['I', 'me', 'She loves **me**.'],
          ['you', 'you', 'I see **you**.'],
          ['he', 'him', 'Call **him**.'],
          ['she', 'her', 'I know **her**.'],
          ['it', 'it', 'I like **it**.'],
          ['we', 'us', 'Help **us**.'],
          ['they', 'them', 'I love **them**.'],
        ],
      },
      examples: [
        { en: 'He loves me.', pt: 'Ele me ama.' },
        { en: 'This gift is for you.', pt: 'Este presente é para você.' },
        { en: 'Come with us.', pt: 'Venha conosco.' },
      ],
    },
  ],
  vocab: [
    { en: 'friend', pt: 'amigo(a)' },
    { en: 'brother', pt: 'irmão' },
    { en: 'sister', pt: 'irmã' },
    { en: 'mother', pt: 'mãe' },
    { en: 'father', pt: 'pai' },
    { en: 'dog', pt: 'cachorro' },
    { en: 'cat', pt: 'gato' },
    { en: 'book', pt: 'livro' },
    { en: 'car', pt: 'carro' },
    { en: 'to love', pt: 'amar' },
    { en: 'to help', pt: 'ajudar' },
    { en: 'to call', pt: 'ligar, chamar' },
    { en: 'to know', pt: 'conhecer, saber' },
    { en: 'happy', pt: 'feliz' },
    { en: 'cold', pt: 'frio' },
  ],
  exercises: [
    { type: 'choice', prompt: '"O livro" → qual pronome?', options: ['he', 'she', 'it', 'they'], answer: 2, explanation: 'Coisas são it.' },
    { type: 'choice', prompt: '"Maria e eu" → qual pronome?', options: ['they', 'we', 'you', 'us'], answer: 1 },
    { type: 'choice', prompt: '"Os carros" → qual pronome?', options: ['it', 'them', 'they', 'we'], answer: 2, explanation: 'Plural (pessoas ou coisas) como sujeito: they.' },
    {
      type: 'choice',
      prompt: '"Está chovendo." Qual tradução está correta?',
      options: ['Is raining.', 'It is raining.', 'He is raining.'],
      answer: 1,
      explanation: 'O sujeito é obrigatório. Para clima usamos it.',
    },
    { type: 'fill', prompt: '___ am a student.', answers: ['I'] },
    { type: 'fill', prompt: 'Carlos is my friend. ___ is a doctor.', answers: ['He'] },
    { type: 'fill', prompt: 'This is my dog. ___ is very small.', answers: ['It'] },
    { type: 'fill', prompt: 'Ana is my sister. I love ___.', answers: ['her'] },
    { type: 'fill', prompt: 'John and Paul are here. Call ___!', answers: ['them'] },
    { type: 'fill', prompt: 'Please help ___. (nós)', answers: ['us'] },
    {
      type: 'fixError',
      prompt: 'Me am happy.',
      answers: ['I am happy.'],
      explanation: 'Como sujeito usamos I, nunca me.',
    },
    {
      type: 'fixError',
      prompt: 'She loves he.',
      answers: ['She loves him.'],
      explanation: 'Depois do verbo usamos o pronome objeto: him.',
    },
    { type: 'translate', from: 'pt', prompt: 'Ele me ama.', answers: ['He loves me.'], explanation: 'O pronome objeto vem depois do verbo.' },
    { type: 'translate', from: 'pt', prompt: 'Nós amamos eles.', answers: ['We love them.'] },
    {
      type: 'transform',
      instruction: 'Troque os nomes por pronomes.',
      prompt: 'Maria loves Pedro.',
      answers: ['She loves him.'],
    },
    { type: 'reorder', words: ['They', 'help', 'us'], translation: 'Eles nos ajudam.' },
  ],
}
