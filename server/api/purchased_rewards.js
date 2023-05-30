const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database/database.sqlite');

const purchasedRewardsRouter = express.Router({mergeParams: true});
module.exports = purchasedRewardsRouter;

/*
Get -> Read operations:
*/

purchasedRewardsRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM User_Reward WHERE user_id = $userId', {
        $userId: req.user.id
    }, (err, rewards) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({rewards: rewards});
        }
    });
});
