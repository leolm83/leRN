import { q } from '../q'
import type { ConsolidationData } from '../types'

export const a2Consolidations: ConsolidationData[] = [
  {
    title: 'O passado: was/were e Past Simple',
    units: [1, 4],
    summary: `**Regras centrais**

- **was** (I/he/she/it) e **were** (you/we/they) — o passado do *to be*. Negativa: *wasn't/weren't*. Pergunta: *Was she…?*
- Past Simple regular: **-ed** (*worked*), **-d** (*liked*), consoante + y → **-ied** (*studied*), dobra a consoante em sílaba tônica curta (*stopped, planned*).
- Irregulares têm forma própria e precisam ser memorizados: *go → went, buy → bought, think → thought*.
- Negativa e pergunta: **did / didn't + verbo base**: *She didn't go. Did you see it?*
- Perguntas sobre o **sujeito** não usam *did*: *Who called you?*

**Armadilhas comuns**

- "Did you went?" ✘ → *Did you go?* (o passado fica só no *did*).
- "I was born in 1990" — "nasci" usa **was born**.
- "She didn't was" ✘ → *She wasn't*.`,
    questions: [
      q(
        'Complete: "They ___ at home yesterday."',
        [
          ['was', '**was** é para I/he/she/it; *they* usa **were**.'],
          ['were', 'you/we/they → **were**.'],
          ['did', '*did* é auxiliar de outros verbos; aqui o verbo principal é *be*.'],
        ],
        1,
        'Passado do be: I/he/she/it was · you/we/they were.',
      ),
      q(
        '"Eu nasci em 1998."',
        [
          ['I born in 1998.', 'Falta o verbo **be**: "nascer" em inglês é *be born*.'],
          ['I was born in 1998.', '"Nascer" = **be born**; no passado, *I was born*.'],
          ['I borned in 1998.', '*born* não é verbo regular com -ed; a estrutura é *was born*.'],
        ],
        1,
        '"Nasci" = I was born (be + born).',
      ),
      q(
        'Passado de "stop":',
        [
          ['stoped', 'Em sílaba tônica terminada em consoante-vogal-consoante, **dobra-se** a consoante final.'],
          ['stopped', 'C-V-C tônico → dobra a consoante: *stop → stopped*.'],
          ['stopt', 'A forma *stopt* não é usada na escrita padrão.'],
        ],
        1,
        'Consoante-vogal-consoante em sílaba tônica: dobre a última letra (stopped, planned).',
      ),
      q(
        'Passado de "study":',
        [
          ['studyed', 'Consoante + y → **-ied**.'],
          ['studied', 'O y depois de consoante vira **i** + -ed.'],
          ['studed', 'O y não desaparece: vira **i**.'],
        ],
        1,
        'Consoante + y → -ied (studied, tried); vogal + y → -ed (played).',
      ),
      q(
        'Passado de "buy":',
        [
          ['buyed', '*buy* é **irregular**.'],
          ['bought', '*buy → bought* (irregular), assim como *bring → brought, think → thought*.'],
          ['brought', '*brought* é o passado de **bring** (trazer), não de *buy*.'],
        ],
        1,
        'Irregulares que terminam em -ought: buy → bought, bring → brought, think → thought.',
      ),
      q(
        'Pergunta correta:',
        [
          ['Did you went to the party?', 'Depois de **did**, o verbo volta à **forma base**.'],
          ['Did you go to the party?', '*did* + sujeito + verbo base.'],
          ['Went you to the party?', 'Verbos comuns não se invertem com o sujeito; use **did**.'],
        ],
        1,
        'Pergunta no passado: Did + sujeito + verbo base (o passado fica só no did).',
      ),
      q(
        'Negativa de "She saw the film":',
        [
          ["She didn't saw the film.", 'Depois de **didn\'t**, o verbo fica na base: *see*.'],
          ["She didn't see the film.", '*didn\'t* + verbo base.'],
          ["She wasn't see the film.", '*wasn\'t* é para o verbo *be*; *see* usa **didn\'t**.'],
        ],
        1,
        'Negativa no passado: didn\'t + verbo base.',
      ),
      q(
        '"Quem te ligou?" (pergunta sobre o sujeito)',
        [
          ['Who did call you?', 'Quando *who* é o **sujeito**, não se usa *did* (só para ênfase).'],
          ['Who called you?', 'Pergunta sobre o sujeito: verbo no passado normal, sem *did*.'],
          ['Who did you call?', 'Isso pergunta "**Para quem** você ligou?" — o sentido muda.'],
        ],
        1,
        'Pergunta sobre o sujeito (Who/What…?) não usa did: Who called? What happened?',
      ),
      q(
        'Negativa de "He was happy":',
        [
          ["He didn't be happy.", 'O verbo *be* **não** usa *did*.'],
          ["He wasn't happy.", 'Negativa do *be* no passado: **wasn\'t/weren\'t**.'],
          ["He not was happy.", 'O *not* vem **depois** do be: *was not*.'],
        ],
        1,
        'Be no passado: wasn\'t/weren\'t, nunca didn\'t be.',
      ),
      q(
        '"Eu fui ao Rio no ano passado."',
        [
          ['I went to Rio last year.', 'Passado de *go* = **went**; *last year* sem preposição.'],
          ['I go to Rio last year.', '*last year* exige o verbo no passado.'],
          ['I went to Rio in last year.', 'Com **last**, **next** e **this** não se usa preposição.'],
        ],
        0,
        'last/next/this + tempo sem preposição (last year, next week).',
      ),
    ],
  },
  {
    title: 'Past Continuous e futuro',
    units: [5, 7],
    summary: `**Regras centrais**

- Past Continuous = **was/were + -ing**: ação **em andamento** num momento do passado.
- Com o Past Simple: ação longa (continuous) interrompida por ação curta (simple): *I was cooking when she arrived.*
- **when** + ação curta; **while** + ação longa.
- **going to**: plano já decidido ou previsão com evidência (*Look at those clouds — it's going to rain*).
- **will**: decisão no momento, promessa, oferta, previsão por opinião (*I think…*).
- Present Continuous para compromissos marcados: *I'm meeting her at 5.*

**Armadilhas comuns**

- "While I cooked, she arrived" (com ação longa use o continuous).
- "I will to go" ✘ → *I will go*.
- Oferta no momento: *I'll help you!* (não *I'm going to help*).`,
    questions: [
      q(
        '"Eu estava cozinhando quando ela chegou."',
        [
          ['I cooked when she arrived.', 'Indica sequência (ela chegou e eu cozinhei), não ação em andamento.'],
          ['I was cooking when she arrived.', 'Ação longa em andamento (**was cooking**) interrompida por ação curta (**arrived**).'],
          ['I was cooking when she was arriving.', 'A chegada é uma ação **curta**: Past Simple.'],
        ],
        1,
        'Ação longa (was/were + -ing) interrompida por ação curta (Past Simple).',
      ),
      q(
        'Complete: "She was watching TV ___ the phone rang."',
        [
          ['when', '**when** introduz a ação **curta** que interrompe a longa (*the phone rang*).'],
          ['while', '**while** costuma introduzir a ação **longa**, em andamento; o toque do telefone é curto.'],
          ['during', '**during** vem antes de **substantivo** (*during the film*), não de uma frase.'],
        ],
        0,
        'Ação longa (was/were + -ing) + when + ação curta; while + ação longa; during + substantivo.',
      ),
      q(
        'Complete: "What ___ you doing at 10 p.m. yesterday?"',
        [
          ['was', '*you* usa **were**.'],
          ['were', 'you/we/they → **were** + -ing.'],
          ['did', 'Com *doing* (forma -ing), o auxiliar é *were*, não *did*.'],
        ],
        1,
        'Past Continuous: I/he/she/it was, you/we/they were + -ing.',
      ),
      q(
        'Olhe aquelas nuvens! ___',
        [
          ["It will rain.", '*will* serve para previsões de opinião; com **evidência visível**, o natural é *going to*.'],
          ["It's going to rain.", 'Previsão baseada em evidência presente → **going to**.'],
          ["It rains.", 'Present Simple descreve hábitos/fatos, não previsão.'],
        ],
        1,
        'Previsão com evidência agora = going to; opinião/suposição = will.',
      ),
      q(
        'A campainha toca. Você diz: "___ get it!"',
        [
          ["I'm going to", '*going to* indica plano **anterior**; aqui você decidiu agora.'],
          ["I'll", 'Decisão tomada **no momento** de falar → **will**.'],
          ["I get", 'Present Simple não expressa decisão espontânea.'],
        ],
        1,
        'Decisão espontânea, oferta ou promessa = will (I\'ll help you).',
      ),
      q(
        '"Vou viajar para o Chile mês que vem — já comprei as passagens."',
        [
          ["I'll travel to Chile next month.", 'Com plano já decidido (passagens compradas), o natural é *going to* ou Present Continuous.'],
          ["I'm going to travel to Chile next month.", 'Plano já decidido → **going to**.'],
          ["I travel to Chile next month.", 'Present Simple para o futuro é usado só para horários/programações (*The train leaves at 6*).'],
        ],
        1,
        'Plano decidido antes = going to (ou Present Continuous para compromissos marcados).',
      ),
      q(
        'Qual está correta?',
        [
          ['I will to call you tomorrow.', 'Depois de **will** vem o verbo **sem to**.'],
          ['I will call you tomorrow.', 'will + verbo base.'],
          ['I will calling you tomorrow.', 'Depois de *will* não se usa -ing (exceto *will be -ing*).'],
        ],
        1,
        'will + verbo base, sem to: I will call.',
      ),
      q(
        '"Vou me encontrar com o médico às 15h." (compromisso marcado)',
        [
          ["I'm seeing the doctor at 3 p.m.", 'Compromissos marcados na agenda: **Present Continuous**.'],
          ["I see the doctor at 3 p.m.", 'Present Simple não é usado para compromissos pessoais marcados.'],
          ["I'll seeing the doctor at 3 p.m.", '*will* + -ing não está correto aqui (seria *will be seeing*).'],
        ],
        0,
        'Compromissos já marcados: Present Continuous (I\'m meeting her at 5).',
      ),
      q(
        'Negativa de "She will come":',
        [
          ["She won't come.", '*will not* = **won\'t**.'],
          ["She doesn't will come.", 'Modais não usam *do/does*.'],
          ["She willn't come.", '"willn\'t" não existe; a contração é **won\'t**.'],
        ],
        0,
        'Negativa de will: will not = won\'t.',
      ),
      q(
        'Complete: "I fell asleep ___ the film."',
        [
          ['while', '*while* precisa de uma **frase** (sujeito + verbo) depois.'],
          ['during', 'Antes de **substantivo** (*the film*), use *during*.'],
          ['when', '*when* também precisa de frase depois.'],
        ],
        1,
        'during + substantivo; while/when + frase.',
      ),
    ],
  },
  {
    title: 'Comparações e advérbios',
    units: [8, 10],
    summary: `**Regras centrais**

- Adjetivos curtos: **-er / the -est** (*cheaper, the cheapest*); terminados em y → **-ier / -iest** (*easier*).
- Adjetivos longos: **more / the most** (*more expensive, the most expensive*).
- Irregulares: *good → better → the best*, *bad → worse → the worst*, *far → further → the furthest*.
- Comparativo + **than**; igualdade: **as … as**; diferença: *not as … as*.
- Superlativo + **in** (lugar/grupo: *in the world*) ou **of** (período/quantidade: *of all*).
- Advérbio de modo: adjetivo + **-ly** (*quick → quickly*); *good → well*; *fast, hard, late* não mudam.
- Advérbio de modo vem depois do objeto, nunca entre verbo e objeto.

**Armadilhas comuns**

- "more cheap", "more better", "gooder" ✘.
- *hard* (duro, com esforço) × *hardly* (quase não).`,
    questions: [
      q(
        '"Este carro é mais barato que aquele."',
        [
          ['This car is more cheap than that one.', 'Adjetivo curto (uma sílaba): use **-er**, não *more*.'],
          ['This car is cheaper than that one.', 'Adjetivo curto + **-er** + *than*.'],
          ['This car is cheaper that that one.', 'A comparação usa **than**, não *that*.'],
        ],
        1,
        'Adjetivos curtos: -er + than; adjetivos longos: more … than.',
      ),
      q(
        'Comparativo de "good":',
        [
          ['gooder', '*good* é irregular.'],
          ['more good', '*good* tem forma própria: **better**.'],
          ['better', '*good → better → the best*.'],
        ],
        2,
        'Irregulares: good → better → best; bad → worse → worst.',
      ),
      q(
        'Qual está correto?',
        [
          ['This is the more expensive hotel in the city.', 'Com *in the city* (o grupo inteiro), o sentido é **superlativo**: *the most*.'],
          ['This is the most expensive hotel in the city.', 'Superlativo de adjetivo longo: **the most** + adjetivo.'],
          ['This is the expensivest hotel in the city.', 'Adjetivos longos não recebem -est.'],
        ],
        1,
        'Superlativo: the -est (curtos) / the most (longos).',
      ),
      q(
        'Complete: "It\'s the tallest building ___ the world."',
        [
          ['of', '**of** é usado com períodos ou quantidades (*of the year, of all*).'],
          ['in', 'Lugares e grupos usam **in**: *in the world, in my family*.'],
          ['than', '*than* é usado no **comparativo**, não no superlativo.'],
        ],
        1,
        'Superlativo + in (lugar/grupo) ou of (período/quantidade).',
      ),
      q(
        '"Ela é tão alta quanto o irmão."',
        [
          ['She is as tall as her brother.', 'Igualdade: **as** + adjetivo + **as**.'],
          ['She is so tall as her brother.', 'Na afirmativa, a estrutura é **as … as**.'],
          ['She is as tall than her brother.', '*than* não combina com *as*: é *as … as*.'],
        ],
        0,
        'Igualdade: as + adjetivo + as; diferença: not as … as.',
      ),
      q(
        '"Ele fala inglês muito bem."',
        [
          ['He speaks very well English.', 'O advérbio **não** fica entre o verbo e o objeto.'],
          ['He speaks English very well.', 'Verbo + objeto + advérbio de modo.'],
          ['He speaks English very good.', '*good* é adjetivo; o advérbio é **well**.'],
        ],
        1,
        'Advérbio de modo depois do objeto; good (adjetivo) × well (advérbio).',
      ),
      q(
        'Complete: "She drives very ___."',
        [
          ['careful', '*careful* é adjetivo; para descrever **como** ela dirige, use o advérbio.'],
          ['carefully', 'Advérbio de modo: adjetivo + **-ly**.'],
          ['carefuly', 'O sufixo é **-ly** acrescentado a *careful*: *carefully* (dois l).'],
        ],
        1,
        'Advérbio de modo = adjetivo + -ly (careful → carefully).',
      ),
      q(
        '"Ele trabalha muito (com esforço)."',
        [
          ['He works hardly.', '*hardly* significa **quase não** — o sentido fica oposto!'],
          ['He works hard.', '*hard* já é advérbio: trabalhar duro.'],
          ['He works hardy.', '*hardy* é um adjetivo (resistente), sem relação.'],
        ],
        1,
        'hard = com esforço; hardly = quase não.',
      ),
      q(
        'Comparativo de "easy":',
        [
          ['more easy', 'Adjetivos de duas sílabas terminados em -y recebem **-ier**.'],
          ['easier', '*easy → easier → the easiest*.'],
          ['easyer', 'O y vira **i** antes de -er.'],
        ],
        1,
        'Adjetivos terminados em consoante + y: -ier / -iest (easier, happiest).',
      ),
      q(
        '"É o pior dia da minha vida."',
        [
          ["It's the worse day of my life.", '*worse* é comparativo; aqui é superlativo: **the worst**.'],
          ["It's the worst day of my life.", '*bad → worse → the worst*.'],
          ["It's the baddest day of my life.", '*bad* é irregular.'],
        ],
        1,
        'bad → worse (comparativo) → the worst (superlativo).',
      ),
    ],
  },
  {
    title: 'Quantificadores, modais, verbos e conjunções',
    units: [11, 14],
    summary: `**Regras centrais**

- **some** em afirmativas e ofertas; **any** em negativas e perguntas.
- **much** + incontável; **many** + contável; **a lot of** + os dois.
- **a few** + contável; **a little** + incontável (pouco, mas algum).
- **should** = conselho; **must** = obrigação forte/interna; **have to** = obrigação externa.
- **mustn't** = proibido × **don't have to** = não é necessário.
- Alguns verbos pedem **-ing** (*enjoy, finish, avoid, mind*), outros **to** (*want, need, decide, hope*).
- "para" (finalidade) = **to**: *I came to study.*
- Conjunções: **and, but, or, so** (consequência), **because** (causa); *because of* + substantivo.
- Ordem fixa: Sujeito + Verbo + Objeto + Modo + Lugar + Tempo.

**Armadilhas comuns**

- "much people" ✘; "for study" ✘; "enjoy to swim" ✘.`,
    questions: [
      q(
        'Complete: "There aren\'t ___ apples left."',
        [
          ['some', 'Em frases **negativas**, use *any*.'],
          ['any', 'Negativas e perguntas: **any**.'],
          ['much', '*apples* é contável; *much* é para incontáveis.'],
        ],
        1,
        'some em afirmativas/ofertas; any em negativas/perguntas.',
      ),
      q(
        'Complete: "How ___ money do you have?"',
        [
          ['many', '*money* é **incontável**: use *much*.'],
          ['much', 'Incontável → **much**.'],
          ['lot', '*a lot of* não forma a pergunta *How…?*'],
        ],
        1,
        'How much + incontável; How many + contável.',
      ),
      q(
        '"Tenho alguns amigos aqui." (poucos, mas alguns)',
        [
          ['I have a little friends here.', '**a little** é para incontáveis.'],
          ['I have a few friends here.', 'Contável no plural → **a few**.'],
          ['I have few of friends here.', 'A forma correta é *a few* + substantivo, sem *of*.'],
        ],
        1,
        'a few + contável (a few friends); a little + incontável (a little time).',
      ),
      q(
        'Placa de museu: "Você ___ tocar nas pinturas." (é proibido)',
        [
          ["mustn't", '**mustn\'t** = proibição.'],
          ["don't have to", '*don\'t have to* = **não é necessário** — o sentido seria "você não precisa tocar".'],
          ["shouldn't to", 'Modais não levam *to* depois.'],
        ],
        0,
        'mustn\'t = proibido; don\'t have to = não precisa (mas pode).',
      ),
      q(
        '"Amanhã é domingo, então eu não preciso trabalhar."',
        [
          ["I mustn't work.", '*mustn\'t* significa que é **proibido** trabalhar.'],
          ["I don't have to work.", 'Não ter obrigação = **don\'t have to**.'],
          ["I haven't to work.", 'Na negativa, *have to* usa **do**: *don\'t have to*.'],
        ],
        1,
        'Ausência de obrigação: don\'t/doesn\'t have to.',
      ),
      q(
        '"Você deveria dormir mais."',
        [
          ['You should sleep more.', 'Conselho = **should** + verbo base.'],
          ['You should to sleep more.', 'Modais não levam **to**.'],
          ['You must sleeping more.', 'Depois do modal vem o verbo **base**, não -ing.'],
        ],
        0,
        'should + verbo base para dar conselhos.',
      ),
      q(
        'Complete: "I enjoy ___ in the sea."',
        [
          ['to swim', '*enjoy* é seguido de **-ing**.'],
          ['swimming', '*enjoy, finish, avoid, mind* + **-ing**.'],
          ['swim', 'Depois de *enjoy*, o verbo precisa estar no -ing.'],
        ],
        1,
        'enjoy/finish/avoid/mind + -ing; want/need/decide/hope + to.',
      ),
      q(
        '"Vim aqui para estudar."',
        [
          ['I came here for study.', '"Para" + verbo (finalidade) é **to**, nunca *for*.'],
          ['I came here to study.', 'Finalidade = **to** + verbo.'],
          ['I came here for studying.', '*for + -ing* indica função de objeto (*a knife for cutting*), não o seu propósito.'],
        ],
        1,
        'Finalidade ("para fazer algo") = to + verbo.',
      ),
      q(
        'Complete: "The game was cancelled ___ the rain."',
        [
          ['because', '*because* precisa de **frase** depois (*because it rained*).'],
          ['because of', 'Antes de **substantivo**, use *because of*.'],
          ['so', '*so* indica **consequência**, não causa.'],
        ],
        1,
        'because + frase; because of + substantivo.',
      ),
      q(
        '"Comprei um carro novo ontem."',
        [
          ['I bought yesterday a new car.', 'O objeto (*a new car*) vem **logo depois** do verbo.'],
          ['I bought a new car yesterday.', 'Sujeito + verbo + objeto + tempo.'],
          ['I bought a car new yesterday.', 'O adjetivo vem **antes** do substantivo: *a new car*.'],
        ],
        1,
        'Ordem: sujeito + verbo + objeto + modo + lugar + tempo; adjetivo antes do substantivo.',
      ),
      q(
        'Qual frase usa a pontuação correta?',
        [
          ['It was late, so we took a taxi.', 'Vírgula antes de **so** quando ele liga duas frases completas.'],
          ['It was late so, we took a taxi.', 'A vírgula vem **antes** do *so*, não depois.'],
          ['It was late, because we took a taxi.', '*because* indica causa: a frase ficaria sem sentido (o atraso não foi causado pelo táxi).'],
        ],
        0,
        'Vírgula antes de so/but ligando frases; because indica causa.',
      ),
    ],
  },
]
