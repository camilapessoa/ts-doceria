# Usa uma imagem base oficial do Node.js com suporte a TypeScript
FROM node:20

# Define o diretório de trabalho dentro do contêiner, pode ser app
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY src ./src

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

RUN npm install

RUN npm run prisma:generate

# Compila o código TypeScript para JavaScript
RUN npm run build

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

RUN apt-get update -y && apt-get install -y openssl
# Comando para iniciar a aplicação docker-compose up --build

# CMD ["node", "dist/index.js"]
CMD ["npm", "start"]