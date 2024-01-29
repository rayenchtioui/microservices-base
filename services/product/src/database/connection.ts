import config from '../config';

const connect = async () => {
    console.log('Connecting to DB');
    const dbUser = config.DATABASE_USER;
    const dbPass = config.DATABASE_PASSWORD;
    const dbName = config.DATABASE_NAME;
    if(!dbUser || dbUser.length < 1) {
        console.log('No database Username found');
        return;
    }
    if(!dbPass || dbPass.length < 1) {
        console.log('No database Password found');
        return;
    }
    if(!dbName || dbName.length < 1) {
        console.log('No database Host found');
        return;
    }
    // Handle database connection here
}

export default connect;