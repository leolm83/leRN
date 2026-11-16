import { q } from '../q'
import type { ConsolidationData } from '../types'

export const b1Consolidations: ConsolidationData[] = [
  {
    title: 'Present Perfect: usos, tempo e for/since',
    units: [1, 4],
    summary: `**Regras centrais**

- Forma: **have/has + particípio** (*seen, gone, written*). Contração *she's = she has* antes de particípio.
- Usos: experiências sem data (*ever, never*), resultado no presente (*I've lost my keys*), ações recentes (*just, already, yet*) e situações que continuam até agora (*for, since*).
- **just/already** entre have e o particípio; **yet** no fim (negativas e perguntas).
- **Past Simple** quando há tempo terminado e definido: *yesterday, last year, in 2019, ago, When…?*
- **for** + período (*for 3 years*); **since** + ponto de partida (*since 2020*).
- **been to** (foi e voltou) × **gone to** (foi e está lá).

**Armadilhas comuns**

- "I have seen him yesterday" ✘ → *I saw him yesterday.*
- "I live here for 5 years" ✘ → *I have lived here for 5 years.*
- "When have you arrived?" ✘ → *When did you arrive?*`,
    questions: [
      q(
        '"Eu nunca comi sushi."',
        [
          ['I never ate sushi.', 'Sem marcador de tempo, para experiência de vida "até agora", o padrão no inglês britânico e na escrita é o **Present Perfect**.'],
          ['I have never eaten sushi.', 'Experiência de vida até agora: **have + never + particípio** (*eaten*).'],
          ['I have never ate sushi.', 'Depois de *have* vem o **particípio** (*eaten*), não o passado (*ate*).'],
        ],
        1,
        'Experiências de vida sem data: have/has (+ ever/never) + particípio.',
      ),
      q(
        'Qual frase está correta?',
        [
          ['I have seen him yesterday.', '*yesterday* é um tempo **terminado e definido**: pede Past Simple.'],
          ['I saw him yesterday.', 'Tempo definido no passado (*yesterday*) → **Past Simple**.'],
          ['I have saw him yesterday.', '*saw* não é particípio, e *yesterday* não combina com Present Perfect.'],
        ],
        1,
        'Com yesterday, last…, ago, in 2019 e When…? use o Past Simple.',
      ),
      q(
        '"Moro aqui há cinco anos." (e ainda moro)',
        [
          ['I live here for five years.', 'O presente simples não expressa algo que **começou no passado e continua**.'],
          ['I have lived here for five years.', 'Começou no passado e continua: **Present Perfect** + *for*.'],
          ['I lived here for five years.', 'O Past Simple indicaria que você **não mora mais** aqui.'],
        ],
        1,
        '"Há X tempo" (e continua) = Present Perfect + for/since.',
      ),
      q(
        'Complete: "She has worked here ___ 2018."',
        [
          ['for', '**for** é seguido de um **período** (*for six years*).'],
          ['since', '**since** + ponto de partida (*since 2018*).'],
          ['from', '*from* pede um ponto final (*from 2018 to 2020*); para "desde" use since.'],
        ],
        1,
        'for + período (for two years); since + ponto de partida (since 2018).',
      ),
      q(
        '"Você já terminou?" (pergunta)',
        [
          ['Have you finished yet?', 'Em perguntas, "já" é **yet**, no fim.'],
          ['Have you yet finished?', '**yet** vai no **fim** da frase.'],
          ['Did you finished already?', 'Depois de *did*, o verbo fica na base; e a pergunta natural aqui usa *Have… yet?*'],
        ],
        0,
        'yet: no fim, em perguntas (já?) e negativas (ainda não).',
      ),
      q(
        'Onde fica "just"?',
        [
          ["I've arrived just.", '**just** fica entre *have* e o particípio.'],
          ["I've just arrived.", '*have* + **just** + particípio.'],
          ['I just have arrived.', '*just* vai **depois** do auxiliar *have*.'],
        ],
        1,
        'just e already: entre have/has e o particípio.',
      ),
      q(
        '"Where\'s Ana?" — "She ___ to the bank." (ela está lá agora)',
        [
          ['has been', '*has been to* significa que ela foi e **já voltou**.'],
          ['has gone', '*has gone to*: foi e **ainda está lá**.'],
          ['went', 'Sem conexão com o agora; o natural para explicar a ausência é *has gone*.'],
        ],
        1,
        'been to = foi e voltou; gone to = foi e ainda está lá.',
      ),
      q(
        'Pergunta correta:',
        [
          ['When have you arrived?', 'Perguntas com **When** pedem Past Simple.'],
          ['When did you arrive?', '*When…?* indica um momento definido → Past Simple.'],
          ['When you arrived?', 'Falta o auxiliar **did**.'],
        ],
        1,
        'When…? sempre com Past Simple.',
      ),
      q(
        '"She\'s won a prize." — o \'s significa…',
        [
          ['is', 'Se fosse *is*, viria um adjetivo ou -ing; depois vem um **particípio** (*won*).'],
          ['has', 'Antes de particípio, **\'s = has**.'],
          ['possessivo', 'Posse se aplica a substantivos (*Ana\'s car*); aqui é verbo auxiliar.'],
        ],
        1,
        'Antes de particípio, \'s = has (she\'s gone = she has gone).',
      ),
      q(
        'Qual está correta?',
        [
          ['I have known her since years.', '**since** pede um ponto de partida, não *years*.'],
          ['I have been knowing her for years.', '*know* é verbo de estado: não vai para o contínuo.'],
          ['I have known her for years.', 'Present Perfect simples + **for** + período.'],
        ],
        2,
        'Verbos de estado (know, like, have = possuir) usam a forma simples: I have known.',
      ),
    ],
  },
  {
    title: 'Past Perfect, used to e condicionais',
    units: [5, 8],
    summary: `**Regras centrais**

- Past Perfect = **had + particípio**: o que aconteceu **antes** de outro fato passado. *When I arrived, the train had left.*
- **used to + verbo base**: hábito ou estado passado que mudou. Negativa/pergunta: *didn't use to / Did you use to…?*
- **be used to + -ing** = estar acostumado.
- Zero: *If + presente, presente* (verdades gerais).
- 1º: *If + presente, will + verbo* (possível). Nunca **will** depois de *if*.
- 2º: *If + passado, would + verbo* (imaginário). *If I were you…*
- **unless** = if … not. **when / as soon as** + presente para o futuro.

**Armadilhas comuns**

- "If it will rain" ✘; "If I would have" ✘; "I use to wake up early" ✘ (hábito atual → *usually*).
- 'd antes de particípio = had; antes de verbo base = would.`,
    questions: [
      q(
        '"Quando cheguei, o trem já tinha saído."',
        [
          ['When I arrived, the train left.', 'Indica que o trem saiu **depois** que você chegou.'],
          ['When I arrived, the train had left.', 'Ação anterior a outra no passado → **had + particípio**.'],
          ['When I had arrived, the train has left.', '*has left* é Present Perfect: não combina com uma narrativa no passado.'],
        ],
        1,
        'Past Perfect (had + particípio) para o que já tinha acontecido antes de outro momento passado.',
      ),
      q(
        '"Eu jogava futebol quando era criança." (hábito que acabou)',
        [
          ['I used to play football when I was a child.', 'Hábito passado que não existe mais: **used to + verbo base**.'],
          ['I use to play football when I was a child.', 'No passado afirmativo, a forma é **used** (com -d).'],
          ['I used to playing football when I was a child.', 'Depois de *used to* (hábito) vem o verbo **base**.'],
        ],
        0,
        'used to + verbo base = hábito/estado passado que mudou.',
      ),
      q(
        'Pergunta correta:',
        [
          ['Did you used to live here?', 'Com **did**, *used* perde o -d: *use to*.'],
          ['Did you use to live here?', '*did* + **use to** + verbo.'],
          ['Used you to live here?', 'Essa forma é arcaica; o padrão é *Did you use to…?*'],
        ],
        1,
        'Negativa e pergunta: didn\'t use to / Did … use to? (sem -d).',
      ),
      q(
        '"Estou acostumado a trabalhar à noite."',
        [
          ['I used to work at night.', 'Isso significa "eu **costumava** trabalhar à noite" (não trabalho mais).'],
          ["I'm used to working at night.", 'Estar acostumado = **be used to + -ing**.'],
          ["I'm used to work at night.", 'Em *be used to*, o **to** é preposição: vem seguido de **-ing**.'],
        ],
        1,
        'used to + verbo = costumava; be used to + -ing = estar acostumado.',
      ),
      q(
        '"Se chover amanhã, vamos ficar em casa."',
        [
          ['If it will rain tomorrow, we will stay home.', 'Depois de **if** usa-se o **presente**, mesmo para o futuro.'],
          ['If it rains tomorrow, we will stay home.', '1º condicional: *if + presente, will + verbo*.'],
          ['If it rained tomorrow, we will stay home.', '*rained* com *will* mistura condicionais diferentes.'],
        ],
        1,
        '1º condicional: If + presente, will + verbo. Nunca will depois de if.',
      ),
      q(
        '"Se eu fosse você, aceitaria a oferta."',
        [
          ['If I am you, I will accept the offer.', 'É uma situação **imaginária** (você não é a outra pessoa): 2º condicional.'],
          ['If I were you, I would accept the offer.', '2º condicional: *If + were/passado, would + verbo*.'],
          ['If I would be you, I would accept the offer.', 'Nunca *would* depois de **if**.'],
        ],
        1,
        '2º condicional (imaginário): If + passado (were), would + verbo base.',
      ),
      q(
        '"unless you hurry" significa…',
        [
          ['if you hurry', '*unless* tem sentido **negativo**.'],
          ["if you don't hurry", '**unless** = *if … not*.'],
          ['when you hurry', '*when* indica tempo, não condição negativa.'],
        ],
        1,
        'unless = if … not (a menos que).',
      ),
      q(
        'Complete: "I\'ll call you as soon as I ___."',
        [
          ['will arrive', 'Depois de *as soon as, when, before, after* usa-se o **presente** para o futuro.'],
          ['arrive', 'Conjunção de tempo + **presente** com sentido futuro.'],
          ['arrived', 'O passado indicaria algo já ocorrido; aqui é futuro.'],
        ],
        1,
        'when / as soon as / before / after + presente para falar do futuro.',
      ),
      q(
        '"She\'d already left." — o \'d significa…',
        [
          ['would', '*would* é seguido de verbo **base**; aqui vem um particípio (*left*).'],
          ['had', 'Antes de particípio, **\'d = had** (Past Perfect).'],
          ['did', '*did* não contrai em *\'d* nesse contexto.'],
        ],
        1,
        '\'d + particípio = had; \'d + verbo base = would.',
      ),
      q(
        'Verdade geral: "If you heat ice, it ___."',
        [
          ['will melt', 'Para fatos científicos e regras gerais, o padrão é o **zero conditional** (presente/presente).'],
          ['melts', 'Zero conditional: *if + presente, presente*.'],
          ['would melt', '*would* indica algo **imaginário**, e isso é um fato.'],
        ],
        1,
        'Zero conditional (sempre verdade): If + presente, presente.',
      ),
    ],
  },
  {
    title: 'Voz passiva e orações relativas',
    units: [9, 11],
    summary: `**Regras centrais**

- Passiva = **be (no tempo certo) + particípio**: *is made, was built, has been cancelled, will be sent, must be done, is being repaired*.
- Use quando quem fez não importa ou é desconhecido; **by** para indicar o agente.
- Relativos: **who** (pessoas), **which** (coisas), **that** (os dois, só em orações essenciais), **where** (lugar), **whose** (posse).
- Pronome-objeto pode ser omitido: *The book (that) I bought.* Pronome-sujeito não.
- Informação **extra** entre vírgulas, **nunca com that**: *Paris, which is…*

**Armadilhas comuns**

- "was wrote", "are make" ✘ — sempre particípio.
- "The man which…" ✘ → *who*.
- "The car that I bought it" ✘ — não repita o objeto.`,
    questions: [
      q(
        '"Esta ponte foi construída em 1900."',
        [
          ['This bridge built in 1900.', 'Falta o **be**: sem ele, a frase diz que a ponte construiu algo.'],
          ['This bridge was built in 1900.', 'Passiva no passado: **was + particípio**.'],
          ['This bridge was build in 1900.', 'Na passiva usa-se o **particípio**: *built*.'],
        ],
        1,
        'Passiva: be + particípio (was built, is made, were sent).',
      ),
      q(
        'Passiva de "They have cancelled the flight":',
        [
          ['The flight has been cancelled.', 'Present Perfect na passiva: **has been + particípio**.'],
          ['The flight has cancelled.', 'Isso diz que o voo cancelou algo (ativa).'],
          ['The flight was been cancelled.', '*was been* não existe; mantenha o tempo original: *has been*.'],
        ],
        0,
        'Mantenha o tempo da ativa no be: have cancelled → has been cancelled.',
      ),
      q(
        '"Os celulares devem ser desligados."',
        [
          ['Phones must be switched off.', 'Modal + **be** + particípio.'],
          ['Phones must switched off.', 'Falta o **be** depois do modal.'],
          ['Phones must be switch off.', 'Depois de *be* na passiva vem o **particípio**: *switched*.'],
        ],
        0,
        'Passiva com modal: modal + be + particípio.',
      ),
      q(
        '"O carro está sendo consertado."',
        [
          ['The car is repaired.', 'Isso descreve um fato geral/estado, não algo **em andamento**.'],
          ['The car is being repaired.', 'Passiva contínua: **is being + particípio**.'],
          ['The car is repairing.', 'Ativa: diria que o carro está consertando algo.'],
        ],
        1,
        'Passiva em andamento: am/is/are being + particípio.',
      ),
      q(
        'Complete: "The woman ___ lives next door is a doctor."',
        [
          ['which', '**which** é para coisas e animais.'],
          ['who', 'Pessoas → **who** (ou *that*).'],
          ['whose', '**whose** indica posse (cujo).'],
        ],
        1,
        'who (ou that) para pessoas; which (ou that) para coisas.',
      ),
      q(
        'Qual frase com informação extra está correta?',
        [
          ['Paris, that is the capital of France, is beautiful.', 'Em informação **extra** (entre vírgulas), **that** não é usado.'],
          ['Paris, which is the capital of France, is beautiful.', 'Informação extra: vírgulas + **which**.'],
          ['Paris which is the capital of France is beautiful.', 'Sem vírgulas, a oração parece essencial (como se houvesse várias Paris).'],
        ],
        1,
        'Informação extra: entre vírgulas, com who/which (nunca that).',
      ),
      q(
        'Qual frase com o objeto omitido está correta?',
        [
          ['This is the car that I bought it.', 'O relativo já substitui o objeto; não repita **it**.'],
          ['This is the car I bought.', 'O pronome-objeto (*that/which*) pode ser omitido.'],
          ['This is the car who I bought.', '**who** é para pessoas.'],
        ],
        1,
        'Não repita o objeto na oração relativa; that/which-objeto pode ser omitido.',
      ),
      q(
        '"Tenho um amigo cujo pai é piloto."',
        [
          ['I have a friend who father is a pilot.', 'Posse = **whose**.'],
          ['I have a friend whose father is a pilot.', '**whose** = cujo.'],
          ["I have a friend who's father is a pilot.", "*who's* = **who is** — não indica posse."],
        ],
        1,
        'whose = cujo (posse); who\'s = who is.',
      ),
      q(
        'Complete: "This is the café ___ we first met."',
        [
          ['which', 'Seria possível só com preposição (*in which*); sozinho, para lugar, use *where*.'],
          ['where', 'Lugar → **where**.'],
          ['who', '*who* é para pessoas.'],
        ],
        1,
        'where para lugares (= in which).',
      ),
      q(
        'Quando a passiva é a melhor escolha?',
        [
          ['Quando queremos destacar quem fez a ação.', 'Para destacar quem fez, a **ativa** é mais natural.'],
          ['Quando quem fez não importa ou é desconhecido.', 'É o uso típico da passiva: *My bike was stolen.*'],
          ['Sempre, porque é mais formal.', 'Passiva em excesso deixa o texto pesado e vago.'],
        ],
        1,
        'Passiva: quando o agente é desconhecido, óbvio ou irrelevante.',
      ),
    ],
  },
  {
    title: 'Discurso indireto e question tags',
    units: [12, 14],
    summary: `**Regras centrais**

- Discurso indireto com *said/told*: os tempos **recuam** — *am → was, will → would, can → could, saw/have seen → had seen*.
- **say** (that) + frase; **tell + pessoa** (that) + frase.
- Pronomes e tempos mudam: *tomorrow → the next day, here → there*.
- Perguntas indiretas: **ordem de afirmação**, sem *do/did*, sem "?": *She asked where I lived.*
- Sim/não: **if / whether**. Ordens e pedidos: *told/asked + pessoa + (not) to + verbo*.
- Question tags: auxiliar + pronome, polaridade **invertida**: *It's cold, isn't it? You don't smoke, do you?*
- Especiais: *I am → aren't I?*, *Let's → shall we?*, *never → tag afirmativa*.

**Armadilhas comuns**

- "She said me" ✘; "He asked where did I work" ✘; "told me to not go" ✘ → *not to go*.`,
    questions: [
      q(
        '"I am tired," she said. →',
        [
          ['She said she is tired.', 'Com *said*, o verbo normalmente **recua** um tempo.'],
          ['She said she was tired.', '*am → was* no discurso indireto.'],
          ['She said me she was tired.', '*say* não leva a pessoa diretamente; use **told me**.'],
        ],
        1,
        'Discurso indireto: recue o tempo (am → was, will → would).',
      ),
      q(
        'Qual está correta?',
        [
          ['He said me that he was busy.', '**say** não é seguido diretamente da pessoa.'],
          ['He told me that he was busy.', '**tell + pessoa** + (that) + frase.'],
          ['He told that he was busy.', '**tell** exige a pessoa: *told me/us/her*.'],
        ],
        1,
        'say (that)…; tell + pessoa (that)…',
      ),
      q(
        '"I will call you," he said. →',
        [
          ['He said he will call me.', 'Com *said*, **will** costuma recuar para **would**.'],
          ['He said he would call me.', '*will → would*; *you → me*.'],
          ['He said he would call you.', 'O pronome muda pelo ponto de vista de quem relata: *you → me*.'],
        ],
        1,
        'will → would, can → could; ajuste os pronomes ao novo ponto de vista.',
      ),
      q(
        '"Where do you work?" →',
        [
          ['She asked me where did I work.', 'Em perguntas indiretas **não** se usa *do/did* nem inversão.'],
          ['She asked me where I worked.', 'Ordem de afirmação (*I worked*) e tempo recuado.'],
          ['She asked me where I worked?', 'Pergunta indireta termina com **ponto final**, não "?".'],
        ],
        1,
        'Pergunta indireta: ordem de afirmação, sem do/did e sem "?".',
      ),
      q(
        '"Are you hungry?" →',
        [
          ['He asked if I was hungry.', 'Pergunta de sim/não → **if/whether** + ordem de afirmação.'],
          ['He asked was I hungry.', 'Faltou **if/whether** e a ordem de afirmação.'],
          ['He asked that I was hungry.', '*that* introduz afirmações; para perguntas de sim/não, use **if/whether**.'],
        ],
        0,
        'Perguntas de sim/não: asked if/whether + sujeito + verbo.',
      ),
      q(
        '"Don\'t touch it," she said to me. →',
        [
          ['She told me to not touch it.', 'A negativa vem **antes** do *to*: *not to*.'],
          ['She told me not to touch it.', 'Ordem negativa: **told + pessoa + not to + verbo**.'],
          ["She told me don't touch it.", 'No discurso indireto, o imperativo vira **(not) to + verbo**.'],
        ],
        1,
        'Ordens/pedidos: told/asked + pessoa + (not) to + verbo.',
      ),
      q(
        '"She works in a bank, ___?"',
        [
          ["isn't she", 'A frase usa o Present Simple (*works*), cujo auxiliar é **does**.'],
          ["doesn't she", 'Present Simple afirmativo → tag com **doesn\'t**.'],
          ["don't she", 'Com *she*, o auxiliar é **does**.'],
        ],
        1,
        'Question tag: o auxiliar do tempo verbal + pronome, com polaridade invertida.',
      ),
      q(
        '"You didn\'t call her, ___?"',
        [
          ["didn't you", 'Frase **negativa** pede tag **afirmativa**.'],
          ['did you', 'Negativa → tag afirmativa: *did you?*'],
          ['do you', 'O tempo é passado (*didn\'t*): o auxiliar é **did**.'],
        ],
        1,
        'Frase negativa → tag afirmativa; frase afirmativa → tag negativa.',
      ),
      q(
        '"I\'m late, ___?"',
        [
          ["amn't I", '"amn\'t" não é usado; a tag de *I am* é especial.'],
          ["aren't I", 'Tag de **I am** = *aren\'t I?*'],
          ["isn't I", '*is* não combina com *I*.'],
        ],
        1,
        'Casos especiais: I am → aren\'t I? · Let\'s → shall we? · imperativo → will you?',
      ),
      q(
        '"She never calls you, ___?"',
        [
          ["doesn't she", '**never** já torna a frase negativa: a tag é afirmativa.'],
          ['does she', 'Frase com *never* (negativa) → tag **afirmativa**.'],
          ["isn't she", 'O verbo é *calls* (Present Simple): auxiliar **does**.'],
        ],
        1,
        'never, nothing, nobody, hardly tornam a frase negativa → tag afirmativa.',
      ),
    ],
  },
  {
    title: 'Phrasal verbs, pontuação e e-mails',
    units: [15, 17],
    summary: `**Regras centrais**

- Phrasal verbs separáveis: o pronome **fica no meio** (*turn it off*, nunca *turn off it*). Inseparáveis: objeto depois (*look after them*).
- Vírgula depois de expressões de abertura (*However, In the morning,*) e antes de *but/so* ligando frases.
- **Comma splice** ✘: duas frases completas unidas só por vírgula.
- **its** (possessivo) × **it's** (it is). Plural sem apóstrofo (*coffees*).
- Maiúscula em dias, meses, línguas, nacionalidades.
- Parágrafo: frase-tópico → desenvolvimento → conclusão.
- E-mail formal: *Dear…,* / *I am writing to…* / *Could you please…?* / *I look forward to hearing from you.* / *Kind regards,*

**Armadilhas comuns**

- "look forward to hear" ✘ (to aqui é preposição → **-ing**).
- Contrações e gírias em e-mail formal.`,
    questions: [
      q(
        '"Desligue a TV." (com pronome)',
        [
          ['Turn off it.', 'Com pronome, phrasal verbs separáveis exigem o pronome **no meio**.'],
          ['Turn it off.', 'Separável + pronome: verbo + **it** + partícula.'],
          ['Turn it.', 'Sem a partícula *off*, o sentido muda (*turn* = girar).'],
        ],
        1,
        'Phrasal verbs separáveis: o pronome vai sempre no meio (turn it off, pick her up).',
      ),
      q(
        '"Você pode cuidar do meu gato?"',
        [
          ['Can you look my cat after?', '**look after** é inseparável: o objeto vem depois da partícula.'],
          ['Can you look after my cat?', '*look after* + objeto.'],
          ['Can you look for my cat?', '*look for* = **procurar**, não cuidar.'],
        ],
        1,
        'look after = cuidar de (inseparável); look for = procurar.',
      ),
      q(
        '"Ele parou de fumar no ano passado."',
        [
          ['He gave up smoking last year.', '**give up** + -ing = largar, desistir de.'],
          ['He gave up to smoke last year.', 'Depois de *give up*, use **-ing**.'],
          ['He gave smoking up to last year.', 'Partícula e preposição fora de lugar.'],
        ],
        0,
        'give up + -ing (desistir/parar de).',
      ),
      q(
        'Qual está pontuada corretamente?',
        [
          ['It was late, I went home.', '**Comma splice**: duas frases completas não se ligam só com vírgula.'],
          ['It was late, so I went home.', 'Vírgula + conjunção (*so*) ligando frases completas.'],
          ['It was late so, I went home.', 'A vírgula vem **antes** de *so*.'],
        ],
        1,
        'Duas frases completas: ligue com vírgula + and/but/so, ou separe com ponto.',
      ),
      q(
        'Complete: "The company changed ___ logo."',
        [
          ["it's", "*it's* = **it is**: \"changed it is logo\" não faz sentido."],
          ['its', 'Possessivo de *it*: **its**, sem apóstrofo.'],
          ["its'", 'Essa forma não existe.'],
        ],
        1,
        'its = dele/dela (coisa); it\'s = it is / it has.',
      ),
      q(
        'Qual está correta?',
        [
          ['However the results were good.', 'Depois de *However* no início da frase, use **vírgula**.'],
          ['However, the results were good.', '*However* de abertura + **vírgula**.'],
          ['However; the results were good.', 'Ponto e vírgula não é usado depois de *However* no início.'],
        ],
        1,
        'Vírgula depois de conectores e expressões de abertura (However, In addition, In 2020,).',
      ),
      q(
        'Fechamento formal correto:',
        [
          ['I look forward to hear from you.', 'Em *look forward to*, o **to** é preposição: vem **-ing** depois.'],
          ['I look forward to hearing from you.', '*look forward to* + **-ing**.'],
          ['I look forward hearing from you.', 'Falta o **to**.'],
        ],
        1,
        'look forward to + -ing (I look forward to hearing from you).',
      ),
      q(
        'Saudação formal para alguém cujo nome você não sabe:',
        [
          ['Hi there,', 'Informal demais para um e-mail formal.'],
          ['Dear Sir or Madam,', 'Padrão formal quando o nome é desconhecido.'],
          ['Hello friend,', 'Inadequado no registro formal.'],
        ],
        1,
        'Formal sem nome: Dear Sir or Madam,; com nome: Dear Mr/Ms Silva,',
      ),
      q(
        'Qual pedido é mais adequado num e-mail formal?',
        [
          ['Send me the invoice.', 'Imperativo direto soa **rude** num e-mail formal.'],
          ['Could you please send me the invoice?', 'Pedido educado: **Could you please…?**'],
          ["Can u send the invoice ASAP?", 'Abreviações (*u, ASAP*) não cabem em e-mail formal.'],
        ],
        1,
        'Pedidos formais: Could you please…? / I would be grateful if you could…',
      ),
      q(
        'Qual é a melhor frase-tópico para um parágrafo sobre exercício físico?',
        [
          ['I went to the gym yesterday.', 'É um detalhe pessoal, não a **ideia principal** do parágrafo.'],
          ['Regular exercise has many benefits for our health.', 'Apresenta a ideia central que o parágrafo vai desenvolver.'],
          ['For example, running is good.', '*For example* introduz um **exemplo**, que vem depois da frase-tópico.'],
        ],
        1,
        'Frase-tópico: a ideia principal do parágrafo, desenvolvida pelas frases seguintes.',
      ),
    ],
  },
]
