# leRN — inglês escrito do A1 ao C2

App web (React + Vite + TypeScript) para aprender inglês com foco em **gramática e escrita**, sem foco em fala.

## Rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm test         # testes do motor, do conteúdo e da interface
npm run build
```

## Como funciona

- **Trilha**: níveis A1→C2, unidades liberadas em sequência (≥ 80% para avançar) e uma prova por nível.
- **Lição**: teoria em português → exercícios corrigidos na hora → resultado.
- **Exercícios**: múltipla escolha, lacuna, ordenar palavras, tradução, corrigir o erro, transformar frase e produção livre (autoavaliada com resposta-modelo).
- **Consolidação** (opcional): a cada 3–5 unidades, um resumo do bloco + questões de múltipla escolha em que cada alternativa explica por que está certa ou errada. Libera ao concluir o bloco e não bloqueia o avanço.
- **Revisão**: vocabulário e erros entram num sistema Leitner (1, 3, 7, 14, 30 dias).
- **Gramática**: toda a teoria pesquisável. **Progresso**: streak, XP, meta diária e backup em JSON.

O progresso fica no `localStorage` do navegador — exporte um backup na página Progresso.

## Adicionar conteúdo

Cada unidade é um arquivo em `src/content/<nível>/` (formato em `src/content/types.ts`), registrado no `index.ts` do nível e em `src/content/index.ts`. O teste `src/content/content.test.ts` valida automaticamente que todo gabarito é aceito pelo corretor.

As consolidações ficam em `src/content/<nível>/consolidations.ts` (use o atalho `q()` de `src/content/q.ts`). O teste exige que os blocos cubram todas as unidades do nível e que toda alternativa tenha explicação.
