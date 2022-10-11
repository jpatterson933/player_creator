
// this is our express router
const router = require('express').Router();

const apiRoutes = require('./api');
const mainRoutes = require('./mainRoutes');

// grab main routes
router.use('/', mainRoutes);
// grab api routes
router.use('/api', apiRoutes);

module.exports = router;