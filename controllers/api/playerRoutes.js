// our express router
const router = require('express').Router();

// import our Players model 
const { Players } = require('../../models');

router.get('/', async (req, res) => {
    const playerData = await Players.findAll();
    res.json(playerData);
});

module.exports = router;