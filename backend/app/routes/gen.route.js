module.exports = (app) => {
    const users = require('../controllers/gen.controller.js');

    // Retrieve all gens
    app.get('/gen', gen.findAll);

    // Retrieve a single gen
    app.get('/users/:id', gen.findOne);
}