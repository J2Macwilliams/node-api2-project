const express = require('express');

const postRoutes = require('../routes/postRoutes')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1>Server is up and running</h1>`)
});

server.use('/api/posts', postRoutes)

module.exports = server;