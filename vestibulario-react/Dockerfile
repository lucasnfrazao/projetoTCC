FROM node:18

WORKDIR /vestibulario-react

COPY package*.json ./
RUN npm install 

COPY . .

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true