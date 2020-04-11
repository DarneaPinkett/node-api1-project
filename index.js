const express = require('express');

const db = require('./database.js');

const server = express();

server.listen(3030, () => {
    console.log('server listening on port 3030');
});

server.use(express.json());

server.get('/', (req, res) => {
    res.json({message:'Hello You!'})
});

server.get('/api/users', (req, res) => {
    const users = db.getUsers();
    res.json(users);
})

server.get('/api/users/:id', (req, res) => {
    const user = db.getUserById(req.params.id)
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({message: "Does Not Exsit."})
    }
})

server.post('/api/users', (req, res) => {
    if(!req.body.name || !req.body.bio) {
        res.status(400).json({message:"Where is your name and bio?"})
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
        res.status(404).json({message:"That userID does not exsit."})
    }
})

server.put('/api/users/:id', (req, res) => {
    const user = db.getUserById(req.params.id)
    if(!user) {
        res.status(404).json({message: "That userID does not exsit."})
    } else if (!req.body.name || !req.body.bio) {
        res.status(400).json({ message: "Where is your name and bio?"})
    } else {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name,
            bio: req.body.bio
        })
        res.json(updatedUser)
    }
})
