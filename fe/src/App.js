import React, { useState, useRef, useEffect } from 'react';
import NavBar from './NavBar.js';
import Game from './Game.js';
import Timer from './Timer.js';

function App() {
  const [gameState, setGameState] = useState(0);

  function activateGame() {
    setGameState(1);
  }

  return (
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Spline+Sans&display=swap" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <NavBar />
    <button onClick={activateGame}>Start Game Here</button>
    <br />
    <br />
    {
      gameState === 1 ? <Game /> : <></>
    }
    </>
  );
}

export default App;
