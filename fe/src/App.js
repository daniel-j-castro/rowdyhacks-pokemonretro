import React, { useState, useRef, useEffect } from 'react';
import NavBar from './NavBar.js';
import Sprite from './Sprite.js'
import charmander from './charmander.png';
import CorrectnessField from './CorrectnessField.js';

function App() {
  const targetNameArray = ["charmander", "bulbasaur", "totodile"];
  const LOCAL_COUNT_KEY = "count";

  const [userInput, setUserInput] = useState("");
  const [userCount, setUserCount] = useState(0);
  const textField = useRef();

  // If user clicks out, this saves progress
  // useEffect(() => {
  //   const storedCounter = JSON.parse(localStorage.getItem(LOCAL_COUNT_KEY));
  //   if (storedCounter) setUserCount(storedCounter);
  //   else {
  //     localStorage.setItem(LOCAL_COUNT_KEY, 0);
  //   }
  // }, []);

  // register progress
  useEffect(() => {
    localStorage.setItem(LOCAL_COUNT_KEY, JSON.stringify(userCount));
    console.log(localStorage.getItem(LOCAL_COUNT_KEY));
  }, [userCount]);

  function handleKeystroke(event) {
    setUserInput(event.target.value);
  }

  function checkIfComplete(event) {
    if (event.keyCode === 13 && targetNameArray[userCount] === userInput) {
      alert("Correct!");

      if (userCount + 1 === targetNameArray.length) {
        localStorage.setItem(LOCAL_COUNT_KEY, 0);
        setUserCount(0);
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Spline+Sans&display=swap" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <NavBar />
    <Sprite image={charmander} />
    <br />
    {/* This will hold the target name the player needs to get */}
    <div>{targetNameArray[userCount]}</div>
    <br />
    {/* This field will hold the player's current progress (color coded) */}
    <CorrectnessField targetString={targetNameArray[userCount]} userString={userInput} />
    <br />
    {/* This is the text field the player uses to type the targert name */}
    <input type="text" ref={textField} onChange={handleKeystroke} onKeyDown={checkIfComplete} />

    <br />
    <br />
    <button>Restart Game</button>
    </>
  );
}

export default App;
