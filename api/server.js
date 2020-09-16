const express = require('express');
const accountsRouter = require('./accountsRoutes');
const server = express();
const logger = require('../middleware/logger');

server.use(logger());
server.use(express.json());
server.use('/api/accounts', accountsRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ message: 'Something went wrong, try again...' });
});

module.exports = server;
