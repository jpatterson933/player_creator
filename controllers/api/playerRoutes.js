// our express router
const router = require('express').Router();

// import our Players model 
const { Players } = require('../../models');

router.get('/', async (req, res) => {
    const playerData = await Players.findAll();
    res.json(playerData);
});

router.post('/', async (req, res) => {

    console.log(req.body, 'req body log')

    Players.create(req.body)

    .then(response => {
        req.session.save(() => {
            // store session data anytime a player is created
            req.session.user_id = response.id;
            req.session.logged_in = true;

            console.log(req.session.logged, req.session.user_id)

            res.status(200).json(response);
        })
    }).catch( err => {
        console.log(err)
        res.status(400).json(err);
    })

});

module.exports = router;