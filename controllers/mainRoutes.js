// this is our express router
const router = require('express').Router();

const { Players } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('landingpage')
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;