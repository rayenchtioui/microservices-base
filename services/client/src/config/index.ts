import dotenv, { config } from 'dotenv';


dotenv.config();

export default {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL || '',
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || '',
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || ''
}