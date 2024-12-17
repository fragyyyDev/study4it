import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TestTimer = ({ expirationTime, onExpire }) => {
  const calculateTimeLeft = () => {
    const difference = expirationTime - Date.now();
    return difference > 0 ? difference : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft === 0) {
      onExpire();
      return;
    }

    const timerId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft === 0) {
        clearInterval(timerId);
        onExpire();
      }
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, expirationTime, onExpire]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <div><p className='inter text-gray-500'>Času zbývá: {formatTime(timeLeft)}</p></div>;
};

TestTimer.propTypes = {
  expirationTime: PropTypes.number.isRequired,
  onExpire: PropTypes.func.isRequired,
};

export default TestTimer;
