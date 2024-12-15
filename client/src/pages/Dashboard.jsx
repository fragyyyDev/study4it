// src/pages/Dashboard.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../redux/userSlice';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        fetch('http://localhost:3000/api/user', {
            credentials: 'include',
        })
            .then((response) => {
                if (response.status === 401) {
                    dispatch(clearUser()); // Clear user state if not authenticated
                } else {
                    return response.json().then((data) => {
                        dispatch(setUser(data.user));
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching user:', error);
                dispatch(clearUser()); // Clear user state on error
            });
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(clearUser());
        window.location.href = 'http://localhost:3000/logout';
    };

    const placeholderAvatar = 'https://via.placeholder.com/150?text=Anonymous';

    return (
        <div className='flex h-screen w-screen'>
            <Sidebar />
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <h1 className="text-2xl mb-4">Dashboard</h1>
                <img
                    src={
                        user?.avatar
                            ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
                            : placeholderAvatar
                    }
                    alt="Avatar"
                    className="w-24 h-24 rounded-full mb-4"
                />
                <p>
                    <strong>Username:</strong> {user?.username || 'Anonymous'}#{user?.discriminator || '0000'}
                </p>
                <p>
                    <strong>Email:</strong> {user?.email || 'N/A'}
                </p>
                {user && (
                    <button
                        onClick={handleLogout}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
