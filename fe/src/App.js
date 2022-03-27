import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SpeechToText from './pages/SpeechToText';
import TypeRacer from './pages/TypeRace';
import Home from './pages/Home';
import NavBar from './components/NavBar';

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

export default function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/SpeechToText" element={<SpeechToText/>}/>
          <Route exact path="/TypeRacer" element={<TypeRacer/>}/>
        </Routes>
        

    </Router>
  );
}