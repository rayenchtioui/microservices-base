import dotenv, { config } from 'dotenv';


dotenv.config();

export default {
    PORT: process.env.PORT,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_HOST: process.env.DATABASE_HOST,
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || '',
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || ''
}