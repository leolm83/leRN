import type { UnitData } from '../types'

export const u03: UnitData = {
  slug: 'past-simple-irregular',
  title: 'Past Simple — verbos irregulares',
  summary: 'Os verbos irregulares mais usados, organizados em grupos para facilitar a memorização.',
  theory: [
    {
      title: 'Sem regra: precisa memorizar',
      body: `Muitos dos verbos mais comuns do inglês são **irregulares**: o passado não termina em -ed. Como os regulares, a forma é **igual para todas as pessoas**.

Estude em **grupos parecidos** — fica bem mais fácil. Volte a esta tabela sempre que precisar; ela também está na página Gramática.`,
    },
    {
      title: 'Os irregulares essenciais',
      body: ``,
      table: {
        head: ['Verbo', 'Passado', 'Significado'],
        rows: [
          ['be', 'was / were', 'ser, estar'],
          ['have', 'had', 'ter'],
          ['do', 'did', 'fazer'],
          ['go', 'went', 'ir'],
          ['come', 'came', 'vir'],
          ['get', 'got', 'conseguir, receber, ficar'],
          ['make', 'made', 'fazer, fabricar'],
          ['take', 'took', 'pegar, levar'],
          ['see', 'saw', 'ver'],
          ['say', 'said', 'dizer'],
          ['tell', 'told', 'contar, dizer a alguém'],
          ['give', 'gave', 'dar'],
          ['know', 'knew', 'saber, conhecer'],
          ['eat', 'ate', 'comer'],
          ['drink', 'drank', 'beber'],
          ['write', 'wrote', 'escrever'],
          ['speak', 'spoke', 'falar'],
          ['begin', 'began', 'começar'],
          ['run', 'ran', 'correr'],
          ['sit', 'sat', 'sentar'],
        ],
      },
    },
    {
      title: 'Grupos que ajudam',
      body: `- **-ought / -aught**: buy → **bought**, bring → **brought**, think → **thought**, teach → **taught**, catch → **caught**
- **-ept / -elt / -ent**: sleep → **slept**, feel → **felt**, leave → **left**, send → **sent**, spend → **spent**, lose → **lost**
- **-ound**: find → **found**, understand → **understood**
- **iguais ao presente**: put → **put**, cut → **cut**, read → **read** (escreve igual, a pronúncia muda)
- **-ay → -aid**: pay → **paid**, say → **said**
- **-eet → -et**: meet → **met**`,
    },
  ],
  vocab: [
    { en: 'went', pt: 'fui, foi (passado de go)' },
    { en: 'bought', pt: 'comprei, comprou (passado de buy)' },
    { en: 'thought', pt: 'pensei, pensou (passado de think)' },
    { en: 'brought', pt: 'trouxe (passado de bring)' },
    { en: 'taught', pt: 'ensinei, ensinou (passado de teach)' },
    { en: 'told', pt: 'contei, disse a alguém (passado de tell)' },
    { en: 'met', pt: 'conheci, encontrei (passado de meet)' },
    { en: 'left', pt: 'saí, deixei (passado de leave)' },
    { en: 'lost', pt: 'perdi (passado de lose)' },
    { en: 'paid', pt: 'paguei (passado de pay)' },
    { en: 'slept', pt: 'dormi (passado de sleep)' },
    { en: 'wrote', pt: 'escrevi (passado de write)' },
    { en: 'found', pt: 'encontrei, achei (passado de find)' },
    { en: 'spent', pt: 'gastei, passei (tempo) (passado de spend)' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I ___ to the beach last weekend. (go)', answers: ['went'] },
    { type: 'fill', prompt: 'She ___ a new phone. (buy)', answers: ['bought'] },
    { type: 'fill', prompt: 'We ___ pizza for dinner. (eat)', answers: ['ate'] },
    { type: 'fill', prompt: 'He ___ me a long letter. (write)', answers: ['wrote'] },
    { type: 'fill', prompt: 'They ___ home at 10 p.m. (come)', answers: ['came'] },
    { type: 'fill', prompt: 'I ___ John at the party. (meet)', answers: ['met'] },
    { type: 'fill', prompt: 'She ___ her keys again. (lose)', answers: ['lost'] },
    { type: 'fill', prompt: 'We ___ a lot of money on the trip. (spend)', answers: ['spent'] },
    { type: 'fill', prompt: 'I ___ about you yesterday. (think)', answers: ['thought'] },
    { type: 'fill', prompt: 'He ___ the bill. (pay)', answers: ['paid'] },
    { type: 'choice', prompt: '"Eu tive um sonho estranho."', options: ['I haved a strange dream.', 'I had a strange dream.', 'I has a strange dream.'], answer: 1 },
    { type: 'choice', prompt: 'Passado de bring:', options: ['brang', 'brought', 'bringed'], answer: 1 },
    { type: 'fixError', prompt: 'I goed to school by bus.', answers: ['I went to school by bus.'] },
    { type: 'fixError', prompt: 'She teached me English.', answers: ['She taught me English.'] },
    { type: 'fixError', prompt: 'We buyed a new sofa.', answers: ['We bought a new sofa.'] },
    { type: 'translate', from: 'pt', prompt: 'Ela me contou a verdade.', answers: ['She told me the truth.'] },
    { type: 'translate', from: 'pt', prompt: 'Nós dormimos oito horas.', answers: ['We slept for eight hours.', 'We slept eight hours.'] },
    { type: 'transform', instruction: 'Passe para o passado.', prompt: 'He takes the bus to work.', answers: ['He took the bus to work.'] },
    { type: 'reorder', words: ['I', 'found', 'my', 'keys', 'under', 'the', 'sofa'], translation: 'Encontrei minhas chaves embaixo do sofá.' },
    {
      type: 'writing',
      prompt: 'Conte o que você fez no último fim de semana em 5 frases, usando pelo menos 4 verbos irregulares.',
      model: 'Last Saturday I woke up late. I went to the market and bought some fruit. In the afternoon I met my friends at a café. We had coffee and spoke about our jobs. On Sunday I slept a lot and read a book.',
      checklist: ['Todos os verbos no passado', 'Irregulares corretos (went, bought, met…)', 'Expressões de tempo (last…, on Sunday)'],
    },
  ],
}
