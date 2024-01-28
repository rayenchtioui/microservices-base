import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    DATABASE_URL: process.env.DATABASE_URL || '',
    CLIENT_SERVICE_URL: process.env.CLIENT_SERVICE_URL || '',
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || ''
}