import React from 'react'

const SettingsLogged = () => {
    return (
        <div>
            <h2 className='text-2xl inter font-semibold'>Nastavení</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="flex justify-between flex-col md:flex-row p-4">
                <div className="mb-4 md:mb-0">
                    <p className='font-semibold inter'>Téma aplikace</p>
                    <p className='text-gray-500 inter'>Vyber si barevné schéma při používání aplikace</p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-3">
                    <div className="flex flex-col items-center">
                        <div className="w-full lg:w-[15vw] h-48 md:h-60 lg:h-40 bg-[#F1EAFF] rounded-lg"></div>
                        <p className='text-gray-500 inter text-sm mt-2 font-semibold text-center'>Systémové preference</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full lg:w-[15vw] h-48 md:h-60 lg:h-40 bg-[#F1EAFF] rounded-lg"></div>
                        <p className='text-gray-500 inter text-sm mt-2 font-semibold text-center'>Světlý režim</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full lg:w-[15vw] h-48 md:h-60 lg:h-40 bg-[#F1EAFF] rounded-lg"></div>
                        <p className='text-gray-500 inter text-sm mt-2 font-semibold text-center'>Tmavý režim</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="flex justify-between">
                <div className="w-1/2">
                    <p className='font-semibold inter'>Smazat Data</p>
                    <p className='text-gray-500 inter'>Jediným tlačítkem smažeš všechny své data</p> <br />
                    <p className='text-gray-500 inter text-sm'> Kvůli nařízení EU jsme povinni pro uživatele přidat možnost tzv. “zapomenutí”, neboli také smazání dat z našich serverů. Pokud se rozhodneš svůj účet smazat, veškeré statistiky a data za uplynulou dobu od první registrace se po 30 dnech smažou a nebudeš mít možnost je obnovit. <br/> <br />

                        V případě, že si rozhodneš znovu propojit svůj účet s Discordem a chceš opět procvičovat, stará data se neobnoví. To znamená, že začneš úplně od začátku.

                        V případě jakýchkoliv dotazů se obrať na <span className='text-[#7263FF]'> gdpr@lets-create.cz</span>, kde ti rádi pomůžeme.</p>
                </div>
                <div className="w-1/2 flex justify-end items-start">
                    <div className="flex gap-x-2">
                        <button className='p-2 text-[#FB435B] border-[1px] rounded-lg border-[#FB435B]'>Deaktivovat Účet</button>
                        <button className='py-2 px-3 bg-[#FB435B] text-white rounded-lg'>Smazat Účet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsLogged