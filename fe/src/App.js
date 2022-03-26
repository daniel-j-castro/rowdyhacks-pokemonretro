import React, { useState, useRef } from 'react';
import NavBar from './NavBar.js';
import Sprite from './Sprite.js'
import charmander from './charmander.png';
import {v4 as uuid} from "uuid";

function App() {
  const targetName = "charmander"; 

  const [pokeName, setPokeName] = useState(targetName);
  const [userInput, setUserInput] = useState("");
  const textField = useRef();


  // setItems(previousItems => {
  //   return [...previousItems, {id: uuid(), name: itemName, completed: false}];
  // });

  function handleKeystroke(event) {
    setUserInput(event.target.value);
  }



  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <NavBar />
    <Sprite image={charmander} />
    <div>{targetName}</div>
    <div>{userInput}</div>
    <input type="text" ref={textField} onChange={handleKeystroke} value={userInput} />
    </>
  );
}

export default App;
