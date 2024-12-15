import { EyeSlash } from '@phosphor-icons/react'
import React from 'react'


const SettingsNotLogged = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold inter'>Nastavení</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="h-full w-full flex justify-center">
                <div className="flex flex-col items-center">
                    <EyeSlash color='#FB435B' size={64} />
                    <h3 className='text-xl font-semibold inter'>Nemáš oprávnění měnit svá nastavení</h3>
                    <p className='text-gray-500 inter text-center'>Nastavení mohou používat pouze přihlášení uživatelé. Přihlas se pomocí jedné z metod pro odemknutí možnosti</p>
                </div>
            </div>
            <div className="mt-2">
                <p className='font-semibold inter'>Další informace</p>
                <p className='text-gray-500 inter text-sm'>Zde je konec tvého dobrodružství</p>
                <p className='text-gray-500 inter text-sm my-3'>
                    &copy; Let's Study {new Date().getFullYear()}, podznačka Let's Create. Všechna práva vyhrazena
                </p>

                <p className='text-gray-500 inter text-sm'> Testová zadání, úlohy slovní, matematické a logické jsou autorskými právy Let’s Create a spadají pod vlastní ochranu. Zadání máte povoleno užívat pouze ke vzdělávacím účelům a teoretické výuce, nikoliv ke kopírování obsahu a jeho přepisování pro vlastní účely na vlastní stránky, aplikace, programy a hmotné předměty sloužící k podobnému účelu.</p>
            </div>
        </div>
    )
}

export default SettingsNotLogged