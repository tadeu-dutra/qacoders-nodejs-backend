// const beautifulUnique = require('mongoose-beautiful-unique-validation');
// const auditSchema = require('../audit/audit');
// const mongoose = require('mongoose');

// const loginSchema = new mongoose.Schema({
//     registration: { type: String, required: true },
//     idCompany: { type: String, required: [ true, 'Field ID COMPANY is required' ] },
//     name: { type: String, required: [ true, 'Field NAME is required' ] },
//     mail: { type: String, required: [ true, 'Field E-MAIL is required' ] },
//     password: { type: String, min: 4, max: 12, required: true },
//     status: { type: Boolean, required: true },
//     audit: [auditSchema]
// });

// loginSchema.plugin(beautifulUnique);

// module.exports = mongoose.model('Login', loginSchema);
