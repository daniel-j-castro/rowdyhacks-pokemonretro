import React, { useState, useEffect }from 'react';
import './TextToSpeechImage.css';
import ReactAudioPlayer from 'react-audio-player';

export default function TextToSpeechImage() {

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

var phrases = [
  'armaldo',
  'where are you going',
  'can I call you tomorrow',
  'why did you talk while I was talking',
  'she enjoys reading books and playing games',
  'where are you going',
  'have a great day',
  'she sells seashells on the seashore'
];

    function testSpeech() {
        
        var phrase = phrases[0];
        // To ensure case consistency while checking with the returned output text
        phrase = phrase.toLowerCase();
        
      
        var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
      
        recognition.start();
      
        recognition.onresult = function(event) {
          // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
          // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
          // It has a getter so it can be accessed like an array
          // The first [0] returns the SpeechRecognitionResult at position 0.
          // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
          // These also have getters so they can be accessed like arrays.
          // The second [0] returns the SpeechRecognitionAlternative at position 0.
          // We then return the transcript property of the SpeechRecognitionAlternative object 
          var speechResult = event.results[0][0].transcript.toLowerCase();
        
          console.log(phrase + " = " + speechResult)
          console.log(speechResult == phrase)
      
          console.log('Confidence: ' + event.results[0][0].confidence);
        }
      
        recognition.onspeechend = function() {
          recognition.stop();
        }
      
        recognition.onerror = function(event) {
          
        }
        
        recognition.onaudiostart = function(event) {
            //Fired when the user agent has started to capture audio.
            console.log('SpeechRecognition.onaudiostart');
        }
        
        recognition.onaudioend = function(event) {
            //Fired when the user agent has finished capturing audio.
            console.log('SpeechRecognition.onaudioend');
        }
        
        recognition.onend = function(event) {
            //Fired when the speech recognition service has disconnected.
            console.log('SpeechRecognition.onend');
        }
        
        recognition.onnomatch = function(event) {
            //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
            console.log('SpeechRecognition.onnomatch');
        }
        
        recognition.onsoundstart = function(event) {
            //Fired when any sound — recognisable speech or not — has been detected.
            console.log('SpeechRecognition.onsoundstart');
        }
        
        recognition.onsoundend = function(event) {
            //Fired when any sound — recognisable speech or not — has stopped being detected.
            console.log('SpeechRecognition.onsoundend');
        }
        
        recognition.onspeechstart = function (event) {
            //Fired when sound that is recognised by the speech recognition service as speech has been detected.
            console.log('SpeechRecognition.onspeechstart');
        }
        recognition.onstart = function(event) {
            //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
            console.log('SpeechRecognition.onstart');
        }
      }




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
        testSpeech();
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

        <button onClick={testSpeech}>Voice</button>
        
        </>
    );
}