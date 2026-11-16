import type { UnitData } from '../types'

export const u01: UnitData = {
  slug: 'negative-inversion',
  title: 'Inversão com advérbios negativos',
  summary: 'Never have I seen…, Not only did she…, Hardly had we…: ênfase formal com ordem de pergunta.',
  theory: [
    {
      title: 'Como funciona',
      body: `Quando uma expressão **negativa ou restritiva** abre a frase, o sujeito e o auxiliar **se invertem** (como numa pergunta). É um recurso de **ênfase** típico da escrita formal e literária.

- *I have **never** seen such chaos.* → ***Never have I seen** such chaos.*
- *She **not only** sings, but she **also** writes.* → ***Not only does she sing**, but she also writes.*

Sem auxiliar na frase original, use **do / does / did**: *Rarely **do** we eat out.*`,
    },
    {
      title: 'Expressões que provocam inversão',
      body: ``,
      table: {
        head: ['Expressão', 'Exemplo'],
        rows: [
          ['Never / Rarely / Seldom', '**Seldom do** we see such talent.'],
          ['Not only … but also', '**Not only did** he lie, **but** he **also** stole.'],
          ['Hardly / Scarcely … when', '**Hardly had** I arrived **when** the phone rang.'],
          ['No sooner … than', '**No sooner had** we left **than** it started raining.'],
          ['Under no circumstances', '**Under no circumstances should** you open this door.'],
          ['Only then / Only when / Only after', '**Only when** I read the letter **did I** understand.'],
          ['Little', '**Little did** she know what was waiting for her.'],
          ['Not until', '**Not until** the next day **did** we hear the news.'],
        ],
      },
    },
    {
      title: 'Atenção',
      body: `- Com **Only when / Not until / Only after**, a inversão acontece na **segunda** oração: *Only when I left **did I realise**.*
- **Hardly / Scarcely** combinam com **when**; **No sooner** com **than**.
- Use com moderação: excesso de inversões soa artificial.`,
    },
  ],
  vocab: [
    { en: 'seldom', pt: 'raramente' },
    { en: 'scarcely', pt: 'mal, quase não' },
    { en: 'no sooner', pt: 'mal, assim que' },
    { en: 'under no circumstances', pt: 'em hipótese alguma' },
    { en: 'little did I know', pt: 'mal sabia eu' },
    { en: 'not until', pt: 'só quando, só depois' },
    { en: 'chaos', pt: 'caos' },
    { en: 'to witness', pt: 'testemunhar' },
    { en: 'remarkable', pt: 'notável' },
  ],
  exercises: [
    { type: 'fill', prompt: 'Never ___ I seen such a beautiful place.', answers: ['have'] },
    { type: 'fill', prompt: 'Not only ___ she speak French, but she also speaks Arabic.', answers: ['does'] },
    { type: 'fill', prompt: 'Hardly had we sat down ___ the lights went out.', answers: ['when'] },
    { type: 'fill', prompt: 'No sooner had he left ___ it started to rain.', answers: ['than'] },
    { type: 'fill', prompt: 'Under no circumstances ___ you share your password.', answers: ['should', 'must'] },
    { type: 'fill', prompt: '___ did she know that her life was about to change. (mal sabia)', answers: ['Little'] },
    { type: 'fill', prompt: 'Only when I read the report ___ I understand the problem.', answers: ['did'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['Rarely we go to the theatre.', 'Rarely do we go to the theatre.', 'Rarely go we to the theatre.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['Not until midnight did they arrive.', 'Not until midnight they did arrive.', 'Not until did midnight they arrive.'],
      answer: 0,
    },
    { type: 'reorder', words: ['Seldom', 'have', 'I', 'witnessed', 'such', 'a', 'remarkable', 'performance', '.'], translation: 'Raramente presenciei uma atuação tão notável.' },
    { type: 'fixError', prompt: 'Never I have eaten such good food.', answers: ['Never have I eaten such good food.', 'I have never eaten such good food.'] },
    { type: 'fixError', prompt: 'Not only he forgot my birthday, but he also lied about it.', answers: ['Not only did he forget my birthday, but he also lied about it.'] },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "Never".',
      prompt: 'I have never been so embarrassed.',
      answers: ['Never have I been so embarrassed.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "No sooner".',
      prompt: 'As soon as I got home, the phone rang.',
      answers: ['No sooner had I got home than the phone rang.', 'No sooner had I gotten home than the phone rang.', 'No sooner had I arrived home than the phone rang.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "Under no circumstances".',
      prompt: 'You must not leave the building during the test.',
      answers: ['Under no circumstances must you leave the building during the test.', 'Under no circumstances should you leave the building during the test.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Mal sabia eu que ela era a diretora.',
      answers: ['Little did I know that she was the director.', 'Little did I know she was the director.', 'Little did I know that she was the principal.', 'Little did I know she was the principal.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva o início de uma história (5 frases) usando ao menos 3 estruturas de inversão diferentes.',
      model: "Never had I felt so nervous as on the day of my first interview. No sooner had I entered the building than I realised I had forgotten my CV. Little did I know that the interviewer would not even ask for it. Not only was she friendly, but she also offered me a coffee. Only when I left did I notice that I was wearing two different shoes.",
      checklist: ['Auxiliar + sujeito depois da expressão negativa', 'do/does/did quando não há auxiliar', 'Hardly…when / No sooner…than', 'Inversão na 2ª oração com Only when / Not until'],
    },
  ],
}
