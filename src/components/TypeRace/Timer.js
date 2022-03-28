import React, { useState, useEffect, useContext, createContext } from 'react';

// Borrowed from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // useEffect(() => {
    //     console.log(gameState);
    //     if ({gameState} === true) {
    //         setIsActive(false);
    //     }
    // }, [gameState]);

    useEffect(() => {
      let interval = null;
      setIsActive(true);

      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
      <div className="app">
        <div className="time">
          {seconds}s
        </div>
        {/* <div className="row">
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause' : 'Start'}
          </button>
        </div> */}
      </div>
    );
}