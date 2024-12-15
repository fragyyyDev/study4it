import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/userSlice';
import Sidebar from './Sidebar';

const FetchUserInfo = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/api/user', {
      credentials: 'include',
    })
      .then((response) => {
        if (response.status === 401) {
          dispatch(clearUser());
        } else if (response.ok) { // Ensure response is OK before parsing JSON
          return response.json().then((data) => {
            dispatch(setUser(data.user));
          });
        } else {
          // Handle other response statuses if necessary
          dispatch(clearUser());
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        dispatch(clearUser());
      });
  }, [dispatch]);

  return (
    <div className='flex h-screen w-screen'>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default FetchUserInfo;
