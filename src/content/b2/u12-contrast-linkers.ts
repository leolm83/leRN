import type { UnitData } from '../types'

export const u12: UnitData = {
  slug: 'contrast-linkers',
  title: 'Conectores de contraste',
  summary: 'although, even though, despite, in spite of, however, whereas, while — e a gramática de cada um.',
  theory: [
    {
      title: 'Cada conector tem sua gramática',
      body: `O erro mais comum não é o sentido, e sim **o que vem depois** do conector:`,
      table: {
        head: ['Conector', 'Depois vem…', 'Exemplo'],
        rows: [
          ['although / even though', 'frase (sujeito + verbo)', '**Although** it was raining, we went out.'],
          ['despite / in spite of', 'substantivo ou -ing', '**Despite** the rain, we went out. / **Despite** feeling tired, …'],
          ['despite the fact that', 'frase', '**Despite the fact that** it was raining, …'],
          ['however', 'nova frase (com vírgula)', 'It was raining. **However,** we went out.'],
          ['whereas / while', 'frase (comparação de dois lados)', 'I love cities, **whereas** my wife prefers the countryside.'],
          ['but', 'frase (informal, no meio)', 'It was raining, **but** we went out.'],
        ],
      },
    },
    {
      title: 'Erros clássicos',
      body: `- "Despite **it was** raining" ✘ → *Despite **the rain*** / *Although **it was** raining*
- "Despite **of** the rain" ✘ → *Despite the rain* / *In spite **of** the rain*
- "Although…, **but**…" ✘ → use só um: *Although it was cold, we swam.*
- **however** não liga duas frases com vírgula: "It was late, however we stayed" ✘ → *It was late**;** however**,** we stayed.* ou *It was late. However, we stayed.*`,
    },
    {
      title: 'Posição de however',
      body: `- Início: *However, the results were disappointing.*
- Meio (entre vírgulas): *The results, however, were disappointing.*

**Even though** é mais enfático que *although*. **Though** no fim da frase é informal: *It was cold. We swam, **though**.*`,
    },
  ],
  vocab: [
    { en: 'although', pt: 'embora' },
    { en: 'even though', pt: 'mesmo que, ainda que' },
    { en: 'despite', pt: 'apesar de' },
    { en: 'in spite of', pt: 'apesar de' },
    { en: 'however', pt: 'no entanto, porém' },
    { en: 'whereas', pt: 'enquanto (contraste)' },
    { en: 'nevertheless', pt: 'mesmo assim, contudo' },
    { en: 'on the other hand', pt: 'por outro lado' },
    { en: 'salary', pt: 'salário' },
  ],
  exercises: [
    { type: 'fill', prompt: '___ the rain, we went for a walk. (apesar de)', answers: ['Despite', 'In spite of'] },
    { type: 'fill', prompt: '___ it was raining, we went for a walk. (embora)', answers: ['Although', 'Even though', 'Though'] },
    { type: 'fill', prompt: 'In spite ___ feeling sick, she went to work.', answers: ['of'] },
    { type: 'fill', prompt: 'The salary is good. ___, the hours are very long.', answers: ['However', 'Nevertheless'] },
    { type: 'fill', prompt: 'I love big cities, ___ my wife prefers the countryside. (enquanto)', answers: ['whereas', 'while'] },
    { type: 'fill', prompt: 'Despite ___ (study) hard, he failed the exam.', answers: ['studying'] },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['Despite it was cold, we swam.', 'Despite the cold, we swam.', 'Despite of the cold, we swam.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['Although he is rich, but he is unhappy.', 'Although he is rich, he is unhappy.', 'Although rich he is, he is unhappy.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está pontuada corretamente?',
      options: ['The plan was good, however it failed.', 'The plan was good. However, it failed.', 'The plan was good however, it failed.'],
      answer: 1,
    },
    { type: 'reorder', words: ['The', 'results', ',', 'however', ',', 'were', 'disappointing', '.'], translation: 'Os resultados, no entanto, foram decepcionantes.' },
    { type: 'fixError', prompt: 'Despite of the traffic, we arrived on time.', answers: ['Despite the traffic, we arrived on time.', 'In spite of the traffic, we arrived on time.'] },
    { type: 'fixError', prompt: 'Even though she was tired, but she finished the work.', answers: ['Even though she was tired, she finished the work.', 'She was tired, but she finished the work.'] },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "Despite".',
      prompt: 'Although he was injured, he finished the race.',
      answers: ['Despite being injured, he finished the race.', 'Despite his injury, he finished the race.', 'Despite the fact that he was injured, he finished the race.'],
    },
    {
      type: 'transform',
      instruction: 'Reescreva começando com "Although".',
      prompt: 'In spite of the high price, the tickets sold out.',
      answers: ['Although the price was high, the tickets sold out.', 'Although the tickets were expensive, they sold out.', 'Although the price was high, the tickets were sold out.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Embora seja caro, vale a pena.',
      answers: ["Although it's expensive, it's worth it.", 'Although it is expensive, it is worth it.', "Even though it's expensive, it's worth it.", 'Even though it is expensive, it is worth it.'],
    },
    {
      type: 'writing',
      prompt: 'Compare trabalhar de casa e trabalhar no escritório em um parágrafo (5–6 frases) usando ao menos 4 conectores de contraste diferentes.',
      model: "Working from home has become very common. Although it saves time, it can be lonely. Many people feel more productive at home, whereas others need the structure of an office. Despite the lack of social contact, I personally prefer working from home. However, I go to the office once a week to see my colleagues. On the other hand, my sister hates remote work.",
      checklist: ['although/even though + frase', 'despite/in spite of + substantivo ou -ing', 'However no início de frase, com vírgula', 'Sem "although… but"'],
    },
  ],
}
