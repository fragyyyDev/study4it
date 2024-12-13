import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/user", {
            credentials: "include",
        })
            .then((response) => {
                if (response.status === 401) {
                    window.location.href = "/";
                }
                return response.json();
            })
            .then((data) => {
                setUser(data.user);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            });
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    const handleLogout = () => {
        window.location.href = "http://localhost:3000/logout";
    };

    return (
        <>
            <Sidebar />
            {/* 
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl mb-4">Dashboard</h1>
            <img src={user.avatar ? `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png` : `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
            <p><strong>Username:</strong> {user.username}#{user.discriminator}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
        */}
        </>
    );
}

export default Dashboard
