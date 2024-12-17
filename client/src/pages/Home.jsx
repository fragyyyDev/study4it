import React from 'react'
import LoginScreen from '../components/LoginScreen';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-gray-700 mb-4">Study 4 it!</p>
              <LoginScreen onClose={() => navigate("/testy")}/>
        </div>
    );
}

export default Home
