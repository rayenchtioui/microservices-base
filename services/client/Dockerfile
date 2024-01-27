# services/client/Dockerfile
FROM node:14

WORKDIR /usr/src/app


# Service port
ENV PORT=8001

# Other services
ENV PRODUCT_SERVICE_URL='http://localhost:8002'
ENV USER_SERVICE_URL='http://localhost:8003'


ENV DB='postgresql://user:p@postgres:5432/postgres'

COPY . .

RUN npm install

EXPOSE 8001

CMD [ "npm", "run", "start" ]
