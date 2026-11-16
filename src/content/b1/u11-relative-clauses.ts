import type { UnitData } from '../types'

export const u11: UnitData = {
  slug: 'relative-clauses',
  title: 'Orações relativas',
  summary: 'who, which, that, where, whose — o "que", "onde" e "cujo" do inglês.',
  theory: [
    {
      title: 'Os pronomes relativos',
      body: `O "que" do português tem várias traduções:`,
      table: {
        head: ['Pronome', 'Para', 'Exemplo'],
        rows: [
          ['who', 'pessoas', 'The woman **who** lives next door is a doctor.'],
          ['which', 'coisas, animais', 'The book **which** I bought is great.'],
          ['that', 'pessoas ou coisas (informal)', 'The film **that** we saw was boring.'],
          ['where', 'lugares (onde)', 'This is the café **where** we met.'],
          ['whose', 'posse (cujo)', 'I have a friend **whose** father is a pilot.'],
          ['when', 'tempo (em que)', 'I remember the day **when** I met her.'],
        ],
      },
    },
    {
      title: 'Omitindo o pronome',
      body: `Quando o pronome é o **objeto** do verbo seguinte (há outro sujeito depois dele), podemos omiti-lo:

- *The book (**which/that**) **I** bought is great.* → *The book I bought is great.*
- *The man **who** called you* — aqui *who* é o sujeito de *called*, **não** pode sair.

Não repita o objeto: *The book which I bought **it*** ✘`,
    },
    {
      title: 'Vírgulas: informação essencial × extra',
      body: `- **Essencial** (define qual): **sem vírgulas**, pode usar *that*: *The students **who passed** got a prize.*
- **Extra** (só acrescenta informação): **com vírgulas**, **nunca** *that*: *My mother**, who is 70,** still works.*

*Paris, **which** is the capital of France, is beautiful.* ("Paris, that is…" ✘)`,
    },
  ],
  vocab: [
    { en: 'who', pt: 'que, quem (pessoas)' },
    { en: 'which', pt: 'que, o qual (coisas)' },
    { en: 'whose', pt: 'cujo' },
    { en: 'where', pt: 'onde' },
    { en: 'next door', pt: 'ao lado, vizinho' },
    { en: 'pilot', pt: 'piloto' },
    { en: 'to borrow', pt: 'pegar emprestado' },
    { en: 'to lend', pt: 'emprestar' },
    { en: 'village', pt: 'vilarejo, aldeia' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The woman ___ lives next door is a doctor.', answers: ['who', 'that'] },
    { type: 'fill', prompt: 'This is the restaurant ___ we had our first date.', answers: ['where'] },
    { type: 'fill', prompt: 'I have a friend ___ father is a pilot.', answers: ['whose'] },
    { type: 'fill', prompt: 'The phone ___ I bought last week is already broken.', answers: ['which', 'that'] },
    { type: 'fill', prompt: 'My brother, ___ lives in Canada, is visiting us.', answers: ['who'] },
    { type: 'fill', prompt: 'Rio, ___ is famous for its beaches, gets very hot in summer.', answers: ['which'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['Paris, that is the capital of France, is beautiful.', 'Paris, which is the capital of France, is beautiful.', 'Paris which is the capital of France is beautiful.'],
      answer: 1,
      explanation: 'Informação extra → vírgulas e which (nunca that).',
    },
    {
      type: 'choice',
      prompt: 'Em qual frase o pronome pode ser omitido?',
      options: ['The man who called you is here.', 'The book that I lent you is mine.', 'The dog which bit me ran away.'],
      answer: 1,
      explanation: 'Em "that I lent you", that é objeto (o sujeito é I), então pode sair: The book I lent you.',
    },
    { type: 'reorder', words: ['That', 'is', 'the', 'village', 'where', 'my', 'father', 'was', 'born', '.'], translation: 'Aquele é o vilarejo onde meu pai nasceu.' },
    { type: 'reorder', words: ['The', 'book', 'you', 'lent', 'me', 'was', 'amazing', '.'], translation: 'O livro que você me emprestou foi incrível.' },
    { type: 'fixError', prompt: 'The man which helped me was very kind.', answers: ['The man who helped me was very kind.', 'The man that helped me was very kind.'] },
    { type: 'fixError', prompt: 'This is the car that I bought it.', answers: ['This is the car that I bought.', 'This is the car which I bought.', 'This is the car I bought.'] },
    {
      type: 'transform',
      instruction: 'Junte as frases com who.',
      prompt: 'I met a girl. She speaks five languages.',
      answers: ['I met a girl who speaks five languages.'],
    },
    {
      type: 'transform',
      instruction: 'Junte as frases com whose.',
      prompt: 'I know a man. His wife is a famous singer.',
      answers: ['I know a man whose wife is a famous singer.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Esta é a casa onde eu cresci.',
      answers: ['This is the house where I grew up.', 'This is the house I grew up in.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O filme que vimos ontem foi chato.',
      answers: ['The film we saw yesterday was boring.', 'The film that we saw yesterday was boring.', 'The film which we saw yesterday was boring.', 'The movie we saw yesterday was boring.', 'The movie that we saw yesterday was boring.', 'The movie which we saw yesterday was boring.'],
    },
    {
      type: 'writing',
      prompt: 'Descreva 3 pessoas e 2 lugares importantes para você com orações relativas (who, which, where, whose).',
      model: "My best friend is a person who always listens to me. My grandmother, who is 85, still cooks every Sunday. I have a colleague whose son plays professional football. Ouro Preto is the city where I studied. My favourite place is a small café which serves amazing cakes.",
      checklist: ['who para pessoas, which para coisas', 'where para lugares, whose para posse', 'Vírgulas na informação extra (sem that)', 'Sem repetir o objeto'],
    },
  ],
}
