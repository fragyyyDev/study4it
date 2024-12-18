import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowCircleRight, Warning, XCircle } from '@phosphor-icons/react'

const InformationTestScreen = () => {
    const navigate = useNavigate();
    const [existingSession, setExistingSession] = useState(false);
    const QUIZ_DURATION_NANECISTO = 10 * 60 * 13000; // 130 minut 
    const STORAGE_KEY_NANECISTO = 'NANECISTO';

    const startQuiz = () => {
        const expirationTime = Date.now() + QUIZ_DURATION_NANECISTO;
        const sessionData = {
            expirationTime,
            startedAt: Date.now(),
        };
        localStorage.setItem(STORAGE_KEY_NANECISTO, JSON.stringify(sessionData));
        navigate('/psani-testu-nanecisto');
    };

    useEffect(() => {
        const storedSession = JSON.parse(localStorage.getItem(STORAGE_KEY_NANECISTO));

        if (storedSession && storedSession.expirationTime) {
            setExistingSession(true);
        } else {
            setExistingSession(false);
        }
    }, []);

    return (
        <div>
            <h2 className='text-3xl inter font-semibold'>Simulace nanečisto</h2>
            <h3 className='text-xl inter'>Přijímací zkoušky</h3>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            {existingSession && (
                <div className="w-full h-20 flex bg-[#F1EAFF] items-center px-4 mb-3 rounded-xl gap-x-4">
                    <Warning size={32} className='mx-4'/>
                    <div className="flex justify-between w-full">
                        <div className="">
                            <p className='inter font-semibold'>Běží ti test! Pojď ho dokončit!</p>
                            <p className='inter text-gray-500 text-sm'>Vypadá to , že jsi opustil svůj test. Neboj, jeho stav máš uložený a furt se k němu můžeš vrátit.</p>
                        </div>
                        <button className='inter bg-[#7263FF] p-2 rounded-xl text-white flex gap-x-2 items-center' onClick={() => { navigate("/psani-testu-nanecisto") }}>Pokračovat <ArrowCircleRight size={24} /></button>
                    </div>
                </div>
            )}
            <div className="">
                <p className='inter font-semibold'>Informace o testu</p>
                <p className='inter text-gray-500'>Jelikož je test předdefinovaný nelze změnit jeho vlastnosti</p>
                <div className="flex flex-col md:flex-row mt-4 md:gap-y-0 md:gap-x-2 gap-y-2">
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F8F6FF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Časomíra</p>
                        <p className='font-semibold inter text-lg'>130 minut</p>
                    </div>
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F8F6FF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Předmět(y)</p>
                        <p className='font-semibold inter text-lg'>Čeština, Matematika</p>
                    </div>
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F8F6FF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Probíraná látka</p>
                        <p className='font-semibold inter text-lg'>Vše</p>
                    </div>
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F8F6FF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Možnost upravit odpověď</p>
                        <p className='font-semibold inter text-lg'>Ne</p>
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-y-3">
                    <p className='inter font-semibold'>Další informace</p>
                    <div className="flex flex-col md:flex-row md:gap-x-2 md:gap-y-0 gap-y-2">
                        <div className="w-full md:w-1/2 p-4 bg-[#F8F6FF] rounded-lg flex flex-col gap-y-2 pb-16">
                            <p className='text-gray-500 inter'>Pravidla Testu</p>
                            <ul className="inter font-medium list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                                <li>Časomíra 130 min celkem (bez stopování)</li>
                                <li>Úlohy z matematiky a českého jazyka</li>
                                <li>15 minut dobrovolnou pauzu mezi předměty</li>
                                <li>Úlohy různého typu, délky a obtížnosti</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 p-4 bg-[#F8F6FF] rounded-lg flex flex-col gap-y-2">
                            <p className='text-gray-500 inter'>Jak postupovat v testu</p>
                            <ul className="inter font-medium list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                                <li>V testu můžeš dát další/zpět aby jsi pokračoval nebo se vrátil</li>
                                <li>Své odpovědi zapisuješ do příslušného textového pole</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    <button onClick={() => startQuiz()}
                        className='bg-[#7263FF] py-2.5 px-3 text-white inter flex gap-x-2 rounded-xl'
                    >Spustit test
                        <ArrowCircleRight size={24} />
                    </button>
                    <button onClick={() => navigate("/testy")}
                        className='bg-[#141417] py-2.5 px-3 text-white inter flex gap-x-2 rounded-xl'
                    >Přejít zpět do výběru
                        <XCircle size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InformationTestScreen
