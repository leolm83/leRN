import { q } from '../q'
import type { ConsolidationData } from '../types'

export const a1Consolidations: ConsolidationData[] = [
  {
    title: 'Escrita básica, pronomes e verb to be',
    units: [1, 4],
    summary: `**Regras centrais**

- Maiúscula no início da frase, no pronome **I**, em nomes, dias, meses, nacionalidades e línguas: *I speak English on Mondays.*
- Pronomes sujeito (**I, you, he, she, it, we, they**) vêm **antes** do verbo; pronomes objeto (**me, you, him, her, it, us, them**) vêm **depois** do verbo ou de preposição.
- **it** é obrigatório em inglês, mesmo quando o português omite: *It is cold.* ("Is cold" ✘)
- **to be**: *I am · he/she/it is · you/we/they are*. Contrações: *I'm, he's, they're, isn't, aren't*.
- Negativa: **not** depois do be (*She is not / isn't*). Pergunta: **inverta** be e sujeito (*Is she…?*).
- Question words vêm no início: *Where are you from? What is your name? How old are you?*

**Armadilhas comuns**

- Idade usa **be**: *I am 30* ("I have 30" ✘).
- "Amn't" não existe: *I'm not* / *I am not*.
- Respostas curtas repetem o be: *Yes, I am. / No, she isn't.* ("Yes, I'm" ✘)`,
    questions: [
      q(
        'Qual frase está escrita corretamente?',
        [
          ['i live in brazil.', 'O pronome **I** e o nome do país sempre levam maiúscula, e a frase também começa com maiúscula.'],
          ['I live in Brazil.', 'Frase começa com maiúscula, **I** é sempre maiúsculo e **Brazil** é nome próprio.'],
          ['I live in brazil.', 'Nomes de países são nomes próprios: **Brazil** com B maiúsculo.'],
        ],
        1,
        'Maiúscula no início da frase, no pronome I e em nomes próprios (países, cidades, pessoas).',
      ),
      q(
        'Qual frase está correta?',
        [
          ['She speaks english on monday.', 'Em inglês, **línguas** e **dias da semana** levam maiúscula: *English, Monday*.'],
          ['She speaks English on monday.', 'Faltou a maiúscula em **Monday**: dias da semana são sempre maiúsculos em inglês.'],
          ['She speaks English on Monday.', 'Línguas (*English*) e dias (*Monday*) sempre com maiúscula em inglês, diferente do português.'],
        ],
        2,
        'Dias, meses, línguas e nacionalidades levam maiúscula em inglês.',
      ),
      q(
        '"Ele me ama." — qual é a tradução correta?',
        [
          ['He loves me.', 'Sujeito **he** antes do verbo; objeto **me** depois do verbo.'],
          ['Him loves me.', '**him** é pronome objeto; o sujeito da frase precisa ser **he**.'],
          ['He me loves.', 'Em inglês o objeto vem **depois** do verbo, não antes como no português "me ama".'],
        ],
        0,
        'Sujeito (I, he, she…) antes do verbo; objeto (me, him, her…) depois do verbo.',
      ),
      q(
        'Complete: "Can you help ___?" (nós)',
        [
          ['we', '**we** é pronome sujeito; depois do verbo *help* precisamos do pronome objeto.'],
          ['us', 'Depois do verbo, usa-se o pronome objeto: *we → us*.'],
          ['our', '**our** é possessivo (nosso), usado antes de um substantivo: *our house*.'],
        ],
        1,
        'Depois de verbo ou preposição, use o pronome objeto: me, you, him, her, it, us, them.',
      ),
      q(
        '"Está frio hoje." — qual é a forma correta?',
        [
          ['Is cold today.', 'O inglês **não** permite frase sem sujeito. Use **it** como sujeito "vazio".'],
          ['It is cold today.', 'Clima, tempo e distância usam **it** como sujeito: *It is cold. It is 3 o\'clock.*'],
          ['This cold today.', 'Falta o verbo **to be**, e **this** não é usado para falar do clima.'],
        ],
        1,
        'Toda frase em inglês precisa de sujeito; para clima, horas e distâncias, use it.',
      ),
      q(
        '"Eu tenho 25 anos."',
        [
          ['I have 25 years.', 'Em inglês a idade é algo que você **é**, não que você **tem**: use o verbo *to be*.'],
          ['I am 25 years old.', 'Idade usa **to be**: *I am 25* ou *I am 25 years old*.'],
          ['I have 25 years old.', 'Mistura duas estruturas: com *years old* o verbo é **be**: *I am 25 years old.*'],
        ],
        1,
        'Idade usa o verbo to be: I am 25 (years old).',
      ),
      q(
        'Complete: "My parents ___ teachers."',
        [
          ['is', '**is** é para um só (he/she/it). *My parents* = they (plural).'],
          ['am', '**am** é exclusivo de **I**.'],
          ['are', '*My parents* equivale a **they**, e they usa **are**.'],
        ],
        2,
        'I am · he/she/it is · you/we/they are (substantivos no plural = they).',
      ),
      q(
        'Qual é a negativa correta de "I am hungry"?',
        [
          ["I amn't hungry.", 'A contração "amn\'t" **não existe** em inglês padrão.'],
          ["I'm not hungry.", 'Com **I**, contraia o sujeito e o verbo: *I\'m not* (ou *I am not*).'],
          ["I don't am hungry.", 'O verbo **to be** não usa *do/don\'t*: a negativa é só **be + not**.'],
        ],
        1,
        'Negativa do be: be + not (I\'m not, he isn\'t, they aren\'t). Nunca "amn\'t" nem "don\'t be".',
      ),
      q(
        'Transforme em pergunta: "She is a doctor."',
        [
          ['She is a doctor?', 'Em inglês escrito, a pergunta com *be* exige **inversão**; só o ponto de interrogação não basta.'],
          ['Is she a doctor?', 'Pergunta com *be*: o verbo vai **antes** do sujeito.'],
          ['Does she is a doctor?', '*be* não usa **does** nas perguntas: só inverta *is* e *she*.'],
        ],
        1,
        'Perguntas com to be: inverta verbo e sujeito (Is she…? Are you…?).',
      ),
      q(
        '"Are you Brazilian?" — resposta curta afirmativa:',
        [
          ["Yes, I'm.", 'Na resposta curta afirmativa **não** se usa contração no final: *Yes, I am.*'],
          ['Yes, I am.', 'Resposta curta repete o sujeito e o be, sem contração: *Yes, I am.*'],
          ['Yes, I do.', 'A pergunta usa **are** (be), então a resposta usa **be**, não *do*.'],
        ],
        1,
        'Respostas curtas repetem o auxiliar da pergunta; afirmativas não terminam em contração.',
      ),
      q(
        '"De onde você é?"',
        [
          ['Where are you from?', 'Question word + be + sujeito, com a preposição **from** no fim.'],
          ['From where you are?', 'Em inglês a preposição costuma ir para o **fim** e o be vem **antes** do sujeito.'],
          ['Where you are from?', 'Falta a inversão: depois de *Where* vem **are** e só depois **you**.'],
        ],
        0,
        'Question word + be + sujeito (+ preposição no fim): Where are you from?',
      ),
    ],
  },
  {
    title: 'Artigos, plural, possessivos e demonstrativos',
    units: [5, 8],
    summary: `**Regras centrais**

- **a** antes de **som** de consoante, **an** antes de **som** de vogal: *a university, an hour, an apple.*
- **the** = algo específico ou já conhecido. Para **generalizar**, use plural ou incontável **sem** artigo: *I like dogs. Life is short.*
- Profissões levam **a/an**: *She is a nurse.*
- Plural: *-s*, *-es* (depois de s, sh, ch, x, o), *-ies* (consoante + y). Irregulares: *men, women, children, people, teeth, feet.*
- **Incontáveis** (*water, money, information, advice, furniture*) não têm plural nem **a/an**.
- Possessivo antes do substantivo: **my, your, his, her, its, our, their**. Sozinho: **mine, yours, his, hers, ours, theirs**.
- **'s** para posse: *my sister's car*; plural com -s: *my parents' house*.
- **this/these** (perto), **that/those** (longe); concordam em número com o substantivo.

**Armadilhas comuns**

- **its** (dele/dela, coisa) × **it's** (= it is).
- "The people" para generalizar ✘ → *People are friendly here.*
- "informations", "advices" ✘.`,
    questions: [
      q(
        'Complete: "She is ___ honest person."',
        [
          ['a', '*honest* começa com a letra **h**, mas o **som** é de vogal ("ónest"). Use **an**.'],
          ['an', 'O que vale é o **som**: o h de *honest* é mudo, então começa com som de vogal → **an**.'],
          ['the', '**the** indicaria uma pessoa específica já conhecida; aqui é uma pessoa qualquer.'],
        ],
        1,
        'a/an depende do SOM inicial, não da letra: an hour, an honest man, a university.',
      ),
      q(
        '"Eu sou engenheiro."',
        [
          ['I am engineer.', 'Em inglês, profissão no singular exige **a/an**.'],
          ['I am an engineer.', 'Profissão leva artigo indefinido; *engineer* começa com som de vogal → **an**.'],
          ['I am the engineer.', '**the** sugeriria "o engenheiro específico" (do projeto, por exemplo), não a sua profissão.'],
        ],
        1,
        'Profissões no singular levam a/an: I am a teacher / an engineer.',
      ),
      q(
        '"A vida é curta." (generalização)',
        [
          ['The life is short.', 'Em generalizações, substantivos abstratos e incontáveis vão **sem** artigo em inglês.'],
          ['Life is short.', 'Falando de algo em geral, sem artigo: *Life, Love, Money, People…*'],
          ['A life is short.', '**a** indicaria "uma vida qualquer", não a vida em geral.'],
        ],
        1,
        'Para generalizar, use incontável ou plural SEM artigo: Life is short. Dogs are loyal.',
      ),
      q(
        'Qual plural está correto?',
        [
          ['childs', '*child* tem plural irregular.'],
          ['children', '*child → children* é um plural irregular que precisa ser memorizado.'],
          ['childrens', '*children* já é plural; não se acrescenta -s.'],
        ],
        1,
        'Plurais irregulares: man → men, woman → women, child → children, person → people, tooth → teeth.',
      ),
      q(
        'Qual frase está correta?',
        [
          ['She gave me some good advices.', '*advice* é **incontável**: não tem plural.'],
          ['She gave me a good advice.', '*advice* é incontável, então não aceita **a**. Use *a piece of advice* ou *some advice*.'],
          ['She gave me some good advice.', 'Incontável com **some** e sem plural: *some advice*.'],
        ],
        2,
        'Incontáveis (advice, information, money, furniture) não têm plural nem a/an; use some / a piece of.',
      ),
      q(
        'Plural de "city":',
        [
          ['citys', 'Consoante + **y** troca o y por **-ies**.'],
          ['cities', 'Consoante + y → *-ies*: *city → cities, baby → babies*.'],
          ['cityes', 'O y vira **i** antes de -es: *cities*.'],
        ],
        1,
        'Consoante + y → -ies (cities); vogal + y → só -s (days, boys).',
      ),
      q(
        '"O carro da minha irmã"',
        [
          ["my sister's car", 'Posse com **\'s**: possuidor + \'s + coisa possuída.'],
          ['the car of my sister', 'Gramaticalmente possível, mas soa artificial; para pessoas, o natural é o **\'s**.'],
          ["my sister car's", 'O **\'s** vai no **possuidor** (sister), não na coisa possuída.'],
        ],
        0,
        'Para pessoas, posse com \'s: possuidor + \'s + coisa (my sister\'s car).',
      ),
      q(
        'Complete: "The dog is wagging ___ tail."',
        [
          ["it's", "*it's* = **it is**. \"The dog is wagging it is tail\" não faz sentido."],
          ['its', '**its** (sem apóstrofo) é o possessivo de *it*: o rabo **dele** (do cachorro).'],
          ['his', 'Para animais sem nome/gênero conhecido, o padrão é **its**.'],
        ],
        1,
        'its = possessivo (dele/dela para coisas e animais); it\'s = it is / it has.',
      ),
      q(
        '"Essa caneta é minha."',
        [
          ['This pen is my.', '**my** precisa de um substantivo depois (*my pen*). Sozinho, use **mine**.'],
          ['This pen is mine.', 'Possessivo sem substantivo depois: **mine, yours, his, hers, ours, theirs**.'],
          ['This pen is me.', '**me** é pronome objeto, não possessivo.'],
        ],
        1,
        'my/your/her + substantivo; mine/yours/hers sozinhos.',
      ),
      q(
        'Complete: "___ shoes over there are expensive." (longe, plural)',
        [
          ['That', '**that** é singular; *shoes* é plural.'],
          ['These', '**these** é plural, mas indica algo **perto**; *over there* indica longe.'],
          ['Those', 'Plural + longe = **those**.'],
        ],
        2,
        'this (perto, singular), these (perto, plural), that (longe, singular), those (longe, plural).',
      ),
      q(
        '"A casa dos meus pais"',
        [
          ["my parent's house", "Com *parent's*, seria a casa de **um** dos pais."],
          ["my parents' house", 'Plural terminado em -s recebe **só o apóstrofo**: *parents\'*.'],
          ["my parents's house", 'Plural com -s não recebe outro *s*: escreva só *parents\'*.'],
        ],
        1,
        "Posse de plural terminado em -s: só o apóstrofo (the students' books).",
      ),
    ],
  },
  {
    title: 'There is/are, Present Simple e frequência',
    units: [9, 12],
    summary: `**Regras centrais**

- **there is** + singular / incontável; **there are** + plural. Negativa: *there isn't / aren't*. Pergunta: *Is there…? Are there…?*
- Present Simple = hábitos, rotinas e fatos.
- 3ª pessoa (he/she/it) ganha **-s**: *works, watches* (-es), *studies* (-ies), *has, does, goes*.
- Negativa e pergunta usam **do/does** + verbo **base** (sem -s): *She doesn't work. Does he like it?*
- Advérbios de frequência (**always, usually, often, sometimes, rarely, never**) vêm **antes** do verbo principal e **depois** do *be*.

**Armadilhas comuns**

- "Have a problem here" para dizer "tem um problema aqui" ✘ → *There is a problem here.*
- "She don't" ✘ → *she doesn't*.
- "Does she works?" ✘ → o -s fica só no *does*.
- "I never don't" ✘ → *never* já é negativo.`,
    questions: [
      q(
        '"Tem muitas pessoas na sala."',
        [
          ['Have many people in the room.', 'O "tem" de existência **não** é *have*: é **there is / there are**.'],
          ['There are many people in the room.', 'Existência + plural (*people*) = **there are**.'],
          ['There is many people in the room.', '*people* é plural, então o verbo é **are**.'],
        ],
        1,
        'Para dizer que algo existe: there is + singular, there are + plural.',
      ),
      q(
        'Complete: "There ___ some milk in the fridge."',
        [
          ['is', '*milk* é **incontável**, e incontáveis usam o verbo no singular: *there is*.'],
          ['are', 'Mesmo com *some*, *milk* é incontável, então o verbo fica no singular.'],
          ['have', '*have* não expressa existência; use **there is**.'],
        ],
        0,
        'Incontáveis usam o verbo no singular: there is some milk / water / money.',
      ),
      q(
        'Complete: "She ___ in a hospital." (work)',
        [
          ['work', 'Na 3ª pessoa do singular (she) o Present Simple ganha **-s**.'],
          ['works', 'he/she/it + verbo **-s**: *she works*.'],
          ['working', 'Sem *is*, a forma -ing não pode ser o verbo principal; para rotina use o Present Simple.'],
        ],
        1,
        'Present Simple: he/she/it + verbo com -s (works, goes, watches, studies).',
      ),
      q(
        'Qual é a 3ª pessoa correta de "study"?',
        [
          ['studys', 'Consoante + y → **-ies**.'],
          ['studies', '*study → studies*: o y depois de consoante vira **-ies**.'],
          ['studyes', 'O y vira **i** antes de -es.'],
        ],
        1,
        'Verbos: consoante + y → -ies (studies, tries); -s/-sh/-ch/-x/-o → -es (watches, goes).',
      ),
      q(
        'Negativa de "He likes coffee":',
        [
          ["He don't like coffee.", 'Com he/she/it o auxiliar é **does**: *doesn\'t*.'],
          ["He doesn't likes coffee.", 'Depois de **doesn\'t** o verbo volta à forma **base** (sem -s).'],
          ["He doesn't like coffee.", '*doesn\'t* + verbo base: o -s "passa" para o auxiliar.'],
        ],
        2,
        'Negativa: don\'t/doesn\'t + verbo base. O -s aparece só no does.',
      ),
      q(
        'Pergunta correta:',
        [
          ['Does she speak French?', '**Does** + sujeito + verbo **base**.'],
          ['Does she speaks French?', 'O -s já está em **does**; o verbo principal fica na base.'],
          ['She speaks French?', 'Na escrita, perguntas no Present Simple precisam do auxiliar **do/does**.'],
        ],
        0,
        'Pergunta no Present Simple: Do/Does + sujeito + verbo base?',
      ),
      q(
        'Onde fica "always"?',
        [
          ['I always drink coffee in the morning.', 'Advérbio de frequência **antes** do verbo principal.'],
          ['I drink always coffee in the morning.', 'Advérbios **não** ficam entre o verbo e o objeto em inglês.'],
          ['Always I drink coffee in the morning.', 'No início soa enfático e incomum para *always*; a posição normal é antes do verbo.'],
        ],
        0,
        'Advérbios de frequência: antes do verbo principal (I always drink).',
      ),
      q(
        'Onde fica "usually" com o verbo to be?',
        [
          ['She usually is late.', 'Com **be**, o advérbio vem **depois** do verbo.'],
          ['She is usually late.', 'Com o verbo *be*, o advérbio vem depois dele: *is usually*.'],
          ['Usually she late is.', 'A ordem sujeito + verbo foi quebrada.'],
        ],
        1,
        'Advérbio de frequência: DEPOIS do be (is usually), ANTES dos outros verbos (usually works).',
      ),
      q(
        '"Eu nunca como carne."',
        [
          ["I never don't eat meat.", '*never* já é negativo; com *don\'t* vira dupla negação, que não se usa em inglês padrão.'],
          ['I never eat meat.', '**never** sozinho já nega a frase.'],
          ["I don't never eat meat.", 'Dupla negação (*don\'t* + *never*) não é aceita na escrita padrão.'],
        ],
        1,
        'never já é negativo: não combine com don\'t/doesn\'t.',
      ),
      q(
        'Complete: "Where ___ your brother live?"',
        [
          ['do', '*your brother* = **he** → auxiliar **does**.'],
          ['does', '3ª pessoa do singular usa **does** na pergunta.'],
          ['is', 'Com o verbo *live* (não *be*), a pergunta usa **do/does**.'],
        ],
        1,
        'Wh- + do/does + sujeito + verbo base: Where does he live?',
      ),
      q(
        'Qual está correta?',
        [
          ['Is there a bank near here?', 'Pergunta de existência: **Is there** + singular.'],
          ['There is a bank near here?', 'Para perguntar, **inverta**: *Is there…?*'],
          ['Has a bank near here?', '*have* não expressa existência; use **there is**.'],
        ],
        0,
        'Pergunta de existência: Is there…? / Are there…?',
      ),
    ],
  },
  {
    title: 'Present Continuous, preposições, can e datas',
    units: [13, 16],
    summary: `**Regras centrais**

- Present Continuous = **am/is/are + -ing**: ação acontecendo **agora** ou temporária.
- Present Simple × Continuous: rotina (*I work every day*) × agora (*I'm working now*).
- Verbos de estado (**know, like, want, need, understand**) não vão para o -ing.
- **at** (hora, ponto), **on** (dia, data, superfície), **in** (mês, ano, cidade, país, dentro).
- **can** + verbo base, sem *to* e sem -s: *She can swim. Can you help me?*
- Imperativo: verbo base sem sujeito (*Open the door.*); negativo: *Don't open it.*
- Datas: *on 5 May / on May 5th*; horas: *at 7 o'clock, at half past six*.

**Armadilhas comuns**

- "I am knowing" ✘ → *I know*.
- "in Monday" ✘ → *on Monday*; "at 2020" ✘ → *in 2020*.
- "She cans" / "can to swim" ✘.`,
    questions: [
      q(
        '"Agora eu estou estudando."',
        [
          ['I study now.', 'Para uma ação **em andamento agora**, use o Present Continuous.'],
          ["I'm studying now.", 'Ação acontecendo agora: **am/is/are + -ing**.'],
          ['I studying now.', 'Falta o verbo **be** (am) antes do -ing.'],
        ],
        1,
        'Ação acontecendo agora: am/is/are + verbo-ing.',
      ),
      q(
        'Qual frase está correta?',
        [
          ['I am knowing the answer.', '**know** é verbo de estado: não usa forma contínua.'],
          ['I know the answer.', 'Verbos de estado (know, like, want, need) ficam no Present Simple mesmo "agora".'],
          ['I knowing the answer.', 'Sem *be* e com verbo de estado: duplo problema.'],
        ],
        1,
        'Verbos de estado (know, like, want, need, understand) não vão para o -ing.',
      ),
      q(
        'Rotina ou agora? "She ___ to work by bus every day."',
        [
          ['is going', '*every day* indica **rotina** → Present Simple.'],
          ['goes', 'Hábito/rotina (*every day*) = Present Simple: *she goes*.'],
          ['go', 'Falta o -s da 3ª pessoa (she).'],
        ],
        1,
        'Rotina (every day, usually) = Present Simple; agora (now, at the moment) = Present Continuous.',
      ),
      q(
        'Complete: "The meeting is ___ Monday."',
        [
          ['in', '**in** é para meses, anos e períodos maiores.'],
          ['on', 'Dias da semana e datas usam **on**.'],
          ['at', '**at** é para horas e momentos precisos.'],
        ],
        1,
        'at + hora · on + dia/data · in + mês/ano/estação.',
      ),
      q(
        'Complete: "I was born ___ 1995."',
        [
          ['in', 'Anos usam **in**.'],
          ['on', '**on** é para dias e datas específicas (*on 3 May 1995*).'],
          ['at', '**at** é para horas.'],
        ],
        0,
        'in + ano/mês: in 1995, in May; on + data completa: on 3 May.',
      ),
      q(
        'Complete: "See you ___ 8 o\'clock."',
        [
          ['in', '**in** não é usado para horas exatas.'],
          ['on', '**on** é para dias.'],
          ['at', 'Horas exatas usam **at**.'],
        ],
        2,
        'Horas: at 8 o\'clock, at noon, at midnight.',
      ),
      q(
        'Qual está correta?',
        [
          ['She cans speak Spanish.', '**can** não recebe -s.'],
          ['She can to speak Spanish.', 'Depois de **can** vem o verbo **sem to**.'],
          ['She can speak Spanish.', 'can + verbo base, igual para todas as pessoas.'],
        ],
        2,
        'Modais (can, should, must, will): sem -s, sem to, verbo base depois.',
      ),
      q(
        'Pergunta correta com can:',
        [
          ['Do you can help me?', 'Modais **não** usam *do* em perguntas.'],
          ['Can you help me?', 'Pergunta com modal: **inverta** can e o sujeito.'],
          ['You can help me?', 'Na escrita, a pergunta exige a inversão: *Can you…?*'],
        ],
        1,
        'Pergunta com can: Can + sujeito + verbo base?',
      ),
      q(
        '"Não toque nisso!" (imperativo)',
        [
          ["Don't touch it!", 'Imperativo negativo: **Don\'t + verbo base**.'],
          ["You don't touch it!", 'Com sujeito vira uma afirmação ("você não toca"), não uma ordem.'],
          ['Not touch it!', 'O imperativo negativo precisa de **don\'t**.'],
        ],
        0,
        'Imperativo: verbo base (Open it.); negativo: Don\'t + verbo base.',
      ),
      q(
        '"Ela está no Rio." / "Ela mora em Londres." — preposição para cidades:',
        [
          ['on', '**on** é para superfícies e dias.'],
          ['in', 'Cidades e países usam **in**: *in Rio, in London, in Brazil*.'],
          ['at', '**at** é para pontos/endereços específicos (*at the station, at home*).'],
        ],
        1,
        'in + cidade/país; at + ponto específico (at home, at work, at the bus stop).',
      ),
      q(
        'Como escrever "7h30"?',
        [
          ['half past seven', '30 minutos depois da hora = **half past**.'],
          ['seven and half', 'A forma por extenso usa **half past** + hora.'],
          ['half seven past', 'Ordem invertida: **half past** vem antes da hora.'],
        ],
        0,
        'Horas: half past seven (7h30), quarter past (e quinze), quarter to (quinze para).',
      ),
    ],
  },
]
