const Pokemon = require('../models/pokemon.model.js');

exports.findAll = (req, res) => {
    Pokemon.find()
        .then(pokemons => {
            res.send(pokemons);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving pokemons."
            });
        });
};
