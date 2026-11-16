import type { UnitData } from '../types'

export const u12: UnitData = {
  slug: 'essays-summaries',
  title: 'Ensaios e resumos',
  summary: 'Resumir com as próprias palavras, parafrasear, relatar fontes e escrever ensaios discursivos.',
  theory: [
    {
      title: 'Como escrever um resumo',
      body: `- **Leia** o texto inteiro e identifique a **ideia central** e os **pontos principais**.
- **Ignore** exemplos, repetições e detalhes secundários.
- **Parafraseie**: use suas palavras e estruturas — não copie frases.
- **Seja neutro**: nada de opinião própria num resumo.
- Comece situando a fonte: *The article **argues that**… / According to the author, …*`,
    },
    {
      title: 'Verbos de relato',
      body: `Escolha o verbo que mostra **a atitude** do autor:

- neutro: **states, explains, describes, points out**
- defende: **argues, claims, maintains, suggests**
- concorda / discorda: **acknowledges, admits / questions, challenges, disputes**
- conclui: **concludes, emphasises, highlights**

*The author **acknowledges** that the plan is expensive but **maintains** that it is necessary.*`,
    },
    {
      title: 'Técnicas de paráfrase',
      body: `- **Sinônimos**: *significant → considerable, rise → increase*
- **Mudar a classe da palavra**: *The economy grew → economic growth*
- **Mudar a estrutura**: ativa ↔ passiva; *because* → *due to*
- **Mudar a ordem** das ideias

Original: *Many young people are leaving rural areas because there are few jobs.*
Paráfrase: *Due to a lack of employment, the countryside is losing a large part of its young population.*`,
    },
    {
      title: 'Ensaio discursivo (for and against)',
      body: `Diferente do argumentativo, o discursivo apresenta **os dois lados** com equilíbrio e só dá a opinião na conclusão:

- Introdução: apresente o tema e a questão
- Argumentos **a favor**
- Argumentos **contra**
- Conclusão: pese os dois lados e dê sua posição

Frases: *Proponents of… argue that… / Critics, on the other hand, point out that… / On balance, …*`,
    },
  ],
  vocab: [
    { en: 'to summarise', pt: 'resumir' },
    { en: 'to paraphrase', pt: 'parafrasear' },
    { en: 'to argue', pt: 'argumentar, defender' },
    { en: 'to acknowledge', pt: 'reconhecer' },
    { en: 'to maintain', pt: 'sustentar, afirmar' },
    { en: 'to highlight', pt: 'destacar' },
    { en: 'proponent', pt: 'defensor' },
    { en: 'critic', pt: 'crítico' },
    { en: 'on balance', pt: 'pesando tudo, no geral' },
    { en: 'main idea', pt: 'ideia principal' },
  ],
  exercises: [
    { type: 'fill', prompt: 'The author ___ that the plan is expensive but says it is necessary. (reconhece)', answers: ['acknowledges', 'admits'] },
    { type: 'fill', prompt: '___ to the article, unemployment has fallen. (de acordo com)', answers: ['According'] },
    { type: 'fill', prompt: 'Proponents of the law argue that it will reduce crime. Critics, on the other ___, …', answers: ['hand'] },
    { type: 'fill', prompt: 'On ___, I believe the advantages outweigh the disadvantages.', answers: ['balance'] },
    { type: 'fill', prompt: 'The report ___ the need for urgent action. (destaca)', answers: ['highlights', 'emphasises', 'emphasizes', 'stresses'] },
    {
      type: 'choice',
      prompt: 'O que NÃO deve aparecer num resumo?',
      options: ['A ideia central do texto', 'A opinião pessoal de quem resume', 'Os pontos principais'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Melhor paráfrase de "Sales rose sharply because of the new advertising campaign.":',
      options: [
        'Sales rose sharply because of the new advertising campaign.',
        'The new advertising campaign led to a significant increase in sales.',
        'Sales went up because there was advertising and a campaign.',
      ],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual verbo mostra que o autor DISCORDA de uma ideia?',
      options: ['states', 'challenges', 'describes'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Num ensaio discursivo, a opinião do autor aparece…',
      options: ['Na primeira frase', 'Em todos os parágrafos', 'Na conclusão'],
      answer: 2,
    },
    { type: 'reorder', words: ['The', 'article', 'argues', 'that', 'cities', 'should', 'ban', 'cars', '.'], translation: 'O artigo defende que as cidades deveriam proibir carros.' },
    {
      type: 'transform',
      instruction: 'Parafraseie usando "due to" e uma nominalização (comece com "Due to").',
      prompt: 'Many shops closed because people spent less money.',
      answers: ['Due to a decrease in spending, many shops closed.', 'Due to a fall in spending, many shops closed.', 'Due to reduced spending, many shops closed.', 'Due to lower spending, many shops closed.', 'Due to a decline in spending, many shops closed.', 'Due to a reduction in spending, many shops closed.'],
    },
    {
      type: 'transform',
      instruction: 'Relate a ideia com "The author claims that".',
      prompt: '"Social media makes us lonelier."',
      answers: ['The author claims that social media makes us lonelier.', 'The author claims that social media makes people lonelier.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Os críticos argumentam que a medida é injusta.',
      answers: ['Critics argue that the measure is unfair.', 'Critics argue that the measure is unjust.'],
    },
    {
      type: 'writing',
      prompt: 'Resuma o texto abaixo em 2–3 frases com suas palavras:\n"Remote work has grown dramatically in the last five years. Companies have discovered that many tasks can be done from home without any loss of productivity, and some even report gains. Employees, for their part, appreciate the time saved on commuting. However, managers worry about the loss of team spirit and the difficulty of training new staff. Some companies are therefore adopting hybrid models, in which employees spend two or three days a week in the office."',
      model: "The text explains that remote work has increased considerably, as it maintains productivity and saves employees commuting time. However, it acknowledges concerns about team cohesion and staff training, which have led many firms to adopt a hybrid approach.",
      checklist: ['Ideia central + pontos principais', 'Sem exemplos e detalhes secundários', 'Paráfrase (sem copiar frases)', 'Verbos de relato', 'Sem opinião pessoal'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um ensaio discursivo (180–220 palavras): "Should university education be free?" Apresente os dois lados e dê sua opinião só na conclusão.',
      model: "Whether university education should be free is a question that divides governments and citizens alike.\n\nProponents of free tuition argue that education is a right, not a privilege. They maintain that removing fees allows talented students from poorer backgrounds to study, which ultimately benefits the whole economy.\n\nCritics, on the other hand, point out that free education is extremely expensive for the state. They claim that taxpayers who never attend university should not have to pay for those who do, and that fees encourage students to take their studies seriously.\n\nOn balance, I believe that university should be free for students who cannot afford it, while those from wealthier families should contribute. This approach would combine fairness with financial responsibility.",
      checklist: ['Introdução neutra', 'Parágrafo a favor e parágrafo contra', 'Verbos de relato variados', 'Opinião só na conclusão (On balance…)', 'Registro formal'],
    },
  ],
}
