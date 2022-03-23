FROM node:17.7.2-alpine3.14
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]