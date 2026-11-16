import type { UnitData } from '../types'

export const u04: UnitData = {
  slug: 'academic-hedging',
  title: 'Hedging acadêmico',
  summary: 'Suavizar afirmações com precisão: may, appear to, tend to, it is likely that, to some extent.',
  theory: [
    {
      title: 'Por que suavizar',
      body: `Na escrita acadêmica e profissional, afirmações absolutas soam **ingênuas ou arrogantes** e são fáceis de refutar. O **hedging** mostra cautela e precisão:

- ✘ *Social media **causes** depression.*
- ✔ *Excessive use of social media **may contribute** to depression in **some** teenagers.*`,
    },
    {
      title: 'Ferramentas de hedging',
      body: ``,
      table: {
        head: ['Tipo', 'Exemplos'],
        rows: [
          ['Modais', 'may, might, could, would'],
          ['Verbos', 'appear to, seem to, tend to, suggest, indicate'],
          ['Advérbios', 'possibly, probably, arguably, apparently, generally, largely'],
          ['Adjetivos', 'likely, unlikely, possible, probable'],
          ['Expressões impessoais', 'It is likely that… · It could be argued that… · There is evidence that…'],
          ['Quantificadores', 'some, many, most, a number of (em vez de all)'],
          ['Limitadores', 'to some extent · in some cases · to a certain degree · under certain conditions'],
        ],
      },
    },
    {
      title: 'Nem demais, nem de menos',
      body: `Excesso de hedging torna o texto vago: *It **might possibly perhaps** suggest…* ✘

Use **um** marcador por afirmação, proporcional à força das evidências:

- evidência forte: *The data **show** that… / clearly*
- evidência moderada: *The results **suggest** that… / likely*
- especulação: *It **may** be that… / possibly*`,
    },
  ],
  vocab: [
    { en: 'to hedge', pt: 'atenuar, ser cauteloso' },
    { en: 'arguably', pt: 'possivelmente, pode-se argumentar que' },
    { en: 'to tend to', pt: 'tender a' },
    { en: 'to indicate', pt: 'indicar' },
    { en: 'likely', pt: 'provável' },
    { en: 'to some extent', pt: 'até certo ponto' },
    { en: 'evidence', pt: 'evidências' },
    { en: 'to contribute to', pt: 'contribuir para' },
    { en: 'findings', pt: 'descobertas, resultados' },
    { en: 'apparently', pt: 'aparentemente' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The results ___ that the treatment is effective. (sugerem)', answers: ['suggest', 'indicate'] },
    { type: 'fill', prompt: 'Older users ___ to prefer desktop computers. (tendem)', answers: ['tend'] },
    { type: 'fill', prompt: 'It is ___ that prices will rise next year. (provável)', answers: ['likely', 'probable'] },
    { type: 'fill', prompt: 'This is, to some ___, a cultural issue.', answers: ['extent'] },
    { type: 'fill', prompt: 'The new policy appears ___ have reduced crime.', answers: ['to'] },
    { type: 'fill', prompt: 'It could be ___ that the study sample was too small.', answers: ['argued'] },
    {
      type: 'choice',
      prompt: 'Qual afirmação é mais adequada a um artigo acadêmico?',
      options: ['Video games make children violent.', 'Some studies suggest that violent video games may increase aggression in certain children.', 'Video games might possibly perhaps make some children slightly violent maybe.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual verbo indica a evidência MAIS forte?',
      options: ['The data show…', 'The data suggest…', 'It may be that…'],
      answer: 0,
    },
    {
      type: 'transform',
      instruction: 'Suavize com "may".',
      prompt: 'Remote work reduces productivity.',
      answers: ['Remote work may reduce productivity.'],
    },
    {
      type: 'transform',
      instruction: 'Suavize com "appear to".',
      prompt: 'The two variables are connected.',
      answers: ['The two variables appear to be connected.'],
    },
    {
      type: 'transform',
      instruction: 'Suavize com "tend to".',
      prompt: 'Students who sleep well get better grades.',
      answers: ['Students who sleep well tend to get better grades.'],
    },
    {
      type: 'transform',
      instruction: 'Suavize trocando "All" por um quantificador e usando "likely".',
      prompt: 'All companies will adopt AI in the next five years.',
      answers: ['Most companies are likely to adopt AI in the next five years.', 'Many companies are likely to adopt AI in the next five years.', 'Most companies will likely adopt AI in the next five years.', 'Many companies will likely adopt AI in the next five years.'],
    },
    { type: 'fixError', prompt: 'The findings may possibly perhaps indicate a trend.', answers: ['The findings may indicate a trend.', 'The findings indicate a possible trend.', 'The findings suggest a trend.'] },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Há evidências de que o exercício melhora a memória.',
      answers: ['There is evidence that exercise improves memory.', 'There is evidence that exercise can improve memory.', 'There is evidence that exercise may improve memory.'],
    },
    {
      type: 'writing',
      prompt: 'Reescreva este trecho com hedging adequado (sem exagerar): "Fast food causes obesity. Everyone who eats it regularly becomes overweight. The government must ban fast-food advertising, and this will solve the problem."',
      model: "Frequent consumption of fast food appears to be a significant factor in obesity. People who eat it regularly tend to have a higher risk of becoming overweight. Restricting fast-food advertising could therefore help to reduce the problem, although it is unlikely to solve it on its own.",
      checklist: ['Verbos e modais de hedging', 'Quantificadores no lugar de absolutos (everyone, all)', 'Um marcador por afirmação', 'Conclusão cautelosa'],
    },
  ],
}
