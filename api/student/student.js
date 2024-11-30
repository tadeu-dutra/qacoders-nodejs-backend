const { find } = require('lodash'); 
const beautifulUnique = require('mongoose-beautiful-unique-validation');
// const restful = require('node-restful');
const auditSchema = require('../audit/audit');
// const mongoose = restful.mongoose;
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    mail: { type: String, required: true },
    currentRole: { type: String, required: true },
    companyName: { type: String, required: false },
    reasonYouWantToParticipate: { type: String, required: false },
    howDidYouGetTheProject: { type: String, required: false },
    // audit: [auditSchema]
});

studentSchema.plugin(beautifulUnique);

// module.exports = restful.model('Student', studentSchema);
module.exports = mongoose.model('Student', studentSchema);
