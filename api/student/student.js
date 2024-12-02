const auditSchema = require('../audit/audit');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    currentRole: { type: String, required: true },
    companyName: { type: String, required: false },
    reasonYouWantToParticipate: { type: String, required: false },
    howDidYouGetTheProject: { type: String, required: false },
    audit: [auditSchema]
});

studentSchema.pre('save', async function(next) {
    const existingStudent = await mongoose.model('Student').findOne({ email: this.email });
    if (existingStudent) {
        return next(new Error('Email already exists.'));
    }
    next();
});

module.exports = mongoose.model('Student', studentSchema);