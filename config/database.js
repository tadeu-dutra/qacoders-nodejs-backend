const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = global.Promise;
// const Promise = require('bluebird');
// mongoose.Promise = Promise;
// mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/qacoders_database', {
    // useMongoClient: true
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});