const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    favorite_pokemon: String,
    username: String,
    email: String,
    favorite_generation: String,
    stt_hs: Number,
    tr_hs: Number,
    password: String
});

module.exports = mongoose.model('User', UserSchema);