const express = require('express');
// const auth = require('./auth.js');

module.exports = function(server) {
    
    const protectedApi = express.Router();
    server.use('/api', protectedApi);
    // server.use('/status', (req, res) => res.send('OK'));
    // const authService = require('../api/auth/authService.js');
    // protectedApi.post('/login', authService.login);
    // protectedApi.post('/signup', authService.signup);
    // protectedApi.post('/validateToken', authService.validateToken);

    // const router = express.Router();
    // server.use('/api', router);

    protectedApi.get('/test', (req, res) => {
        res.send('Server is running!');
    });

    const studentService = require('../api/student/studentService.js');
    studentService.register(protectedApi, '/students');

    // const loginService = require('../api/login/loginService.js');
    // loginService.register(protectedApi, '/logins');
};