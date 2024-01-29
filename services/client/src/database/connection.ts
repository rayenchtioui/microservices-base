import config from '../config';

const connect = async () => {
    console.log('Connecting to DB');
    const dbUrl = config.DATABASE_URL;
    if(!dbUrl || dbUrl.length < 1) {
        console.log('No database Username found');
        return;
    }
    // Handle database connection here
}

export default connect;