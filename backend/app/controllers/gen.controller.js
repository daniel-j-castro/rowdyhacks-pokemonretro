const Gen = require('../models/gen.model.js');

// Retrieve and return all gens from the database.
exports.findAll = (req, res) => {
    Gen.find()
        .then(gens => {
            res.send(gens);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving gens."
            });
        });
};

// Find a single gen with a gen id
exports.findOne = (req, res) => {
    Gen.findById(req.params.id)
        .then(gen => {
            if (!gen) {
                return res.status(404).send({
                    message: "Gen not found with id " + req.params.id
                });
            }
            res.send(gen);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Gen not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving hotel with id " + req.params.id
            });
        });

};