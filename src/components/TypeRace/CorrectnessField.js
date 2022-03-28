import React, { useState } from 'react';
import Character from './Character.js';
//import Character from '../components/TypeRace/Character.js';
import {v4 as uuid} from "uuid";

export default function CorrectnessField({targetString, userString}) {
    const targetArray = targetString.split("");
    const userArray = userString.split("");
    const green = "green";
    const red = "red";
    return (
        <>
        {
            userArray.map((character, index) => {
                if (character === targetArray[index]) {
                    return <Character key={uuid()} char={character} color={green} />
                }
                else {
                    return <Character key={uuid()} char={character} color={red} />
                }
            })
        }
        </>
    );
}