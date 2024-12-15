import React from 'react'
import { EyeSlash } from '@phosphor-icons/react'

const StatsNotLogged = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold inter'>Statistika</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="h-full w-full flex justify-center">
                <div className="flex flex-col items-center">
                    <EyeSlash color='#FB435B' size={64} />
                    <h3 className='text-xl font-semibold inter'>Nemáš oprávnění k zobrazení</h3>
                    <p className='text-gray-500 inter text-center'>Zobrazit statistiky testů mohou pouze přihlášení uživatelé. Přihlas se pomocí jedné z metod a mrkni se jak se posouváš dopředu</p>
                </div>
            </div>
        </div>
    )
}

export default StatsNotLogged