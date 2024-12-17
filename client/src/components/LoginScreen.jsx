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
                <h2 className='text-xl font-bold tracking-[-0.02em] inter text-dark'>Přihlásit se</h2>
                <p className='inter text-text mb-3 font-semibold text-sm tracking-[-0.01em]'>Těší nás! Využij jednu z možností pro přihlášení</p>
                <div className="my-4">
                    <button className='bg-[#7263FF] w-full h-12 rounded-lg text-white inter flex items-center justify-center gap-x-2 text-md tracking-[-0.02em] hover:bg-primarydark active:scale-[0.98] transition-all'
                        onClick={handleLogin}
                    >
                        <DiscordLogo color='white' size={20} />
                        Přihlásit se přes Discord
                    </button>
                    <div className="flex h-12 w-full items-center justify-evenly gap-x-3">
                        <div className="flex-grow h-[1px] bg-text"></div>
                        <p className='uppercase inter text-text text-[0.7rem]'> NEBO</p>
                        <div className="flex-grow h-[1px] bg-text"></div>
                    </div>
                    <button className='w-full h-12 rounded-lg inter flex items-center justify-center gap-x-2 text-nd tracking-[-0.02em] hover:bg-[#F1EAFF] active:scale-[0.98] transition-all'
                        onClick={() => onClose()}
                    >
                        <Eyeglasses color='dark' size={20} />
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
