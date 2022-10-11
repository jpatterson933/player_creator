const express = require('express');
// express session is an HTTP server-side fraemwork used to create and manage session middleware
const session = require('express-session');
// bring in express handlebars
const exphbs = require('express-handlebars');
// here we are acquiring our npm package path
const path = require('path');
// we will need to bring in our routes
const routes = require('./controllers');
// aquire sequelize from the config directory
const sequelize = require('./config/connection');

// need our models
const models = require('./models');

// acquire our session storage with sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// establish our session
const sess = {
    secret: 'super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};




// set express() to app
const app = express();
const PORT = process.env.PORT || 3001;

// set up handlbars.js engine with custom helpers
const hbs = exphbs.create({ });


// tell our server what session to use
app.use(session(sess));
// tell it what engine to use
app.engine('handlebars', hbs.engine)
// tell express.js which template engine to use - in this case we are using handlebars
app.set('view engine', 'handlebars');
// json() is a built-in middleare function in Express. This method is used to parse the incoming requests with json payloads and is based upon the bodyparser. This method returns the middleware that only parses JSON and only looks at the request where the content-type header matches the type option
// we will do the above with the below command
app.use(express.json());
// The express. urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser. Parameter: The options parameter contains various property like extended, inflate, limit, verify etc.
// we will do the above with the below command - the extended option syntax allows for rich objects and arrays to be encoded into the URL-encoded format allowing for a JSON-like experience with URL-ENCODED
app.use(express.urlencoded({ extended: true }));
// here we are telling express to look up the files relative to the static directory so the name of the static directory is not part of the URL
// Express looks up the files in the order in which you set the static directories with the express.static middleware funciton
// in this case we are setting it to the absolute path of the directory containging the server file and then telling it to add /public on the end with path
app.use(express.static(path.join(__dirname, 'public' )));
// here we are telling express to use our routes
// add routes here 
app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('server now live..'))
})

