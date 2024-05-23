FROM node:18

WORKDIR /sprint6.1

COPY . .  

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]