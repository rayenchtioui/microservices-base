# services/client/Dockerfile
FROM node:14

WORKDIR /usr/src/app

#Secret
ENV SECRET='ms-secret'

# Database
ENV DB=''

# Service port
ENV PORT=8001

# Other services
ENV CLIENT_SERVICE_URL='http://localhost:8002'
ENV PRODUCT_SERVICE_URL='http://localhost:8003'

COPY . .

RUN npm install

EXPOSE 8003

CMD [ "npm", "run", "start" ]