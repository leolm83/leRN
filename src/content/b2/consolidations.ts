import { q } from '../q'
import type { ConsolidationData } from '../types'

export const b2Consolidations: ConsolidationData[] = [
  {
    title: 'Tempos perfeitos contínuos e futuro avançado',
    units: [1, 3],
    summary: `**Regras centrais**

- **have/has been + -ing**: duração de algo que começou no passado e continua (ou acabou de parar, com resultado visível).
- **had been + -ing**: duração até um momento do passado.
- Simple × Continuous: **resultado/quantidade** (*I've written 3 emails*) × **atividade/duração** (*I've been writing all morning*).
- Verbos de estado (*know, own, believe, like*) ficam no simple.
- **will be + -ing**: ação em andamento num ponto do futuro (*This time tomorrow I'll be flying*).
- **will have + particípio**: concluída antes de um ponto futuro, quase sempre com **by** (*By 2030 I'll have finished*).

**Armadilhas comuns**

- "I am working here since 2020" ✘ → *I have been working here since 2020.*
- "until Friday I will have finished" — prazo é **by**, não *until*.`,
    questions: [
      q(
        '"Estou esperando há uma hora."',
        [
          ["I'm waiting for an hour.", 'O presente contínuo não expressa algo que **começou no passado e continua**.'],
          ["I've been waiting for an hour.", 'Duração até agora: **have been + -ing** + *for*.'],
          ['I waited for an hour.', 'O Past Simple indica que a espera **acabou** e não tem ligação com o agora.'],
        ],
        1,
        'Duração até agora: have/has been + -ing (+ for/since).',
      ),
      q(
        'Foco no RESULTADO (quantidade concluída):',
        [
          ["I've been reading three books this month.", 'Com uma **quantidade concluída**, o contínuo soa estranho.'],
          ["I've read three books this month.", 'Quantidade/resultado → **Present Perfect Simple**.'],
          ['I was reading three books this month.', 'O Past Continuous não liga o mês (ainda em curso) ao resultado.'],
        ],
        1,
        'Quantidade ou resultado → simple; atividade e duração → continuous.',
      ),
      q(
        '"Seus olhos estão vermelhos. Você estava chorando?"',
        [
          ['Have you been crying?', 'Atividade recente que explica o que vemos agora → **have been + -ing**.'],
          ['Did you cry?', 'Possível, mas perde a ligação com a evidência presente (os olhos vermelhos agora).'],
          ['Are you crying?', 'Perguntaria se a pessoa está chorando **neste momento**.'],
        ],
        0,
        'Atividade recente com resultado visível: Present Perfect Continuous.',
      ),
      q(
        'Qual está correta?',
        [
          ['She has been owning this car for years.', '**own** é verbo de estado: não vai para o contínuo.'],
          ['She has owned this car for years.', 'Verbo de estado + duração → **Present Perfect Simple**.'],
          ['She owns this car for years.', 'O presente simples não expressa duração até agora.'],
        ],
        1,
        'Verbos de estado (own, know, believe, like) usam o Present Perfect Simple para duração.',
      ),
      q(
        '"Eu estava cansado porque vinha dirigindo a noite toda."',
        [
          ['I was tired because I have been driving all night.', '*have been* liga ao **agora**; a história está no passado.'],
          ['I was tired because I had been driving all night.', 'Duração **até um momento passado** → **had been + -ing**.'],
          ['I was tired because I drove all night.', 'Possível, mas perde a ideia de **duração** que explica o cansaço.'],
        ],
        1,
        'Past Perfect Continuous: duração até um ponto do passado (had been + -ing).',
      ),
      q(
        '"Amanhã a esta hora estarei voando para Lisboa."',
        [
          ['This time tomorrow I will fly to Lisbon.', '*will fly* indica uma ação pontual, não **em andamento** naquele momento.'],
          ['This time tomorrow I will be flying to Lisbon.', 'Em andamento num ponto do futuro: **will be + -ing**.'],
          ['This time tomorrow I will have flown to Lisbon.', '*will have flown* = já terá **concluído** o voo.'],
        ],
        1,
        'Future Continuous: ação em andamento num momento futuro.',
      ),
      q(
        '"Até 2030 terei terminado a faculdade."',
        [
          ['Until 2030 I will finish university.', '**until** = "até" no sentido de duração contínua; para prazo use **by**.'],
          ['By 2030 I will have finished university.', 'Concluído antes de um prazo: **by** + **will have + particípio**.'],
          ['By 2030 I will be finishing university.', 'Indicaria que estará **no meio** do processo.'],
        ],
        1,
        'Future Perfect (will have + particípio) + by = concluído antes de um prazo.',
      ),
      q(
        'Pergunta educada sobre os planos de alguém:',
        [
          ['Will you be using the car tonight?', 'O Future Continuous suaviza a pergunta: pergunta sobre planos sem soar como pedido.'],
          ['Will you use the car tonight?', 'Pode soar como **pedido** ou cobrança.'],
          ['Are you use the car tonight?', 'Falta o -ing: *Are you using…?*'],
        ],
        0,
        'Will you be + -ing…? = pergunta neutra/educada sobre planos.',
      ),
      q(
        'Complete: "I won\'t have finished the report ___ Friday."',
        [
          ['until', 'Para prazo (algo concluído **antes de**), use **by**.'],
          ['by', '*by Friday* = até sexta (no máximo).'],
          ['since', '*since* indica ponto de **início**, não prazo.'],
        ],
        1,
        'by = prazo (no máximo até); until = duração contínua até um momento.',
      ),
      q(
        '"Em junho farei dez anos trabalhando aqui."',
        [
          ['In June I will work here for ten years.', 'Não expressa a duração **acumulada** até junho.'],
          ['In June I will have been working here for ten years.', 'Duração até um ponto futuro: **will have been + -ing**.'],
          ['In June I am working here for ten years.', 'O Present Continuous não acumula duração.'],
        ],
        1,
        'Future Perfect Continuous: duração acumulada até um ponto futuro.',
      ),
    ],
  },
  {
    title: 'Condicionais avançadas e wish',
    units: [4, 6],
    summary: `**Regras centrais**

- 3º condicional (passado irreal): **If + had + particípio, would have + particípio**.
- Mistas: passado → presente (*If I had studied, I would be…now*) e presente → passado (*If I spoke French, I would have understood*).
- **could have / might have** no lugar de *would have*.
- **wish + passado** (presente irreal), **wish + had + particípio** (arrependimento), **wish + would** (irritação com os outros).
- **If only** = versão enfática de *wish*.
- **hope** para coisas possíveis.

**Armadilhas comuns**

- "If I would have known" ✘.
- "I wish I would…" ✘ → *I wish I could…*
- *If I'd known, I'd have come*: primeiro **'d = had**, segundo **'d = would**.`,
    questions: [
      q(
        '"Se eu tivesse estudado, teria passado."',
        [
          ['If I studied, I would pass.', '2º condicional: fala do presente/futuro imaginário, não do passado.'],
          ['If I had studied, I would have passed.', '3º condicional: *had + particípio* / *would have + particípio*.'],
          ['If I would have studied, I would have passed.', 'Nunca **would** na oração com *if*.'],
        ],
        1,
        '3º condicional: If + had + particípio, would have + particípio.',
      ),
      q(
        '"If I\'d known, I\'d have come." — os dois \'d são…',
        [
          ['had … would', 'Depois de *if* + particípio → **had**; antes de *have* + particípio → **would**.'],
          ['would … had', 'A ordem é o contrário: *if* nunca leva *would*.'],
          ['would … would', '*would* não aparece na oração com *if*.'],
        ],
        0,
        'No 3º condicional: if + \'d (had) + particípio; \'d (would) + have + particípio.',
      ),
      q(
        '"Se eu tivesse aceitado aquele emprego, estaria rico agora."',
        [
          ['If I had taken that job, I would have been rich now.', '*now* pede resultado no **presente**: *would be*.'],
          ['If I had taken that job, I would be rich now.', 'Mista: condição passada (*had taken*) → resultado presente (*would be*).'],
          ['If I took that job, I would be rich now.', 'A condição é **passada** (o emprego foi oferecido antes): use *had taken*.'],
        ],
        1,
        'Mista passado → presente: If + had + particípio, would + verbo base (now).',
      ),
      q(
        '"Se eu falasse francês, teria entendido o filme ontem."',
        [
          ['If I spoke French, I would have understood the film yesterday.', 'Condição permanente (presente) → resultado passado: mista.'],
          ['If I had spoken French, I would understand the film yesterday.', '*yesterday* exige o resultado no passado: *would have understood*.'],
          ['If I speak French, I will understand the film yesterday.', '*yesterday* é incompatível com *will*.'],
        ],
        0,
        'Mista presente → passado: If + passado, would have + particípio.',
      ),
      q(
        '"Queria ter mais tempo." (agora)',
        [
          ['I wish I have more time.', 'Depois de *wish* (presente irreal) o verbo vai para o **passado**.'],
          ['I wish I had more time.', '**wish + passado** = desejo sobre o presente.'],
          ['I wish I would have more time.', '*wish + would* é para reclamar dos **outros**, não de si mesmo.'],
        ],
        1,
        'wish + passado = desejo irreal sobre o presente.',
      ),
      q(
        '"Queria ter estudado mais na escola."',
        [
          ['I wish I studied more at school.', 'Para arrependimento do **passado**, recue mais: **had + particípio**.'],
          ['I wish I had studied more at school.', 'Arrependimento: **wish + had + particípio**.'],
          ['I hope I had studied more at school.', '**hope** é para coisas possíveis, não arrependimentos.'],
        ],
        1,
        'wish + had + particípio = arrependimento sobre o passado.',
      ),
      q(
        '"Queria que você parasse de me interromper!"',
        [
          ['I wish you stop interrupting me!', 'Depois de *wish*, o presente simples não é usado.'],
          ['I wish you would stop interrupting me!', 'Irritação com o comportamento de **outra pessoa**: *wish + would*.'],
          ['I hope you stop interrupting me!', 'Possível, mas soa como esperança neutra, sem a irritação de *wish + would*.'],
        ],
        1,
        'wish + would = irritação/desejo de mudança no comportamento de outra pessoa.',
      ),
      q(
        '"Queria ser mais alto." (na escrita)',
        [
          ['I wish I am taller.', 'Precisa do passado irreal.'],
          ['I wish I were taller.', 'Na escrita, **were** para todas as pessoas.'],
          ['I wish I would be taller.', 'Não use *would* consigo mesmo.'],
        ],
        1,
        'Com be no irreal (wish, if): were para todas as pessoas (formal).',
      ),
      q(
        '"Espero que você passe na prova."',
        [
          ['I wish you pass the exam.', '*wish* é para coisas irreais; isso é **possível**.'],
          ['I hope you pass the exam.', '**hope** + presente para algo possível.'],
          ['I wish you passed the exam.', 'Diria que você **não vai** passar (irreal).'],
        ],
        1,
        'hope = possível; wish = irreal ou impossível.',
      ),
      q(
        '"Se tivéssemos saído mais cedo, poderíamos ter evitado o trânsito."',
        [
          ['If we left earlier, we could avoid the traffic.', 'É sobre o **passado**: use o 3º condicional.'],
          ['If we had left earlier, we could have avoided the traffic.', '*could have + particípio* = possibilidade passada não realizada.'],
          ['If we had left earlier, we could avoided the traffic.', 'Falta **have**: *could have avoided*.'],
        ],
        1,
        'could have / might have + particípio também formam o 3º condicional.',
      ),
    ],
  },
  {
    title: 'Modais de dedução, passiva avançada e causativo',
    units: [7, 10],
    summary: `**Regras centrais**

- Dedução no presente: **must** (quase certeza), **might/may/could** (talvez), **can't** (impossível).
- No passado: **must have / might have / can't have + particípio**.
- **should have + particípio** = crítica ou arrependimento (*You should have told me*).
- Passiva impessoal: **It is said that…** / **He is said to be…** / **She is thought to have left** (passado).
- **be supposed to** = expectativa, regra ou plano.
- Dois objetos: *I was given a prize* (a forma mais natural).
- Causativo: **have/get + objeto + particípio** (*I had my hair cut*) — outra pessoa faz o serviço.

**Armadilhas comuns**

- "It mustn't be true" ✘ → *It can't be true* (mustn't = proibição).
- "should of" ✘ → *should have*.
- "I cut my hair" = você mesmo cortou.`,
    questions: [
      q(
        '"Não pode ser verdade."',
        [
          ["It mustn't be true.", '**mustn\'t** expressa **proibição**, não dedução.'],
          ["It can't be true.", 'Dedução negativa (impossível) = **can\'t**.'],
          ["It doesn't must be true.", 'Modais não usam *do/does*.'],
        ],
        1,
        'O oposto de must (dedução) é can\'t, não mustn\'t.',
      ),
      q(
        '"Ele não está atendendo. Ele talvez esteja dormindo."',
        [
          ['He must sleep.', 'Sem *be + -ing*, fala de necessidade/hábito, não de ação em andamento.'],
          ['He might be sleeping.', 'Possibilidade de ação em andamento: **might be + -ing**.'],
          ['He can be sleeping.', '*can* não é usado para dedução afirmativa sobre uma situação específica.'],
        ],
        1,
        'Dedução sobre ação em andamento: modal + be + -ing.',
      ),
      q(
        '"O casaco dela não está aqui. Ela deve ter saído."',
        [
          ['She must leave.', 'Isso é **obrigação** no presente ("ela tem que sair").'],
          ['She must have left.', 'Dedução sobre o passado: **must have + particípio**.'],
          ['She had to leave.', '*had to* = foi obrigada a sair (obrigação), não dedução.'],
        ],
        1,
        'Dedução no passado: must have / might have / can\'t have + particípio.',
      ),
      q(
        '"Você deveria ter me contado!"',
        [
          ['You should told me!', 'Falta **have**: *should have told*.'],
          ['You should have told me!', 'Crítica sobre o passado: **should have + particípio**.'],
          ['You should of told me!', '"should of" é um erro de escrita causado pela pronúncia de *should\'ve*.'],
        ],
        1,
        'should have + particípio = crítica/arrependimento (nunca "should of").',
      ),
      q(
        '"Dizem que ele é muito rico."',
        [
          ['He is said to be very rich.', 'Passiva impessoal com sujeito pessoal: **is said to + verbo**.'],
          ['He says to be very rich.', 'Isso significa que **ele** afirma ser rico.'],
          ['It is said him to be very rich.', 'Com *It is said*, use **that** + frase: *It is said that he is rich*.'],
        ],
        0,
        'It is said that + frase = Sujeito + is said to + verbo.',
      ),
      q(
        '"Acredita-se que ela tenha deixado o país."',
        [
          ['She is believed to leave the country.', 'A ação é **anterior**: use *to have + particípio*.'],
          ['She is believed to have left the country.', 'Passado na passiva impessoal: **to have + particípio**.'],
          ['She is believed that she left the country.', 'Com sujeito pessoal, use **to** + verbo, não *that*.'],
        ],
        1,
        'Passiva impessoal sobre o passado: is believed/thought to have + particípio.',
      ),
      q(
        'Passiva mais natural de "They gave me a prize":',
        [
          ['I was given a prize.', 'Com dois objetos, a pessoa como sujeito é a forma mais natural.'],
          ['Me was given a prize.', 'O sujeito precisa da forma de sujeito: **I**.'],
          ['I was gave a prize.', 'Passiva usa **particípio**: *given*.'],
        ],
        0,
        'Verbos com dois objetos (give, offer, send, tell): a pessoa vira sujeito — I was offered a job.',
      ),
      q(
        '"Cortei o cabelo no salão."',
        [
          ['I cut my hair.', 'Significa que você **mesmo** cortou.'],
          ['I had my hair cut.', 'Causativo: **have + objeto + particípio** (outra pessoa fez).'],
          ['I had cut my hair.', 'Past Perfect: você mesmo tinha cortado.'],
        ],
        1,
        'Causativo: have/get + objeto + particípio = mandar fazer.',
      ),
      q(
        'Qual está correta?',
        [
          ["I'm having serviced my car tomorrow.", 'O objeto vem **antes** do particípio.'],
          ["I'm having my car serviced tomorrow.", 'have (no tempo certo) + **objeto** + **particípio**.'],
          ["I'm having my car service tomorrow.", 'Falta o **particípio**: *serviced*.'],
        ],
        1,
        'No causativo, o tempo verbal fica em have/get; a ordem é objeto + particípio.',
      ),
      q(
        '"O trem era para ter chegado às 9." (mas atrasou)',
        [
          ['The train was supposed to arrive at 9.', '**be supposed to** = expectativa/plano que não se cumpriu.'],
          ['The train supposed to arrive at 9.', 'Falta o verbo **be**.'],
          ['The train was suppose to arrive at 9.', 'A forma escrita é **supposed** (com -d).'],
        ],
        0,
        'be supposed to = era para…/deveria (regra, expectativa ou plano).',
      ),
    ],
  },
  {
    title: 'Verbos, conectores, collocations e argumentação',
    units: [11, 15],
    summary: `**Regras centrais**

- **remember/forget + -ing** (lembrar do que fez) × **+ to** (lembrar de fazer).
- **stop + -ing** (parar a atividade) × **stop to** (parar para fazer). **try + -ing** (experimentar) × **try to** (esforçar-se).
- **although / even though** + frase; **despite / in spite of** + substantivo ou -ing; **however** inicia nova frase (com vírgula).
- **because of / due to** + substantivo; **so that** + sujeito + can/could; **to / in order to** + verbo.
- Collocations: **make** (decision, mistake, progress) × **do** (homework, research, your best); *heavy rain, strong coffee*.
- Ensaio argumentativo: tese na introdução, um argumento por parágrafo, contra-argumento + resposta, conclusão sem ideias novas.

**Armadilhas comuns**

- "Despite it was" ✘, "Although…, but…" ✘, "for study" ✘, "do a mistake" ✘.`,
    questions: [
      q(
        '"Lembre-se de trancar a porta."',
        [
          ['Remember locking the door.', '*remember + -ing* = lembrar de algo que **já fez**.'],
          ['Remember to lock the door.', 'Lembrar de fazer algo (tarefa futura) = **remember to**.'],
          ['Remember lock the door.', 'Falta **to**.'],
        ],
        1,
        'remember/forget + to = tarefa a fazer; + -ing = memória do que já foi feito.',
      ),
      q(
        '"Paramos num posto para comprar água."',
        [
          ['We stopped buying water at a petrol station.', '*stop + -ing* = **deixar de** comprar água.'],
          ['We stopped at a petrol station to buy water.', '*stop to* = parar **para** fazer algo.'],
          ['We stopped at a petrol station for buy water.', 'Finalidade é **to** + verbo, nunca *for* + verbo.'],
        ],
        1,
        'stop + -ing = parar uma atividade; stop + to = parar para fazer outra coisa.',
      ),
      q(
        '"Se o computador travar, tente reiniciá-lo."',
        [
          ['Try restarting it.', '*try + -ing* = **experimentar** uma solução.'],
          ['Try to restarting it.', '*to* não combina com -ing aqui.'],
          ['Try restart it.', 'Falta *-ing* ou *to*.'],
        ],
        0,
        'try + -ing = experimentar algo; try + to = esforçar-se para conseguir.',
      ),
      q(
        'Qual frase com "despite" está correta?',
        [
          ['Despite it was raining, we went out.', '**despite** não é seguido de frase (sujeito + verbo).'],
          ['Despite the rain, we went out.', '*despite* + **substantivo**.'],
          ['Despite of the rain, we went out.', '"despite of" não existe: *despite* ou *in spite of*.'],
        ],
        1,
        'despite/in spite of + substantivo ou -ing; although/even though + frase.',
      ),
      q(
        'Qual frase com "although" está correta?',
        [
          ['Although he is rich, but he is unhappy.', 'Use **um só** conector de contraste.'],
          ['Although he is rich, he is unhappy.', '*Although* já faz o contraste; não precisa de *but*.'],
          ['Although rich he is, he is unhappy.', 'Ordem invertida sem motivo.'],
        ],
        1,
        'although… OU but… — nunca os dois na mesma frase.',
      ),
      q(
        'Qual está pontuada corretamente?',
        [
          ['The plan was good, however it failed.', '*however* não liga frases com vírgula (comma splice).'],
          ['The plan was good. However, it failed.', '*However* abre nova frase, com vírgula depois.'],
          ['The plan was good however, it failed.', 'Faltou separar as frases antes de *however*.'],
        ],
        1,
        'However: nova frase (ou depois de ;) e vírgula depois dele.',
      ),
      q(
        'Complete: "She spoke slowly ___ everyone could understand."',
        [
          ['so that', 'Finalidade com **sujeito + modal**: *so that everyone could*.'],
          ['in order to', '*in order to* é seguido de **verbo**, não de sujeito.'],
          ['because of', '*because of* indica **causa** e vem antes de substantivo.'],
        ],
        0,
        'so that + sujeito + can/could/will; (in order) to + verbo.',
      ),
      q(
        '"Cometi um erro no relatório."',
        [
          ['I did a mistake in the report.', 'A collocation é **make** a mistake.'],
          ['I made a mistake in the report.', '*make a mistake* — combinação fixa.'],
          ['I took a mistake in the report.', '*take* não combina com *mistake*.'],
        ],
        1,
        'make: decision, mistake, progress, money, effort. do: homework, research, business, your best.',
      ),
      q(
        '"Choveu forte a noite toda."',
        [
          ['There was strong rain all night.', 'Para chuva, a collocation natural é **heavy**.'],
          ['There was heavy rain all night.', '*heavy rain* (e *heavy traffic*).'],
          ['There was hard rain all night.', '*hard rain* soa pouco natural; o padrão é *heavy rain*.'],
        ],
        1,
        'Collocations: heavy rain/traffic, strong coffee/wind, high price, close friend.',
      ),
      q(
        'O que NÃO deve aparecer na conclusão de um ensaio argumentativo?',
        [
          ['A tese reformulada', 'A conclusão **deve** retomar a tese com outras palavras.'],
          ['Um resumo dos argumentos', 'Resumir os argumentos é função legítima da conclusão.'],
          ['Um argumento totalmente novo', 'Ideias novas na conclusão ficam sem desenvolvimento e enfraquecem o texto.'],
        ],
        2,
        'Conclusão: retome a tese e sintetize; não introduza argumentos novos.',
      ),
      q(
        'Qual frase é mais adequada a um ensaio formal?',
        [
          ["Kids don't get a lot of exercise nowadays.", 'Contração (*don\'t*) e palavras informais (*kids, a lot of*).'],
          ['Children do not get enough exercise nowadays.', 'Sem contrações e com vocabulário neutro/formal.'],
          ["Kids don't do sports, you know.", '*you know* é marca de fala informal.'],
        ],
        1,
        'Registro formal: sem contrações, sem gírias, vocabulário preciso.',
      ),
    ],
  },
]
