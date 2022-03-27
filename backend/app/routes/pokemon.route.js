module.exports = (app) => {
    const users = require('../controllers/pokemon.controller.js');

    // Retrieve all pokemon
    app.get('/pokemon', pokemon.findAll);

    // Retrieve a single pokemon based on id
    app.get('/pokemon/:id', pokemon.findOne);
}