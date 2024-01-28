import { PrismaClient } from '.prisma/client'
import config from '../../config';
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `postgresql://${config.DATABASE_USERNAME}:${config.DATABASE_PASSWORD}@${config.DATABASE_HOST}:5432/product?schema=public`,
    },
  },
})

export default prisma; //Change this to the model instead of interface after it is created