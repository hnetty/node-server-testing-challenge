const express = require('express');

const Jedi = require('../jedi/jedi-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Strong...'})
});

server.get('/jedi', (req, res) => {
    Jedi.getAll()
        .then(jedi => {
            res.status(200).json(jedi);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.post('/jedi', (req, res) => {
    Jedi.insert(req.body)
        .then(ids => {
            res.status(200).json({ data: ids});
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        });
});

module.exports = server;