import React from 'react'
import { EyeSlash } from '@phosphor-icons/react'

const HistoryNotLogged = () => {
  return (
    <div>
        <h2 className='text-2xl font-semibold inter'>Historie testů</h2>
        <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
        <div className="h-full w-full flex justify-center">
            <div className="flex flex-col items-center">
                <EyeSlash color='#FB435B' size={64}/>
                <h3 className='text-xl font-semibold inter'>Nemáš oprávnění k zobrazení</h3>
                <p className='text-gray-500 inter text-center'>Zobrazit historii testů mohou pouze přihlášení uživatelé. Přihlas se pomocí jedné z metod a ukládej své záznamy až po dobu 30 dní či déle</p>
            </div>
        </div>
    </div>
  )
}

export default HistoryNotLogged