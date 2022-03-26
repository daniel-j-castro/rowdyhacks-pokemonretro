import React from 'react';
import "./character_styles.css";

export default function Character({id, char, color}) {
    return (
        <div className={color}>{char}</div>
    );
}