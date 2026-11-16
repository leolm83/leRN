import type { UnitData } from '../types'

export const u10: UnitData = {
  slug: 'adverbs-of-manner',
  title: 'Advérbios de modo (-ly) e posição dos advérbios',
  summary: 'Adjetivo × advérbio, a formação com -ly, os irregulares (well, fast, hard) e onde colocar o advérbio.',
  theory: [
    {
      title: 'Adjetivo descreve o substantivo; advérbio descreve o verbo',
      body: `- *She is a **careful** driver.* — adjetivo (descreve *driver*)
- *She drives **carefully**.* — advérbio (descreve *drives*: **como** ela dirige)

Em português muitas vezes usamos o adjetivo no lugar do advérbio ("ela fala rápido"). Na escrita em inglês, o advérbio é obrigatório: *She speaks **quickly**.*`,
    },
    {
      title: 'Formação: adjetivo + ly',
      body: ``,
      table: {
        head: ['Regra', 'Exemplos'],
        rows: [
          ['+ ly', 'slow → slowly, quick → quickly, careful → carefully'],
          ['-y → -ily', 'easy → easily, happy → happily'],
          ['-le → -ly', 'gentle → gently, terrible → terribly'],
          ['-ic → -ically', 'basic → basically'],
          ['irregulares', 'good → **well**, fast → **fast**, hard → **hard**, late → **late**, early → **early**'],
        ],
      },
    },
    {
      title: 'Armadilhas',
      body: `- **hardly** não é "duramente": significa **quase não** — *I hardly slept.* (Quase não dormi.)
- **lately** significa **recentemente**.
- Depois de **verbos de ligação** (be, look, feel, seem, taste, smell, sound) usa-se **adjetivo**: *You look **happy**. This soup tastes **good**. I feel **tired**.*`,
    },
    {
      title: 'Posição',
      body: `- O advérbio de modo vem **depois do verbo** ou **depois do objeto** — nunca entre o verbo e o objeto:
  *She speaks English **well**.* ✔ — "She speaks well English" ✘
- No final da frase, a ordem é **modo → lugar → tempo**:
  *He worked **hard** **at the office** **yesterday**.*`,
    },
  ],
  vocab: [
    { en: 'carefully', pt: 'cuidadosamente' },
    { en: 'slowly', pt: 'devagar' },
    { en: 'quickly', pt: 'rapidamente' },
    { en: 'well', pt: 'bem' },
    { en: 'hard', pt: 'duro; muito (trabalhar/estudar)' },
    { en: 'hardly', pt: 'quase não' },
    { en: 'lately', pt: 'recentemente, ultimamente' },
    { en: 'quietly', pt: 'silenciosamente' },
    { en: 'correctly', pt: 'corretamente' },
    { en: 'to taste', pt: 'ter gosto de; provar' },
    { en: 'to look', pt: 'parecer (aparência); olhar' },
    { en: 'driver', pt: 'motorista' },
  ],
  exercises: [
    { type: 'fill', prompt: 'She speaks English very ___. (good)', answers: ['well'] },
    { type: 'fill', prompt: 'He drives ___. (careful)', answers: ['carefully'] },
    { type: 'fill', prompt: 'Please speak ___. (slow)', answers: ['slowly'] },
    { type: 'fill', prompt: 'They won the game ___. (easy)', answers: ['easily'] },
    { type: 'fill', prompt: 'He works very ___. (hard)', answers: ['hard'] },
    { type: 'fill', prompt: 'You look ___ today! (happy)', answers: ['happy'], explanation: 'look é verbo de ligação → adjetivo.' },
    { type: 'fill', prompt: 'The children were playing ___. (quiet)', answers: ['quietly'] },
    { type: 'choice', prompt: '"Ela canta bem."', options: ['She sings good.', 'She sings well.', 'She well sings.'], answer: 1 },
    { type: 'choice', prompt: '"Eu quase não dormi."', options: ['I hardly slept.', 'I slept hardly.', 'I hard slept.'], answer: 0 },
    { type: 'choice', prompt: 'This soup tastes ___.', options: ['delicious', 'deliciously'], answer: 0 },
    { type: 'fixError', prompt: 'He speaks very well English.', answers: ['He speaks English very well.'] },
    { type: 'fixError', prompt: 'She answered the question correct.', answers: ['She answered the question correctly.'] },
    { type: 'fixError', prompt: 'He runs very fastly.', answers: ['He runs very fast.'] },
    { type: 'transform', instruction: 'Reescreva usando um advérbio.', prompt: 'She is a beautiful dancer.', answers: ['She dances beautifully.'] },
    { type: 'transform', instruction: 'Reescreva usando um advérbio.', prompt: 'He is a fast runner.', answers: ['He runs fast.'] },
    { type: 'translate', from: 'pt', prompt: 'Ele dirige muito rápido.', answers: ['He drives very fast.', 'He drives very quickly.'] },
    {
      type: 'reorder',
      words: ['She', 'worked', 'hard', 'at', 'the', 'office', 'yesterday'],
      translation: 'Ela trabalhou muito no escritório ontem.',
    },
  ],
}
