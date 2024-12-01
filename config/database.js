const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/qacoders_database', {
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

mongoose.Error.messages.general.required = "Please be kind. The field {PATH} is required."
mongoose.Error.messages.Number.min = "{PATH} should not be less than '{MIN}'."
mongoose.Error.messages.Number.max = "{PATH} should not be more than '{MAX}'."
mongoose.Error.messages.String.enum = "{VALUE} is not a valid option."