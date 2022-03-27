const mongoose = require('mongoose');


const GameSchema = mongoose.Schema({
    stt_hs: [{
        userId: Number
    }],
    tr_hs: [{
        userId: Number
    }]
})

module.exports = mongoose.model('Game', PokemonSchema);