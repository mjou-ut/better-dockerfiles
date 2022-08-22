FROM jarredsumner/bun:edge

WORKDIR /app

COPY . .

CMD ["bun", "run", "lists.js" ]
