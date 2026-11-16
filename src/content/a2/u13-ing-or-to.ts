import type { UnitData } from '../types'

export const u13: UnitData = {
  slug: 'verb-ing-or-to',
  title: 'Verbo + -ing ou verbo + to',
  summary: 'enjoy cooking × want to cook: quais verbos pedem cada forma, -ing depois de preposições e "to" de finalidade.',
  theory: [
    {
      title: 'Verbos seguidos de -ing',
      body: `**enjoy, finish, mind, avoid, stop, keep, suggest, miss, practice** + verbo**-ing**:

- *I **enjoy cooking**.* ("enjoy to cook" ✘)
- *She **finished writing** the report.*
- *He **stopped smoking**.* — parou de fumar

**like, love, hate** aceitam as duas formas com pouca diferença: *I like **reading** / **to read**.*`,
    },
    {
      title: 'Verbos seguidos de to + verbo',
      body: `**want, need, decide, hope, plan, promise, learn, agree, forget, try, would like** + **to** + verbo:

- *I **want to travel**.*
- *We **decided to rent** a car.*
- *He **learned to swim**.*
- *Would you **like to drink** something?*`,
    },
    {
      title: 'Depois de preposição: sempre -ing',
      body: `Toda vez que um verbo vem logo depois de uma **preposição** (in, at, of, for, about, before, after, without…), ele vai para o **-ing**:

- *I'm interested **in learning** Japanese.*
- *She's good **at drawing**.*
- *Thank you **for coming**.*
- ***Before leaving**, close the windows.*`,
    },
    {
      title: 'Finalidade: to, nunca "for + verbo"',
      body: `"para + verbo" com sentido de **objetivo** é **to**:

- *I went to the bank **to get** money.* ("for get" ✘, "for getting" ✘)

Atividades com **go + -ing**: *go swimming, go shopping, go running, go fishing*.`,
    },
  ],
  vocab: [
    { en: 'to enjoy', pt: 'gostar de, curtir' },
    { en: 'to finish', pt: 'terminar' },
    { en: 'to avoid', pt: 'evitar' },
    { en: 'to decide', pt: 'decidir' },
    { en: 'to hope', pt: 'esperar (desejar)' },
    { en: 'to rent', pt: 'alugar' },
    { en: 'to invite', pt: 'convidar' },
    { en: 'to draw', pt: 'desenhar' },
    { en: 'to quit', pt: 'largar, desistir' },
    { en: 'interested in', pt: 'interessado em' },
    { en: 'good at', pt: 'bom em' },
    { en: 'soon', pt: 'em breve' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I enjoy ___ books. (read)', answers: ['reading'] },
    { type: 'fill', prompt: 'She wants ___ a doctor. (be)', answers: ['to be'] },
    { type: 'fill', prompt: 'We decided ___ a car. (rent)', answers: ['to rent'] },
    { type: 'fill', prompt: 'Have you finished ___ the report? (write)', answers: ['writing'] },
    { type: 'fill', prompt: "I'm interested in ___ Japanese. (learn)", answers: ['learning'] },
    { type: 'fill', prompt: 'He promised ___ me. (help)', answers: ['to help'] },
    { type: 'fill', prompt: 'Thank you for ___ me. (invite)', answers: ['inviting'] },
    { type: 'fill', prompt: "Let's go ___ this weekend. (swim)", answers: ['swimming'] },
    { type: 'fill', prompt: 'Would you like ___ something? (drink)', answers: ['to drink'] },
    {
      type: 'choice',
      prompt: '"Fui ao mercado para comprar pão."',
      options: ['I went to the market for buy bread.', 'I went to the market to buy bread.', 'I went to the market for buying bread.'],
      answer: 1,
    },
    { type: 'choice', prompt: 'I need ___ more.', options: ['study', 'to study', 'studying'], answer: 1 },
    { type: 'fixError', prompt: 'I enjoy to cook for my friends.', answers: ['I enjoy cooking for my friends.'] },
    { type: 'fixError', prompt: 'She is good at draw.', answers: ['She is good at drawing.'] },
    { type: 'fixError', prompt: 'They want going home.', answers: ['They want to go home.'] },
    { type: 'fixError', prompt: 'Before leave, close the windows.', answers: ['Before leaving, close the windows.'] },
    { type: 'translate', from: 'pt', prompt: 'Eu parei de fumar.', answers: ['I stopped smoking.', 'I quit smoking.'] },
    { type: 'translate', from: 'pt', prompt: 'Ele aprendeu a nadar.', answers: ['He learned to swim.', 'He learnt to swim.'] },
    { type: 'reorder', words: ['I', 'hope', 'to', 'see', 'you', 'soon'], translation: 'Espero te ver em breve.' },
  ],
}
