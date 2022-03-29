FROM node:10.24-alpine

WORKDIR /usr/src/app/
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 8081
ENTRYPOINT [ "npm", "run", "development" ]
