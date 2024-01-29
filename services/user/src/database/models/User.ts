import { PrismaClient } from '.prisma/client'
import config from '../../config';
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `postgresql://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@postgresql:5432/${config.DATABASE_NAME}?schema=public`,
    },
  },
})

export default prisma; //Change this to the model instead of interface after it is created