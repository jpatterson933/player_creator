/*
    This is our file to set up and export sequilize to use at server.js
*/

const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
    //name of the database
    process.env.DB_NAME,
    // name of the user
    process.env.DB_USER,
    // pw
    process.env.DB_PASSWORD,
    {
        // HOST FOR MYSEQUEL
        host: 'localhost',
        // the dialect configuration lets us know which database we are using
        dialect: 'mysql',
        // this is the port we are on in mysql
        port: 3306
    }
);

module.exports = sequelize;