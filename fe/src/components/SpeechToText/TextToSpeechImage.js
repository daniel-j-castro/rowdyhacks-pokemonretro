import React, { useState, useEffect }from 'react';
import './TextToSpeechImage.css';
import ReactAudioPlayer from 'react-audio-player';

export default function TextToSpeechImage() {

    let [pokeAudio, setPokeAudio] = useState("");
    let [pokeSprite, setPokeSprite] = useState("");
    let [pokeName, setPokeName] = useState("");
    
    function setGameStates(){
        const pokeID = Math.floor(Math.random() * 890) + 1;


        ///api stuff

        const name = "bidoof";
        const imageName = "bidoof";
        const soundName = "bidoof";

        const spriteURL = "https://projectpokemon.org/images/normal-sprite/" + imageName + ".gif";
        const audioURL = "https://play.pokemonshowdown.com/audio/cries/" + soundName + ".mp3";
        

        setPokeSprite(spriteURL);
        setPokeAudio(audioURL);
        setPokeName(name);

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
        setTimeout(gameplay, 3000);
        
    }

    function checkInput() {
        console.log(pokeName);
        const val = document.querySelector('input').value;
        console.log(val);
    }

    function gameplay(){
        console.log("end");

        var spiteBlack = document.getElementById("sprite-black");
        spiteBlack.style.display = "none";

        var spriteRevealed = document.getElementById("sprite-revealed");
        spriteRevealed.style.display = "block";
        document.getElementById('audio').play();

        const correct = checkInput();
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

        <div id="poke-input" className='poke-inputt'>
            <label>
            Name:
            <input type="text" name="name" value="stuff" />
            </label>
        </div> 
        
        <audio src={pokeAudio} id="audio" controls hidden>
        <source type="audio/mp3"></source>
        </audio>

        
        </>
    );
}