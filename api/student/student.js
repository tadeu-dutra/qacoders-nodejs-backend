const auditSchema = require('../audit/audit');
const restful = require('node-restful');
const mongoose = restful.mongoose;
const beautifulUnique = require('mongoose-beautiful-unique-validation');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    mail: { type: String, required: true },
    currentRole: { type: String, required: true },
    reasonYouWantToParticipate: { type: String, required: false },
    companyName: { type: String, required: false },
    howDidYouGetTheProject: { type: String, required: false },
    audit: [auditSchema]
});

studentSchema.plugin(beautifulUnique);

module.exports = restful.model('Student', studentSchema);
