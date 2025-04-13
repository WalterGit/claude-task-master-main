FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de dependências primeiro para melhor cache
COPY package*.json ./
# Usar pnpm conforme instrução do usuário
RUN npm install -g pnpm && pnpm install

# Copiar o resto do código
COPY . .

# Preparar o script do servidor
RUN chmod +x mcp-server/server.js

# Expor a porta que o servidor usará
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "mcp-server/server.js"] 