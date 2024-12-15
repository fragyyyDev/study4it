// src/pages/Dashboard.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../redux/userSlice';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const handleLogout = () => {
        dispatch(clearUser());
        window.location.href = 'http://localhost:3000/logout';
    };

    const placeholderAvatar = 'https://via.placeholder.com/150?text=Anonymous';

    return (
        <aside className='flex w-screen h-screen'>
            <Sidebar />
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <h1 className="mb-4 text-2xl">Dashboard</h1>
                <img
                    src={
                        user?.avatar
                            ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
                            : placeholderAvatar
                    }
                    alt="Avatar"
                    className="w-24 h-24 mb-4 rounded-full"
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
                        className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                )}
            </div>
        </aside>
    );
};

export default Dashboard;
