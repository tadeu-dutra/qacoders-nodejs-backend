const express = require('express');

module.exports = function(server) {
    
    const router = express.Router();

    server.get('/test', (req, res) => {
        res.send('Server is running!!!');
    });

    server.use('/api', router);
    const studentService = require('../api/student/studentService.js');
    studentService.register(router, '/students');

    const userService = require('../api/user/userService.js');
    userService.register(router, '/users');
};