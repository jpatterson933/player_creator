// our express router
const router = require('express').Router();

// grab the api for our players
const playerRoutes = require('./playerRoutes');

// set router to url and which routes to use - full route is /api/players
router.use('/players', playerRoutes);

module.exports = router;