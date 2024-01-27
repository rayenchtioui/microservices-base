import { PrismaClient } from '.prisma/client'
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `postgresql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@localhost:5432/client?schema=public`,
    },
  },
})

export default prisma; //Change this to the model instead of interface after it is created