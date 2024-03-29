FROM node:20.10.0 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "start:dev"]


FROM node:20.10.0 AS production
WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=build /usr/src/app/dist /dist
COPY package*.json ./

RUN npm install --only=production
EXPOSE 5000
CMD ["node", "dist/main.js"]