import type { UnitData } from '../types'

export const u06: UnitData = {
  slug: 'emphasis',
  title: 'Ênfase',
  summary: 'do/did enfático, such/so, the very, whatever/however, at all, reflexivos e intensificadores.',
  theory: [
    {
      title: 'do / does / did enfático',
      body: `Na afirmativa, **do/does/did + verbo base** dá ênfase ou contradiz algo:

- *I **do** like your new haircut!* — Eu gosto sim do seu corte!
- *She **did** call you — you just didn't hear the phone.*
- No imperativo, é educado e caloroso: ***Do** sit down.*`,
    },
    {
      title: 'Intensificadores',
      body: `- **such (a) + (adj) + substantivo**: *It was **such a** good film.*
- **so + adjetivo/advérbio**: *The film was **so** good.*
- **the very** = exatamente, o próprio: *That's **the very** book I was looking for.*
- **at all / whatsoever** reforçam negativas: *I have **no** idea **whatsoever**. / I didn't like it **at all**.*
- **on earth / ever** reforçam perguntas: *What **on earth** are you doing? / Why**ever** did you say that?*
- **reflexivos**: *The CEO **herself** answered the email.* — A própria CEO respondeu.`,
    },
    {
      title: 'Advérbios de intensidade (collocations)',
      body: `Adjetivos **graduáveis** (good, tired, cold) usam *very, extremely, really*.
Adjetivos **extremos** (amazing, exhausted, freezing) usam **absolutely, utterly, completely, really** — não *very*:

- *very tired* / *absolutely exhausted* ("very exhausted" ✘)
- *extremely cold* / *absolutely freezing*`,
    },
  ],
  vocab: [
    { en: 'whatsoever', pt: 'nenhum(a) (enfático)' },
    { en: 'utterly', pt: 'completamente' },
    { en: 'absolutely', pt: 'absolutamente' },
    { en: 'exhausted', pt: 'exausto' },
    { en: 'freezing', pt: 'congelante' },
    { en: 'furious', pt: 'furioso' },
    { en: 'on earth', pt: 'raios (em perguntas enfáticas)' },
    { en: 'the very', pt: 'o próprio, exatamente' },
    { en: 'to insist', pt: 'insistir' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I ___ like your new haircut! It looks great. (ênfase, presente)', answers: ['do'] },
    { type: 'fill', prompt: "She ___ call you, but you didn't answer. (ênfase, passado)", answers: ['did'] },
    { type: 'fill', prompt: 'It was ___ a beautiful day that we went to the beach.', answers: ['such'] },
    { type: 'fill', prompt: 'I have no idea ___. (enfático, nenhuma)', answers: ['whatsoever'] },
    { type: 'fill', prompt: 'What on ___ are you doing?', answers: ['earth'] },
    { type: 'fill', prompt: "That's the ___ restaurant where we first met. (exatamente esse)", answers: ['very'] },
    { type: 'fill', prompt: 'The president ___ congratulated the team. (o próprio)', answers: ['himself'] },
    {
      type: 'choice',
      prompt: 'Qual combinação está correta?',
      options: ['very exhausted', 'absolutely exhausted', 'a bit exhausted very'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Eu não gostei nem um pouco."',
      options: ["I didn't like it at all.", "I didn't like it whatsoever at.", 'I liked it not at all very.'],
      answer: 0,
    },
    { type: 'reorder', words: ['It', 'was', 'such', 'an', 'exciting', 'match', '.'], translation: 'Foi um jogo tão emocionante.' },
    { type: 'fixError', prompt: 'It was so a long journey.', answers: ['It was such a long journey.', 'The journey was so long.'] },
    { type: 'fixError', prompt: 'I did called you yesterday!', answers: ['I did call you yesterday!'] },
    {
      type: 'transform',
      instruction: 'Contradiga com ênfase usando did.',
      prompt: "You didn't lock the door! — (Eu tranquei sim!) I locked it.",
      answers: ['I did lock it!', 'I did lock the door!'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva com "such".',
      prompt: 'The food was so delicious.',
      answers: ['It was such delicious food.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Por que raios você fez isso?',
      answers: ['Why on earth did you do that?', 'Why ever did you do that?', 'Why on earth did you do this?'],
    },
    {
      type: 'writing',
      prompt: 'Escreva uma resenha entusiasmada (5 frases) de um livro, filme ou restaurante, usando do/did enfático, such/so, um adjetivo extremo com absolutely e um reflexivo enfático.',
      model: "I did enjoy the new restaurant on Rua Augusta. It was such a pleasant evening. The desserts were absolutely amazing, and the service was so fast. The chef herself came to our table to ask if everything was fine. I have no complaints whatsoever.",
      checklist: ['do/did + verbo base para ênfase', 'such + substantivo / so + adjetivo', 'absolutely + adjetivo extremo', 'Reflexivo enfático'],
    },
  ],
}
