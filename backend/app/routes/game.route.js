module.exports = (app) => {
    const users = require('../controllers/game.controller.js');

    // Retrieve all high scores for each game
    app.get('/game', game.findAll);

    // Retrieve a single set of high scores for a game
    app.get('/game/:id', game.findOne);
}