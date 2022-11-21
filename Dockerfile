FROM node:17.9.1-alpine3.14
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]
LABEL org.opencontainers.image.source=https://github.com/mw866/mongodb-express
