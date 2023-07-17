const express = require('express')
const app = require('../server')

const apiRouter = express.Router()
module.exports = apiRouter

const onRequestHook = require('./activeUser')
apiRouter.use(onRequestHook) // fake user login before each request

const usersRouter = require('./users')
apiRouter.use('/users', usersRouter)

const tripsRouter = require('./trips')
usersRouter.use('/:userId/trips', tripsRouter)

const purchasedRewardsRouter = require('./purchased_rewards')
usersRouter.use('/:userId/rewards', purchasedRewardsRouter) // rewards a user has purchased

const rewardsRouter = require('./rewards')
apiRouter.use('/rewards', rewardsRouter) // all available rewards

