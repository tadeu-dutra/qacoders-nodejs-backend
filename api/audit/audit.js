const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
    registrationDate: { type: Date, required: false },
    login: { type: String, required: false },
    dateChangeRegister: { type: Date, required: false },
    loginChangeRegister: { type: String, required: false }
});

module.exports = auditSchema;