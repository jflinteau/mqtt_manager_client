
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/weather_ai');
mongoose.connection.on("connected", () => {
    console.log("I am connected");
});

mongoose.connection.on('error', (err) => {
   console.error(err);
});

mongoose.connection.on('disconnect', () => {
    console.log("Mongoose has disconnected from the database");
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


export { mongoose };