FROM node:14

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --global gatsby-cli
RUN npm install --silent

COPY . ./

CMD ["gatsby", "develop", "-H", "0.0.0.0"]