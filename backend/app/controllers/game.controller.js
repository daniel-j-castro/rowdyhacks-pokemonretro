const Game = require('../models/game.model.js');

exports.findAll = (req, res) => {
    Game.find()
        .then(games => {
            res.send(games);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving games."
            });
        });
};
