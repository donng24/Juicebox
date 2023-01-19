const express = require('express');
const usersRouter = express.Router();

// const morgan = require('morgan');
// server.use(morgan('dev'));

// server.use(express.json())

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next();
});

const { getAllUsers } = require('../db');

usersRouter.get('/', async (req, res) => {
    const users = await getAllUsers();
    res.send({
      users
    });
  });

module.exports = usersRouter;