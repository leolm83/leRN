import type { UnitData } from '../types'

export const u11: UnitData = {
  slug: 'gerund-infinitive-meaning',
  title: 'Gerúndio × infinitivo: mudança de sentido',
  summary: 'remember, forget, stop, try, regret, mean, go on: com -ing ou com to, o sentido muda.',
  theory: [
    {
      title: 'Verbos que mudam de sentido',
      body: `Regra geral: **-ing** olha para algo **anterior** ou **já em curso**; **to** olha para algo **posterior** ou um **objetivo**.`,
      table: {
        head: ['Verbo', '+ -ing', '+ to + verbo'],
        rows: [
          ['remember', 'lembrar de ter feito: *I remember **locking** the door.*', 'lembrar de fazer: *Remember **to lock** the door.*'],
          ['forget', 'esquecer que fez: *I\'ll never forget **meeting** you.*', 'esquecer de fazer: *I forgot **to call** her.*'],
          ['stop', 'parar uma atividade: *He stopped **smoking**.*', 'parar para fazer: *He stopped **to smoke**.*'],
          ['try', 'experimentar: *Try **restarting** the computer.*', 'esforçar-se: *I tried **to open** it, but I couldn\'t.*'],
          ['regret', 'arrepender-se: *I regret **saying** that.*', 'lamentar informar: *We regret **to inform** you…*'],
          ['go on', 'continuar a mesma coisa: *She went on **talking**.*', 'passar a outra coisa: *She went on **to become** a doctor.*'],
          ['mean', 'implicar: *This job means **travelling** a lot.*', 'ter intenção: *I didn\'t mean **to hurt** you.*'],
        ],
      },
    },
    {
      title: 'Sem mudança de sentido',
      body: `**like, love, hate, prefer, start, begin, continue** aceitam as duas formas quase sem diferença:
*It started **raining** / **to rain**.*

Mas **would like / would love / would prefer** pedem sempre **to**: *I'd like **to** go.*`,
    },
  ],
  vocab: [
    { en: 'to remember', pt: 'lembrar' },
    { en: 'to forget', pt: 'esquecer' },
    { en: 'to regret', pt: 'arrepender-se, lamentar' },
    { en: 'to lock', pt: 'trancar' },
    { en: 'to restart', pt: 'reiniciar' },
    { en: 'to inform', pt: 'informar' },
    { en: 'to mean', pt: 'querer dizer; ter intenção' },
    { en: 'to go on', pt: 'continuar; passar a' },
    { en: 'petrol station', pt: 'posto de gasolina' },
  ],
  exercises: [
    { type: 'fill', prompt: 'Remember ___ (lock) the door when you leave.', answers: ['to lock'] },
    { type: 'fill', prompt: 'I remember ___ (lock) the door, but it was open when I came back.', answers: ['locking'] },
    { type: 'fill', prompt: 'He stopped ___ (smoke) ten years ago. He is healthier now.', answers: ['smoking'] },
    { type: 'fill', prompt: 'We stopped at a petrol station ___ (buy) some water.', answers: ['to buy'] },
    { type: 'fill', prompt: "If the computer freezes, try ___ (restart) it.", answers: ['restarting'] },
    { type: 'fill', prompt: "I tried ___ (open) the jar, but it was too tight.", answers: ['to open'] },
    { type: 'fill', prompt: 'I regret ___ (tell) him my secret.', answers: ['telling'] },
    { type: 'fill', prompt: 'We regret ___ (inform) you that your application was unsuccessful.', answers: ['to inform'] },
    {
      type: 'choice',
      prompt: '"Esqueci de ligar para ela."',
      options: ['I forgot calling her.', 'I forgot to call her.', 'I forgot call her.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"I\'ll never forget seeing the ocean for the first time." significa…',
      options: ['Nunca vou esquecer de ver o oceano.', 'Nunca vou esquecer a vez em que vi o oceano.'],
      answer: 1,
    },
    {
      type: 'choice',
      prompt: '"Desculpe, não tive a intenção de te machucar."',
      options: ["Sorry, I didn't mean hurting you.", "Sorry, I didn't mean to hurt you.", "Sorry, I didn't mean hurt you."],
      answer: 1,
    },
    { type: 'reorder', words: ['After', 'university', ',', 'she', 'went', 'on', 'to', 'become', 'a', 'doctor', '.'], translation: 'Depois da faculdade, ela se tornou médica.' },
    { type: 'fixError', prompt: 'Did you remember buying milk? The fridge is empty.', answers: ['Did you remember to buy milk? The fridge is empty.'] },
    { type: 'fixError', prompt: "I'd like going to the cinema tonight.", answers: ["I'd like to go to the cinema tonight.", 'I would like to go to the cinema tonight.'] },
    {
      type: 'transform',
      instruction: 'Reescreva com stop + -ing.',
      prompt: "I don't drink coffee anymore.",
      answers: ['I have stopped drinking coffee.', "I've stopped drinking coffee.", 'I stopped drinking coffee.'],
    },
    {
      type: 'translate',
      from: 'pt',
      prompt: 'Não esqueça de me mandar a mensagem.',
      answers: ["Don't forget to send me the message.", 'Do not forget to send me the message.', "Don't forget to text me.", 'Remember to send me the message.'],
    },
    {
      type: 'writing',
      prompt: 'Escreva 6 frases usando remember, forget, stop e try — cada verbo uma vez com -ing e uma com to (escolha 3 verbos).',
      model: "I remember visiting my grandmother's farm when I was five. Please remember to water the plants. I stopped eating sugar last year. On the way home, I stopped to buy bread. I tried to fix the printer, but I couldn't. Then I tried turning it off and on again, and it worked.",
      checklist: ['-ing = antes / atividade', 'to = depois / objetivo', 'Sentidos diferentes nas duas frases de cada verbo'],
    },
  ],
}
