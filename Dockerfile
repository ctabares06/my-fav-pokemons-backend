from node:16.13.1-alpine3.14

expose 3001

workdir /app
copy . .

run npm install

cmd ["npm run", "dev"]
