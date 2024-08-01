FROM node:18-alpine AS build

WORKDIR /jsonplaceholder-api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
