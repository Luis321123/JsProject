# Usar una imagen base de Node.js
FROM node:22.0.0

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json .
COPY tsconfig.json .

# Instalar dependencias
RUN npm install

# Instalar ts-node y nodemon globalmente (o localmente)
RUN npm install -g ts-node nodemon

# Copiar el código fuente
COPY . .

# Comando para desarrollo (usando ts-node y nodemon)
CMD ["nodemon", "--exec", "ts-node", "src/index.ts"]