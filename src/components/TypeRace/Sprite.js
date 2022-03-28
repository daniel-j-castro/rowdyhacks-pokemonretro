import React, { useState, useRef } from 'react';

export default function Sprite({image}) {
    return(
        <>
            <img src={image}  height="200px" width="200px"/>
        </>
    );
}