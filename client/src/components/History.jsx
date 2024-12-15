import React from 'react';
import { useSelector } from 'react-redux';
import HistoryLogged from './HistoryLogged';
import HistoryNotLogged from './HistoryNotLogged';
const History = () => {
  // Correctly access the 'user' data from the Redux store
  const user = useSelector((state) => state.user.user);
  console.log('User State:', user); // For debugging

  // Define a reliable condition for logged-in status
  const isLoggedIn = !!user; // Converts user to a boolean

  return (
    <div className="">
        {isLoggedIn && (
            <div className="">
                <HistoryLogged/>
            </div>
        )}
        {!isLoggedIn && (
            <HistoryNotLogged/>
        )}
    </div>
  );
};

export default History;
