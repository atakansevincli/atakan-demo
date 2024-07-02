# Temel imaj olarak Node.js kullan
FROM node:14

# Uygulama dizinini oluştur
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kodunu kopyala
COPY . .

# Uygulamanın dışarıya açacağı port
EXPOSE 3000

# Uygulamayı başlat
CMD ["node", "src/app.js"]
