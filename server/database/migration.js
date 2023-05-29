const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

/*
Create User, Trip, Reward, and User_Reward tables
*/
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS User (
        id INTEGER PRIMARY KEY, 
        name TEXT NOT NULL, 
        points INTEGER NOT NULL
        )`, (err) => {
        if (err) console.log(err);
    });

    db.run(`CREATE TABLE IF NOT EXISTS Trip (
        id INTEGER PRIMARY KEY, 
        departure_airport_code TEXT NOT NULL, 
        destination_airport_code TEXT NOT NULL, 
        date DATE NOT NULL, 
        class TEXT NOT NULL, 
        flight_number TEXT NOT NULL, 
        hold_luggage INTEGER NOT NULL,
        hold_luggage_weight_allowance INTEGER,
        hold_luggage_goal INTEGER,
        carbon_footprint INTEGER,
        verified INTEGER NOT NULL, 
        points_earned INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES User(id)
        )`, (err) => {
        if (err) console.log(err);
    });

    db.run(`CREATE TABLE IF NOT EXISTS Reward (
        id INTEGER  PRIMARY KEY, 
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        cost_in_points INTEGER NOT NULL
        )`, (err) => {
        if (err) console.log(err);
    });

    db.run(`CREATE TABLE IF NOT EXISTS User_Reward (
        user_id INTEGER NOT NULL, 
        reward_id INTEGER NOT NULL,
        purchase_date DATE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES User(id),
        FOREIGN KEY (reward_id) REFERENCES Reward(id)
        )`, (err) => {
        if (err) console.log(err);
    });
});