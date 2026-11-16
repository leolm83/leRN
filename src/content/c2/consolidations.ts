import { q } from '../q'
import type { ConsolidationData } from '../types'

export const c2Consolidations: ConsolidationData[] = [
  {
    title: 'Concisão, estilo e idioms',
    units: [1, 3],
    summary: `**Regras centrais**

- Troque expressões infladas por formas curtas: *due to the fact that → because*, *in order to → to*, *a large number of → many*.
- Corte redundâncias: *(end) result, (completely) unanimous, revert (back), collaborate (together)*.
- Evite construções fracas: *There are many people who believe… → Many people believe…*; *make an analysis of → analyse*.
- **Paralelismo**: itens de lista e pares (*not only X but also Y*) com a mesma forma gramatical.
- Alterne frases longas e curtas; a informação **nova** vai para o **fim** da frase.
- Idioms são **fixos** (*hit the nail on the head*); use poucos, e não em textos acadêmicos.

**Armadilhas comuns**

- "to improve, getting and travel" ✘; "go the extra kilometre" ✘; excesso de idioms ou de nominalizações.`,
    questions: [
      q(
        'Versão mais concisa de "due to the fact that it was raining":',
        [
          ['owing to the fact that it was raining', 'Continua inflado: troca uma expressão longa por outra.'],
          ['because it was raining', '*due to the fact that* = **because**.'],
          ['for the reason being that it was raining', 'Ainda mais longo e redundante.'],
        ],
        1,
        'Expressões infladas → uma palavra: due to the fact that → because; in order to → to.',
      ),
      q(
        'Qual frase NÃO tem redundância?',
        [
          ['We must revert back to the old system.', '*revert* já significa "voltar"; *back* é redundante.'],
          ['The final outcome was positive.', '*outcome* já é o resultado final; *final* sobra.'],
          ['The outcome was positive.', 'Sem palavras que repetem o sentido.'],
        ],
        2,
        'Corte palavras que repetem o sentido de outras (end result, revert back, past history).',
      ),
      q(
        'Versão mais forte de "There are many students who find grammar difficult.":',
        [
          ['Many students find grammar difficult.', 'Elimina o "There are … who" e vai direto ao sujeito e verbo.'],
          ['It is a fact that many students find grammar difficult.', 'Acrescenta palavras sem acrescentar sentido.'],
          ['There are students, many of them, who find grammar difficult.', 'Mais longo e confuso.'],
        ],
        0,
        'There is/are … who/that → comece direto pelo sujeito real.',
      ),
      q(
        'Troque a nominalização: "The team made an analysis of the data."',
        [
          ['The team analysed the data.', 'O verbo escondido no substantivo (*analysis*) volta a ser verbo.'],
          ['The team did an analysing of the data.', 'Construção agramatical e ainda mais pesada.'],
          ['An analysis of the data was made by the team.', 'Passiva + nominalização: ainda mais distante e longa.'],
        ],
        0,
        'make an analysis/decision of → analyse/decide: prefira o verbo quando possível.',
      ),
      q(
        'Qual frase tem paralelismo correto?',
        [
          ['My goals are to improve my English, getting a better job and travel more.', 'Mistura *to improve*, *getting* e *travel*.'],
          ['My goals are to improve my English, get a better job and travel more.', 'Três verbos na **mesma forma** (base depois de *to*).'],
          ['My goals are improving my English, to get a better job and travelling.', 'Três formas diferentes na mesma lista.'],
        ],
        1,
        'Paralelismo: todos os itens da lista na mesma forma gramatical.',
      ),
      q(
        'Qual tem paralelismo correto?',
        [
          ['She was both intelligent and a hard worker.', 'Adjetivo + substantivo: formas diferentes.'],
          ['She was both intelligent and hard-working.', '*both* + adjetivo + *and* + **adjetivo**.'],
          ['She was both intelligence and hard-working.', 'Substantivo + adjetivo: formas diferentes.'],
        ],
        1,
        'Pares correlativos (both…and, either…or, not only…but also) ligam formas iguais.',
      ),
      q(
        '"Researchers discovered a new species of frog." — qual segunda frase segue o princípio "conhecido → novo"?',
        [
          ['A small lake in the Amazon is where the frog was found.', 'Começa com informação nova e deixa a conhecida (*the frog*) para o fim.'],
          ['The frog was found in a small lake in the Amazon.', 'Começa com o conhecido (*the frog*) e termina com o novo (o lugar).'],
          ['In a small lake in the Amazon was found the frog.', 'Inversão forçada que soa artificial.'],
        ],
        1,
        'End-focus: informação conhecida no início, novidade no fim da frase.',
      ),
      q(
        'Qual idiom está na forma correta?',
        [
          ['You hit the nail in the head.', 'Idioms são fixos: a preposição é **on**.'],
          ['You hit the nail on the head.', 'Forma fixa: *hit the nail on the head* (acertar em cheio).'],
          ['You hit the head on the nail.', 'A ordem das palavras do idiom não pode mudar.'],
        ],
        1,
        'Idioms são fixos: não troque palavras nem preposições (o verbo pode conjugar).',
      ),
      q(
        '"Social media is a double-edged sword." significa que as redes sociais…',
        [
          ['são perigosas e devem ser proibidas', 'O idiom não implica proibição, só vantagens e desvantagens.'],
          ['têm vantagens e desvantagens ao mesmo tempo', '*double-edged sword* = faca de dois gumes.'],
          ['são muito populares', 'Não tem relação com popularidade.'],
        ],
        1,
        'a double-edged sword = algo com lados positivos e negativos.',
      ),
      q(
        'Onde idioms são MENOS adequados?',
        [
          ['Um artigo de opinião', 'Idioms são comuns e bem-vindos em jornalismo de opinião.'],
          ['Um e-mail para um colega', 'Registro semi-informal aceita idioms.'],
          ['Um artigo científico', 'Escrita acadêmica pede linguagem literal e precisa.'],
        ],
        2,
        'Idioms: ok em textos opinativos e e-mails; evite em textos acadêmicos e jurídicos.',
      ),
    ],
  },
  {
    title: 'Hedging e precisão lexical',
    units: [4, 6],
    summary: `**Regras centrais**

- **Hedging**: suavize afirmações conforme a força da evidência — *may, might, appear to, tend to, suggest, it is likely that, to some extent*.
- Troque absolutos (*all, everyone, always*) por *many, most, often*.
- Evidência forte: *show*; moderada: *suggest, indicate*; especulação: *may, possibly*.
- Pares confundidos: **affect** (verbo) × **effect** (substantivo); **imply** (insinuar) × **infer** (deduzir); **fewer** (contáveis) × **less** (incontáveis); **ensure** (garantir) × **insure** (segurar).
- Falsos cognatos: *actually* = na verdade; *eventually* = finalmente; *pretend* = fingir; *sensible* = sensato.
- **Conotação**: *slim / thin / skinny*; *determined / stubborn*; *thrifty / stingy*. Verbos precisos (*stare, glance, stroll, plummet*).

**Armadilhas comuns**

- Hedging demais: *may possibly perhaps* ✘.
- "comprises of" ✘ → *comprises* / *consists of*.`,
    questions: [
      q(
        'Qual afirmação é mais adequada a um artigo acadêmico?',
        [
          ['Video games make children violent.', 'Afirmação **absoluta**, fácil de refutar.'],
          ['Some studies suggest that violent video games may increase aggression in certain children.', 'Hedging proporcional: *some, suggest, may, certain*.'],
          ['Video games might possibly perhaps make some children slightly violent maybe.', 'Hedging **em excesso**: fica vago e inseguro.'],
        ],
        1,
        'Hedging: um marcador por afirmação, proporcional à evidência.',
      ),
      q(
        'Qual verbo indica a evidência MAIS forte?',
        [
          ['The data show…', '**show** apresenta o resultado como fato demonstrado.'],
          ['The data suggest…', '*suggest* indica evidência **moderada**.'],
          ['It may be that…', 'Especulação.'],
        ],
        0,
        'show (forte) > suggest/indicate (moderada) > may/might (especulação).',
      ),
      q(
        'Suavize: "All companies will adopt AI."',
        [
          ['All companies will definitely adopt AI.', 'Reforça o absoluto em vez de suavizar.'],
          ['Most companies are likely to adopt AI.', 'Quantificador (*most*) + *are likely to*.'],
          ['Companies adopt AI.', 'Continua uma generalização absoluta.'],
        ],
        1,
        'Troque absolutos (all, always) por most/many/often e use likely/may.',
      ),
      q(
        'Complete: "The new law will ___ thousands of families."',
        [
          ['effect', '**effect** é normalmente **substantivo** (efeito).'],
          ['affect', '**affect** é o **verbo** (afetar).'],
          ['infect', '*infect* = infectar.'],
        ],
        1,
        'affect = verbo (afetar); effect = substantivo (efeito).',
      ),
      q(
        'Complete: "There were ___ people at the meeting than last time."',
        [
          ['less', '**less** é para incontáveis (*less time*).'],
          ['fewer', '*people* é contável → **fewer**.'],
          ['lesser', '*lesser* significa "menor em importância".'],
        ],
        1,
        'fewer + contáveis; less + incontáveis.',
      ),
      q(
        '"Are you saying I\'m lying?" — quem fala está acusando o outro de…',
        [
          ['inferring', '*infer* = **deduzir**: é o que o ouvinte faz.'],
          ['implying', '*imply* = **insinuar**: é o que o falante faz.'],
          ['ensuring', '*ensure* = garantir.'],
        ],
        1,
        'The speaker implies; the listener infers.',
      ),
      q(
        '"Atualmente moro em Curitiba."',
        [
          ['Actually I live in Curitiba.', '*actually* = **na verdade** (falso cognato).'],
          ['Currently I live in Curitiba.', '"Atualmente" = **currently / nowadays**.'],
          ['Eventually I live in Curitiba.', '*eventually* = **finalmente** (com o tempo).'],
        ],
        1,
        'actually = na verdade; currently = atualmente; eventually = finalmente.',
      ),
      q(
        'Num anúncio de emprego, qual palavra é ELOGIO?',
        [
          ['pushy', 'Conotação **negativa**: insistente demais.'],
          ['assertive', 'Conotação **positiva**: firme e direto.'],
          ['bossy', 'Conotação negativa: mandão.'],
        ],
        1,
        'Sinônimos têm conotação: assertive (+), direct (neutro), pushy/bossy (−).',
      ),
      q(
        '"As ações despencaram 40% num dia."',
        [
          ['Shares went down 40% in a day.', 'Correto, mas genérico: não transmite a intensidade.'],
          ['Shares plummeted 40% in a day.', '**plummet** = cair de forma brusca e grande.'],
          ['Shares dipped 40% in a day.', '*dip* = queda **pequena** e temporária.'],
        ],
        1,
        'Verbos precisos: plummet (despencar), dip (cair pouco), soar (disparar), edge up (subir pouco).',
      ),
      q(
        'Qual está correta?',
        [
          ['The committee comprises of seven members.', '*comprise* **não** leva *of*.'],
          ['The committee comprises seven members.', '*comprise* + objeto direto (ou *consists of*).'],
          ['The committee consists seven members.', '*consist* exige **of**.'],
        ],
        1,
        'comprise X (sem of) = consist of X.',
      ),
    ],
  },
  {
    title: 'Pontuação, coesão, nuances verbais e revisão',
    units: [7, 10],
    summary: `**Regras centrais**

- **;** liga frases completas relacionadas e vem antes de *however/therefore* entre frases; separa itens de listas com vírgulas internas.
- **:** só depois de frase **completa**, para explicar ou listar.
- **—** para comentário ou ênfase; **hífen** em adjetivos compostos antes do substantivo (*a well-known writer*).
- Vírgula na relativa = informação extra; sem vírgula = essencial.
- Coesão: **this + substantivo-resumo** (*this decision*), *the former / the latter*, *such*, *respectively*; evite pronomes ambíguos.
- Distanciamento educado: *I was wondering if… / I wanted to ask…*. Futuro no passado: *was going to, was about to, would*.
- Resumo de enredo no **presente**.
- Revisão em camadas: estrutura → parágrafos → frases → palavras → ortografia.

**Armadilhas comuns de revisão**

- *The life is short* ✘; *advices / informations* ✘; *The number of… have* ✘; *depend of* ✘; *married with* ✘.`,
    questions: [
      q(
        'Qual está pontuada corretamente?',
        [
          ['It was expensive, however, it was worth it.', 'Comma splice: *however* não liga frases com vírgulas.'],
          ['It was expensive; however, it was worth it.', 'Ponto e vírgula antes de *however* ligando frases completas.'],
          ['It was expensive however; it was worth it.', 'O ponto e vírgula vem **antes** de *however*.'],
        ],
        1,
        'Frase; however, frase. (ou ponto final antes de However,)',
      ),
      q(
        'Qual uso dos dois-pontos está correto?',
        [
          ['The ingredients are: flour, eggs and milk.', 'Antes dos dois-pontos a frase está **incompleta** (*are* precisa de complemento).'],
          ['You need three ingredients: flour, eggs and milk.', 'Frase completa + **:** + lista.'],
          ['You need: flour, eggs and milk.', 'Frase incompleta antes dos dois-pontos.'],
        ],
        1,
        'Dois-pontos só depois de uma frase completa.',
      ),
      q(
        'Qual uso do hífen está correto?',
        [
          ['She is a well known author.', 'Adjetivo composto **antes** do substantivo leva hífen.'],
          ['She is a well-known author.', 'Composto antes do substantivo: *well-known*.'],
          ['She is a well-known-author.', 'O hífen não liga o adjetivo ao substantivo.'],
        ],
        1,
        'Adjetivos compostos antes do substantivo levam hífen (a five-year plan, a long-term goal).',
      ),
      q(
        '"My sister, who is a doctor, lives in Recife." indica que…',
        [
          ['tenho mais de uma irmã', 'Isso seria indicado **sem** vírgulas (oração essencial).'],
          ['tenho só uma irmã; ser médica é informação extra', 'Vírgulas = informação **não essencial**.'],
          ['minha irmã não é médica', 'A frase afirma que ela é médica.'],
        ],
        1,
        'Relativa entre vírgulas = informação extra; sem vírgulas = define qual.',
      ),
      q(
        '"We considered Lisbon and Porto. ___ was cheaper, so we went to Porto."',
        [
          ['The former', '*the former* = o **primeiro** mencionado (Lisboa).'],
          ['The latter', '*the latter* = o **último** mencionado (Porto).'],
          ['This', '*This* sozinho fica ambíguo entre as duas cidades.'],
        ],
        1,
        'the former = o primeiro; the latter = o último (de dois itens).',
      ),
      q(
        'Qual frase tem pronome AMBÍGUO?',
        [
          ['Maria told Ana that she had been promoted.', '*she* pode ser Maria **ou** Ana.'],
          ['Maria told Ana that Ana had been promoted.', 'Repetir o nome desfaz a ambiguidade.'],
          ['Maria said she had been promoted.', 'Só há uma pessoa possível para *she*.'],
        ],
        0,
        'Evite pronomes que possam se referir a mais de um antecedente.',
      ),
      q(
        'Qual é o pedido MAIS educado?',
        [
          ['I want a day off.', 'Direto demais para um pedido ao chefe.'],
          ['I was wondering if I could take a day off.', 'Passado + contínuo criam **distância educada**.'],
          ['Give me a day off.', 'Imperativo: rude.'],
        ],
        1,
        'Passado e contínuo de distanciamento: I was wondering if… / I wanted to ask…',
      ),
      q(
        'Num resumo do enredo de um filme, use…',
        [
          ['Present Simple', 'Resumos de enredo usam o **presente**: *the hero leaves home…*'],
          ['Past Perfect', 'Tempo de narrativa passada anterior, não de resumo de enredo.'],
          ['Future Continuous', 'Não se aplica a resumos.'],
        ],
        0,
        'Resumo de enredo (livro, filme): Present Simple.',
      ),
      q(
        'Qual frase está correta?',
        [
          ['The number of applicants have increased.', '*The number of* é singular → **has**.'],
          ['The number of applicants has increased.', '*The number* (o número) é o sujeito singular.'],
          ['A number of applicants has increased.', '*A number of* (vários) é plural → **have**.'],
        ],
        1,
        'The number of … has (singular); A number of … have (plural).',
      ),
      q(
        'Qual concordância com "research" está correta?',
        [
          ['The research show that…', '*research* é singular (incontável) → **shows**.'],
          ['The researches show that…', '*research* é incontável: sem plural.'],
          ['The research shows that…', 'Incontável + verbo no singular.'],
        ],
        2,
        'Incontáveis (research, information, advice, evidence, feedback): sem plural, verbo no singular.',
      ),
      q(
        'Qual é a ordem recomendada de revisão de um texto longo?',
        [
          ['Ortografia → frases → estrutura', 'Corrigir a ortografia antes pode ser desperdício se o parágrafo for cortado depois.'],
          ['Estrutura → parágrafos → frases → palavras → ortografia', 'Do maior para o menor: cada leitura procura um tipo de problema.'],
          ['Tudo ao mesmo tempo, numa leitura só', 'Uma leitura única deixa passar erros de todos os níveis.'],
        ],
        1,
        'Revise em camadas, do maior (estrutura) para o menor (ortografia).',
      ),
    ],
  },
]
