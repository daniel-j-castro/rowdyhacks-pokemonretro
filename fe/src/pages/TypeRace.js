import React, { useState, useRef } from 'react';
import axios from 'axios';
import Sprite from '../components/TypeRace/Sprite'
import charmander from '../components/TypeRace/charmander.png';
import bulbasaur from '../components/TypeRace/bulbasaur.png';
import totodile from '../components/TypeRace/totodile.jpg';
import smeargle from '../components/TypeRace/smeargle.png';
import dunsparce from '../components/TypeRace/dunsparce.png';
import CorrectnessField from '../components/TypeRace/CorrectnessField';
import {v4 as uuid} from "uuid";

//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }


function TypeRace() {

    let baseURL = "https://retro-pokemon-game-api-k6cgale4bq-uc.a.run.app/pokemon/23";
    //const newURL = baseURL += "1";
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
            axios.get(baseURL).then((response) => {
                console.log(response.data[0].name);
            setPost(response.data);
        });
    }, []);


  // use AJAX/Axios to get random Pokemon names here
  // hardcoded five pokemon here in the meantime
  const targetNameArray = ["charmander", "bulbasaur", "totodile", "smeargle", "dunsparce"];
  const targetImageArray = [charmander, bulbasaur, totodile, smeargle, dunsparce];

  const [userInput, setUserInput] = useState("");
  const [userCount, setUserCount] = useState(0);
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
              // setUserCount(0);
              setUserInput("Winner Winner Chicken Dinner");
              textField.current.value = "Winner Winner Chicken Dinner";
              alert("Congratulations, you won");
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
      <div></div>
      <Sprite image={targetImageArray[userCount]} />
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
      </>
    );
}

export default TypeRace;