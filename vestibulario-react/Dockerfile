FROM node:18

WORKDIR /vestibulario-react

COPY package*.json ./
RUN npm install 

COPY . .

CMD ["npm", "start"]