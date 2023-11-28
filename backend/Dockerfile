# Utiliza una imagen base de Node.js
FROM node:18.17.0

# Crea un directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo 'package.json' y 'package-lock.json' (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos restantes del proyecto al contenedor
COPY . .

# Transpila TypeScript a JavaScript usando el script 'tsc'
RUN npm run tsc

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 80

# Comando para ejecutar la aplicación
CMD ["node", "build/app/index.js"]