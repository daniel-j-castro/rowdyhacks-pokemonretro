const express = require('express');
const request = require('request');

const app = express()
const port = 5000

function firstGen() {
    return (Math.floor(Math.random()*152))
}

app.get('/', (req, res) => {
    res.json({
        "message":"test"
    });
});

app.get('/getRandomPokemon', (req, res) =>{
  request.get('https://pokeapi.co/api/v2/pokemon/' + firstGen(), function(error, response, body) {
    if(!error && response.statusCode === 200) {
        res.send(body);
    }
  })  
})

app.get('/getRandomPDEntry', (req, res) =>{
    console.log('https://pokeapi.co/api/v2/pokemon-species/' + 1)
    request.get('https://pokeapi.co/api/v2/pokemon-species/' + 1, function(error, response, body) {
        if(!error && response.statusCode === 200) {
            var parsedFlavorText = JSON.parse(body)['flavor_text_entries']
            var validEntries = []
            for(text in parsedFlavorText){
                if(parsedFlavorText[text]['language']['name'] == 'en') {
                    validEntries.push(parsedFlavorText[text]['flavor_text'].replace(/(\r\n|\n|\r|\f)/gm, " "))
                }
            }
            res.send(validEntries[Math.floor(Math.random() * validEntries.length)]);
        }
    })
})

app.listen(port, () => console.log(`listening on port ${port}`));