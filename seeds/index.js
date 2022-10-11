// grab our sequelize connection
const sequelize = require('../config/connection');

// acquire our player models
const Players = require('../models/players');
// acquire our pre built player data
const playerData = require('./players.json');

// to seed our database we are going to use an async await function
const seedDatabase = async () => {
    // force: true adds a DROP TABLE IF EXISTS before trying to create the table in mysql - by forcing it, we are over writing existing tables which we want to do in this case as we first develop the application
    await sequelize.sync({ force: true });

    // the bulkCreate() method allows you to insert multople records to your database table with a single function call
    await Players.bulkCreate(playerData, {
        // i think this allows for there to be individual hooks for something?
        // try and understand the following:
        // run before / after create hooks for each individual instance? set to tru so this will happen.....????
        individualHooks: true,
        // returns all columns or only the specified columns for the afected rows (only for postgres)
        returning: true
    });
    // exits the current pro
    process.exit(0);
};
// call our function to seed database - to run, need to type node seeds in the terminal
seedDatabase();