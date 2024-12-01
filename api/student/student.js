const beautifulUnique = require('mongoose-beautiful-unique-validation');
// const restful = require('node-restful');
const auditSchema = require('../audit/audit');
// const mongoose = restful.mongoose;
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: [ true, 'Field NAME is required' ]},
    city: { type: String, required: [ true, 'Field CITY is required' ]},
    mail: { type: String, required: [ true, 'Field E-MAIL is required' ]},
    currentRole: { type: String, required: [ true, 'Field CURRENT ROLE is required' ]},
    companyName: { type: String, required: false },
    reasonYouWantToParticipate: { type: String, required: false },
    howDidYouGetTheProject: { type: String, required: false },
    audit: [auditSchema]
});

studentSchema.plugin(beautifulUnique);

module.exports = mongoose.model('Student', studentSchema);
