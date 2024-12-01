const express = require('express');

module.exports = function(server) {
    
    const api = express.Router();
    server.use('/api', api);

    api.use('/status', (req, res) =>
        res.send(`BACKEND is runner.`)
    );

    // server.use('/api', router);
    const studentService = require('../api/student/studentService.js');
    studentService.register(api, '/students');

    const userService = require('../api/user/userService.js');
    userService.register(api, '/users');

    // server.use(express.static(require('path').join(__dirname, '../public')));
    api.use(express.static(require('path').join(__dirname, '../public')));
};