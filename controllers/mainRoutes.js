// this is our express router
const router = require('express').Router();

const { Players } = require('../models');

// render our home page and populate our players
router.get('/', async (req, res) => {
    try {
        const playerData = await Players.findAll();
        // console.log(playerData, "player data")
        const player = playerData.map(players => players.get({ plain: true }));
        res.render('landingpage', { player })
    } catch (error) {
        // console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;