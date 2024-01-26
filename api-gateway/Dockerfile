# services/client/Dockerfile
FROM node:14

# Database
ENV DB=''

# PORT
ENV PORT=8000

ENV CLIENT_SERVICE_URL='http://client:8001'
ENV PRODUCT_SERVICE_URL='http://product:8002'
ENV USER_SERVICE_URL='http://user:8003'

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "start" ]
