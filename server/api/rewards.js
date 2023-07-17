const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database/database.sqlite');

const rewardsRouter = express.Router();
module.exports = rewardsRouter;


rewardsRouter.param('rewardId', (req, res, next, id) => {
    db.get('SELECT * FROM Reward WHERE id = $id', {
        $id: id
    }, (err, reward) => {
        if (err) {
            next(err);
        } else if (reward) {
            req.reward = reward;
            next();
        } else {
            res.status(404).send("Reward not found");
        }
    });
});

const validateReward = (req, res, next) => {
    const toCreateReward = req.body.reward;
    if (!toCreateReward.name || !toCreateReward.company || !toCreateReward.cost_in_points) {
        return res.status(400).send();
    }
    next();
};

/*
Get -> Read operations:
*/

rewardsRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Reward', (err, rewards) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json(rewards);
        }
    });
});

rewardsRouter.get('/:rewardId', (req, res, next) => {
    res.status(200).send(req.reward);
});

/*
Post -> Create operations:
*/

rewardsRouter.post('/', validateReward, (req, res, next) => {
    const toCreateReward = req.body.reward;    
    db.run('INSERT INTO Reward (name, company, cost_in_points) VALUES ($name, $company, $costInPoints)', {
        $name: toCreateReward.name,
        $company: toCreateReward.company,
        $costInPoints: toCreateReward.cost_in_points
    }, function(err) {
        if (err) {
            next(err);
        }
        db.get('SELECT * FROM Reward WHERE id = $id', {
            $id: this.lastID
        }, (err, reward) => {
            if (!reward) {
                return res.status(500).send();
            }
            res.status(201).send(reward);
        });
    });
});

/*
Put -> Update operations:
*/

rewardsRouter.put('/:rewardId', (req, res, next) => {
    const newReward = req.body.reward;    
    db.run('UPDATE Reward SET name = $name, company = $company, cost_in_points = $costInPoints WHERE id = $id', {
        $id: req.reward.id,
        $name: newReward.name || req.reward.name,
        $company: newReward.company || req.reward.company,
        $costInPoints: newReward.cost_in_points || req.reward.cost_in_points
    }, (err) => {
        if (err) {
            next(err);
        }
        db.get('SELECT * FROM Reward WHERE id = $id', {
            $id: req.reward.id
        }, (err, reward) => {
            if (err) {
                next(err);
            } else if (!reward) {
                return res.status(500).send();
            }
            res.status(200).send(reward);
        });
    });
});

/*
Delete -> Delete operations:
*/

rewardsRouter.delete('/:rewardId', (req, res, next) => {
    db.run('DELETE FROM Reward WHERE id = $id', {
        $id: req.reward.id,
    }, (err) => {
        if (err) {
            next(err);
        }
        return res.status(202).send();
    });
});
