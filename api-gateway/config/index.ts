import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    CLIENT_SERVICE_URL: process.env.CLIENT_SERVICE_URL || '',
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || '',
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL || ''
}