# services/client/Dockerfile
FROM node:14

# Database
ENV DB=''

# Service port
ENV PORT=8003

# Other services
ENV CLIENT_SERVICE_URL='http://localhost:8002'
ENV USER_SERVICE_URL='http://localhost:8001'

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8002

CMD [ "npm", "run", "start" ]