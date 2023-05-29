const express = require('express');
const app = require('../server');

const apiRouter = express.Router();
module.exports = apiRouter;

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);