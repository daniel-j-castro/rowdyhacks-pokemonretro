import React, { useState, useRef } from 'react';
import NavBar from './NavBar.js';
import Sprite from './Sprite.js'
import charmander from './charmander.png';
import CorrectnessField from './CorrectnessField.js';
import {v4 as uuid} from "uuid";

function App() {
  const targetName = "charmander"; 

  const [userInput, setUserInput] = useState("");
  const textField = useRef();

  function handleKeystroke(event) {
    setUserInput(event.target.value);
  }

  function checkIfComplete(event) {
    if (event.keyCode === 13 && targetName === userInput) {
      alert("Correct!");
    }
    else if (event.keyCode == 13 && targetName !== userInput) {
      alert("Wrong");
    }
  }

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Spline+Sans&display=swap" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <NavBar />
    <Sprite image={charmander} />
    <br />
    <div>{targetName}</div>
    <br />
    <CorrectnessField targetString={targetName} userString={userInput} />
    <br />
    <input type="text" ref={textField} onChange={handleKeystroke} onKeyDown={checkIfComplete} value={userInput} />
    </>
  );
}

export default App;
