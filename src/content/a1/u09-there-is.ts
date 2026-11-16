import type { UnitData } from '../types'

export const u09: UnitData = {
  slug: 'there-is-there-are',
  title: 'There is / there are',
  summary: 'Como dizer "tem" e "há" (existir) — sem usar o verbo have — com some e any.',
  theory: [
    {
      title: 'Existir: there is / there are',
      body: `Em português dizemos "**tem** um banco aqui" ou "**há** um problema". Em inglês, para indicar que algo **existe** em um lugar, usamos:

- **there is** + singular ou incontável → *There is a bank here.*
- **there are** + plural → *There are two banks here.*

Nunca use *have* para isso: "Have a bank here" ✘.

Contração comum: **there's** (= there is). Não existe contração escrita para *there are*.`,
      examples: [
        { en: 'There is a problem.', pt: 'Há um problema.' },
        { en: 'There is some milk in the fridge.', pt: 'Tem leite na geladeira.' },
        { en: 'There are three chairs in the room.', pt: 'Tem três cadeiras na sala.' },
      ],
    },
    {
      title: 'Negativa e pergunta',
      body: `- negativa: **there isn't** / **there aren't** — ou **there is no** / **there are no**
- pergunta: **Is there…?** / **Are there…?**
- respostas curtas: *Yes, there is.* / *No, there aren't.*
- quantidade: **How many** + plural + **are there**? → *How many people are there?*`,
    },
    {
      title: 'some e any (introdução)',
      body: `- **some** (alguns, um pouco) em frases **afirmativas**: *There are some books on the table.*
- **any** em **negativas** e **perguntas**: *There aren't any books.* / *Are there any books?*

Ambos funcionam com plurais e incontáveis.`,
    },
  ],
  vocab: [
    { en: 'bank', pt: 'banco (instituição)' },
    { en: 'hospital', pt: 'hospital' },
    { en: 'fridge', pt: 'geladeira' },
    { en: 'milk', pt: 'leite' },
    { en: 'chair', pt: 'cadeira' },
    { en: 'room', pt: 'cômodo, sala, quarto' },
    { en: 'bedroom', pt: 'quarto' },
    { en: 'kitchen', pt: 'cozinha' },
    { en: 'window', pt: 'janela' },
    { en: 'street', pt: 'rua' },
    { en: 'town', pt: 'cidade pequena' },
    { en: 'problem', pt: 'problema' },
    { en: 'near', pt: 'perto' },
  ],
  exercises: [
    { type: 'fill', prompt: 'There ___ a book on the table.', answers: ['is'] },
    { type: 'fill', prompt: 'There ___ three chairs in the room.', answers: ['are'] },
    { type: 'fill', prompt: 'There ___ some milk in the fridge.', answers: ['is'], explanation: 'Milk é incontável → is.' },
    { type: 'fill', prompt: '___ there a bank near here?', answers: ['Is'] },
    { type: 'fill', prompt: "There aren't ___ students in the classroom.", answers: ['any'] },
    { type: 'fill', prompt: 'There are ___ apples on the table. (alguns)', answers: ['some'] },
    {
      type: 'choice',
      prompt: '"Tem um gato no jardim."',
      options: ['Have a cat in the garden.', 'There is a cat in the garden.', 'There are a cat in the garden.'],
      answer: 1,
    },
    { type: 'choice', prompt: 'How many people ___ there?', options: ['is', 'are', 'be'], answer: 1 },
    {
      type: 'transform',
      instruction: 'Passe para a negativa.',
      prompt: 'There is a hospital in my town.',
      answers: ['There is not a hospital in my town.', 'There is no hospital in my town.'],
    },
    {
      type: 'transform',
      instruction: 'Passe para pergunta.',
      prompt: 'There are cats in the house.',
      answers: ['Are there cats in the house?', 'Are there any cats in the house?'],
    },
    {
      type: 'fixError',
      prompt: 'Have many cars on the street.',
      answers: ['There are many cars on the street.', 'There are many cars in the street.'],
    },
    { type: 'fixError', prompt: 'There is two windows.', answers: ['There are two windows.'] },
    { type: 'translate', from: 'pt', prompt: 'Há um problema.', answers: ['There is a problem.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Tem cinco pessoas na sala.',
      answers: ['There are five people in the room.', 'There are five people in the living room.'],
    },
    { type: 'reorder', words: ['There', 'are', 'four', 'bedrooms', 'in', 'my', 'house'], translation: 'Há quatro quartos na minha casa.' },
    {
      type: 'writing',
      prompt: 'Descreva seu quarto ou sua casa em 4–5 frases usando there is / there are (e some / any).',
      model: "There is a big bed in my bedroom. There are two windows. There is a desk near the window. There aren't any pictures on the walls.",
      checklist: ['there is + singular/incontável', 'there are + plural', 'any na negativa', 'Nada de "have" para existência'],
    },
  ],
}
