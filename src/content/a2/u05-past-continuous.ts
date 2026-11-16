import type { UnitData } from '../types'

export const u05: UnitData = {
  slug: 'past-continuous',
  title: 'Past Continuous',
  summary: 'was / were + -ing: ações em andamento no passado, interrupções com when e ações simultâneas com while.',
  theory: [
    {
      title: 'Forma e uso',
      body: `**was / were + verbo-ing** — equivale ao "estava fazendo" do português.

Use para uma ação **em andamento** num momento do passado:

- *At 8 p.m. I **was having** dinner.* — Às 8 da noite eu estava jantando.
- *What **were** you **doing** yesterday at noon?*

Também é usado para **descrever o cenário** de uma história: *The sun **was shining** and people **were walking** in the park.*`,
    },
    {
      title: 'Ação longa interrompida: when',
      body: `A ação **longa** (em andamento) vai no **Past Continuous**; a ação **curta** que interrompe vai no **Past Simple**:

- *I **was taking** a shower **when** the phone **rang**.*
- *When she **arrived**, we **were watching** TV.*`,
    },
    {
      title: 'Ações simultâneas: while',
      body: `**while** (enquanto) normalmente vem com a ação longa, no Continuous:

- ***While** I **was cooking**, my husband **was cleaning** the house.*
- *Someone stole my bag **while** I **was sleeping**.*

Atenção: **during** (durante) vem com um **substantivo**, não com uma frase: *during the movie*, *during the night*.

Os **stative verbs** (know, want, like, need…) continuam sem -ing: *I **knew** the answer* ("I was knowing" ✘).`,
    },
  ],
  vocab: [
    { en: 'while', pt: 'enquanto' },
    { en: 'during', pt: 'durante' },
    { en: 'to ring', pt: 'tocar (telefone, campainha)' },
    { en: 'to shine', pt: 'brilhar' },
    { en: 'to steal', pt: 'roubar' },
    { en: 'to leave', pt: 'sair, partir; deixar' },
    { en: 'shower', pt: 'chuveiro, banho' },
    { en: 'accident', pt: 'acidente' },
    { en: 'lights', pt: 'luzes' },
    { en: 'cards', pt: 'cartas (baralho)' },
    { en: 'someone', pt: 'alguém' },
  ],
  exercises: [
    { type: 'fill', prompt: 'At 9 p.m. yesterday, I ___ TV. (watch)', answers: ['was watching'] },
    { type: 'fill', prompt: 'They ___ when I arrived. (sleep)', answers: ['were sleeping'] },
    { type: 'fill', prompt: 'She ___ dinner when the phone rang. (cook)', answers: ['was cooking'] },
    { type: 'fill', prompt: 'I was walking home when it ___ to rain. (start)', answers: ['started'] },
    { type: 'fill', prompt: 'While we ___, the lights went out. (study)', answers: ['were studying'] },
    { type: 'fill', prompt: 'What ___ you doing at 10 last night?', answers: ['were'] },
    { type: 'choice', prompt: 'I ___ a shower when you called.', options: ['took', 'was taking'], answer: 1 },
    {
      type: 'choice',
      prompt: '___ I was cooking, my husband was cleaning the house.',
      options: ['While', 'During'],
      answer: 0,
      explanation: 'during vem com substantivo: during the movie.',
    },
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'He was working at 8 a.m.', answers: ['He was not working at 8 a.m.'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'They were playing cards.', answers: ['Were they playing cards?'] },
    {
      type: 'transform',
      instruction: 'Junte as duas frases usando when.',
      prompt: 'I was reading. The lights went out.',
      answers: ['I was reading when the lights went out.', 'When the lights went out, I was reading.'],
    },
    { type: 'fixError', prompt: 'I was knowing the answer.', answers: ['I knew the answer.'] },
    { type: 'fixError', prompt: 'She were reading a book.', answers: ['She was reading a book.'] },
    { type: 'fixError', prompt: 'While I was sleep, someone called.', answers: ['While I was sleeping, someone called.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'O que você estava fazendo às oito horas?',
      answers: ["What were you doing at eight o'clock?", 'What were you doing at eight?', 'What were you doing at 8?', "What were you doing at 8 o'clock?"],
    },
    { type: 'translate', from: 'pt', prompt: 'Estava chovendo quando eu saí.', answers: ['It was raining when I left.'] },
    {
      type: 'reorder',
      words: ['The', 'sun', 'was', 'shining', 'and', 'the', 'birds', 'were', 'singing'],
      translation: 'O sol estava brilhando e os pássaros estavam cantando.',
    },
  ],
}
