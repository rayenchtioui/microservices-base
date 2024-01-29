import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    DATABASE_USER: process.env.DATABASE_USER || '',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
    DATABASE_NAME: process.env.DATABASE_NAME || '',
    CLIENT_SERVICE_URL: process.env.CLIENT_SERVICE_URL || '',
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || ''
}