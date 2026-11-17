# leRN — inglês escrito do A1 ao C2

App web (React + Vite + TypeScript) para aprender inglês com foco em **gramática e escrita**, sem foco em fala.

## Rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm test         # testes do motor, do conteúdo e da interface
npm run build
```

## Rodar com Docker (progresso no Postgres)

```bash
cp .env.example .env
npm run hash-password          # cole a linha gerada no .env
openssl rand -hex 24           # → POSTGRES_PASSWORD
openssl rand -hex 32           # → SESSION_SECRET
docker compose up -d --build   # http://localhost:8080
```

Sobem três serviços: `web` (nginx com o app e proxy de `/api`), `api` (Node) e `db` (Postgres 17, volume `pgdata`). Só o `web` publica porta. O progresso fica no banco e sobrevive a `docker compose down`; **`docker compose down -v` apaga o volume**. Backup do banco: `docker compose exec db pg_dump -U lern lern > backup.sql`.

**Exposto na internet:** coloque um proxy com HTTPS na frente (Caddy, Cloudflare Tunnel, Traefik…) e mantenha `COOKIE_SECURE=true`; com esse proxy na frente, use `TRUST_PROXY_HOPS=2` (é como a API descobre o IP real para limitar tentativas de login). Sem HTTPS a senha trafega em texto puro. Para testar em `http://localhost`, use `COOKIE_SECURE=false`.

Login: 5 tentativas por minuto por IP e, no total, 20 senhas erradas a cada 10 minutos (depois disso novos logins ficam bloqueados até a janela passar; sessões já abertas continuam valendo). Sessões duram 30 dias; para derrubar todas (ex.: cookie vazado), troque o `SESSION_SECRET`.

Ao entrar pela primeira vez, o progresso que já estava no navegador é enviado ao servidor (se o servidor estiver vazio). Sem conexão, o app continua funcionando com a cópia local e envia as mudanças quando a conexão volta; se outro aparelho tiver gravado uma versão mais nova nesse meio-tempo, a do servidor vence.

## Como funciona

- **Trilha**: níveis A1→C2, unidades liberadas em sequência (≥ 80% para avançar) e uma prova por nível.
- **Lição**: teoria em português → exercícios corrigidos na hora → resultado.
- **Exercícios**: múltipla escolha, lacuna, ordenar palavras, tradução, corrigir o erro, transformar frase e produção livre (autoavaliada com resposta-modelo).
- **Consolidação** (opcional): a cada 3–5 unidades, um resumo do bloco + questões de múltipla escolha em que cada alternativa explica por que está certa ou errada. Libera ao concluir o bloco e não bloqueia o avanço.
- **Revisão**: vocabulário e erros entram num sistema Leitner (1, 3, 7, 14, 30 dias).
- **Gramática**: toda a teoria pesquisável. **Progresso**: streak, XP, meta diária e backup em JSON.

O progresso fica no Postgres (com cópia local no navegador) — também dá para exportar um backup em JSON na página Progresso.

## Adicionar conteúdo

Cada unidade é um arquivo em `src/content/<nível>/` (formato em `src/content/types.ts`), registrado no `index.ts` do nível e em `src/content/index.ts`. O teste `src/content/content.test.ts` valida automaticamente que todo gabarito é aceito pelo corretor.

As consolidações ficam em `src/content/<nível>/consolidations.ts` (use o atalho `q()` de `src/content/q.ts`). O teste exige que os blocos cubram todas as unidades do nível e que toda alternativa tenha explicação.
