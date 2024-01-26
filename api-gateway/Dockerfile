# services/client/Dockerfile
FROM node:14

# Database
ENV DB=''

# PORT
ENV PORT=8000

ENV USER_SERVICE_URL='http://localhost:8001'
ENV CLIENT_SERVICE_URL='http://localhost:8002'
ENV PRODUCT_SERVICE_URL='http://localhost:8003'

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "start" ]