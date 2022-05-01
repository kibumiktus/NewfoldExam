FROM node:17
WORKDIR /app
COPY . /app

RUN npm install -g npm
RUN npm install

COPY . .
EXPOSE 8080
CMD [ "node", "index.js" ]