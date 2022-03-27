const User = require('../models/user.model.js');

// Create and Save a new reservation
exports.create = (req, res) => {
    //Check for pre-existing emails
    console.log("tests")
    if (!req.body.email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }

    if (!req.body.password) {
        return res.status(400).send({
            message: "Password can not be empty"
        });
    }

    if (!req.body.username) {
        return res.status(400).send({
            message: "Username can not be empty"
        });
    }

    if(!req.body.favorite_generation){
        return res.status(400).send({
            message: "Favorite generation cannot be empty"
        });
    }

    if(!req.body.favorite_pokemon){
        return res.status(400).send({
            message: "Favorite pokemon cannot be empty"
        });
    }

    // Create a User.
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        favorite_generation: req.body.favorite_generation,
        favorite_pokemon: req.body.favorite_pokemon
    });

    // Save user in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });

};

// Retrieve and return all reservations from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });

};

// Find a single user with a user id
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.userId
            });
        });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate request

    if (!req.body.email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }

    if (!req.body.password) {
        return res.status(400).send({
            message: "Password can not be empty"
        });
    }

    if (!req.body.username) {
        return res.status(400).send({
            message: "Username can not be empty"
        });
    }

    if(!req.body.favorite_generation){
        return res.status(400).send({
            message: "Favorite generation cannot be empty"
        });
    }

    if(!req.body.favorite_pokemon){
        return res.status(400).send({
            message: "Favorite pokemon cannot be empty"
        });
    }

    // Find hotel and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            favorite_generation: req.body.favorite_generation,
            favorite_pokemon: req.body.favorite_pokemon
        }, {
            new: true
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.userId
            });
        });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    console.log("test")
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({
                message: "User deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.userId
            });
        });
};