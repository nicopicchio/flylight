const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database/database.sqlite');

const usersRouter = express.Router();
module.exports = usersRouter;

usersRouter.param('userId', (req, res, next, id) => {
    db.get('SELECT * FROM User WHERE id = $id', {
        $id: id
    }, (err, user) => {
        if (err) {
            next(err);
        } else if (user) {
            req.user = user;
            next();
        } else {
            res.status(404).send("User not found");
        }
    });
});

const validateUser = (req, res, next) => {
    const toCreateUser = req.body.user;
    if (!toCreateUser.name) {
        return res.status(400).send();
    }
    if (!toCreateUser.points) {
        req.body.user.points = 0;
    }
    next();
};

/*
Get -> Read operations:
*/

usersRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM User', (err, users) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json(users);
        }
    });
});

usersRouter.get('/:userId', (req, res, next) => {
    res.status(200).send(req.user);
});

/*
Post -> Create operations:
*/

usersRouter.post('/', validateUser, (req, res, next) => {
    const toCreateUser = req.body.user;    
    db.run('INSERT INTO User (name, points) VALUES ($name, $points)', {
        $name: toCreateUser.name,
        $points: toCreateUser.points || 0
    }, function(err) {
        if (err) {
            next(err);
        }
        db.get('SELECT * FROM User WHERE id = $id', {
            $id: this.lastID
        }, (err, user) => {
            if (!user) {
                return res.status(500).send();
            }
            res.status(201).send(user);
        });
    });
});

/*
Put -> Update operations:
*/

usersRouter.put('/:userId', (req, res, next) => {
    const newUser = req.body.user;    
    db.run('UPDATE User SET name = $name, points = $points WHERE id = $id', {
        $id: req.user.id,
        $name: newUser.name || req.user.name,
        $points: newUser.points || req.user.points
    }, (err) => {
        if (err) {
            next(err);
        }
        db.get('SELECT * FROM User WHERE id = $id', {
            $id: req.user.id
        }, (err, user) => {
            if (err) {
                next(err);
            } else if (!user) {
                return res.status(500).send();
            }
            res.status(200).send(user);
        });
    });
});

/*
Delete -> Delete operations:
*/

usersRouter.delete('/:userId', (req, res, next) => {
    db.run('DELETE FROM User WHERE id = $id', {
        $id: req.user.id,
    }, (err) => {
        if (err) {
            next(err);
        }
        return res.status(202).send();
    });
});
