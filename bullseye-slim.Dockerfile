FROM node:16-bullseye-slim

ENV NODE_OPTIONS=--max_old_space_size=4096

WORKDIR /app

COPY . .

CMD ["node", "lists.js" ]
