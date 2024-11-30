const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/qacoders_db', {
    useMongoClient: true
});