const MONGOOSE = require('mongoose');

class MongooseUtils{
    constructor(){
        MONGOOSE.connect('mongodb://localhost:27017/weather_ai');
        MONGOOSE.connection.on('connected', this.onConnection);
        MONGOOSE.connection.on('disconnect', this.onDisconnect);
        MONGOOSE.connection.on('error', this.onError)
    }

    onConnection() {
        this.isConnected = true;
        this.__closeConnectionOnProcessStop();
    }

    onDisconnect() {
        this.isConnected = false;
    }

    onError(err) {
        console.error(err);
    }

    __closeConnectionOnProcessStop(){
        process.on('SIGINT', function() {
            MONGOOSE.connection.close(function () {
                console.log('Mongoose default connection disconnected through app termination');
                process.exit(0);
            });
        });
    }

    get isConnected() {
        return this.isConnected;
    }

    get mongoose() {
        return MONGOOSE;
    }
}

var instance = new MongooseUtils();

export default instance;