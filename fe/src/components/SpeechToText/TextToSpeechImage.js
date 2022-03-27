import React, { useState, useEffect }from 'react';
import './TextToSpeechImage.css';
import ReactAudioPlayer from 'react-audio-player';

export default function TextToSpeechImage() {

    let [pokeAudio, setPokeAudio] = useState("");
    let [pokeSprite, setPokeSprite] = useState("");
    let [pokeName, setPokeName] = useState("");
    

    var name = "";
    
    function setGameStates(){
        const pokeID = Math.floor(Math.random() * 890) + 1;


        ///api stuff

        name = "pikachu";

        const imageName = "pikachu";
        const soundName = "pikachu";

        const spriteURL = "https://projectpokemon.org/images/normal-sprite/" + imageName + ".gif";
        const audioURL = "https://play.pokemonshowdown.com/audio/cries/" + soundName + ".mp3";
        

        setPokeSprite(spriteURL);
        setPokeAudio(audioURL);
        setPokeName(name);
       
    }
    
    function game (){
        
        console.log("GO!");
    
        setGameStates();

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
        console.log(name);
        const inputVal = document.querySelector('input').value;
        if (inputVal == name){
           return true;
        }

        else{return false}
    }

    function gameplay(){
        console.log("end");

        var spiteBlack = document.getElementById("sprite-black");
        spiteBlack.style.display = "none";

        var spriteRevealed = document.getElementById("sprite-revealed");
        spriteRevealed.style.display = "block";
        document.getElementById('audio').play();

        const correct = checkInput();

        if(correct)
        {
            var correctDiv = document.getElementById("correct");
            correctDiv.style.display = "block";
        }
        else {
            var wrongDiv = document.getElementById("wrong");
            wrongDiv.style.display = "block";
        }

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
            <input type="text" name="name"  />
            </label>
        </div> 
        
        <audio src={pokeAudio} id="audio" controls hidden>
        <source type="audio/mp3"></source>
        </audio>

        <div id="correct" className='correct'>
            <p>{pokeName}</p>
            <p>Correct!</p>
        </div>

        <div id="wrong" className='wrong'>
            <p>{pokeName}</p>
            <p>Wrong!</p>
        </div>

        
        </>
    );
}