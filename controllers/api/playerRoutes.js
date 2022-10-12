// our express router
const router = require('express').Router();

// import our Players model 
const { Players } = require('../../models');

router.get('/', async (req, res) => {
    const playerData = await Players.findAll();
    res.json(playerData);
});

router.post('/', async (req, res) => {
    try {
        // this will assign the player data to playerData
        const playerData = await Players.create(req.body);
        // when done correctly, it will post a status of 200 and show us the playerData in json format
        res.status(200).json(playerData);
    } catch (err) {
        console.log(err)
        // 400 status code means the server could not understand the request
        res.status(400).json(err);
    }
});



module.exports = router;