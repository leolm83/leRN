import type { UnitData } from '../types'

export const u08: UnitData = {
  slug: 'cohesion-reference',
  title: 'Coesão e referência',
  summary: 'Encadear ideias entre frases: this + substantivo-resumo, the former / the latter, such, respectively.',
  theory: [
    {
      title: 'this / these + substantivo-resumo',
      body: `Um **this** sozinho pode ser ambíguo. Acompanhe-o de um substantivo que **resume** a ideia anterior:

- *Prices rose by 20%. **This** worried investors.* (vago)
- *Prices rose by 20%. **This increase** worried investors.* (preciso)

Substantivos-resumo úteis: *this **problem / approach / trend / decision / situation / issue / change / development / view***`,
    },
    {
      title: 'Outras ferramentas de referência',
      body: `- **the former / the latter** = o primeiro / o último (de dois): *Both Rome and Paris were options; **the latter** was cheaper.*
- **such + substantivo** = esse tipo de: ***Such** measures are rarely popular.*
- **respectively** = respectivamente: *Ana and Leo are 30 and 25, **respectively**.*
- **the above / the following** (formal): ***The following** steps are required: …*
- **said / aforementioned** (jurídico, evite fora desse contexto)`,
    },
    {
      title: 'Sinônimos e cadeias lexicais',
      body: `Evite repetir o mesmo substantivo, mas mantenha a **referência clara**:

*The **government** announced new taxes. **The administration** claims **the measures** will reduce the deficit. Critics argue **the policy** will hurt families.*

Cuidado com pronomes ambíguos: *John told Peter that **he** had won.* (quem?) → *John told Peter: "You've won."*`,
    },
  ],
  vocab: [
    { en: 'the former', pt: 'o primeiro (de dois)' },
    { en: 'the latter', pt: 'o último (de dois)' },
    { en: 'respectively', pt: 'respectivamente' },
    { en: 'trend', pt: 'tendência' },
    { en: 'approach', pt: 'abordagem' },
    { en: 'measure', pt: 'medida' },
    { en: 'ambiguous', pt: 'ambíguo' },
    { en: 'cohesion', pt: 'coesão' },
    { en: 'deficit', pt: 'déficit' },
  ],
  exercises: [
    { type: 'fill', prompt: 'We considered Lisbon and Porto. The ___ was cheaper, so we went to Porto. (o último)', answers: ['latter'] },
    { type: 'fill', prompt: 'Tea and coffee were offered; the ___ was more popular, so most people drank tea. (o primeiro)', answers: ['former'] },
    { type: 'fill', prompt: 'Ana and Leo are 30 and 25, ___.', answers: ['respectively'] },
    { type: 'fill', prompt: 'Unemployment has risen for six months. This ___ is worrying. (tendência)', answers: ['trend'] },
    { type: 'fill', prompt: 'The city banned cars from the centre. ___ measures are rarely popular. (esse tipo de)', answers: ['Such'] },
    { type: 'fill', prompt: 'The ___ steps are required: register, pay and confirm. (seguintes)', answers: ['following'] },
    {
      type: 'choice',
      prompt: 'Qual segunda frase é mais coesa? "Many companies now allow employees to work four days a week."',
      options: ['This is good.', 'This policy has improved staff wellbeing.', 'It is a thing that is good.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual frase tem pronome AMBÍGUO?',
      options: ['Maria told Ana that she had been promoted.', 'Maria told Ana that Ana had been promoted.', 'Maria said she had been promoted.'],
      answer: 0,
    },
    {
      type: 'choice',
      prompt: 'Qual substantivo-resumo combina? "The school replaced exams with projects. This ___ was praised by parents."',
      options: ['trend', 'change', 'deficit'],
      answer: 1,
    },
    {
      type: 'transform',
      instruction: 'Una as informações com "respectively".',
      prompt: 'Brazil won in 1994. France won in 1998.',
      answers: ['Brazil and France won in 1994 and 1998, respectively.', 'Brazil and France won in 1994 and 1998 respectively.'],
    },
    {
      type: 'transform',
      instruction: 'Substitua "This" por "This" + um substantivo-resumo adequado (decision).',
      prompt: 'The board voted to close the factory. This shocked the workers.',
      answers: ['The board voted to close the factory. This decision shocked the workers.'],
    },
    { type: 'fixError', prompt: 'We discussed two options, the former was cheaper and the latter was faster, so we chose the latter one.', answers: ['We discussed two options: the former was cheaper and the latter was faster, so we chose the latter.', 'We discussed two options; the former was cheaper and the latter was faster, so we chose the latter.', 'We discussed two options. The former was cheaper and the latter was faster, so we chose the latter.'], strict: true },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Essa abordagem tem duas vantagens.',
      answers: ['This approach has two advantages.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um parágrafo (5–6 frases) sobre uma mudança na sua cidade usando: this + substantivo-resumo, the former/the latter, such e sinônimos para evitar repetição.',
      model: "Two years ago, the city council introduced bike lanes and a new bus network. The former has been a great success, while the latter is still unreliable. This difference is partly due to funding. Such projects require long-term investment, which the administration has not always provided. Nevertheless, the initiative has already reduced traffic in the centre.",
      checklist: ['this + substantivo-resumo', 'the former / the latter corretos', 'such + substantivo', 'Sinônimos sem perder a referência', 'Pronomes não ambíguos'],
    },
  ],
}
