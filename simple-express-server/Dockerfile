FROM node:14

WORKDIR /app

COPY package*.json /app
RUN npm install
EXPOSE 8001

CMD [ "npm", "start" ]
