import dotenv, { config } from 'dotenv';


dotenv.config();


console.log({
    PORT: process.env.PORT,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || '',
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || ''
});

export default {
    PORT: process.env.PORT,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || '',
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || ''
}