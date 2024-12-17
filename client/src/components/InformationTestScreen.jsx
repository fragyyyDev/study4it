import React from 'react'

const InformationTestScreen = () => {
    return (
        <div>
            <h2 className='text-3xl inter font-semibold'>Simulace nanečisto</h2>
            <h3 className='text-xl inter'>Přijímací zkoušky</h3>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="">
                <p className='inter font-semibold'>Informace o testu</p>
                <p className='inter text-gray-500'>Jelikož je test předdefinovaný nelze změnit jeho vlastnosti</p>
                <div className="flex flex-col md:flex-row mt-4 md:gap-y-0 md:gap-x-2 gap-y-2">
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F1EAFF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Časomíra</p>
                        <p className='font-semibold inter text-lg'>130 minut</p>
                    </div>
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F1EAFF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Předmět(y)</p>
                        <p className='font-semibold inter text-lg'>Čeština, Matematika</p>
                    </div>
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F1EAFF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Probíraná látka</p>
                        <p className='font-semibold inter text-lg'>Vše</p>
                    </div>
                    <div className="md:w-1/4 w-full h-24 p-4 bg-[#F1EAFF] rounded-lg flex flex-col gap-y-2">
                        <p className='inter text-gray-500 text-sm'>Možnost upravit odpověď</p>
                        <p className='font-semibold inter text-lg'>Ne</p>
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-y-3">
                    <p className='inter font-semibold'>Další informace</p>
                    <div className="flex flex-col md:flex-row md:gap-x-2 md:gap-y-0 gap-y-2">
                        <div className="w-full md:w-1/2 p-4 bg-[#F1EAFF] rounded-lg flex flex-col gap-y-2 pb-16">
                            <p className='text-gray-500 inter'>Pravidla Testu</p>
                            <ul className="inter font-medium list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                                <li>Časomíra 130 min celkem (bez stopování)</li>
                                <li>Úlohy z matematiky a českého jazyka</li>
                                <li>15 minut dobrovolnou pauzu mezi předměty</li>
                                <li>Úlohy různého typu, délky a obtížnosti</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 p-4 bg-[#F1EAFF] rounded-lg flex flex-col gap-y-2">
                            <p className='text-gray-500 inter'>Jak postupovat v testu</p>
                            <ul className="inter font-medium list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                                <li>V testu můžeš dát další/zpět aby jsi pokračoval nebo se vrátil</li>
                                <li>Své odpovědi zapisuješ do příslušného textového pole</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationTestScreen
