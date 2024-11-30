const beautifulUnique = require('mongoose-beautiful-unique-validation');
// const restful = require('node-restful');
    // "node-restful": "^0.2.6",
// const mongoose = restful.mongoose;
const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
    registrationDate: { type: Date, required: false },
    login: { type: String, required: false },
    dateChangeRegister: { type: Date, required: false },
    loginChangeRegister: { type: String, required: false }
});

auditSchema.plugin(beautifulUnique);

module.exports = auditSchema;
