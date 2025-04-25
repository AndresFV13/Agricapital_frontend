# Etapa de construcción
FROM node:22.11.0 AS builder
WORKDIR /app

# Copiar solo lo necesario primero (optimiza el cache)
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.* ./
RUN npm install

# Luego copiar todo el código
COPY . .

# Etapa de producción
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
