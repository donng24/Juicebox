const express = require('express');
const apiRouter = express.Router();

// const morgan = require('morgan');
// server.use(morgan('dev'));

// server.use(express.json())

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;