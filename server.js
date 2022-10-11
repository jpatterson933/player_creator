const express = require('express');
// express session is an HTTP server-side fraemwork used to create and manage session middleware
const session = require('express-session');

// aquire sequelize from the config directory
const sequelize = require('./config/connection');

// need our models

// acquire 
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// set express() to app
const app = express();
const PORT = process.env.PORT || 3001;


app.listen(PORT, function () {
    console.log('The server is live!')
})