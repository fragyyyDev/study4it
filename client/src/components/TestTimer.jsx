// TestTimer.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ClockCountdown, FastForward } from '@phosphor-icons/react';

const TestTimer = ({ expirationTime, onExpire, stageName, isPauseStage, onSkipPause, showPath, showTimer, timerColor }) => {
  const calculateTimeLeft = () => {
    const difference = expirationTime - Date.now();
    return difference > 0 ? difference : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timerId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft <= 0) {
        clearInterval(timerId);
        onExpire();
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [expirationTime, onExpire]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}min, ${seconds}sek`;
  };

  return (
    <div className='w-full flex flex-col'>
      {showPath && (
        <h3 className='inter font-medium'>
          Přijímací zkoušky / Simulace nanečisto / {stageName}
        </h3>
      )}
      {showTimer && (
        <p className={`inter ${timerColor ? `text-[${timerColor}]` : "text-gray-500"} flex items-center gap-x-2`}>
          <ClockCountdown /> {formatTime(timeLeft)}
        </p>
      )}
    </div>
  );
};

TestTimer.propTypes = {
  expirationTime: PropTypes.number.isRequired,
  onExpire: PropTypes.func.isRequired,
  stageName: PropTypes.string.isRequired,
  isPauseStage: PropTypes.bool.isRequired,
  onSkipPause: PropTypes.func.isRequired,
};

export default TestTimer;
