# services/client/Dockerfile
FROM node:14

WORKDIR /usr/src/app

ENV DB=''

# Service port
ENV PORT=8002

# Other services
ENV PRODUCT_SERVICE_URL='http://localhost:8003'
ENV USER_SERVICE_URL='http://localhost:8001'

COPY . .

RUN npm install

EXPOSE 8001

CMD [ "npm", "run", "start" ]