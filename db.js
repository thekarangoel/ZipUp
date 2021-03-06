// Established database connection

var mongoose = require('mongoose');

var dbURI = 'mongodb://heroku_app23454617:c6igkhqe6ojpv02um4v0v812ut@ds035617.mongolab.com:35617/heroku_app23454617';
mongoose.connect(dbURI);

// when connected with db
mongoose.connection.on('connected', function() {
    console.log('Connected to db ' + dbURI);
});

// some error when connecting
mongoose.connection.on('error', function(err) {
    console.log('Connection error: ' + err);
});

// disconnected from db
mongoose.connection.on('disconnected', function() {
    console.log('Disconnected from DB.');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Disconnected from DB by app.');
        process.exit(0);
    });
});

// bring in all models
require('./models/bathroom');
require('./models/review');
