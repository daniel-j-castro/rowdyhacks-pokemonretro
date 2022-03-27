import React, { useState, useEffect }from 'react';
import './TextToSpeechImage.css';
import Sprite from './Sprite';
import ReactAudioPlayer from 'react-audio-player';

export default function TextToSpeechImage() {

    let [pokeAudio, setPokeAudio] = useState("");
    let [pokeSprite, setPokeSprite] = useState("");
    
    function setGameStates(){
        const pokeID = Math.floor(Math.random() * 890) + 1;


        ///api stuff

        const name = "charizard";

        const spriteURL = "https://projectpokemon.org/images/normal-sprite/" + name + ".gif";
        const audioURL = "https://play.pokemonshowdown.com/audio/cries/" + name + ".mp3";
        //https://play.pokemonshowdown.com/audio/cries/squirtle.mp3

        setPokeSprite(spriteURL);
        setPokeAudio(audioURL);
    }
    
    function game (){
        
        console.log("GO!");
    
        setGameStates();

        console.log("xxxx" + pokeAudio)

        document.getElementById('audio').play();

        var getReady = document.getElementById("get-ready");
        if (getReady.style.display === "none") {
            getReady.style.display = "block";
        } else {
            getReady.style.display = "none";
        }

        var spriteBlack = document.getElementById("sprite-black");
        spriteBlack.style.display = "block";

        

        //
        setTimeout(gameplay, 10000);
        
    }

    function gameplay(){
        console.log("end");

        var spiteBlack = document.getElementById("sprite-black");
        spiteBlack.style.display = "none";

        var spriteRevealed = document.getElementById("sprite-revealed");
        spriteRevealed.style.display = "block";
        document.getElementById('audio').play();
    }

    //Calls when window loads, after 3000 ms starts game
    window.onload = function() {
        setTimeout(game, 3000);
      };

    //const spiteBlack =  <img className="blackout" src={`${revealed}`} width="px" height="250px" alt="filter applied" />

    return(
        <>
        <div id="get-ready">
            <ul>
                <li>Instructions</li>
                <li>Instructions</li>
                <li>Instructions</li>
                <li>Instructions</li>
            </ul>
            <img src="https://t3.ftcdn.net/jpg/02/80/19/58/360_F_280195814_oCrOichHnAqlKbdhQwk1R661FTSUj71O.jpg" alt="Get Ready!"></img>
        </div>

        

        <div id="sprite-black" className='sprite-black'>
            <img className="blackout" src={pokeSprite} width="px" height="250px" alt="filter applied" />
        </div>

        <div id="sprite-revealed" className='sprite-revealed'>
            <img className="revealed" src={pokeSprite} width="px" height="250px" alt="filter applied" />
        </div>

        <div id="poke-input" className='poke-input' hidden>
            <label>
            Name:
            <input type="text" name="name" />
            </label>
        </div> 

        <audio src={pokeAudio} id="audio" controls hidden>
        <source type="audio/mp3"></source>
        </audio>

        
        </>
    );
}