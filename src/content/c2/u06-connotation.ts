import type { UnitData } from '../types'

export const u06: UnitData = {
  slug: 'connotation-synonyms',
  title: 'Precisão lexical: sinônimos e conotação',
  summary: 'Escolher a palavra exata: slim × skinny, stubborn × determined, look × stare × glance.',
  theory: [
    {
      title: 'Conotação: positiva, neutra, negativa',
      body: `Sinônimos raramente são idênticos. Eles carregam **julgamento**:`,
      table: {
        head: ['Positiva', 'Neutra', 'Negativa'],
        rows: [
          ['slim', 'thin', 'skinny'],
          ['determined', 'firm', 'stubborn'],
          ['thrifty', 'careful with money', 'stingy / mean'],
          ['confident', 'self-assured', 'arrogant'],
          ['inquisitive', 'curious', 'nosy'],
          ['youthful', 'young', 'childish'],
          ['assertive', 'direct', 'pushy'],
        ],
      },
    },
    {
      title: 'Verbos precisos',
      body: `Troque verbos genéricos (*look, say, walk, go up*) por verbos que carregam **modo**:

- **look**: *glance* (olhar rápido), *stare* (encarar), *gaze* (contemplar), *peer* (espiar com esforço)
- **say**: *whisper* (sussurrar), *mutter* (resmungar), *claim* (alegar), *admit* (admitir), *insist*
- **walk**: *stroll* (passear), *stride* (andar a passos largos), *stagger* (cambalear), *tiptoe* (andar na ponta dos pés)
- **increase**: *soar* (disparar), *rise steadily*, *edge up* (subir pouco)
- **decrease**: *plummet* (despencar), *dip* (cair levemente), *decline gradually*`,
    },
    {
      title: 'Registro e intensidade',
      body: `Escolha também pelo **registro** (*kids* × *children* × *offspring*) e pela **intensidade** (*dislike* < *hate* < *loathe*; *happy* < *delighted* < *ecstatic*).

Um dicionário de **collocations** e um de **sinônimos com exemplos** (thesaurus) são as ferramentas do escritor C2 — mas nunca troque uma palavra por um sinônimo sem checar a conotação.`,
    },
  ],
  vocab: [
    { en: 'stubborn', pt: 'teimoso' },
    { en: 'determined', pt: 'determinado' },
    { en: 'stingy', pt: 'pão-duro, mesquinho' },
    { en: 'nosy', pt: 'bisbilhoteiro' },
    { en: 'to stare', pt: 'encarar, olhar fixamente' },
    { en: 'to glance', pt: 'dar uma olhada rápida' },
    { en: 'to whisper', pt: 'sussurrar' },
    { en: 'to stroll', pt: 'passear, caminhar sem pressa' },
    { en: 'to plummet', pt: 'despencar' },
    { en: 'to soar', pt: 'disparar, subir muito' },
  ],
  exercises: [
    {
      type: 'choice',
      prompt: 'Num anúncio de emprego, qual palavra é ELOGIO?',
      options: ['pushy', 'assertive', 'bossy'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual descreve alguém magro de forma POSITIVA?',
      options: ['skinny', 'bony', 'slim'],
      answer: 2,
    },
    {
      type: 'choice',
      prompt: '"Ela se recusou a mudar de ideia" — num tom de CRÍTICA, ela é…',
      options: ['determined', 'stubborn', 'firm'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual verbo descreve olhar fixamente por muito tempo (às vezes de forma rude)?',
      options: ['glance', 'stare', 'peek'],
      answer: 1,
    },
    { type: 'fill', prompt: 'Share prices ___ by 40% in a single day. (despencaram)', answers: ['plummeted', 'plunged', 'crashed'] },
    { type: 'fill', prompt: 'House prices have ___ in the last decade. (dispararam)', answers: ['soared', 'rocketed', 'skyrocketed'] },
    { type: 'fill', prompt: 'She ___ at her watch and kept talking. (olhou rapidamente)', answers: ['glanced'] },
    { type: 'fill', prompt: '"Don\'t wake the baby," he ___. (sussurrou)', answers: ['whispered'] },
    { type: 'fill', prompt: 'We ___ along the beach after dinner. (passeamos sem pressa)', answers: ['strolled'] },
    { type: 'fill', prompt: 'My neighbour is so ___ — she always asks about my private life. (bisbilhoteira)', answers: ['nosy', 'nosey'] },
    { type: 'fill', prompt: 'I was ___ to hear the news. (muito feliz, mais intenso que happy)', answers: ['delighted', 'thrilled', 'ecstatic', 'overjoyed'] },
    {
      type: 'transform',
      instruction: 'Troque "very angry" por um único adjetivo mais preciso.',
      prompt: 'The customer was very angry.',
      answers: ['The customer was furious.', 'The customer was livid.', 'The customer was outraged.', 'The customer was enraged.'],
    },
    {
      type: 'transform',
      instruction: 'Troque "walked" por um verbo que indique que ele estava bêbado ou ferido.',
      prompt: 'He walked out of the bar.',
      answers: ['He staggered out of the bar.', 'He stumbled out of the bar.'],
    },
    { type: 'fixError', prompt: 'Our new CEO is a very stingy person who manages the budget carefully. (deveria ser elogio)', answers: ['Our new CEO is a very thrifty person who manages the budget carefully.', 'Our new CEO is a very prudent person who manages the budget carefully.', 'Our new CEO is a very economical person who manages the budget carefully.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ele resmungou algo e saiu.',
      answers: ['He muttered something and left.', 'He mumbled something and left.', 'He grumbled something and left.'],
    },
    {
      type: 'writing',
      prompt: 'Descreva a mesma pessoa duas vezes (3 frases cada): uma de forma elogiosa e outra crítica, usando sinônimos com conotações diferentes.',
      model: "Positive: Marta is a determined and confident leader. She is careful with the company's money and always speaks her mind. She is curious about everything.\n\nNegative: Marta is a stubborn and arrogant boss. She is stingy with the budget and can be pushy. She is also rather nosy.",
      checklist: ['Mesmos traços, conotações opostas', 'Adjetivos precisos (não very + adjetivo genérico)', 'Registro consistente'],
    },
  ],
}
