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

server.get('/api/users', (req, res) => {
    db.find()
    .then(user => {
        res.status(200).json({user})
    })
    .catch(err => {
        res.status(500).json({success:false, err});
    });
})