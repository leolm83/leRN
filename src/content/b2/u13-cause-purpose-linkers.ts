import type { UnitData } from '../types'

export const u13: UnitData = {
  slug: 'cause-result-purpose',
  title: 'Conectores de causa, consequência e finalidade',
  summary: 'because of, due to, therefore, as a result, so that, in order to — ligando ideias com precisão.',
  theory: [
    {
      title: 'Causa',
      body: `- **because / as / since** + frase: *We stayed in **as** it was raining.*
- **because of / due to / owing to** + substantivo: *The flight was delayed **due to** bad weather.*

*Due to* é mais formal; depois de *be* prefira *due to*: *The delay **was due to** the storm.*`,
    },
    {
      title: 'Consequência',
      body: `- **so** + frase (informal): *It was late, **so** we left.*
- **therefore / as a result / consequently** (formal), em nova frase ou depois de ponto e vírgula: *Sales fell. **As a result,** the company closed two stores.*
- **so + adjetivo + that** / **such + (a) + substantivo + that**: *It was **so** cold **that** the lake froze. / It was **such a** cold day **that**…*`,
    },
    {
      title: 'Finalidade',
      body: `- **to / in order to / so as to** + verbo: *I'm saving money **(in order) to** buy a car.*
- Negativa: **in order not to / so as not to**: *I left early **so as not to** miss the train.*
- **so that** + sujeito + **can/could/will/would**: *I'll write it down **so that** I **don't forget**. / She spoke slowly **so that** everyone **could** understand.*

Em português dizemos "para" em todos os casos — em inglês **nunca** "for + verbo": "I came here for study" ✘ → *to study*.`,
    },
  ],
  vocab: [
    { en: 'due to', pt: 'devido a' },
    { en: 'owing to', pt: 'devido a (formal)' },
    { en: 'therefore', pt: 'portanto' },
    { en: 'as a result', pt: 'como resultado' },
    { en: 'consequently', pt: 'consequentemente' },
    { en: 'in order to', pt: 'a fim de, para' },
    { en: 'so that', pt: 'para que' },
    { en: 'delay', pt: 'atraso' },
    { en: 'to freeze', pt: 'congelar' },
    { en: 'sales', pt: 'vendas' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The flight was delayed due ___ bad weather.', answers: ['to'] },
    { type: 'fill', prompt: 'We cancelled the trip because ___ the storm.', answers: ['of'] },
    { type: 'fill', prompt: "I'm saving money in order ___ buy a car.", answers: ['to'] },
    { type: 'fill', prompt: 'She spoke slowly so ___ everyone could understand.', answers: ['that'] },
    { type: 'fill', prompt: 'It was ___ cold that the lake froze.', answers: ['so'] },
    { type: 'fill', prompt: 'It was ___ a boring film that I fell asleep.', answers: ['such'] },
    { type: 'fill', prompt: 'Sales fell by 30%. As a ___, two stores were closed.', answers: ['result'] },
    { type: 'fill', prompt: 'I left early so as ___ to miss the train.', answers: ['not'] },
    {
      type: 'choice',
      prompt: '"Vim aqui para estudar."',
      options: ['I came here for study.', 'I came here to study.', 'I came here for to study.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['The match was cancelled because the rain.', 'The match was cancelled due to the rain.', 'The match was cancelled due the rain.'],
      answer: 1,
    },
    { type: 'reorder', words: ['The', 'data', 'was', 'incomplete', '.', 'Therefore', ',', 'the', 'study', 'was', 'repeated', '.'], translation: 'Os dados estavam incompletos. Portanto, o estudo foi repetido.' },
    { type: 'fixError', prompt: 'He is studying hard for pass the exam.', answers: ['He is studying hard to pass the exam.', "He's studying hard to pass the exam.", 'He is studying hard in order to pass the exam.'] },
    { type: 'fixError', prompt: 'It was so a good party that nobody wanted to leave.', answers: ['It was such a good party that nobody wanted to leave.'] },
    {
      type: 'transform',
      instruction: 'Reescreva com "due to".',
      prompt: 'The road was closed because there was an accident.',
      answers: ['The road was closed due to an accident.', 'The road was closed due to the accident.'],
    },
    {
      type: 'transform',
      instruction: 'Junte as frases com "so that".',
      prompt: "I'll write down the address. I won't forget it.",
      answers: ["I'll write down the address so that I won't forget it.", "I'll write down the address so that I don't forget it.", 'I will write down the address so that I will not forget it.', 'I will write down the address so that I do not forget it.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ele economizou dinheiro para viajar.',
      answers: ['He saved money to travel.', 'He saved money in order to travel.', 'He saved money so that he could travel.', 'He saved some money to travel.'],
    },
    {
      type: 'writing',
      prompt: 'Explique em um parágrafo (5–6 frases) por que você decidiu estudar inglês, com causas, consequências e objetivos (due to, therefore, in order to, so that).',
      model: "I decided to study English seriously last year. This was mainly due to my job, because most of the documentation I read is in English. I also want to work for an international company in order to earn a better salary. Therefore, I study for an hour every day. I write a short text every week so that I can practise what I learn. As a result, I already feel more confident.",
      checklist: ['because + frase / because of, due to + substantivo', 'to / in order to + verbo (nunca for + verbo)', 'so that + sujeito + can/could/will', 'Therefore / As a result + vírgula'],
    },
  ],
}
