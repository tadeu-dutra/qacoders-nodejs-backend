require('dotenv').config();
const port = process.env.PORT || 3003;
const express = require('express');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.listen(port, function() {
    console.log(`Backend running on port ${port}.`);
});

module.exports = server;
