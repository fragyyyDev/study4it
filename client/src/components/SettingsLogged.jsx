import React from 'react'

const SettingsLogged = () => {
    return (
        <div>
            <h2 className='text-3xl text-dark font-bold tracking-tight inter'>Nastavení</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="flex flex-col justify-between lg:flex-row">
                <div className="mb-4 md:mb-0 w-full lg:w-1/2">
                    <h5 className='font-semibold inter tracking-[-0.02em]'>Téma aplikace</h5>
                    <p className='text-text text-sm inter font-medium tracking-[-0.01em]'>Vyber si barevné schéma při používání aplikace</p>
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-3 w-full lg:w-1/2">
                    <div className="flex flex-col flex-1 items-center">
                        <div className="w-full h-48 md:h-60 lg:h-40 bg-[#F1EAFF] rounded-lg"></div>
                        <p className='mt-2 text-sm font-semibold text-center text-gray-500 inter'>Systémové preference</p>
                    </div>
                    <div className="flex flex-col flex-1 items-center">
                        <div className="w-full h-48 md:h-60 lg:h-40 bg-[#F1EAFF] rounded-lg"></div>
                        <p className='mt-2 text-sm font-semibold text-center text-gray-500 inter'>Světlý režim</p>
                    </div>
                    <div className="flex flex-col flex-1 items-center">
                        <div className="w-full h-48 md:h-60 lg:h-40 bg-[#F1EAFF] rounded-lg"></div>
                        <p className='mt-2 text-sm font-semibold text-center text-gray-500 inter'>Tmavý režim</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/2">
                    <h5 className='font-semibold inter tracking-[-0.02em]'>Smazat Data</h5>
                    <p className='text-text text-sm inter font-medium tracking-[-0.01em]'>Jediným tlačítkem smažeš všechny své data</p> <br />
                    <p className='text-[0.75rem] text-text inter font-medium tracking-[-0.005em]'> Kvůli nařízení EU jsme povinni pro uživatele přidat možnost tzv. “zapomenutí”, neboli také smazání dat z našich serverů. Pokud se rozhodneš svůj účet smazat, veškeré statistiky a data za uplynulou dobu od první registrace se po 30 dnech smažou a nebudeš mít možnost je obnovit. <br/> <br />

                        V případě, že si rozhodneš znovu propojit svůj účet s Discordem a chceš opět procvičovat, stará data se neobnoví. To znamená, že začneš úplně od začátku.

                        V případě jakýchkoliv dotazů se obrať na<br/><a href='mailto:gdpr@lets-create.cz' className='text-[#7263FF]'>gdpr@lets-create.cz</a>, kde ti rádi pomůžeme.</p>
                </div>
                <div className="flex lg:items-start lg:justify-end w-full lg:w-1/2 mt-6 lg:mt-0">
                    <div className="flex gap-x-1">
                        <button className='p-2 text-nowrap rounded-md text-[#FB435B] border-[1px] border-[#FB435B] flex inter text-sm items-center justify-center mt-4 w-full gap-x-2 leading-6 tracking-[-0.02em] hover:bg-red-500 hover:text-white active:scale-[0.98] transition-all'>Deaktivovat účet</button>
                        <button className='p-2 text-nowrap bg-[#FB435B] rounded-md text-white flex inter text-sm items-center justify-center mt-4 w-full gap-x-2 leading-6 tracking-[-0.02em] hover:bg-red-500 active:scale-[0.98] transition-all'>Smazat účet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsLogged