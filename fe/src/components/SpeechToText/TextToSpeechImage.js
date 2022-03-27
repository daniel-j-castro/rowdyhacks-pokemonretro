import React, { useState, useEffect }from 'react';
import './TextToSpeechImage.css';
import ReactAudioPlayer from 'react-audio-player';

export default function TextToSpeechImage() {

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;



    function testSpeech() {
        var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
        /*var grammar = '#JSGF V1.0; grammar colors; public <color> = Bulbasaur | Ivysaur | Venusaur | Charmander | Charmeleon | Charizard | Squirtle | Wartortle | Blastoise | Caterpie | Metapod | Butterfree | Weedle | Kakuna | Beedrill | Pidgey | Pidgeotto | Pidgeot | Rattata | Raticate | Spearow | Fearow | Ekans | Arbok | Pikachu | Raichu | Sandshrew | Sandslash | Nidoran♀ | Nidorina | Nidoqueen | Nidoran♂ | Nidorino | Nidoking | Clefairy | Clefable | Vulpix | Ninetales | Jigglypuff | Wigglytuff | Zubat | Golbat | Oddish | Gloom | Vileplume | Paras | Parasect | Venonat | Venomoth | Diglett | Dugtrio | Meowth | Persian | Psyduck | Golduck | Mankey | Primeape | Growlithe | Arcanine | Poliwag | Poliwhirl | Poliwrath | Abra | Kadabra | Alakazam | Machop | Machoke | Machamp | Bellsprout | Weepinbell | Victreebel | Tentacool | Tentacruel | Geodude | Graveler | Golem | Ponyta | Rapidash | Slowpoke | Slowbro | Magnemite | Magneton | Farfetchd | Doduo | Dodrio | Seel | Dewgong | Grimer | Muk | Shellder | Cloyster | Gastly | Haunter | Gengar | Onix | Drowzee | Hypno | Krabby | Kingler | Voltorb | Electrode | Exeggcute | Exeggutor | Cubone | Marowak | Hitmonlee | Hitmonchan | Lickitung | Koffing | Weezing | Rhyhorn | Rhydon | Chansey | Tangela | Kangaskhan | Horsea | Seadra | Goldeen | Seaking | Staryu | Starmie | Mr. Mime | Scyther | Jynx | Electabuzz | Magmar | Pinsir | Tauros | Magikarp | Gyarados | Lapras | Ditto | Eevee | Vaporeon | Jolteon | Flareon | Porygon | Omanyte | Omastar | Kabuto | Kabutops | Aerodactyl | Snorlax | Articuno | Zapdos | Moltres | Dratini | Dragonair | Dragonite | Mewtwo | Mew | Chikorita | Bayleef | Meganium | Cyndaquil | Quilava | Typhlosion | Totodile | Croconaw | Feraligatr | Sentret | Furret | Hoothoot | Noctowl | Ledyba | Ledian | Spinarak | Ariados | Crobat | Chinchou | Lanturn | Pichu | Cleffa | Igglybuff | Togepi | Togetic | Natu | Xatu | Mareep | Flaaffy | Ampharos | Bellossom | Marill | Azumarill | Sudowoodo | Politoed | Hoppip | Skiploom | Jumpluff | Aipom | Sunkern | Sunflora | Yanma | Wooper | Quagsire | Espeon | Umbreon | Murkrow | Slowking | Misdreavus | Unown | Wobbuffet | Girafarig | Pineco | Forretress | Dunsparce | Gligar | Steelix | Snubbull | Granbull | Qwilfish | Scizor | Shuckle | Heracross | Sneasel | Teddiursa | Ursaring | Slugma | Magcargo | Swinub | Piloswine | Corsola | Remoraid | Octillery | Delibird | Mantine | Skarmory | Houndour | Houndoom | Kingdra | Phanpy | Donphan | Porygon2 | Stantler | Smeargle | Tyrogue | Hitmontop | Smoochum | Elekid | Magby | Miltank | Blissey | Raikou | Entei | Suicune | Larvitar | Pupitar | Tyranitar | Lugia | Ho-oh | Celebi | Treecko | Grovyle | Sceptile | Torchic | Combusken | Blaziken | Mudkip | Marshtomp | Swampert | Poochyena | Mightyena | Zigzagoon | Linoone | Wurmple | Silcoon | Beautifly | Cascoon | Dustox | Lotad | Lombre | Ludicolo | Seedot | Nuzleaf | Shiftry | Taillow | Swellow | Wingull | Pelipper | Ralts | Kirlia | Gardevoir | Surskit | Masquerain | Shroomish | Breloom | Slakoth | Vigoroth | Slaking | Nincada | Ninjask | Shedinja | Whismur | Loudred | Exploud | Makuhita | Hariyama | Azurill | Nosepass | Skitty | Delcatty | Sableye | Mawile | Aron | Lairon | Aggron | Meditite | Medicham | Electrike | Manectric | Plusle | Minun | Volbeat | Illumise | Roselia | Gulpin | Swalot | Carvanha | Sharpedo | Wailmer | Wailord | Numel | Camerupt | Torkoal | Spoink | Grumpig | Spinda | Trapinch | Vibrava | Flygon | Cacnea | Cacturne | Swablu | Altaria | Zangoose | Seviper | Lunatone | Solrock | Barboach | Whiscash | Corphish | Crawdaunt | Baltoy | Claydol | Lileep | Cradily | Anorith | Armaldo | Feebas | Milotic | Castform | Kecleon | Shuppet | Banette | Duskull | Dusclops | Tropius | Chimecho | Absol | Wynaut | Snorunt | Glalie | Spheal | Sealeo | Walrein | Clamperl | Huntail | Gorebyss | Relicanth | Luvdisc | Bagon | Shelgon | Salamence | Beldum | Metang | Metagross | Regirock | Regice | Registeel | Latias | Latios | Kyogre | Groudon | Rayquaza | Jirachi | Deoxys | Turtwig | Grotle | Torterra | Chimchar | Monferno | Infernape | Piplup | Prinplup | Empoleon | Starly | Staravia | Staraptor | Bidoof | Bibarel | Kricketot | Kricketune | Shinx | Luxio | Luxray | Budew | Roserade | Cranidos | Rampardos | Shieldon | Bastiodon | Burmy | Wormadam | Mothim | Combee | Vespiquen | Pachirisu | Buizel | Floatzel | Cherubi | Cherrim | Shellos | Gastrodon | Ambipom | Drifloon | Drifblim | Buneary | Lopunny | Mismagius | Honchkrow | Glameow | Purugly | Chingling | Stunky | Skuntank | Bronzor | Bronzong | Bonsly | Mime Jr | Happiny | Chatot | Spiritomb | Gible | Gabite | Garchomp | Munchlax | Riolu | Lucario | Hippopotas | Hippowdon | Skorupi | Drapion | Croagunk | Toxicroak | Carnivine | Finneon | Lumineon | Mantyke | Snover | Abomasnow | Weavile | Magnezone | Lickilicky | Rhyperior | Tangrowth | Electivire | Magmortar | Togekiss | Yanmega | Leafeon | Glaceon | Gliscor | Mamoswine | Porygon-Z | Gallade | Probopass | Dusknoir | Froslass | Rotom | Uxie | Mesprit | Azelf | Dialga | Palkia | Heatran | Regigigas | Giratina | Cresselia | Phione | Manaphy | Darkrai | Shaymin | Arceus | Victini | Snivy | Servine | Serperior | Tepig | Pignite | Emboar | Oshawott | Dewott | Samurott | Patrat | Watchog | Lillipup | Herdier | Stoutland | Purrloin | Liepard | Pansage | Simisage | Pansear | Simisear | Panpour | Simipour | Munna | Musharna | Pidove | Tranquill | Unfezant | Blitzle | Zebstrika | Roggenrola | Boldore | Gigalith | Woobat | Swoobat | Drilbur | Excadrill | Audino | Timburr | Gurdurr | Conkeldurr | Tympole | Palpitoad | Seismitoad | Throh | Sawk | Sewaddle | Swadloon | Leavanny | Venipede | Whirlipede | Scolipede | Cottonee | Whimsicott | Petilil | Lilligant | Basculin | Sandile | Krokorok | Krookodile | Darumaka | Darmanitan | Maractus | Dwebble | Crustle | Scraggy | Scrafty | Sigilyph | Yamask | Cofagrigus | Tirtouga | Carracosta | Archen | Archeops | Trubbish | Garbodor | Zorua | Zoroark | Minccino | Cinccino | Gothita | Gothorita | Gothitelle | Solosis | Duosion | Reuniclus | Ducklett | Swanna | Vanillite | Vanillish | Vanilluxe | Deerling | Sawsbuck | Emolga | Karrablast | Escavalier | Foongus | Amoonguss | Frillish | Jellicent | Alomomola | Joltik | Galvantula | Ferroseed | Ferrothorn | Klink | Klang | Klinklang | Tynamo | Eelektrik | Eelektross | Elgyem | Beheeyem | Litwick | Lampent | Chandelure | Axew | Fraxure | Haxorus | Cubchoo | Beartic | Cryogonal | Shelmet | Accelgor | Stunfisk | Mienfoo | Mienshao | Druddigon | Golett | Golurk | Pawniard | Bisharp | Bouffalant | Rufflet | Braviary | Vullaby | Mandibuzz | Heatmor | Durant | Deino | Zweilous | Hydreigon | Larvesta | Volcarona | Cobalion | Terrakion | Virizion | Tornadus | Thundurus | Reshiram | Zekrom | Landorus | Kyurem | Keldeo | Meloetta | Genesect | Chespin | Quilladin | Chesnaught | Fennekin | Braixen | Delphox | Froakie | Frogadier | Greninja | Bunnelby | Diggersby | Fletchling | Fletchinder | Talonflame | Scatterbug | Spewpa | Vivillon | Litleo | Pyroar | Flabébé | Floette | Florges | Skiddo | Gogoat | Pancham | Pangoro | Furfrou | Espurr | Meowstic | Honedge | Doublade | Aegislash | Spritzee | Aromatisse | Swirlix | Slurpuff | Inkay | Malamar | Binacle | Barbaracle | Skrelp | Dragalge | Clauncher | Clawitzer | Helioptile | Heliolisk | Tyrunt | Tyrantrum | Amaura | Aurorus | Sylveon | Hawlucha | Dedenne | Carbink | Goomy | Sliggoo | Goodra | Klefki | Phantump | Trevenant | Pumpkaboo | Gourgeist | Bergmite | Avalugg | Noibat | Noivern | Xerneas | Yveltal | Zygarde | Diancie | Hoopa | Volcanion | Rowlet | Dartrix | Decidueye | Litten | Torracat | Incineroar | Popplio | Brionne | Primarina | Pikipek | Trumbeak | Toucannon | Yungoos | Gumshoos | Grubbin | Charjabug | Vikavolt | Crabrawler | Crabominable | Oricorio | Cutiefly | Ribombee | Rockruff | Lycanroc | Wishiwashi | Mareanie | Toxapex | Mudbray | Mudsdale | Dewpider | Araquanid | Fomantis | Lurantis | Morelull | Shiinotic | Salandit | Salazzle | Stufful | Bewear | Bounsweet | Steenee | Tsareena | Comfey | Oranguru | Passimian | Wimpod | Golisopod | Sandygast | Palossand | Pyukumuku | Type Null | Silvally | Minior | Komala | Turtonator | Togedemaru | Mimikyu | Bruxish | Drampa | Dhelmise | Jangmo-o | Hakamo-o | Kommo-o | Tapu Koko | Tapu Lele | Tapu Bulu | Tapu Fini | Cosmog | Cosmoem | Solgaleo | Lunala | Nihilego | Buzzwole | Pheromosa | Xurkitree | Celesteela | Kartana | Guzzlord | Necrozma | Magearna | Marshadow | Poipole | Naganadel | Stakataka | Blacephalon | Zeraora | Meltan | Melmetal | Grookey | Thwackey | Rillaboom | Scorbunny | Raboot | Cinderace | Sobble | Drizzile | Inteleon | Skwovet | Greedent | Rookidee | Corvisquire | Corviknight | Blipbug | Dottler | Orbeetle | Nickit | Thievul | Gossifleur | Eldegoss | Wooloo | Dubwool | Chewtle | Drednaw | Yamper | Boltund | Rolycoly | Carkol | Coalossal | Applin | Flapple | Appletun | Silicobra | Sandaconda | Cramorant | Arrokuda | Barraskewda | Toxel | Toxtricity | Sizzlipede | Centiskorch | Clobbopus | Grapploct | Sinistea | Polteageist | Hatenna | Hattrem | Hatterene | Impidimp | Morgrem | Grimmsnarl | Obstagoon | Perrserker | Cursola | Sirfetchd | Mr. Rime | Runerigus | Milcery | Alcremie | Falinks | Pincurchin | Snom | Frosmoth | Stonjourner | Eiscue | Indeedee | Morpeko | Cufant | Copperajah | Dracozolt | Arctozolt | Dracovish | Arctovish | Duraludon | Dreepy | Drakloak | Dragapult | Zacian | Zamazenta | Eternatus ; '*/
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
        
          //console.log( + " = " + speechResult)
          console.log(speechResult)
          if(speechResult == "Weepinbell")
          {
              console.log("That is correct!!!!")
              var correctDiv = document.getElementById("correct");
              correctDiv.style.display = "block";
          }
          else{
          
            var wrongDiv = document.getElementById("wrong");
            wrongDiv.style.display = "block";
          }
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
        
       /* recognition.onsoundend = function(event) {
            //Fired when any sound — recognisable speech or not — has stopped being detected.
            console.log('SpeechRecognition.onsoundend');
        }*/
        
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

        /*const correct = checkInput();

        if(correct)
        {
            var correctDiv = document.getElementById("correct");
            correctDiv.style.display = "block";
        }
        else {
            var wrongDiv = document.getElementById("wrong");
            wrongDiv.style.display = "block";
        }*/

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
            <p>That is correct!</p>
        </div>

        <div id="wrong" className='wrong'>
           
            <p>Wrong!</p>
        </div>

        <button onClick={testSpeech}>Voice</button>
        
        </>
    );
}