import { DiscordLogo, Eyeglasses } from '@phosphor-icons/react'
import React from 'react'

const LoginScreen = ({ onClose }) => {

    const handleLogin = () => {
        window.location.href = "http://localhost:3000/auth/discord";
    };

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25 z-50 flex items-center justify-center"
            onClick={() => onClose()}
        >
            <div
                className="bg-white p-4 rounded-lg w-2/3 lg:w-1/3 xl:w-1/4"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className='text-xl font-semibold inter'>Přihlásit se</h2>
                <p className='inter text-gray-500 mb-3 font-semibold text-sm'>Těší nás! Využij jednu z možností pro přihlášení</p>
                <div className="my-4">
                    <button className='bg-[#7263FF] w-full h-12 rounded-xl text-white inter flex items-center justify-center gap-x-3'
                        onClick={handleLogin}
                    >
                        <DiscordLogo color='white' size={22} />
                        Přihlásit se přes Discord
                    </button>
                    <div className="flex h-12 w-full items-center justify-evenly">
                        <div className="w-[40%] h-[1px] bg-[#0E0E1059]"></div>
                        <p className='uppercase inter text-gray-500 text-sm'> NEBO</p>
                        <div className="w-[40%] h-[1px] bg-[#0E0E1059]"></div>
                    </div>
                    <button className='w-full h-12 rounded-xl inter flex items-center justify-center gap-x-3'
                        onClick={() => onClose()}
                    >
                        <Eyeglasses size={22} />
                        Pokračovat jako host
                    </button>
                </div>
                <p className='text-gray-500 text-sm inter'>
                    Pokud se plnohodnotně přihlásíš do systému, automaticky nám dáváš schválení na zpracování tvého Discord účtu (přezdívka, profilová fotka, ID) a ukládání tvých záznamů v systému do databáze. V případě, že si svůj názor později rozmyslíš, musíš si svůj účet smazat pro kompletní odebrání z databáze.
                </p>
            </div>
        </div>
    )
}

export default LoginScreen
