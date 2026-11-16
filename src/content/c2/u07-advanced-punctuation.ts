import type { UnitData } from '../types'

export const u07: UnitData = {
  slug: 'advanced-punctuation',
  title: 'Pontuação avançada',
  summary: 'Ponto e vírgula, dois-pontos, travessão, hífen e vírgulas com orações não restritivas.',
  theory: [
    {
      title: 'Ponto e vírgula (;)',
      body: `- Liga **duas frases completas** relacionadas, sem conjunção: *The results were clear**;** the plan had failed.*
- Antes de conectores como **however, therefore, moreover** ligando frases: *It was expensive**; however,** it was worth it.*
- Separa itens de listas que **já têm vírgulas**: *Lisbon, Portugal**;** Madrid, Spain**;** and Rome, Italy.*`,
    },
    {
      title: 'Dois-pontos (:)',
      body: `Introduz o que **explica, detalha ou lista** a frase anterior — e a frase antes dos dois-pontos deve estar **completa**:

- *She had one goal**:** to finish the marathon.*
- *You will need three things**:** a passport, a visa and a return ticket.*
- ✘ *The ingredients are**:** flour, eggs and milk.* (frase incompleta antes — tire os dois-pontos)

Em inglês americano, a palavra após dois-pontos pode ter maiúscula se iniciar uma frase completa; no britânico, normalmente minúscula.`,
    },
    {
      title: 'Travessão (—) e hífen (-)',
      body: `- **Travessão** (em dash): interrupção, ênfase ou comentário — mais informal que parênteses: *The answer — if there is one — will surprise you.*
- **Hífen** em adjetivos compostos **antes** do substantivo: *a **well-known** writer*, *a **five-year-old** boy*, *a **long-term** plan*.
- Depois do substantivo, normalmente sem hífen: *The writer is **well known**.*`,
    },
    {
      title: 'Vírgulas e orações relativas',
      body: `A vírgula **muda o sentido**:

- *My brother **who lives in Rome** is a chef.* → tenho mais de um irmão; falo daquele que mora em Roma.
- *My brother**,** who lives in Rome**,** is a chef.* → tenho um irmão; a informação de Roma é extra.`,
    },
  ],
  vocab: [
    { en: 'semicolon', pt: 'ponto e vírgula' },
    { en: 'colon', pt: 'dois-pontos' },
    { en: 'dash', pt: 'travessão' },
    { en: 'hyphen', pt: 'hífen' },
    { en: 'brackets', pt: 'parênteses' },
    { en: 'quotation marks', pt: 'aspas' },
    { en: 'compound adjective', pt: 'adjetivo composto' },
    { en: 'clause', pt: 'oração' },
    { en: 'well-known', pt: 'conhecido, famoso' },
  ],
  exercises: [
    {
      type: 'choice',
      prompt: 'Qual está pontuada corretamente?',
      options: ['It was expensive, however, it was worth it.', 'It was expensive; however, it was worth it.', 'It was expensive however; it was worth it.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual uso dos dois-pontos está correto?',
      options: ['The ingredients are: flour, eggs and milk.', 'You need three ingredients: flour, eggs and milk.', 'You need: flour, eggs and milk.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"My sister, who is a doctor, lives in Recife." indica que…',
      options: ['Tenho mais de uma irmã.', 'Tenho só uma irmã; ser médica é informação extra.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['a five-years-old boy', 'a five-year-old boy', 'a five year old-boy'],
      answer: 1,
    },
    {
      type: 'fixError',
      prompt: 'The data was incomplete, therefore, the study was repeated.',
      answers: ['The data was incomplete; therefore, the study was repeated.', 'The data was incomplete. Therefore, the study was repeated.', 'The data were incomplete; therefore, the study was repeated.'],
      strict: true,
    },
    {
      type: 'fixError',
      prompt: 'She is a well known author.',
      answers: ['She is a well-known author.'],
      strict: true,
    },
    {
      type: 'fixError',
      prompt: 'We visited Paris, France, Berlin, Germany, and Vienna, Austria.',
      answers: ['We visited Paris, France; Berlin, Germany; and Vienna, Austria.'],
      strict: true,
    },
    {
      type: 'fixError',
      prompt: 'He had only one dream, to become a pilot.',
      answers: ['He had only one dream: to become a pilot.', 'He had only one dream — to become a pilot.', 'He had only one dream - to become a pilot.'],
      strict: true,
    },
    {
      type: 'fixError',
      prompt: 'This is a long term investment.',
      answers: ['This is a long-term investment.'],
      strict: true,
    },
    {
      type: 'transform',
      instruction: 'Junte as duas frases com ponto e vírgula.',
      prompt: 'The meeting was cancelled. Nobody had prepared the report.',
      answers: ['The meeting was cancelled; nobody had prepared the report.', 'The meeting was canceled; nobody had prepared the report.'],
      strict: true,
    },
    {
      type: 'transform',
      instruction: 'Insira o comentário "surprisingly" entre travessões depois de "plan".',
      prompt: 'The plan worked perfectly.',
      answers: ['The plan — surprisingly — worked perfectly.', 'The plan—surprisingly—worked perfectly.', 'The plan - surprisingly - worked perfectly.', 'The plan -- surprisingly -- worked perfectly.'],
      strict: true,
    },
    {
      type: 'transform',
      instruction: 'Transforme em informação extra (não restritiva) com vírgulas.',
      prompt: 'My father who is 70 still works every day.',
      answers: ['My father, who is 70, still works every day.'],
      strict: true,
    },
    {
      type: 'fill',
      prompt: 'I know it for sure___ I was there. (pontuação entre duas frases completas e relacionadas)',
      answers: [';', ':'],
      strict: true,
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Um plano de cinco anos.',
      answers: ['A five-year plan.', 'a five-year plan'],
      strict: true,
    },
    {
      type: 'writing',
      prompt: 'Escreva um parágrafo (5–6 frases) sobre uma viagem usando corretamente: um ponto e vírgula, dois-pontos, um par de travessões, um adjetivo composto com hífen e uma oração relativa entre vírgulas.',
      model: "Last year I finally took a three-week trip to Japan. I had one clear goal: to see Mount Fuji. The weather was terrible for days; however, on the last morning the sky cleared. Our guide, who had lived in Tokyo for twenty years, said we were lucky. The view — I will never forget it — was breathtaking.",
      checklist: ['; entre frases completas ou antes de however', ': depois de frase completa', '— para comentário ou ênfase', 'Hífen em adjetivo composto antes do substantivo', 'Vírgulas na oração não restritiva'],
    },
  ],
}
