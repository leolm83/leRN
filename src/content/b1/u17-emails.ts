import type { UnitData } from '../types'

export const u17: UnitData = {
  slug: 'emails',
  title: 'E-mails formais e informais',
  summary: 'Saudação, abertura, pedido, despedida e o registro certo para cada situação.',
  theory: [
    {
      title: 'Estrutura de um e-mail',
      body: `- **1.** **Saudação** + vírgula: *Dear Mr Silva,* / *Hi Ana,*
- **2.** **Abertura**: o motivo do e-mail.
- **3.** **Corpo**: um parágrafo por assunto.
- **4.** **Fechamento**: próximo passo ou agradecimento.
- **5.** **Despedida** + vírgula + nome: *Best regards,* / *Cheers,*

Depois da saudação, comece a próxima linha com **maiúscula**.`,
    },
    {
      title: 'Formal × informal',
      body: ``,
      table: {
        head: ['Parte', 'Formal', 'Informal'],
        rows: [
          ['Saudação', 'Dear Mr / Ms Smith, · Dear Sir or Madam,', 'Hi Tom, · Hello Ana,'],
          ['Abertura', 'I am writing to ask about…', "Just a quick message to…"],
          ['Pedido', 'Could you please…? · I would be grateful if you could…', 'Can you…?'],
          ['Anexo', 'Please find attached…', "I've attached…"],
          ['Fechamento', 'I look forward to hearing from you.', 'Talk soon! · See you!'],
          ['Despedida', 'Kind regards, · Best regards, · Yours sincerely,', 'Cheers, · Love, · Best,'],
        ],
      },
    },
    {
      title: 'Dicas de registro formal',
      body: `- Evite contrações: *I am writing* (não *I'm writing*).
- Use perguntas indiretas e **would/could**: *I would like to know whether…*
- **look forward to + -ing**: *I look forward to hearing from you.* ("to hear" ✘)
- *Dear Sir or Madam* → despedida *Yours faithfully*; com nome → *Yours sincerely* (ou simplesmente *Kind regards*).`,
    },
  ],
  vocab: [
    { en: 'Dear', pt: 'Prezado(a), Querido(a)' },
    { en: 'Kind regards', pt: 'Atenciosamente' },
    { en: 'attached', pt: 'anexo, em anexo' },
    { en: 'to look forward to', pt: 'aguardar ansiosamente' },
    { en: 'grateful', pt: 'grato' },
    { en: 'to apply for', pt: 'candidatar-se a' },
    { en: 'position', pt: 'vaga, cargo' },
    { en: 'invoice', pt: 'fatura, nota fiscal' },
    { en: 'available', pt: 'disponível' },
    { en: 'to reschedule', pt: 'remarcar' },
  ],
  exercises: [
    { type: 'fill', prompt: 'I look forward to ___ (hear) from you.', answers: ['hearing'] },
    { type: 'fill', prompt: 'Please find ___ my CV. (anexo)', answers: ['attached'] },
    { type: 'fill', prompt: 'I am writing to apply ___ the position of designer.', answers: ['for'] },
    { type: 'fill', prompt: 'I would be ___ if you could send me the invoice. (grato)', answers: ['grateful'] },
    { type: 'fill', prompt: '___ regards, Ana (despedida formal)', answers: ['Kind', 'Best'] },
    {
      type: 'choice',
      prompt: 'Saudação para um e-mail formal a alguém cujo nome você não sabe:',
      options: ['Hi there,', 'Dear Sir or Madam,', 'Hello friend,'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: 'Qual pedido é mais formal?',
      options: ['Send me the file.', 'Can you send me the file?', 'Could you please send me the file?'],
      answer: 2,
    },
    {
      type: 'choice',
      prompt: 'Qual despedida é informal?',
      options: ['Yours sincerely,', 'Kind regards,', 'Cheers,'],
      answer: 2,
    },
    { type: 'reorder', words: ['I', 'am', 'writing', 'to', 'ask', 'about', 'the', 'course', '.'], translation: 'Escrevo para perguntar sobre o curso.' },
    { type: 'fixError', prompt: 'I look forward to hear from you.', answers: ['I look forward to hearing from you.'] },
    { type: 'fixError', prompt: 'Dear Mr Smith, i am writing about my order.', answers: ['Dear Mr Smith, I am writing about my order.'], strict: true },
    {
      type: 'transform',
      instruction: 'Torne o pedido formal começando com "Could you please".',
      prompt: 'Send me the price list.',
      answers: ['Could you please send me the price list?'],
    },
    {
      type: 'transform',
      instruction: 'Torne a frase formal (sem contração, começando com "I would like").',
      prompt: "I'd like to reschedule the meeting.",
      answers: ['I would like to reschedule the meeting.'],
      strict: true,
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Você estaria disponível na quinta-feira?',
      answers: ['Would you be available on Thursday?', 'Are you available on Thursday?'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Segue em anexo a fatura.',
      answers: ['Please find attached the invoice.', 'Please find the invoice attached.', 'The invoice is attached.', "I've attached the invoice.", 'I have attached the invoice.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva um e-mail formal (5–7 frases) para uma escola de idiomas pedindo informações sobre um curso: preço, horários e se há aulas online.',
      model: "Dear Sir or Madam,\n\nI am writing to ask for information about your advanced English course. Could you please tell me how much the course costs? I would also like to know what times the classes take place. Finally, I would be grateful if you could tell me whether online classes are available.\n\nI look forward to hearing from you.\n\nYours faithfully,\nAna Souza",
      checklist: ['Saudação + vírgula', 'Motivo na primeira frase (I am writing to…)', 'Sem contrações', 'Perguntas indiretas educadas', 'look forward to hearing', 'Despedida adequada'],
    },
  ],
}
