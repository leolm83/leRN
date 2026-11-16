import type { UnitData } from '../types'

export const u02: UnitData = {
  slug: 'past-perfect-continuous',
  title: 'Past Perfect Continuous',
  summary: 'had been + -ing: o que vinha acontecendo antes de um momento do passado.',
  theory: [
    {
      title: 'Forma e uso',
      body: `**had been + verbo-ing** — ação em andamento **até** um momento do passado (foco na duração ou na causa):

- *When I met her, she **had been living** in Paris **for** ten years.* — …ela morava em Paris havia dez anos.
- *The ground was wet. It **had been raining**.*
- *I was tired because I **had been driving** all night.*`,
    },
    {
      title: 'Comparando os tempos perfeitos',
      body: `- *I'm tired. I **have been working** all day.* → até **agora**
- *I was tired. I **had been working** all day.* → até um momento **passado**
- *I **had written** three pages when the power went out.* → quantidade concluída (Simple)

Como sempre, verbos de estado ficam no Simple: *She **had known** him for years.*`,
    },
  ],
  vocab: [
    { en: 'wet', pt: 'molhado' },
    { en: 'power cut', pt: 'queda de energia' },
    { en: 'to go out', pt: 'apagar (luz); sair' },
    { en: 'to train', pt: 'treinar' },
    { en: 'finally', pt: 'finalmente' },
    { en: 'to give up', pt: 'desistir' },
    { en: 'injury', pt: 'lesão' },
    { en: 'sweaty', pt: 'suado' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The ground was wet. It had ___ raining.', answers: ['been'] },
    { type: 'fill', prompt: 'I was tired because I had been ___ (drive) all night.', answers: ['driving'] },
    { type: 'fill', prompt: 'She ___ been living in Paris for ten years when I met her.', answers: ['had'] },
    { type: 'fill', prompt: 'How long had you been ___ (wait) when the bus finally came?', answers: ['waiting'] },
    { type: 'fill', prompt: 'He was sweaty because he ___ (run).', answers: ['had been running'] },
    { type: 'fill', prompt: 'They ___ (know) each other for years before they got married. (verbo de estado)', answers: ['had known'] },
    {
      type: 'choice',
      prompt: '"Eu estava cansado porque vinha trabalhando o dia todo."',
      options: ['I was tired because I have been working all day.', 'I was tired because I had been working all day.', 'I was tired because I was work all day.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual destaca uma QUANTIDADE concluída?',
      options: ['I had been reading for hours.', 'I had read 50 pages when she called.'],
      answer: 1,
    },
    { type: 'reorder', words: ['She', 'had', 'been', 'training', 'for', 'months', 'before', 'the', 'injury', '.'], translation: 'Ela vinha treinando havia meses antes da lesão.' },
    { type: 'fixError', prompt: 'When I arrived, they have been waiting for an hour.', answers: ['When I arrived, they had been waiting for an hour.'] },
    { type: 'fixError', prompt: 'He had been knowing the truth for weeks.', answers: ['He had known the truth for weeks.'] },
    {
      type: 'transform',
      instruction: 'Junte com "because" usando o Past Perfect Continuous.',
      prompt: 'Her eyes were red. She had cried for a long time.',
      answers: ['Her eyes were red because she had been crying for a long time.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Nós estávamos esperando havia duas horas quando o show começou.',
      answers: ['We had been waiting for two hours when the show started.', 'We had been waiting for two hours when the concert started.', "We'd been waiting for two hours when the show started.", "We'd been waiting for two hours when the concert started."],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: 'He gave up because he had been trying for years without success.',
      answers: ['Ele desistiu porque vinha tentando havia anos sem sucesso.', 'Ele desistiu porque estava tentando havia anos sem sucesso.', 'Ele desistiu porque tinha tentado por anos sem sucesso.', 'Ele desistiu porque vinha tentando por anos sem sucesso.'],
    },
    {
      type: 'writing',
      prompt: 'Conte (5 frases) um momento marcante da sua vida, explicando o que vinha acontecendo antes dele (Past Perfect Continuous).',
      model: "When I got my first job, I had been looking for work for almost a year. I had been sending CVs every week and I had been studying programming at night. I was nervous on my first day because I hadn't worked in an office before. My new colleagues had been waiting for me with a cake. It was one of the best days of my life.",
      checklist: ['had been + -ing para o que vinha acontecendo', 'Past Simple para o evento principal', 'Verbos de estado no Simple'],
    },
  ],
}
