const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const port = normalizePort(process.env.PORT || '10000');

const database_uri = "mongodb+srv://ariel:pokemon@seprojectcluster.ea5vl.mongodb.net/retro_pokemon_game?retryWrites=true&w=majority";

mongoose.set('useFindAndModify', false);

// create express app
const app = express();
//app.use(cors());

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json()) // To parse the incoming requests with JSON payloads

// Require hotel routes
require('./app/routes/user.routes.js')(app);
// Configuring the database
// const dbConfig = require('./config/database.config.js');


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(database_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...\n', err);
    process.exit();
});

// simple route
app.get('/', (req, res) => {
    res.json({
        "message": "Software Engineering Project"
    });
});

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});