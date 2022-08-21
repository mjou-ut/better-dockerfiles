FROM node:16-bullseye-slim

WORKDIR /app

COPY . .

CMD ["node", "main.js" ]
