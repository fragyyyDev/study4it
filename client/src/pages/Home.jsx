import React from 'react'

const Home = () => {
    const handleLogin = () => {
        window.location.href = "http://localhost:3000/auth/discord";
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-gray-700 mb-4">Study 4 it!</p>
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Login with Discord
            </button>
        </div>
    );
}

export default Home
