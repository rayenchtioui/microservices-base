# services/client/Dockerfile
FROM node:14

WORKDIR /usr/src/app


# Service port
ENV PORT=8001

# Other services
ENV PRODUCT_SERVICE_URL='http://product:8002'
ENV USER_SERVICE_URL='http://user:8003'

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 8001

CMD [ "npm", "run", "start" ]
