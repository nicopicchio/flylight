const express = require('express');
const app = require('../server');

const apiRouter = express.Router();
module.exports = apiRouter;

const usersRouter = require('./users');
const tripsRouter = require('./trips');
const purchasedRewardsRouter = require('./purchased_rewards');
const rewardsRouter = require('./rewards');

apiRouter.use('/users', usersRouter);
usersRouter.use('/:userId/trips', tripsRouter);
usersRouter.use('/:userId/rewards', purchasedRewardsRouter); // rewards a user has purchased
apiRouter.use('/rewards', rewardsRouter); // all available rewards

