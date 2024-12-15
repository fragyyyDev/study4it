import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  // Correctly access the 'user' data from the Redux store
  const user = useSelector((state) => state.user.user);
  console.log('User State:', user); // For debugging

  // Define a reliable condition for logged-in status
  const isLoggedIn = !!user; // Converts user to a boolean

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Conditionally render the square based on user authentication */}
      <div
        className={`w-24 h-24 ${
          isLoggedIn ? 'bg-blue-500' : 'bg-red-500'
        } rounded`}
      ></div>
    </div>
  );
};

export default History;
