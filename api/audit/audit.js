const restful = require('node-restful');
const mongoose = restful.mongoose;
const beautifulUnique = require('mongoose-beautiful-unique-validation');

const auditSchema = new mongoose.Schema({
    registrationDate: { type: Date, required: false },
    login: { type: String, required: false },
    dateChangeRegister: { type: Date, required: false },
    loginChangeRegister: { type: Date, required: false }
});

auditSchema.plugin(beautifulUnique);

module.exports = restful.model('Audit', auditSchema);
