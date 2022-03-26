import React, { useState, useRef } from 'react';
import NavBar from './NavBar.js';
import {v4 as uuid} from "uuid";

function App() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <NavBar />
    <h1>Hello world2</h1>
    </>
  );
}

export default App;
