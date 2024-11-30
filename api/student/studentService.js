const Student = require('./student');

Student.methods([ 'get', 'post', 'put', 'delete' ]);

module.exports = Student;