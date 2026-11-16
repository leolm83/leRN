import type { UnitData } from '../types'

export const u01: UnitData = {
  slug: 'present-perfect-continuous',
  title: 'Present Perfect Continuous',
  summary: 'have/has been + -ing: ações em andamento até agora e atividades recentes com resultado visível.',
  theory: [
    {
      title: 'Forma e uso principal',
      body: `**have / has been + verbo-ing**

Ação que **começou no passado e continua** (ou acabou de parar), com foco na **duração**:

- *I **have been studying** English **for** two years.* — Estudo inglês há dois anos.
- *It **has been raining** **since** this morning.*
- ***How long have** you **been waiting**?*`,
    },
    {
      title: 'Atividade recente com resultado visível',
      body: `- *You're out of breath. **Have** you **been running**?*
- *Her eyes are red. She**'s been crying**.*

Aqui o foco é a **atividade** que explica o que vemos agora.`,
    },
    {
      title: 'Simple × Continuous',
      body: `- **Simple**: resultado / quantidade concluída — *I **have written** three emails.*
- **Continuous**: atividade / duração — *I **have been writing** emails all morning.*

Verbos de **estado** (*know, like, believe, own, understand, be*) **não** usam a forma contínua:
*I **have known** her for years.* ("have been knowing" ✘)`,
    },
  ],
  vocab: [
    { en: 'out of breath', pt: 'sem fôlego, ofegante' },
    { en: 'all morning', pt: 'a manhã toda' },
    { en: 'lately', pt: 'ultimamente' },
    { en: 'to queue', pt: 'fazer fila' },
    { en: 'to cry', pt: 'chorar' },
    { en: 'exhausted', pt: 'exausto' },
    { en: 'to paint', pt: 'pintar' },
    { en: 'to own', pt: 'possuir' },
    { en: 'project', pt: 'projeto' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I have ___ studying English for two years.', answers: ['been'] },
    { type: 'fill', prompt: 'It has been ___ (rain) since this morning.', answers: ['raining'] },
    { type: 'fill', prompt: 'How long have you been ___ (wait)?', answers: ['waiting'] },
    { type: 'fill', prompt: "She's exhausted. She ___ been working all day.", answers: ['has'] },
    { type: 'fill', prompt: 'I have ___ (know) him since school. (verbo de estado)', answers: ['known'] },
    { type: 'fill', prompt: 'I have written three emails this morning. / I have been ___ emails all morning.', answers: ['writing'] },
    {
      type: 'choice',
      prompt: '"Seus olhos estão vermelhos. Você estava chorando?"',
      options: ['Your eyes are red. Have you been crying?', 'Your eyes are red. Have you cried?', 'Your eyes are red. Did you crying?'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['I have been knowing her for ten years.', 'I have known her for ten years.', 'I know her for ten years.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Foco no RESULTADO (quantidade):',
      options: ['I have been painting the house.', 'I have painted two rooms.'],
      answer: 1,
    },
    { type: 'reorder', words: ['We', 'have', 'been', 'queuing', 'for', 'an', 'hour', '.'], translation: 'Estamos na fila há uma hora.' },
    { type: 'reorder', words: ['What', 'have', 'you', 'been', 'doing', 'lately', '?'], translation: 'O que você tem feito ultimamente?' },
    { type: 'fixError', prompt: 'I am working here since 2020.', answers: ['I have been working here since 2020.', "I've been working here since 2020.", 'I have worked here since 2020.', "I've worked here since 2020."] },
    { type: 'fixError', prompt: 'She has been owning this car for years.', answers: ['She has owned this car for years.', "She's owned this car for years."] },
    {
      type: 'transform',
      instruction: 'Reescreva com o Present Perfect Continuous e "for two hours".',
      prompt: 'They started playing two hours ago and they are still playing.',
      answers: ['They have been playing for two hours.', "They've been playing for two hours."],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Eu trabalho neste projeto há seis meses.',
      answers: ['I have been working on this project for six months.', "I've been working on this project for six months.", 'I have worked on this project for six months.', "I've worked on this project for six months."],
    },
    {
      type: 'writing',
      prompt: 'Escreva um parágrafo (5–6 frases) sobre o que você tem feito ultimamente: estudos, trabalho, hobbies. Misture Present Perfect Simple e Continuous.',
      model: "I have been very busy lately. I have been studying English every day for three months, and I have already finished two levels of my course. I have also been running in the mornings. So far I have lost four kilos. I haven't been sleeping well, though, because I have been working on a big project.",
      checklist: ['have/has been + -ing para duração', 'Simple para resultados e quantidades', 'Verbos de estado só no Simple', 'for / since corretos'],
    },
  ],
}
