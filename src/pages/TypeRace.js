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

function TypeRace() {
    // let baseURL = "/pokemon/";
    // baseURL += Math.ceil(Math.random() * 890);
    const [targetArray, setTargetArray] = useState([]);
    const [post, setPost] = React.useState([]);
    const [imagePost, setImagePost] = useState([]);


    React.useEffect(() => {
            for (let i = 0; i < 5; i++) {
                let baseURL = "/pokemon/";
                baseURL += Math.ceil(Math.random() * 890);
                axios.get(baseURL).then(response => {
                    setPost(previousArray => {
                        return [...previousArray, response.data.name];
                    });
                });
                axios.get(baseURL).then(response => {
                    const spriteURL = "https://projectpokemon.org/images/normal-sprite/" + response.data.image_name + ".gif";
                    setImagePost(previousPost => {
                        return [...previousPost, spriteURL];
                    });
                });
            }
    }, []);

  // use AJAX/Axios to get random Pokemon names here
  // hardcoded five pokemon here in the meantime
  const targetNameArray = ["charmander", "bulbasaur", "totodile", "smeargle", "dunsparce"];
  const targetImageArray = [charmander, bulbasaur, totodile, smeargle, dunsparce];
  //console.log(post);
  //console.log(testArray);
  const [userInput, setUserInput] = useState("");
  const [userCount, setUserCount] = useState(0);
  const textField = useRef();
  let trueArray;
  let trueImageArray;
    if (post.length === 5) {
        trueArray = post;
        trueImageArray = imagePost;

        //console.log(trueArray);
        //console.log(trueImageArray);
    }

  function handleKeystroke(event) {
      setUserInput(event.target.value);
  }

  function checkIfComplete(event) {
    if (event.keyCode === 13 && trueArray[userCount] === userInput) {
        alert("Correct!");

        // game completed here
        if (userCount + 1 === post.length) {
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
    else if (event.keyCode == 13 && trueArray[userCount] !== userInput) {
        alert("Wrong");
    }
  }

  return (
      <>
      {post.length === 5 ? 
      <>
      <Sprite image={trueImageArray[userCount]} />
      <br />
      {/* This will hold the target name the player needs to get */}
      <div>{post[userCount]}</div>
      <br />
      {/* This field will hold the player's current progress (color coded) */}
      <CorrectnessField targetString={post[userCount]} userString={userInput} />
      <br />
      {/* This is the text field the player uses to type the targert name */}
      <input type="text" ref={textField} onChange={handleKeystroke} onKeyDown={checkIfComplete} autoFocus />
      </> : <></>}
      {/* onClick={(e) => { this.clickMe(e, someParameter); }}  */}
      </>
    );
}

export default TypeRace;