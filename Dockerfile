FROM node:18.6-alpine
WORKDIR /code
COPY package.json package.json
RUN npm i 
EXPOSE 3000
COPY . .
CMD [ "npm", "run", "dev" ]