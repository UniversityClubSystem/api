FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install --silent

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]