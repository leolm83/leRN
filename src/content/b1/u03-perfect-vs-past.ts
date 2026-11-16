import type { UnitData } from '../types'

export const u03: UnitData = {
  slug: 'present-perfect-vs-past-simple',
  title: 'Present Perfect × Past Simple',
  summary: 'Quando dizer "quando": tempo terminado (Past Simple) × até agora (Present Perfect).',
  theory: [
    {
      title: 'A regra principal',
      body: `- **Past Simple**: momento **terminado e definido** (*yesterday, last week, in 2015, two days ago, when I was a child*).
- **Present Perfect**: tempo **não terminado** ou **não dito** (*ever, never, today, this week, recently, so far*).

*I **have been** to Rome.* (experiência, sem data)
*I **went** to Rome **in 2019**.* (data definida)

Em português dizemos "fui" nos dois casos — por isso esse é o erro mais comum de brasileiros.`,
    },
    {
      title: 'Conversa típica',
      body: `A conversa **começa** no Present Perfect e **passa** para o Past Simple quando entram detalhes:

- *Have you ever been to Chile?* — *Yes, I have. I **went** there last year.*
- *What **did** you do there?* — *I **visited** Santiago.*

Perguntas com **When…?** sempre usam Past Simple: ***When did** you arrive?* ("When have you arrived" ✘)`,
    },
    {
      title: 'this morning, today, this week',
      body: `- *I **have drunk** three coffees **today**.* (o dia ainda não acabou)
- *I **drank** three coffees **this morning**.* — se já é tarde, a manhã terminou → Past Simple.`,
    },
  ],
  vocab: [
    { en: 'ago', pt: 'atrás (tempo)' },
    { en: 'recently', pt: 'recentemente' },
    { en: 'so far', pt: 'até agora' },
    { en: 'lately', pt: 'ultimamente' },
    { en: 'last year', pt: 'ano passado' },
    { en: 'trip', pt: 'viagem' },
    { en: 'to move', pt: 'mudar(-se)' },
    { en: 'to graduate', pt: 'formar-se' },
    { en: 'to change', pt: 'mudar, trocar' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I ___ (go) to Chile last year.', answers: ['went'] },
    { type: 'fill', prompt: 'I ___ (never / be) to Chile.', answers: ['have never been'] },
    { type: 'fill', prompt: 'When ___ you graduate?', answers: ['did'] },
    { type: 'fill', prompt: 'She ___ (move) to Lisbon two years ago.', answers: ['moved'] },
    { type: 'fill', prompt: "We've visited four countries so ___.", answers: ['far'] },
    { type: 'fill', prompt: 'I have drunk three coffees ___. (hoje — o dia não acabou)', answers: ['today'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['I have seen him yesterday.', 'I saw him yesterday.', 'I have saw him yesterday.'],
      answer: 1,
      explanation: 'yesterday é um tempo terminado e definido → Past Simple.',
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['When have you arrived?', 'When did you arrive?', 'When you arrived?'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Have you ever been to Peru?" — "Yes, I ___ there in 2018."',
      options: ['have gone', 'went', 'have been'],
      answer: 1,
    },
    { type: 'reorder', words: ['I', 'have', 'read', 'two', 'books', 'this', 'month', '.'], translation: 'Eu li dois livros este mês.' },
    { type: 'fixError', prompt: 'He has bought a car last week.', answers: ['He bought a car last week.'] },
    { type: 'fixError', prompt: 'I live here since 2020.', answers: ['I have lived here since 2020.', "I've lived here since 2020.", 'I have been living here since 2020.'] },
    {
      type: 'transform',
      instruction: 'Reescreva com "two days ago" no fim.',
      prompt: 'I have finished the book.',
      answers: ['I finished the book two days ago.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Você já foi à Itália? Sim, fui em 2019.',
      answers: ['Have you ever been to Italy? Yes, I went there in 2019.', 'Have you been to Italy? Yes, I went there in 2019.', 'Have you ever been to Italy? Yes, I went in 2019.', 'Have you been to Italy? Yes, I went in 2019.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Ele mudou de emprego recentemente.',
      answers: ['He has changed jobs recently.', "He's changed jobs recently.", 'He has recently changed jobs.', "He's recently changed jobs."],
    },
    {
      type: 'writing',
      prompt: 'Escreva um pequeno diálogo (5–6 linhas): comece perguntando se a pessoa já visitou um lugar (Present Perfect) e continue com detalhes da viagem (Past Simple).',
      model: "A: Have you ever been to Salvador?\nB: Yes, I have. I went there in 2022.\nA: Did you like it?\nB: I loved it! I ate acarajé and visited Pelourinho.\nA: How long did you stay?\nB: I stayed for a week.",
      checklist: ['Present Perfect para a pergunta geral', 'Past Simple para detalhes com data', 'When/How long + did'],
    },
  ],
}
