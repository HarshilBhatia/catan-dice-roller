import { useState, useEffect } from 'react';

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };
  const addTime = (seconds: number) => {
    setTime((prevTime) => prevTime + seconds);
  };

  return { time, startTimer, pauseTimer, resetTimer, addTime };
};

export default useTimer; 