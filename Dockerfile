# ---------- build ----------
FROM node:22.4.1-slim AS build
WORKDIR /app

# только package* —> кэш npm‑layer
COPY package*.json ./
RUN npm ci

# остальное
COPY . .

# build‑time параметры (--build-arg или env_file)
ARG VITE_HOST_REMOTE

RUN npm run build

# ---------- runtime ----------

FROM nginx:1.27.0-alpine AS prod
COPY nginx.main.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

# non‑root среда
RUN adduser -D -u 1001 app \
 && chown -R 1001 /usr/share/nginx/html \
 && chown -R 1001:0 /var/cache/nginx \
 && mkdir -p /tmp/nginx && chown -R 1001:0 /tmp/nginx \
 && apk add --no-cache curl
USER 1001

HEALTHCHECK CMD curl -f http://localhost:80 || exit 1
EXPOSE 80