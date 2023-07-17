const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database/database.sqlite');

const tripsRouter = express.Router({mergeParams: true});
module.exports = tripsRouter;

tripsRouter.param('tripId', (req, res, next, id) => {
    db.get('SELECT * FROM Trip WHERE id = $tripId AND user_id = $userId', {
        $tripId: id,
        $userId: req.user.id
    }, (err, trip) => {
        if (err) {
            next(err);
        } else if (trip) {
            req.trip = trip;
            next();
        } else {
            res.status(404).send("Trip not found");
        }
    });
});

const validateTrip = (req, res, next) => {
    const toCreateTrip = req.body.trip;
    if (!toCreateTrip.departure_airport_code || !toCreateTrip.destination_airport_code || !toCreateTrip.date || !toCreateTrip.class || !toCreateTrip.flight_number) {
        return res.status(400).send();
    }

    if (toCreateTrip.hold_luggage) {
        if (!toCreateTrip.hold_luggage_weight_allowance || !toCreateTrip.hold_luggage_goal) {
            return res.status(400).send();
        }
    } else {
        toCreateTrip.hold_luggage = 0;
    }

    if (!toCreateTrip.verified) {
        toCreateTrip.verified = 0;
    }

    // TO DO: CALCULATE carbon footprint
    toCreateTrip.carbon_footprint = 0;

    // TO DO: CALCULATE points
    toCreateTrip.points_earned = 0;

    next();
};

/*
Get -> Read operations:
*/

tripsRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Trip WHERE user_id = $userId', {
        $userId: req.user.id
    }, (err, trips) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json(trips);
        }
    });
});

tripsRouter.get('/:tripId', (req, res, next) => {
    res.status(200).send(req.trip);
});


/*
Post -> Create operations:
*/

tripsRouter.post('/', validateTrip, (req, res, next) => {
    const toCreateTrip = req.body.trip;    
    db.run('INSERT INTO Trip (departure_airport_code, destination_airport_code, date, class, flight_number, hold_luggage, hold_luggage_weight_allowance, hold_luggage_goal, carbon_footprint, verified, points_earned, user_id) VALUES ($departureAirportCode, $destinationAirportCode, $date, $class, $flightNumber, $holdLuggage, $holdLuggageWeightAllowance, $holdLuggageGoal, $carbonFootprint, $verified, $pointsEarned, $userId)', {
        $departureAirportCode: toCreateTrip.departure_airport_code,
        $destinationAirportCode: toCreateTrip.destination_airport_code,
        $date: toCreateTrip.date,
        $class: toCreateTrip.class,
        $flightNumber: toCreateTrip.flight_number,
        $holdLuggage: toCreateTrip.hold_luggage,
        $holdLuggageWeightAllowance: toCreateTrip.hold_luggage_weight_allowance,
        $holdLuggageGoal: toCreateTrip.hold_luggage_goal,
        $carbonFootprint: toCreateTrip.carbon_footprint,
        $verified: toCreateTrip.verified,
        $pointsEarned: toCreateTrip.points_earned,
        $userId: req.user.id
    }, function(err) {
        if (err) {
            next(err);
        }
        db.get('SELECT * FROM Trip WHERE id = $id', {
            $id: this.lastID
        }, (err, trip) => {
            if (!trip) {
                return res.status(500).send();
            }
            res.status(201).send(trip);
        });
    });
});

/*
Put -> Update operations:
*/

tripsRouter.put('/:tripId', (req, res, next) => {
    const newTrip = req.body.trip;    
    db.run('UPDATE Trip SET departure_airport_code = $departureAirportCode, destination_airport_code = $destinationAirportCode, date = $date, class = $class, flight_number = $flightNumber, hold_luggage = $holdLuggage, hold_luggage_weight_allowance = $holdLuggageWeightAllowance, hold_luggage_goal = $holdLuggageGoal, carbon_footprint = $carbonFootprint, verified = $verified, points_earned = $pointsEarned WHERE id = $id', {
        $id: req.trip.id,
        $departureAirportCode: newTrip.departure_airport_code || req.trip.departure_airport_code,
        $destinationAirportCode: newTrip.destination_airport_code || req.trip.destination_airport_code,
        $date: newTrip.date || req.trip.date,
        $class: newTrip.class || req.trip.class,
        $flightNumber: newTrip.flight_number || req.trip.flight_number,
        $holdLuggage: newTrip.hold_luggage || req.trip.hold_luggage,
        $holdLuggageWeightAllowance: newTrip.hold_luggage_weight_allowance || req.trip.hold_luggage_weight_allowance,
        $holdLuggageGoal: newTrip.hold_luggage_goal || req.trip.hold_luggage_goal,
        $carbonFootprint: newTrip.carbon_footprint || req.trip.carbon_footprint,
        $verified: newTrip.verified || req.trip.verified,
        $pointsEarned: newTrip.points_earned || req.trip.points_earned
    }, (err) => {
        if (err) {
            next(err);
        }
        db.get('SELECT * FROM Trip WHERE id = $id', {
            $id: req.trip.id
        }, (err, trip) => {
            if (err) {
                next(err);
            } else if (!trip) {
                return res.status(500).send();
            }
            res.status(200).send(trip);
        });
    });
});

/*
Delete -> Delete operations:
*/

tripsRouter.delete('/:tripId', (req, res, next) => {
    db.run('DELETE FROM Trip WHERE id = $id', {
        $id: req.trip.id,
    }, (err) => {
        if (err) {
            next(err);
        }
        return res.status(202).send();
    });
});
