const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

/*
Check if User table exists
*/
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='User'", (error, table) => {
  if (error) {
    throw new Error(error);
  }

  if (table) {
    db.serialize(function() {
    
        /*
        Populate User table
        */
        db.run(`INSERT INTO User (name, points) VALUES
                ('John', 100),
                ('Emily', 80),
                ('Michael', 120),
                ('Sophia', 50),
                ('Daniel', 90);
            `, function(error) {
            if (error) {
            throw new Error(error);
            }
            // userId = this.lastID;
        });

        /*
        Check if Trip table exists
        */
        db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='Trip'", (error, table) => {
            if (error) {
            throw new Error(error);
            }

            if (table) {
                /*
                Populate Trip table
                */
                db.run(`INSERT INTO Trip (departure_airport_code, destination_airport_code, date, class, flight_number, hold_luggage, hold_luggage_weight_allowance, hold_luggage_goal, carbon_footprint, verified, points_earned, user_id) VALUES
                    ('ARN', 'OSL', '2022-03-02', 'Economy', 'DEF433', 1, 30, 20, 300, 1, 17, 1),
                    ('LGW', 'AMS', '2022-08-11', 'Economy', 'GHI128', 1, 24, 15, 280, 1, 63, 1),
                    ('MUC', 'FCO', '2023-05-27', 'Business', 'DWP504', 1, 25, 20, 200, 0, 0, 1),
                    ('ABC', 'XYZ', '2023-06-01', 'Economy', 'ABC123', 1, 20, 15, 200, 0, 0, 1),
                    ('DEF', 'GHI', '2023-06-05', 'Business', 'DEF456', 1, 30, 25, 300, 0, 0, 1),
                    ('LGW', 'NCE', '2023-06-26', 'Economy', 'HIJ542', 1, 22, 18, 110, 0, 0, 1),
                    ('BCN', 'CDG', '2023-08-14', 'Economy', 'DEF222', 1, 30, 20, 130, 0, 0, 1),
                    ('JKL', 'MNO', '2023-06-10', 'Economy', 'JKL789', 1, 15, 10, 150, 0, 0, 2),
                    ('PQR', 'STU', '2023-06-15', 'Economy', 'PQR101', 1, 20, 18, 180, 0, 0, 2),
                    ('VWX', 'YZA', '2023-06-20', 'Economy', 'VWX121', 1, 25, 20, 250, 0, 0, 3),
                    ('BCD', 'EFG', '2023-06-25', 'Business', 'BCD141', 1, 30, 28, 350, 0, 0, 3),
                    ('HIJ', 'KLM', '2023-06-30', 'Economy', 'HIJ161', 1, 20, 18, 200, 0, 0, 4),
                    ('NOP', 'QRS', '2023-07-05', 'Economy', 'NOP181', 1, 15, 12, 150, 0, 0, 4),
                    ('STU', 'VWX', '2023-07-10', 'Economy', 'STU201', 1, 20, 15, 200, 0, 0, 5),
                    ('YZA', 'BCD', '2023-07-15', 'Business', 'YZA221', 1, 30, 25, 300, 0, 0, 5);
                `);
            }
        });

        /*
        Check if Reward table exists
        */
        db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='Reward'", (error, table) => {
            if (error) {
            throw new Error(error);
            }

            if (table) {
                /*
                Populate Reward table
                */
                db.run(`INSERT INTO Reward (name, company, cost_in_points) VALUES
                    ('Plant a tree with Saving the Amazon', 'Saving the Amazon', 30),
                    ('50% off at Tony''s Chocolonely', 'Tony''s Chocolonely', 50),
                    ('€ 10 voucher for Mintie Lunchboxes', 'Mintie Lunchboxes', 80),
                    ('Great Outdoors Experience Box', 'Experience', 120),
                    ('Airport Lounge Access', 'Company C', 100),
                    ('Hotel Voucher', 'Company E', 150),
                    ('Gift Card', 'Company F', 200),
                    ('Travel Backpack', 'Company G', 120),
                    ('Sunglasses', 'Company H', 70);
                `);
            }
        });

        /*
        Check if User_Reward table exists
        */
        db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='User_Reward'", (error, table) => {
            if (error) {
            throw new Error(error);
            }

            if (table) {
                /*
                Populate User_Reward table
                */
                db.run(`INSERT INTO User_Reward (user_id, reward_id, purchase_date) VALUES
                    (1, 1, '2022-11-08');
                `);
            }
        });

    });
  }
});
