const express = require('express');

const db = require('./database.js');

const server = express();

server.listen(3030, () => {
    console.log('server listening on port 3030');
});

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello You!')
});