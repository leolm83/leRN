# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=22.18.0
ARG NGINX_VERSION=1.29

# ---------- deps: instala dependências (camada cacheada enquanto o lockfile não muda)
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

# ---------- test: lint + testes (opcional: docker build --target test .)
FROM deps AS test
COPY . .
RUN npm run lint && npm test

# ---------- build: gera o bundle estático em /app/dist
FROM deps AS build
COPY . .
RUN npm run build

# ---------- runtime: nginx sem root servindo só os arquivos estáticos
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION}-alpine AS runtime
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html
USER nginx
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/healthz || exit 1
