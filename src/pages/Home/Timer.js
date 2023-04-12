import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';

function Timer(
  
) {
 
  const {endGame,gameDurationInterval
  ,
  elapsedTime,
  startTime,
  setStartTime,
  setElapsedTime,

  } = useAuth()
  
  useEffect(() => {
    // let intervalId;
    if (startTime > 0) {
      gameDurationInterval.current = setInterval(() => {
        const currentTime = Date.now();
        const timeElapsed = currentTime - startTime;
        setElapsedTime(timeElapsed);
      }, 10);
    }
    return () => clearInterval(gameDurationInterval?.current);
  }, [startTime]);

  const minutes = Math.floor(elapsedTime / 60000);
  const second = Math.floor((elapsedTime - minutes * 60000) / 1000);

  useEffect(() => {
    console.log("timer  for ", minutes, second,(elapsedTime - minutes * 60000) / 1000);
    if (second === 59) {
      if (minutes === 59) {
        // clearInterval(gameDurationInterval?.current);
        endGame();
      }
    }
  }, [minutes, second]);
  return (
    <> {minutes < 10 ? `0${minutes}` : minutes}:{second < 10 ? `0${second}` : second}</>
  );
}

export default Timer;
