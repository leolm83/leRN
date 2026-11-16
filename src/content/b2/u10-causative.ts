import type { UnitData } from '../types'

export const u10: UnitData = {
  slug: 'causative',
  title: 'Causativo: have / get something done',
  summary: '"Cortei o cabelo" (no salão) = I had my hair cut. Quando outra pessoa faz o serviço para você.',
  theory: [
    {
      title: 'have + objeto + particípio',
      body: `Quando **pagamos ou pedimos** a alguém para fazer algo por nós:

- *I **had my hair cut** yesterday.* — Cortei o cabelo ontem. (o cabeleireiro cortou)
- *We're **having our kitchen painted**.*
- *She **has her car washed** every week.*

"I cut my hair" = eu mesmo cortei!`,
    },
    {
      title: 'get something done',
      body: `Mais informal, mesmo sentido: *I need to **get my phone fixed**.*

O verbo **have/get** muda de tempo; o particípio fica igual:
*I **will have** it done. / I **have just had** it done. / **Did** you **get** it done?*`,
    },
    {
      title: 'Coisas ruins que acontecem',
      body: `A mesma estrutura descreve algo **desagradável** que alguém fez com você:

- *He **had his wallet stolen** on the bus.* — Roubaram a carteira dele no ônibus.`,
    },
    {
      title: 'have / get someone to do (bônus)',
      body: `- **have + pessoa + verbo**: *I **had the mechanic check** the brakes.*
- **get + pessoa + to + verbo**: *I **got my brother to help** me.* (convenci)`,
    },
  ],
  vocab: [
    { en: 'haircut', pt: 'corte de cabelo' },
    { en: 'to fix', pt: 'consertar' },
    { en: 'to service', pt: 'fazer revisão (carro)' },
    { en: 'eyes tested', pt: 'exame de vista' },
    { en: 'mechanic', pt: 'mecânico' },
    { en: 'brakes', pt: 'freios' },
    { en: 'to deliver', pt: 'entregar' },
    { en: 'to redecorate', pt: 'reformar (decoração)' },
    { en: 'to dry-clean', pt: 'lavar a seco' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I had my hair ___ (cut) yesterday.', answers: ['cut'] },
    { type: 'fill', prompt: 'We are having our kitchen ___ (paint) this week.', answers: ['painted'] },
    { type: 'fill', prompt: 'I need to ___ my phone fixed. (informal)', answers: ['get', 'have'] },
    { type: 'fill', prompt: 'She has her car ___ (wash) every Saturday.', answers: ['washed'] },
    { type: 'fill', prompt: 'He had his wallet ___ (steal) on the bus.', answers: ['stolen'] },
    { type: 'fill', prompt: 'When did you last have your eyes ___ (test)?', answers: ['tested'] },
    { type: 'fill', prompt: 'I got my brother ___ help me move.', answers: ['to'] },
    {
      type: 'choice',
      prompt: '"Cortei o cabelo no salão."',
      options: ['I cut my hair.', 'I had my hair cut.', 'I had cut my hair.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['I have my car service tomorrow.', "I'm having my car serviced tomorrow.", "I'm having serviced my car tomorrow."],
      answer: 1,
    },
    { type: 'reorder', words: ['We', 'had', 'the', 'pizza', 'delivered', 'to', 'the', 'office', '.'], translation: 'Pedimos a pizza para ser entregue no escritório.' },
    { type: 'reorder', words: ['Where', 'do', 'you', 'get', 'your', 'suit', 'dry-cleaned', '?'], translation: 'Onde você manda lavar o terno a seco?' },
    { type: 'fixError', prompt: 'I had fixed my computer by a technician.', answers: ['I had my computer fixed by a technician.', 'I got my computer fixed by a technician.'] },
    { type: 'fixError', prompt: 'She is going to have her house paint.', answers: ['She is going to have her house painted.', "She's going to have her house painted."] },
    {
      type: 'transform',
      instruction: 'Reescreva com have + objeto + particípio.',
      prompt: 'A mechanic checked my brakes for me.',
      answers: ['I had my brakes checked.', 'I had my brakes checked by a mechanic.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Vamos reformar o apartamento no mês que vem.',
      answers: ['We are going to have the apartment redecorated next month.', "We're going to have the apartment redecorated next month.", 'We are going to have our apartment redecorated next month.', "We're going to have our apartment redecorated next month.", 'We are having the apartment redecorated next month.', 'We are having our apartment redecorated next month.'],
    },
    {
      type: 'translate',
      from: 'en',
      prompt: 'I had my passport renewed last month.',
      answers: ['Renovei meu passaporte no mês passado.', 'Eu renovei meu passaporte mês passado.', 'Eu renovei meu passaporte no mês passado.', 'Renovei meu passaporte mês passado.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 5 frases sobre serviços que você contratou recentemente ou vai contratar (cabelo, carro, casa, roupas, saúde) usando have/get something done.',
      model: "I had my hair cut last Saturday. I need to get my car serviced before the trip. We are having our living room painted next month. I usually have my shirts ironed at the laundry. Last year I had my phone stolen, so now I always keep it in my pocket.",
      checklist: ['have/get + objeto + particípio', 'O tempo verbal fica em have/get', 'Diferença entre fazer e mandar fazer'],
    },
  ],
}
