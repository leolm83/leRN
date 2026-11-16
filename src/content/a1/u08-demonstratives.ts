import type { UnitData } from '../types'

export const u08: UnitData = {
  slug: 'demonstratives',
  title: 'Demonstrativos: this, that, these, those',
  summary: 'Este, esse, aquele — no singular e no plural — e a concordância com o verbo.',
  theory: [
    {
      title: 'Perto e longe, singular e plural',
      body: `O inglês tem só duas distâncias: **perto** (this/these) e **longe** (that/those). "Esse" do português pode ser *this* ou *that*, dependendo da distância.`,
      table: {
        head: ['', 'Singular', 'Plural'],
        rows: [
          ['Perto (aqui)', 'this — este, esta, isto', 'these — estes, estas'],
          ['Longe (ali, lá)', 'that — aquele, aquela, aquilo', 'those — aqueles, aquelas'],
        ],
      },
    },
    {
      title: 'Como adjetivo e como pronome',
      body: `- **Adjetivo** (antes do substantivo): *this book*, *these books*, *that car*, *those cars*
- **Pronome** (sozinho): *This is my friend.* / *Those are my shoes.*

O verbo concorda: **this/that is** — **these/those are**.

Para **apresentar alguém**, usamos *this*: *This is my sister, Carla.*`,
      examples: [
        { en: 'These are my keys.', pt: 'Estas são as minhas chaves.' },
        { en: 'Is that your car?', pt: 'Aquele é o seu carro?' },
        { en: 'This is my friend Paul.', pt: 'Este é o meu amigo Paul.' },
        { en: "That's right!", pt: 'Isso mesmo! / Está certo!' },
      ],
    },
  ],
  vocab: [
    { en: 'shoes', pt: 'sapatos' },
    { en: 'shirt', pt: 'camisa' },
    { en: 'bird', pt: 'pássaro' },
    { en: 'sky', pt: 'céu' },
    { en: 'new', pt: 'novo' },
    { en: 'expensive', pt: 'caro' },
    { en: 'cheap', pt: 'barato' },
    { en: 'over there', pt: 'ali, lá' },
    { en: 'here', pt: 'aqui' },
    { en: 'right', pt: 'certo; direita' },
  ],
  exercises: [
    { type: 'fill', prompt: '___ are my shoes. (aqui, plural)', answers: ['These'] },
    { type: 'fill', prompt: '___ house over there is beautiful.', answers: ['That'] },
    { type: 'fill', prompt: 'Look at ___ birds in the sky!', answers: ['those'] },
    { type: 'fill', prompt: '___ is my brother, Lucas. (apresentando alguém ao seu lado)', answers: ['This'] },
    { type: 'fill', prompt: 'These ___ my keys.', answers: ['are'] },
    { type: 'fill', prompt: 'That shirt ___ very expensive.', answers: ['is'] },
    { type: 'choice', prompt: '"Estes livros" (aqui)', options: ['This books', 'These books', 'Those book'], answer: 1 },
    { type: 'choice', prompt: '"Aquelas casas" (lá longe)', options: ['That houses', 'These houses', 'Those houses'], answer: 2 },
    { type: 'fixError', prompt: 'This shoes are new.', answers: ['These shoes are new.'] },
    { type: 'fixError', prompt: 'Those is my friends.', answers: ['Those are my friends.'] },
    { type: 'transform', instruction: 'Passe para o plural.', prompt: 'This is my pen.', answers: ['These are my pens.'] },
    { type: 'transform', instruction: 'Passe para o plural.', prompt: 'That woman is a doctor.', answers: ['Those women are doctors.'] },
    { type: 'translate', from: 'pt', prompt: 'Aquela é a minha escola.', answers: ['That is my school.'] },
    { type: 'translate', from: 'pt', prompt: 'Estes são os meus pais.', answers: ['These are my parents.'] },
    { type: 'translate', from: 'en', prompt: 'Is that your car?', answers: ['Aquele é o seu carro?', 'Aquele é seu carro?', 'Esse é o seu carro?', 'Esse é seu carro?', 'Aquele carro é seu?', 'Esse carro é seu?'] },
    { type: 'reorder', words: ['Is', 'this', 'your', 'bag', '?'], translation: 'Esta bolsa é sua?' },
  ],
}
