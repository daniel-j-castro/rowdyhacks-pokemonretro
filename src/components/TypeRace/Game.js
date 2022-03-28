import React, { useState, useRef, useContext, createContext } from 'react';
import Sprite from './Sprite.js'
import charmander from './charmander.png';
import CorrectnessField from './CorrectnessField.js';
import Timer from './Timer.js';

export default function Game() {
    // use AJAX/Axios to get random Pokemon names here
    const targetNameArray = ["charmander", "bulbasaur", "totodile"];

    const [userInput, setUserInput] = useState("");
    const [userCount, setUserCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const GameStateContext = createContext();
    const textField = useRef();

    function handleKeystroke(event) {
        setUserInput(event.target.value);
    }
    
    function checkIfComplete(event) {
        if (event.keyCode === 13 && targetNameArray[userCount] === userInput) {
            alert("Correct!");
    
            // game completed here
            if (userCount + 1 === targetNameArray.length) {
                // at the moment, repeat over and over
                setUserCount(0);
                setUserInput("");
                textField.current.value = null;
                setGameOver(true);
                return;
            }
    
            setUserCount((previousCount) => {
                return previousCount + 1;
            })
            setUserInput("");
            textField.current.value = null;
            }
            else if (event.keyCode == 13 && targetNameArray[userCount] !== userInput) {
                alert("Wrong");
            }
      }

    return (
        <>
        <Sprite image={charmander} />
        <br />
        {/* This will hold the target name the player needs to get */}
        <div>{targetNameArray[userCount]}</div>
        <br />
        {/* This field will hold the player's current progress (color coded) */}
        <CorrectnessField targetString={targetNameArray[userCount]} userString={userInput} />
        <br />
        {/* This is the text field the player uses to type the targert name */}
        <input type="text" ref={textField} onChange={handleKeystroke} onKeyDown={checkIfComplete} autoFocus />
  
        <br />
        <br />
            <Timer />
        </>
      );
}

{/* <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider> */}