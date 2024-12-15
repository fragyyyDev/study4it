import React from 'react';
import { useSelector } from 'react-redux';

import StatsLogged from './StatsLogged';
import StatsNotLogged from './StatsNotLogged';
const StatsScreen = () => {
  const user = useSelector((state) => state.user.user);
  console.log('User State:', user); // For debugging
const isLoggedIn = !!user; // Converts user to a boolean

  return (
    <div className="">
        {isLoggedIn && (
            <div className="">
                <StatsLogged/>
            </div>
        )}
        {!isLoggedIn && (
            <StatsNotLogged/>
        )}
    </div>
  );
};

export default StatsScreen;
