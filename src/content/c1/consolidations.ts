import { q } from '../q'
import type { ConsolidationData } from '../types'

export const c1Consolidations: ConsolidationData[] = [
  {
    title: 'Inversão, cleft sentences e participle clauses',
    units: [1, 4],
    summary: `**Regras centrais**

- Expressão negativa/restritiva no início → **auxiliar + sujeito**: *Never have I seen… / Not only did she… / Rarely do we…*
- **Hardly/Scarcely … when**; **No sooner … than**; **Only when / Not until** → inversão na **segunda** oração.
- Condicional sem *if*: **Should you need… / Were I you… / Had I known…** (negativa sem contração: *Had it not been for…*).
- Cleft: **It was X that/who…** destaca um elemento; **What I need is…** destaca no fim; ações: *What I did was (to) call…*
- Participle clauses: **-ing** (ativo, simultâneo), **particípio** (passivo), **Having + particípio** (anterior). O sujeito tem que ser o mesmo.

**Armadilhas comuns**

- "Never I have seen" ✘; "Hadn't it been" ✘; "What I need it is" ✘.
- Dangling participle: *Walking in, the lights went out* ✘.`,
    questions: [
      q(
        'Qual está correta?',
        [
          ['Never I have seen such chaos.', 'Com advérbio negativo no início, o **auxiliar vem antes do sujeito**.'],
          ['Never have I seen such chaos.', 'Inversão: *Never* + **have I** + particípio.'],
          ['Never seen I have such chaos.', 'Só o **auxiliar** inverte; o particípio fica depois do sujeito.'],
        ],
        1,
        'Advérbio negativo no início (Never, Rarely, Seldom) → auxiliar + sujeito.',
      ),
      q(
        '"Not only ___ late, but he also forgot the documents."',
        [
          ['he arrived', 'Depois de *Not only* no início, é preciso **inversão** com auxiliar.'],
          ['did he arrive', 'Sem auxiliar na frase original, use **did** + sujeito + verbo base.'],
          ['arrived he', 'Verbos comuns não se invertem sozinhos; use **do/does/did**.'],
        ],
        1,
        'Inversão sem auxiliar na frase: do/does/did + sujeito + verbo base.',
      ),
      q(
        'Complete: "No sooner had we left ___ it started to rain."',
        [
          ['when', '*when* combina com **Hardly/Scarcely**; *No sooner* pede **than**.'],
          ['than', '**No sooner … than** é um par fixo.'],
          ['that', '*that* não completa essa estrutura.'],
        ],
        1,
        'Hardly/Scarcely … when; No sooner … than.',
      ),
      q(
        '"Only when I read the letter ___ the truth."',
        [
          ['I understood', 'Com *Only when*, a inversão acontece na **segunda** oração.'],
          ['did I understand', 'Segunda oração invertida: **did I understand**.'],
          ['I did understand', 'Faltou a inversão (auxiliar **antes** do sujeito).'],
        ],
        1,
        'Only when / Not until / Only after: a inversão vai na oração principal (a segunda).',
      ),
      q(
        'Versão formal de "If you need further information, contact us.":',
        [
          ['Should you need further information, contact us.', '*Should* + sujeito + verbo base substitui *If you need*.'],
          ['Should you needed further information, contact us.', 'Depois de *Should*, use o verbo **base**.'],
          ['Would you need further information, contact us.', '*Would* não forma essa condicional invertida.'],
        ],
        0,
        'If you need… = Should you need… (formal).',
      ),
      q(
        '"Se não fosse pela sua ajuda, eu teria falhado." (formal)',
        [
          ["Hadn't it been for your help, I would have failed.", 'Na inversão, o **not** não se contrai com *had*.'],
          ['Had it not been for your help, I would have failed.', '*Had it not been for* = If it hadn\'t been for.'],
          ['Had not it been for your help, I would have failed.', 'O *not* vem **depois** do sujeito: *Had it not*.'],
        ],
        1,
        'Condicional invertida negativa: Had it not been… (sem contração).',
      ),
      q(
        'Destaque "a holiday": "I need a holiday."',
        [
          ['What I need it is a holiday.', 'Não se repete o pronome: *What I need **is***.'],
          ['What I need is a holiday.', 'Cleft com *What*: a informação destacada vai para o fim.'],
          ['What do I need is a holiday.', 'Dentro do *What…* a ordem é de afirmação, sem *do*.'],
        ],
        1,
        'What + sujeito + verbo + is + elemento destacado.',
      ),
      q(
        '"Foi a Maria que ligou, não a Ana."',
        [
          ['It was Maria who called, not Ana.', 'Cleft com *It was … who*: destaca quem fez.'],
          ['Was Maria who called, not Ana.', 'Falta o sujeito **It**.'],
          ['It was Maria which called, not Ana.', '**which** não é usado para pessoas.'],
        ],
        0,
        'It is/was + elemento destacado + who (pessoas) / that.',
      ),
      q(
        'Qual NÃO tem dangling participle?',
        [
          ['Running for the bus, my phone fell.', 'Quem corria não era o telefone: o sujeito precisa ser quem pratica a ação.'],
          ['Running for the bus, I dropped my phone.', 'O sujeito (**I**) é quem corria: correto.'],
          ['Running for the bus, the phone dropped.', 'O telefone não estava correndo.'],
        ],
        1,
        'Participle clause: o sujeito da oração principal deve ser quem pratica a ação do particípio.',
      ),
      q(
        '"Depois de terminar o relatório, ela foi para casa." (reduzida)',
        [
          ['Having finished the report, she went home.', 'Ação **anterior**: **Having + particípio**.'],
          ['Finishing the report, she went home.', '*-ing* sugere ações **simultâneas**; aqui uma vem antes.'],
          ['Having finish the report, she went home.', 'Depois de *Having* vem o **particípio**: *finished*.'],
        ],
        0,
        'Having + particípio = ação anterior; -ing = simultânea; particípio = passiva.',
      ),
    ],
  },
  {
    title: 'Subjuntivo, ênfase, nominalização e registro',
    units: [5, 8],
    summary: `**Regras centrais**

- Subjuntivo formal: *recommend/insist/demand/suggest + that* e *It is essential/vital that* + **verbo base** (*he stop, she be*). Negativa: **not + base**.
- Passado irreal: *It's time we **left**. I'd rather you **didn't**. He acts as if he **were**…*
- Ênfase: **do/does/did + verbo base** (*I did call you!*), **such a + substantivo** / **so + adjetivo**, *the very*, *whatsoever*, *on earth*.
- Adjetivos extremos com **absolutely**, não *very* (*absolutely exhausted*).
- Nominalização: verbo/adjetivo → substantivo (*decide → decision*); advérbio → adjetivo (*grew rapidly → rapid growth*).
- Registro formal: verbos latinos (*obtain, request, assist*), sem contrações, sem phrasal verbs informais.

**Armadilhas comuns**

- "recommended that he stops" ✘ (formal); "so a long trip" ✘; "very exhausted" ✘.`,
    questions: [
      q(
        'Forma formal correta:',
        [
          ['The doctor recommended that he stops smoking.', 'No subjuntivo formal, o verbo fica na **forma base**, sem -s.'],
          ['The doctor recommended that he stop smoking.', 'Subjuntivo: **base** para todas as pessoas.'],
          ['The doctor recommended that he to stop smoking.', 'Depois de *that*, não se usa *to*.'],
        ],
        1,
        'recommend/insist/demand/suggest that + sujeito + verbo base.',
      ),
      q(
        '"É essencial que ele seja informado."',
        [
          ['It is essential that he is informed.', 'Comum na fala, mas a forma **formal** usa o subjuntivo: *be*.'],
          ['It is essential that he be informed.', 'Subjuntivo de *be* = **be** para todas as pessoas.'],
          ['It is essential that he will be informed.', '*will* não é usado nessa estrutura.'],
        ],
        1,
        'It is essential/vital/important that + base (be informed, attend, arrive).',
      ),
      q(
        '"Já está na hora de irmos."',
        [
          ["It's time we go.", 'Depois de *It\'s time + sujeito*, use o **passado** (irreal).'],
          ["It's time we went.", '*It\'s time* + sujeito + **passado**.'],
          ["It's time we will go.", '*will* não cabe nessa estrutura.'],
        ],
        1,
        'It\'s (high) time + sujeito + passado.',
      ),
      q(
        '"Prefiro que você não fume aqui."',
        [
          ["I'd rather you don't smoke here.", 'Com **outra pessoa** depois de *would rather*, use o **passado**.'],
          ["I'd rather you didn't smoke here.", '*would rather* + outra pessoa + **passado**.'],
          ["I'd rather you not to smoke here.", 'Estrutura inexistente.'],
        ],
        1,
        'would rather + outra pessoa + passado; would rather + verbo base (mesmo sujeito).',
      ),
      q(
        'Contradiga com ênfase: "You didn\'t call me!"',
        [
          ['I called you!', 'Correto, mas **sem ênfase**.'],
          ['I did call you!', '**did + verbo base** dá ênfase/contradição.'],
          ['I did called you!', 'Depois do *did* enfático, o verbo fica na **base**.'],
        ],
        1,
        'Ênfase: do/does/did + verbo base (I do like it! She did call.).',
      ),
      q(
        'Complete: "It was ___ long journey that we were exhausted."',
        [
          ['so a', '**so** vai com adjetivo sozinho; com substantivo, use **such a**.'],
          ['such a', '**such a** + adjetivo + substantivo.'],
          ['very a', '*very* não forma essa estrutura com *that*.'],
        ],
        1,
        'such a + (adj) + substantivo; so + adjetivo/advérbio (+ that).',
      ),
      q(
        'Qual combinação está correta?',
        [
          ['very exhausted', '*exhausted* é adjetivo **extremo**; *very* não combina.'],
          ['absolutely exhausted', 'Adjetivos extremos combinam com **absolutely / utterly / completely**.'],
          ['a bit very exhausted', 'Intensificadores conflitantes.'],
        ],
        1,
        'Adjetivos extremos (exhausted, freezing, furious): absolutely, não very.',
      ),
      q(
        'Versão nominalizada de "Prices fell sharply.":',
        [
          ['There was a sharp fall in prices.', 'Verbo → substantivo (*fall*); advérbio → adjetivo (*sharp*).'],
          ['There was a sharply fall in prices.', 'Antes de substantivo, use o **adjetivo** (*sharp*).'],
          ['Prices made a fall sharply.', 'Não é nominalização natural.'],
        ],
        0,
        'Nominalização: verbo → substantivo, advérbio → adjetivo (grew rapidly → rapid growth).',
      ),
      q(
        'Equivalente formal de "We need more info ASAP.":',
        [
          ['We require further information as soon as possible.', 'Verbo latino (*require*), sem abreviações.'],
          ['We need more info as soon as possible.', '*info* é informal.'],
          ['Gonna need more info soon.', 'Gíria e frase incompleta.'],
        ],
        0,
        'Registro formal: require, obtain, request, assist; sem contrações nem abreviações.',
      ),
      q(
        'Formal de "Sorry we\'re late with the delivery.":',
        [
          ['We apologise for the late delivery.', 'Formal: *apologise for* + substantivo, sem contração.'],
          ["Sorry 'bout the late delivery.", 'Informal e com elisão.'],
          ['We are sorry for be late with the delivery.', 'Depois de preposição use **-ing** (*being*), e a frase continua informal.'],
        ],
        0,
        'Formal: We apologise for… / We regret to inform you that…',
      ),
    ],
  },
  {
    title: 'Phrasal verbs, relativas avançadas, elipse e textos acadêmicos',
    units: [9, 12],
    summary: `**Regras centrais**

- Phrasal verbs de três partes são **inseparáveis**: *come up with, put up with, cut down on*.
- Profissionais: *carry out* (realizar), *bring about* (causar), *rule out* (descartar), *account for* (explicar/representar), *turn down* (recusar).
- **whom** depois de preposição: *the man **to whom** I spoke*. Nunca *that* depois de preposição.
- **all of whom / two of which** (com vírgula); **, which** pode retomar a frase inteira; **whereby** = pelo qual.
- Substituição: *one/ones, that/those of, do so*; *I think so / I hope not*.
- Elipse: *She can swim, but I can't.* / **So do I / Neither can I**.
- Resumo: ideia central, paráfrase, sem opinião. Verbos de relato: *argues, claims, acknowledges, challenges*.

**Armadilhas comuns**

- "the person to who" ✘; "what was annoying" (para retomar frase) ✘ → *which*.`,
    questions: [
      q(
        '"Ela teve uma ideia brilhante."',
        [
          ['She came up a brilliant idea.', 'Falta a terceira partícula: **come up with**.'],
          ['She came up with a brilliant idea.', '*come up with* = ter/propor (uma ideia).'],
          ['She came with up a brilliant idea.', 'Partículas fora de ordem.'],
        ],
        1,
        'Phrasal verbs de três partes são inseparáveis: come up with, put up with, run out of.',
      ),
      q(
        '"A pesquisa foi realizada em maio."',
        [
          ['The survey was carried out in May.', '*carry out* = realizar, executar.'],
          ['The survey was brought about in May.', '*bring about* = **causar**, provocar.'],
          ['The survey was ruled out in May.', '*rule out* = **descartar**.'],
        ],
        0,
        'carry out = realizar; bring about = causar; rule out = descartar.',
      ),
      q(
        'Qual está correta?',
        [
          ['The person to who I wrote never replied.', 'Depois de preposição, a forma objeto é **whom**.'],
          ['The person to whom I wrote never replied.', 'Preposição + **whom** (formal).'],
          ['The person to that I wrote never replied.', '*that* nunca vem depois de preposição.'],
        ],
        1,
        'Preposição + whom (pessoas) / which (coisas); nunca preposição + that/who.',
      ),
      q(
        '"Eu tenho três irmãos, todos os quais moram no exterior."',
        [
          ['I have three brothers, all of them live abroad.', 'Duas frases unidas por vírgula (comma splice).'],
          ['I have three brothers, all of whom live abroad.', 'Quantificador + **of whom** (pessoas).'],
          ['I have three brothers, all of which live abroad.', '*which* é para coisas.'],
        ],
        1,
        'Quantificador + of whom (pessoas) / of which (coisas), após vírgula.',
      ),
      q(
        '"Ele não pediu desculpas, o que me deixou ainda mais irritado."',
        [
          ["He didn't apologise, what made me even angrier.", '**what** não retoma uma frase anterior.'],
          ["He didn't apologise, which made me even angrier.", '**, which** retoma a ideia inteira anterior.'],
          ["He didn't apologise, that made me even angrier.", 'Depois de vírgula, *that* não é usado como relativo.'],
        ],
        1,
        ', which retoma a frase anterior inteira; what = a coisa que (sem antecedente).',
      ),
      q(
        '"I love jazz." — "Eu também."',
        [
          ['So do I.', 'Concordância afirmativa: **So + auxiliar + sujeito**.'],
          ['So am I.', 'O verbo original é *love* (Present Simple) → auxiliar **do**.'],
          ['Neither do I.', '*Neither* é para concordar com frases **negativas**.'],
        ],
        0,
        'So + auxiliar + sujeito (afirmativas); Neither/Nor + auxiliar + sujeito (negativas).',
      ),
      q(
        '"The climate of Brazil is warmer than ___ of Canada."',
        [
          ['it', '*it* não substitui o substantivo + of nesse contexto.'],
          ['that', '**that (of)** substitui um substantivo singular para evitar repetição.'],
          ['one', '*one* não é usado com *of* nessa construção formal.'],
        ],
        1,
        'that of / those of substituem um substantivo já mencionado (formal).',
      ),
      q(
        '"Você vai à festa?" — "Acho que não."',
        [
          ["I don't think so.", 'Forma padrão: **don\'t think so**.'],
          ['I think not so.', 'Ordem inexistente.'],
          ["I don't think it.", '*it* não substitui uma frase inteira nesse uso; use **so**.'],
        ],
        0,
        'think/hope/expect + so (sim) / not (não); com think, prefira I don\'t think so.',
      ),
      q(
        'O que NÃO deve aparecer num resumo?',
        [
          ['A ideia central do texto', 'É o elemento mais importante do resumo.'],
          ['A opinião pessoal de quem resume', 'Resumo é **neutro**: só o que o autor disse.'],
          ['Os pontos principais', 'Fazem parte do resumo.'],
        ],
        1,
        'Resumo: ideia central + pontos principais, parafraseados, sem opinião.',
      ),
      q(
        'Qual verbo mostra que o autor DISCORDA de uma ideia?',
        [
          ['states', '*states* é neutro (afirma).'],
          ['challenges', '**challenges** = contesta, questiona.'],
          ['describes', '*describes* é neutro.'],
        ],
        1,
        'Verbos de relato mostram atitude: neutro (states), defende (argues), concorda (acknowledges), discorda (challenges, disputes).',
      ),
    ],
  },
]
