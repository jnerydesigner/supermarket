FROM node:16.14.2-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install