FROM node:14

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8001

CMD ["yarn", "start"]
