const mongoose = require('mongoose');

const GenSchema = mongoose.Schema({
    id: Number,
    name: String
});

module.exports = mongoose.model('Gen', GenSchema);