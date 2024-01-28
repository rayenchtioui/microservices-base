import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || '',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
    CLIENT_SERVICE_URL: process.env.CLIENT_SERVICE_URL || '',
    USER_SERVICE_URL: process.env.USER_SERVICE_URL || ''
}