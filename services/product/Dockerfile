# services/client/Dockerfile
FROM node:14

# Database
ENV DB=''

# Service port
ENV PORT=8002

# Other services
ENV CLIENT_SERVICE_URL='http://client:8001'
ENV USER_SERVICE_URL='http://user:8003'

WORKDIR /usr/src/app

COPY . .


RUN npm install

RUN npx prisma migrate deploy

RUN npx prisma db push

EXPOSE 8002

CMD [ "npm", "run", "start" ]
