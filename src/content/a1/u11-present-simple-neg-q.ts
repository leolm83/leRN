import type { UnitData } from '../types'

export const u11: UnitData = {
  slug: 'present-simple-negative-questions',
  title: 'Present Simple — negativa e perguntas (do / does)',
  summary: 'Os auxiliares do e does: como negar e perguntar com verbos comuns — e por que o to be não usa do.',
  theory: [
    {
      title: 'O auxiliar do / does',
      body: `Com verbos comuns (todos menos *be* e os modais como *can*), negativas e perguntas precisam de um **auxiliar**:

- **do** para I / you / we / they
- **does** para he / she / it

Quando o auxiliar é **does**, o **-s sai do verbo principal** — ele já está no auxiliar.`,
      table: {
        head: ['', 'I / you / we / they', 'he / she / it'],
        rows: [
          ['Afirmativa', 'I work.', 'She work**s**.'],
          ['Negativa', "I **don't** work.", "She **doesn't** work."],
          ['Pergunta', '**Do** you work?', '**Does** she work?'],
          ['Resposta curta', 'Yes, I do. / No, I don\'t.', "Yes, she does. / No, she doesn't."],
        ],
      },
    },
    {
      title: 'Perguntas com question words',
      body: `Estrutura: **question word + do/does + sujeito + verbo**?`,
      examples: [
        { en: 'What do you do?', pt: 'O que você faz? (profissão)' },
        { en: 'Where does she live?', pt: 'Onde ela mora?' },
        { en: 'What time does the movie start?', pt: 'Que horas o filme começa?' },
        { en: 'How often do you study?', pt: 'Com que frequência você estuda?' },
      ],
    },
    {
      title: 'Cuidado: to be não usa do',
      body: `O verbo **to be** faz negativa e pergunta sozinho (unidade 4):

- *Are you happy?* ✔ — "Do you are happy?" ✘
- *She isn't tired.* ✔ — "She doesn't is tired." ✘`,
    },
  ],
  vocab: [
    { en: 'to like', pt: 'gostar' },
    { en: 'to drive', pt: 'dirigir' },
    { en: 'to start', pt: 'começar' },
    { en: 'to understand', pt: 'entender' },
    { en: 'to need', pt: 'precisar' },
    { en: 'to want', pt: 'querer' },
    { en: 'meat', pt: 'carne' },
    { en: 'fish', pt: 'peixe' },
    { en: 'movie', pt: 'filme' },
    { en: 'guitar', pt: 'violão, guitarra' },
    { en: 'weekend', pt: 'fim de semana' },
  ],
  exercises: [
    {
      type: 'transform',
      instruction: 'Passe para a negativa.',
      prompt: 'She likes fish.',
      answers: ['She does not like fish.'],
    },
    { type: 'transform', instruction: 'Passe para a negativa.', prompt: 'They play tennis.', answers: ['They do not play tennis.'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'He works on Saturdays.', answers: ['Does he work on Saturdays?'] },
    { type: 'transform', instruction: 'Passe para pergunta.', prompt: 'You speak Spanish.', answers: ['Do you speak Spanish?'] },
    { type: 'fill', prompt: '___ your sister live here?', answers: ['Does'] },
    { type: 'fill', prompt: 'I ___ eat meat. (negativa)', answers: ["don't", 'do not'] },
    { type: 'fill', prompt: 'Where ___ you work?', answers: ['do'] },
    { type: 'fill', prompt: 'Does he drive? — No, he ___.', answers: ["doesn't", 'does not'] },
    {
      type: 'choice',
      prompt: '"Ela não trabalha."',
      options: ["She don't work.", "She doesn't work.", "She doesn't works."],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Você está feliz?"',
      options: ['Do you are happy?', 'Are you happy?', 'Do you happy?'],
      answer: 1,
      explanation: 'To be não usa do.',
    },
    { type: 'fixError', prompt: "He doesn't likes coffee.", answers: ["He doesn't like coffee."], explanation: 'Depois de does/doesn\'t o verbo fica na forma básica.' },
    { type: 'fixError', prompt: 'Does she plays the guitar?', answers: ['Does she play the guitar?'] },
    { type: 'fixError', prompt: 'Where you live?', answers: ['Where do you live?'] },
    { type: 'translate', from: 'pt', prompt: 'O que você faz? (profissão)', answers: ['What do you do?', 'What do you do for a living?'] },
    { type: 'translate', from: 'pt', prompt: 'Meu pai não fala inglês.', answers: ['My father does not speak English.', 'My dad does not speak English.'] },
    { type: 'translate', from: 'pt', prompt: 'Você entende?', answers: ['Do you understand?'] },
    { type: 'reorder', words: ['What', 'time', 'does', 'the', 'movie', 'start', '?'], translation: 'Que horas o filme começa?' },
  ],
}
