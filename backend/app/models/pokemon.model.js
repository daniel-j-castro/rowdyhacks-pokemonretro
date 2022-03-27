const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
    id: Number,
    name: String,
    gen: Number,
    entry: String,
})

module.exports = mongoose.model('Pokemon', PokemonSchema);