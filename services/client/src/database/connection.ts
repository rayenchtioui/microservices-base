import config from '../config';

const connect = async () => {
    console.log('Connecting to DB');
    const dbUser = config.DATABASE_USERNAME;
    const dbPass = config.DATABASE_PASSWORD;
    if(!dbUser || dbUser.length < 1) {
        console.log('No database Username found');
        return;
    }
    if(!dbPass || dbPass.length < 1) {
        console.log('No database Password found');
        return;
    }
    // Handle database connection here
}

export default connect;