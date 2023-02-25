FROM node:16.13.0
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci
COPY . .
RUN npm install -g nodemon
