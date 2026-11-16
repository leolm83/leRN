import type { UnitData } from '../types'

export const u01: UnitData = {
  slug: 'alphabet-capitals-punctuation',
  title: 'Alfabeto, maiúsculas e pontuação',
  summary: 'As regras de escrita que valem para todas as outras lições: letras, maiúsculas, pontuação e cumprimentos escritos.',
  theory: [
    {
      title: 'O alfabeto inglês',
      body: `O inglês usa as mesmas **26 letras** do português, incluindo **k**, **w** e **y**, que são muito comuns.

A grande diferença na escrita: o inglês **não usa acentos** nem **ç**.

- português: música, café, ação, informação
- inglês: music, coffee, action, information`,
    },
    {
      title: 'Letras maiúsculas (capital letters)',
      body: `Em inglês, algumas palavras que em português são minúsculas **sempre** começam com letra maiúscula. Este é um dos erros mais comuns de brasileiros.

Use maiúscula em:

- o início de toda frase
- o pronome **I** (eu) — sempre, em qualquer posição da frase
- nomes de pessoas, cidades, países: *Ana*, *Rio de Janeiro*, *Brazil*
- **dias da semana** e **meses**: *Monday*, *January*
- **nacionalidades e idiomas**: *Brazilian*, *English*, *Portuguese*`,
      table: {
        head: ['Português', 'Inglês'],
        rows: [
          ['segunda-feira', 'Monday'],
          ['janeiro', 'January'],
          ['brasileiro', 'Brazilian'],
          ['inglês (idioma)', 'English'],
          ['eu', 'I'],
        ],
      },
      examples: [
        { en: 'I live in Brazil.', pt: 'Eu moro no Brasil.' },
        { en: 'Today is Friday.', pt: 'Hoje é sexta-feira.' },
        { en: 'She speaks English and Spanish.', pt: 'Ela fala inglês e espanhol.' },
        { en: 'My birthday is in March.', pt: 'Meu aniversário é em março.' },
      ],
    },
    {
      title: 'Pontuação básica',
      body: `- **period** ( . ) — ponto final, termina frases afirmativas e negativas
- **question mark** ( ? ) — só no **final** da pergunta. Não existe "¿" no começo
- **exclamation mark** ( ! ) — surpresa, ênfase, ordens
- **comma** ( , ) — vírgula
- **apostrophe** ( ' ) — usado nas contrações (*I'm*, *don't*) e na posse (*Ana's car*)

Atenção: no inglês os números usam ponto e vírgula **ao contrário** do português — você verá isso na lição de números.`,
    },
    {
      title: 'Cumprimentos e expressões escritas',
      body: `Expressões fixas que você vai usar em mensagens e e-mails. Repare que **Good night** é usado para se despedir (antes de dormir); para cumprimentar à noite use **Good evening**.`,
      table: {
        head: ['Inglês', 'Português'],
        rows: [
          ['Hello / Hi', 'Olá / Oi'],
          ['Good morning', 'Bom dia'],
          ['Good afternoon', 'Boa tarde'],
          ['Good evening', 'Boa noite (ao chegar)'],
          ['Good night', 'Boa noite (ao sair/dormir)'],
          ['Goodbye / Bye', 'Tchau / Adeus'],
          ['Please', 'Por favor'],
          ['Thank you / Thanks', 'Obrigado(a)'],
          ['Sorry', 'Desculpe'],
          ['My name is…', 'Meu nome é…'],
        ],
      },
    },
  ],
  vocab: [
    { en: 'hello', pt: 'olá' },
    { en: 'goodbye', pt: 'tchau, adeus' },
    { en: 'please', pt: 'por favor' },
    { en: 'thank you', pt: 'obrigado(a)' },
    { en: 'sorry', pt: 'desculpe' },
    { en: 'yes', pt: 'sim' },
    { en: 'no', pt: 'não' },
    { en: 'name', pt: 'nome' },
    { en: 'Monday', pt: 'segunda-feira' },
    { en: 'Tuesday', pt: 'terça-feira' },
    { en: 'Wednesday', pt: 'quarta-feira' },
    { en: 'Thursday', pt: 'quinta-feira' },
    { en: 'Friday', pt: 'sexta-feira' },
    { en: 'Saturday', pt: 'sábado' },
    { en: 'Sunday', pt: 'domingo' },
    { en: 'English', pt: 'inglês (idioma)' },
    { en: 'Brazilian', pt: 'brasileiro(a)' },
    { en: 'Portuguese', pt: 'português (idioma)' },
  ],
  exercises: [
    {
      type: 'choice',
      prompt: 'Qual frase está escrita corretamente?',
      options: ['i live in brazil.', 'I live in Brazil.', 'I live in brazil.'],
      answer: 1,
      explanation: 'O pronome I e os nomes de países sempre levam maiúscula.',
    },
    {
      type: 'choice',
      prompt: 'Como se escreve "segunda-feira" em inglês?',
      options: ['monday', 'Monday', 'Mondey'],
      answer: 1,
      explanation: 'Dias da semana começam com maiúscula em inglês.',
    },
    {
      type: 'choice',
      prompt: 'Qual destas palavras NÃO precisa começar com maiúscula?',
      options: ['English', 'Friday', 'March', 'apple'],
      answer: 3,
      explanation: 'Idiomas, dias e meses levam maiúscula; substantivos comuns (apple = maçã) não.',
    },
    {
      type: 'choice',
      prompt: 'Qual pergunta está pontuada corretamente?',
      options: ['¿Where are you from?', 'Where are you from?', 'Where are you from.'],
      answer: 1,
      explanation: 'Em inglês o ponto de interrogação aparece só no final.',
    },
    {
      type: 'fixError',
      strict: true,
      prompt: 'my name is carlos.',
      answers: ['My name is Carlos.'],
      explanation: 'Início da frase e nome próprio com maiúscula.',
    },
    {
      type: 'fixError',
      strict: true,
      prompt: 'i am from brazil.',
      answers: ['I am from Brazil.', "I'm from Brazil."],
      explanation: 'I é sempre maiúsculo; Brazil é nome de país (e se escreve com z).',
    },
    {
      type: 'fixError',
      strict: true,
      prompt: 'Today is saturday.',
      answers: ['Today is Saturday.'],
    },
    {
      type: 'fixError',
      strict: true,
      prompt: 'She speaks english.',
      answers: ['She speaks English.'],
      explanation: 'Idiomas são escritos com maiúscula.',
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Obrigado.',
      answers: ['Thank you.', 'Thanks.', 'Thank you very much.', 'Thanks a lot.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Bom dia!',
      answers: ['Good morning!'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Meu nome é Ana.',
      answers: ['My name is Ana.', "My name's Ana."],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: 'Goodbye!',
      answers: ['Tchau!', 'Adeus!', 'Até logo!', 'Até mais!'],
    },
    {
      type: 'fill',
      prompt: 'Good ___! (boa noite, ao chegar em uma festa)',
      answers: ['evening'],
      explanation: 'Good evening cumprimenta; Good night é despedida.',
    },
    {
      type: 'reorder',
      words: ['My', 'name', 'is', 'Pedro'],
      translation: 'Meu nome é Pedro.',
    },
    {
      type: 'writing',
      prompt: 'Escreva 3 frases se apresentando: seu nome, seu país e sua cidade. (Use "My name is…", "I am from…", "I live in…")',
      model: 'Hello! My name is Leonardo. I am from Brazil. I live in São Paulo.',
      checklist: [
        'Cada frase começa com letra maiúscula',
        'O pronome I está maiúsculo',
        'Nomes de país e cidade estão com maiúscula',
        'Cada frase termina com ponto',
      ],
    },
  ],
}
