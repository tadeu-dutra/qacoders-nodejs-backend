const beautifulUnique = require('mongoose-beautiful-unique-validation');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    registration: { type: String, required: true },
    idCompany: { type: String, required: [true, 'Field ID COMPANY is required'] },
    name: { type: String, required: [true, 'Field NAME is required'] },
    mail: { type: String, required: [true, 'Field E-MAIL is required'], unique: true },
    password: { type: String, required: true, min: 4, max: 12 },
    status: { type: Boolean, required: true, default: true },
});

userSchema.plugin(beautifulUnique);

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare password
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.plugin(beautifulUnique);

module.exports = mongoose.model('User', userSchema);