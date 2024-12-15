import React from 'react';
import { useSelector } from 'react-redux';
import SettingsLogged from './SettingsLogged';
import SettingsNotLogged from './SettingsNotLogged';
const SettingsScreen = () => {
  const user = useSelector((state) => state.user.user);
  console.log('User State:', user); 
  const isLoggedIn = !!user; 
  return (
    <div className="">
        {isLoggedIn && (
            <div className="">
                <SettingsLogged/>
            </div>
        )}
        {!isLoggedIn && (
            <SettingsNotLogged/>
        )}
    </div>
  );
};

export default SettingsScreen;
