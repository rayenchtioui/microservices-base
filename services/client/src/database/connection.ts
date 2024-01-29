import config from '../config';

const connect = async () => {
    console.log('Connecting to DB');
    const dbUrl = config.DATABASE_URL;
    if(!dbUrl || dbUrl.length < 1) {
        console.log('No database Username found');
        return;
    }
    else {
        console.log('Database URL: ', dbUrl);
        // try {
        //     // Connect to the database
        //     await prisma.$connect();
        //     console.log('Database connection established!');
        // }   catch (error) {
        //     console.error('Error connecting to the database:', error);
        // }
        return;
    }
}

export default connect;