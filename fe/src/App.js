import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SpeechToText from './pages/SpeechToText';
import SpeechToTextImage from './components/SpeechToText/TextToSpeechImage.js';
import TypeRacer from './pages/TypeRace';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Cards from './components/FeatureCards/Cards.js';
import Demo from './components/FeatureCards/Demo.js';
/*
Adding Pages
  * Add <page_name>.js and <page_name>.css to src/pages
  * import page component: import <page_name> from './pages/<page_name>';
  * add route below <Route exact path="/<Route>" element={<page_name)/>}/>
*/


//Template for page:

/*
import React from 'react';
import './(page_name).css'
const (page_name) = () => {
  return (
    <div>Your page content</div>
  );
}
export default (page_name);
*/

//TODO Add navbar component below

function App() {
  const [siteState, setSiteState] = useState(0);

  function changeToTypeRacer() {
    setSiteState(1);
  }

  function changeToSpeech() {
    setSiteState(2);
  }

  return (
    <>
    <ul>
        <li><button><a href="/">Home</a></button></li>
        {
          siteState === 0 ? (
            <>
            <li><button onClick={changeToSpeech}>Speech To Text Page</button></li>
            <li><button onClick={changeToTypeRacer}>Type Racer</button></li>
            </>
          ) : <></>
        }
    </ul>

    {
      siteState === 1 ? <TypeRacer /> : <></>
    }
    {
      siteState === 2 ? <SpeechToTextImage /> : <></>
    }

    {
      siteState === 0 ? <Cards /> : <></>
    }

    {/* <Cards />
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/SpeechToText" element={<SpeechToText/>}/>
          <Route exact path="/TypeRacer" element={<TypeRacer/>} />
        </Routes>
    </Router> */}
    </>
  );
}

export default App;