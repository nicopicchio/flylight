const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

/*
DELETE User, Trip, Reward, and User_Reward tables
*/
db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS User`, (err) => {
        if (err) console.log(err);
    });
    db.run(`DROP TABLE IF EXISTS Trip`, (err) => {
        if (err) console.log(err);
    });
    db.run(`DROP TABLE IF EXISTS Reward`, (err) => {
        if (err) console.log(err);
    });
    db.run(`DROP TABLE IF EXISTS User_Reward`, (err) => {
        if (err) console.log(err);
    });
});
