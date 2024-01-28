# services/client/Dockerfile
FROM node:16

WORKDIR /usr/src/app

# Service port
ENV PORT=8003

# Other services
ENV CLIENT_SERVICE_URL='http://client:8001'
ENV PRODUCT_SERVICE_URL='http://product:8002'

COPY . .

RUN npm install

RUN npx prisma db push

EXPOSE 8003

CMD [ "npm", "run", "start" ]
