require('dotenv').config();
const port = process.env.PORT || 3003;
const express = require('express');
const server = express();
const allowCors = require('./cors');

server.use(express.urlencoded({ extended: true }));
server.use(allowCors);
server.use(express.json());
server.use(express.static('public'));

server.listen(port, function() {
    console.log(`Backend running on port ${port}.`);
});

module.exports = server;
