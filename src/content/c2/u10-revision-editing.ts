import type { UnitData } from '../types'

export const u10: UnitData = {
  slug: 'revision-editing',
  title: 'Revisão e edição de textos longos',
  summary: 'Um método em camadas para revisar: estrutura, parágrafos, frases, palavras e, por fim, a revisão final.',
  theory: [
    {
      title: 'Revise em camadas (do maior para o menor)',
      body: `- **1. Estrutura**: a tese está clara? A ordem dos parágrafos faz sentido? Algum parágrafo pode sair?
- **2. Parágrafos**: cada um tem **uma** ideia, uma frase-tópico e transições para o próximo?
- **3. Frases**: há frases longas demais, paralelismo quebrado, passivas desnecessárias, ambiguidade?
- **4. Palavras**: redundâncias, palavras vagas (*thing, stuff, very, good*), repetições, registro.
- **5. Revisão final (proofreading)**: ortografia, concordância, pontuação, maiúsculas, artigos.

Não tente corrigir tudo de uma vez — cada leitura procura um tipo de problema.`,
    },
    {
      title: 'Erros persistentes de brasileiros no C2',
      body: `- **Artigos**: *The life is short* ✘ → *Life is short* (generalizações sem *the*); *I'm **an** engineer* (profissão leva *a/an*)
- **Concordância**: *The number of students **is**…* × *A number of students **are**…*; *everyone **has***
- **Preposições**: *depend **on**, consist **of**, married **to**, arrive **in/at***
- **Incontáveis**: *information, advice, research, feedback, evidence* — sem plural, sem *an*
- **Make × do, say × tell, since × for**
- **Ordem**: advérbio entre verbo e objeto ("I like very much coffee" ✘)

Monte sua **lista pessoal de erros** e confira cada item na revisão final.`,
    },
    {
      title: 'Técnicas práticas',
      body: `- **Distância**: espere algumas horas (ou um dia) antes de revisar.
- **Leia em voz alta** (ou só mentalmente devagar): frases pesadas e repetições aparecem.
- **Mude o formato**: imprima ou mude a fonte — o olho "esquece" o texto e vê os erros.
- **Corte 10%**: quase todo primeiro rascunho melhora quando fica mais curto.
- **Reverse outline**: escreva em uma linha a ideia de cada parágrafo; se não conseguir, o parágrafo precisa de foco.`,
    },
  ],
  vocab: [
    { en: 'draft', pt: 'rascunho' },
    { en: 'to proofread', pt: 'revisar (ortografia, pontuação)' },
    { en: 'to edit', pt: 'editar' },
    { en: 'agreement', pt: 'concordância' },
    { en: 'outline', pt: 'esboço, estrutura' },
    { en: 'flaw', pt: 'falha, defeito' },
    { en: 'to rephrase', pt: 'reformular' },
    { en: 'feedback', pt: 'retorno, avaliação' },
    { en: 'consistency', pt: 'consistência' },
  ],
  exercises: [
    { type: 'fixError', prompt: 'The life is too short to waste time.', answers: ['Life is too short to waste time.'] },
    { type: 'fixError', prompt: 'She gave me some good advices.', answers: ['She gave me some good advice.', 'She gave me some good pieces of advice.', 'She gave me a good piece of advice.'] },
    { type: 'fixError', prompt: 'The number of applicants have increased.', answers: ['The number of applicants has increased.'] },
    { type: 'fixError', prompt: 'Everyone have their own opinion.', answers: ['Everyone has their own opinion.'] },
    { type: 'fixError', prompt: 'The result depends of many factors.', answers: ['The result depends on many factors.'] },
    { type: 'fixError', prompt: 'I am engineer and I work in a big company.', answers: ['I am an engineer and I work for a big company.', 'I am an engineer and I work in a big company.', "I'm an engineer and I work for a big company.", "I'm an engineer and I work at a big company.", 'I am an engineer and I work at a big company.'] },
    { type: 'fixError', prompt: 'We need more informations about the research.', answers: ['We need more information about the research.'] },
    { type: 'fixError', prompt: 'He explained me the problem.', answers: ['He explained the problem to me.'] },
    { type: 'fixError', prompt: 'I am living here since 2015.', answers: ['I have lived here since 2015.', "I've lived here since 2015.", 'I have been living here since 2015.', "I've been living here since 2015."] },
    { type: 'fixError', prompt: 'She is married with a doctor.', answers: ['She is married to a doctor.', "She's married to a doctor."] },
    {
      type: 'choice',
      prompt: 'Qual é a ordem recomendada de revisão?',
      options: ['Ortografia → frases → estrutura', 'Estrutura → parágrafos → frases → palavras → ortografia', 'Palavras → estrutura → ortografia → parágrafos'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual está correto?',
      options: ['A number of students is absent.', 'A number of students are absent.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual frase está correta?',
      options: ['The research show that…', 'The researches show that…', 'The research shows that…'],
      answer: 2,
    },
    {
      type: 'transform',
      instruction: 'Corrija todos os erros (são três).',
      prompt: 'The informations was send yesterday.',
      answers: ['The information was sent yesterday.'],
    },
    {
      type: 'writing',
      prompt: 'Revise o texto abaixo usando o método em camadas. Corrija erros gramaticais, corte redundâncias e melhore a fluidez:\n"In nowadays, the technology is very important in the life of the people. A lot of people uses smartphones for everything, for example for to work, to study and for talking with friends. In my opinion I think that this have advantages and also disadvantages. One advantage is that is more easy to find informations. But the disadvantage is that people is more isolated. In conclusion, the technology is good but we must to use it with moderation."',
      model: "Nowadays, technology plays a central role in people's lives. Many people use smartphones for almost everything: working, studying and keeping in touch with friends. In my view, this has both advantages and disadvantages. On the one hand, information is easier to find than ever. On the other hand, people have become more isolated. In conclusion, technology is beneficial, but we should use it in moderation.",
      checklist: ['Sem "the" em generalizações (technology, life)', 'Concordância (people use, this has)', 'Incontáveis (information)', 'Paralelismo na lista', 'Sem redundância ("In my opinion I think")', 'Comparativo correto (easier)', 'must/should sem to'],
    },
    {
      type: 'writing',
      prompt: 'Projeto final: escreva um ensaio de 300–350 palavras sobre um tema da sua escolha (ex.: "Is remote work here to stay?"). Depois revise-o em 5 camadas: estrutura, parágrafos, frases, palavras e ortografia. Compare com a lista de verificação.',
      model: "Remote work, once a rare privilege, has become a standard option for millions of professionals. While some companies are now calling employees back to the office, the evidence suggests that flexible arrangements are likely to remain.\n\nThe most compelling argument for remote work is productivity. Several studies indicate that employees working from home are at least as productive as their office-based colleagues, largely because they face fewer interruptions and no commute. This saved time also tends to improve wellbeing, which in turn reduces staff turnover.\n\nCritics, however, raise legitimate concerns. Collaboration, they argue, suffers when teams rarely meet, and junior staff may miss out on the informal learning that happens in shared spaces. Such drawbacks are real, but they are not insurmountable: regular in-person meetings and structured mentoring programmes can address many of them.\n\nWhat ultimately determines the future of remote work, though, is not research but recruitment. Skilled workers increasingly regard flexibility as a basic requirement rather than a perk, and companies that refuse to offer it risk losing talent to those that do.\n\nOn balance, the office is unlikely to disappear, but its role is changing. Rather than a place where people must spend five days a week, it is becoming a hub for collaboration — one part of a hybrid model that appears to be here to stay.",
      checklist: [
        'Tese clara na introdução',
        'Uma ideia por parágrafo, com frase-tópico',
        'Contra-argumento e resposta',
        'Hedging adequado (suggest, likely, tend to)',
        'Coesão (this + substantivo, such, however)',
        'Frases variadas e paralelismo correto',
        'Sem redundâncias nem palavras vagas',
        'Revisão final: artigos, concordância, preposições, pontuação',
      ],
    },
  ],
}
