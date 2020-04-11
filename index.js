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

server.get('/users', (req, res) => {
    const users = db.getUsers();
    res.json(users);
})

server.post('/users', (req, res) => {
    if(!req.body.name || req.body.bio) {
        res.status(400).json({Error:"Enter name and bio"})
    }
    const newUser = db.createUser({
        name: req. body.name,
        bio: req.body.bio
    })
    res.status(201).json(newUser)
})

server.delete('/users/:id', (req, res) => {
    const deletedUser = db.getUserById(req.params.id)
    if(!deletedUser) {
        db.deleteUser(user.id)
        res.status(204).end()
    } else {
        res.status(404).json({message:"That userID does not exsit".})
    }
})