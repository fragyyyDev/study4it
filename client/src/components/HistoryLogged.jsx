import React from 'react'
import { CheckCircle, Hourglass, XCircle, Eye, CrownSimple } from '@phosphor-icons/react'
const HistoryLogged = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold inter'>Historie testů</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="">
                <h3 className='inter font-semibold text-xl'>Testy za posledních 7 dní</h3>
                <p className='text-gray-500 inter mb-2'>Uložených testů : 3</p>
                <div className="flex flex-col gap-y-2">
                    {/* Zaznamy testu 7 dni*/}
                    <div className="w-full bg-[#F1EAFF] rounded-lg min-h-16 flex flex-col md:flex-row items-center px-4 gap-y-2 md:gap-y-0 md:gap-x-4">
                        <p className="inter text-gray-500 text-sm">15.12.2024 13.54</p> {/* Datum */}
                        <p className="inter">Přijímací zkoušky / Simulace nanečisto</p> {/* Typ testu */}
                        <div className="flex gap-x-2 mt-2 md:mt-0">
                            <div className="flex items-center gap-x-1">
                                <CheckCircle color="#2DCA57" />
                                <p className="inter">30</p> {/* Pocet spravnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <XCircle color="#FB435B" />
                                <p className="inter">25</p> {/* Pocet spatnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <Hourglass color="#7263FF" />
                                <p className="inter">2h 35m</p> {/* Cas testu */}
                            </div>
                        </div>
                        <Eye className="mt-2 md:mt-0 self-center md:ml-auto" aria-label="View Details" /> {/* Detaily testu */}
                    </div>
                    <div className="w-full bg-[#F1EAFF] rounded-lg min-h-16 flex flex-col md:flex-row items-center px-4 gap-y-2 md:gap-y-0 md:gap-x-4">
                        <p className="inter text-gray-500 text-sm">15.12.2024 13.54</p> {/* Datum */}
                        <p className="inter">Přijímací zkoušky / Simulace nanečisto</p> {/* Typ testu */}
                        <div className="flex gap-x-2 mt-2 md:mt-0">
                            <div className="flex items-center gap-x-1">
                                <CheckCircle color="#2DCA57" />
                                <p className="inter">30</p> {/* Pocet spravnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <XCircle color="#FB435B" />
                                <p className="inter">25</p> {/* Pocet spatnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <Hourglass color="#7263FF" />
                                <p className="inter">2h 35m</p> {/* Cas testu */}
                            </div>
                        </div>
                        <Eye className="mt-2 md:mt-0 self-center md:ml-auto" aria-label="View Details" /> {/* Detaily testu */}
                    </div>
                    <div className="w-full bg-[#F1EAFF] rounded-lg min-h-16 flex flex-col md:flex-row items-center px-4 gap-y-2 md:gap-y-0 md:gap-x-4">
                        <p className="inter text-gray-500 text-sm">15.12.2024 13.54</p> {/* Datum */}
                        <p className="inter">Přijímací zkoušky / Simulace nanečisto</p> {/* Typ testu */}
                        <div className="flex gap-x-2 mt-2 md:mt-0">
                            <div className="flex items-center gap-x-1">
                                <CheckCircle color="#2DCA57" />
                                <p className="inter">30</p> {/* Pocet spravnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <XCircle color="#FB435B" />
                                <p className="inter">25</p> {/* Pocet spatnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <Hourglass color="#7263FF" />
                                <p className="inter">2h 35m</p> {/* Cas testu */}
                            </div>
                        </div>
                        <Eye className="mt-2 md:mt-0 self-center md:ml-auto" aria-label="View Details" /> {/* Detaily testu */}
                    </div>

                </div>
            </div>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="">
                <h3 className='inter font-semibold text-xl'>Testy za posledních 30 dní</h3>
                <p className='text-gray-500 inter mb-2'>Uložených testů : 3</p>
                <div className="flex flex-col gap-y-2">
                    {/* Zaznamy testu 30 dni*/}
                    <div className="w-full bg-[#F1EAFF] rounded-lg min-h-16 flex flex-col md:flex-row items-center px-4 gap-y-2 md:gap-y-0 md:gap-x-4">
                        <p className="inter text-gray-500 text-sm">15.12.2024 13.54</p> {/* Datum */}
                        <p className="inter">Přijímací zkoušky / Simulace nanečisto</p> {/* Typ testu */}
                        <div className="flex gap-x-2 mt-2 md:mt-0">
                            <div className="flex items-center gap-x-1">
                                <CheckCircle color="#2DCA57" />
                                <p className="inter">30</p> {/* Pocet spravnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <XCircle color="#FB435B" />
                                <p className="inter">25</p> {/* Pocet spatnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <Hourglass color="#7263FF" />
                                <p className="inter">2h 35m</p> {/* Cas testu */}
                            </div>
                        </div>
                        <Eye className="mt-2 md:mt-0 self-center md:ml-auto" aria-label="View Details" /> {/* Detaily testu */}
                    </div>
                    <div className="w-full bg-[#F1EAFF] rounded-lg min-h-16 flex flex-col md:flex-row items-center px-4 gap-y-2 md:gap-y-0 md:gap-x-4">
                        <p className="inter text-gray-500 text-sm">15.12.2024 13.54</p> {/* Datum */}
                        <p className="inter">Přijímací zkoušky / Simulace nanečisto</p> {/* Typ testu */}
                        <div className="flex gap-x-2 mt-2 md:mt-0">
                            <div className="flex items-center gap-x-1">
                                <CheckCircle color="#2DCA57" />
                                <p className="inter">30</p> {/* Pocet spravnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <XCircle color="#FB435B" />
                                <p className="inter">25</p> {/* Pocet spatnych odpovedi */}
                            </div>
                            <div className="flex items-center gap-x-1">
                                <Hourglass color="#7263FF" />
                                <p className="inter">2h 35m</p> {/* Cas testu */}
                            </div>
                        </div>
                        <Eye className="mt-2 md:mt-0 self-center md:ml-auto" aria-label="View Details" /> {/* Detaily testu */}
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="">
                <p className='flex gap-x-2 text-[#FB435B] inter text-sm items-center'> <CrownSimple />Prémium funkce</p>
                <h3 className='inter font-semibold text-xl'>Testy za posledních 90 dní</h3>
                <p className='text-gray-500 inter mb-2 text-xl'>Odemkni si prémium funkci a získej ukládání až na 90 dní</p>
                <p className='mt-4 text-sm inter text-gray-500'>Testy starší než 90 dní se automatický odstraňují ze serveru, z důvodu šetření místa kup si premium a získej hlubší historii</p>
                {/*
                 Sem kdyztak dalsi ty testy
                 */}
                
            </div>
        </div>
    )
}

export default HistoryLogged