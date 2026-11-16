# leRN

App web pessoal para aprender **inglês escrito** do A1 ao C2 (sem foco em fala). Teoria em PT-BR, exercícios em inglês, correção offline com gabarito fixo (sem IA). React 19 + Vite + TypeScript, React Router (HashRouter), sem backend: progresso no `localStorage`.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm test         # vitest (motor, conteúdo e UI) — rodar após qualquer mudança de conteúdo
npm run lint     # oxlint
npm run build    # tsc -b + vite build
```

Antes de concluir uma tarefa: `npm test`, `npm run lint` e `npm run build` precisam passar.

## Estrutura

- `src/content/` — todo o conteúdo como dados tipados (`types.ts`).
  - `<nível>/uNN-slug.ts` — uma unidade (teoria, vocabulário, exercícios); `<nível>/index.ts` define a **ordem**.
  - `<nível>/consolidations.ts` — provas opcionais por bloco de unidades (use `q()` de `q.ts`).
  - `index.ts` — registra os níveis, gera ids, monta a prova de nível e os lookups.
- `src/engine/` — lógica pura: `grader.ts` (correção), `srs.ts` (Leitner), `progress.ts` (XP, streak, desbloqueios).
- `src/components/` — exercícios, `RichText`/`parseInline`/`parseBlocks` (markdown simples), quiz de consolidação.
- `src/pages/` — Trilha, Lição, Prova, Consolidação, Revisão, Gramática, Progresso.
- `src/state/ProgressContext.tsx` — estado global + persistência (`storage.ts`, chave `lern:progress:v1`).

## Regras importantes

**IDs derivam da posição.** Ids de unidade/exercício/consolidação (`a1-u05`, `a1-u05-e03`, `a1-c02`) são gerados pela ordem nos arrays. Reordenar ou inserir no meio quebra o progresso salvo do usuário: **acrescente no fim**.

**Progresso salvo.** `ProgressState` tem `version: 1`; campos novos entram com default em `emptyProgress()` (o `parseProgress` faz spread dos defaults). Não mude o formato de forma incompatível.

**Corretor (`grader.ts`).** `normalize` ignora caixa e pontuação e **expande contrações**. Consequências:
- `'s` só vira `is` depois de pronomes; `'d` sempre vira `would`. Então, para Present Perfect / Past Perfect, liste as duas formas nas respostas (`"She has gone"` e `"She's gone"`, `"I had left"` e `"I'd left"`).
- Exercícios de ortografia/pontuação/maiúsculas precisam de `strict: true` (senão a correção ignora exatamente o que se quer cobrar).
- Respostas abertas (`transform`, `translate`): cadastre várias variantes aceitas.

**Testes de conteúdo (`content.test.ts`) garantem**, entre outros: todo gabarito é aceito pelo corretor; o prompt de `fixError` não é aceito; ids únicos; prova de nível cobre todas as unidades; consolidações cobrem todas as unidades sem sobreposição, com enunciados distintos, 3–4 alternativas e `why` em todas; formatação fecha certo.

**Markdown da teoria** (`RichText`): só parágrafos, listas `- ` (linhas seguintes sem `- ` continuam o item), `**negrito**`, `*itálico*` (pode conter negrito) e `` `código` ``. **Não** há listas numeradas (use `- **1.** …`), listas aninhadas, tachado `~~` nem HTML.

**Lint:** arquivos `.tsx` de componente só exportam componentes (regra only-export-components) — funções utilitárias vão para `.ts` separados.

## Convenções de conteúdo

- Explicações focadas nos erros típicos de brasileiros (falsos cognatos, "have" para existência, Present Perfect × Past Simple…).
- Unidade: ≥ 8 itens de vocabulário e ≥ 12 exercícios (validado nos testes). Do B1 em diante, toda unidade termina com um `writing` (autoavaliado com modelo + checklist).
- Exemplos de texto não usam dados pessoais do usuário (use nomes genéricos).
