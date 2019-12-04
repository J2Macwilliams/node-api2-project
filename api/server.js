const express = require('express');
const cors = require('cors');

const postRoutes = require('../routes/postRoutes')

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send(`<h1>Server is up and running</h1>`)
});

server.use('/api/posts', postRoutes)

module.exports = server;