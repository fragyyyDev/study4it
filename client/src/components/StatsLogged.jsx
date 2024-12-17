import { CaretDown, CaretUp } from '@phosphor-icons/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AreaChart from './AreaChart'
import AreaChartDouble from './AreaChartDouble'
import PieChartStats from './PieChart'
import BarChartStats from "./BarCharts"

const StatsLogged = () => {
    const [isDropDownActive, setIsDropDownActive] = useState(false)
    const [comboboxValue, setComboboxValue] = useState(1)
    const [comboboxTextValue, setComboboxTextValue] = useState("")

    useEffect(() => {
        if (comboboxValue === 1) {
            setComboboxTextValue("1 Týden")
        } else if (comboboxValue === 2) {
            setComboboxTextValue("1 Měsíc")
        } else if (comboboxValue === 3) {
            setComboboxTextValue("6 Měsíců")
        } else if (comboboxValue === 4) {
            setComboboxTextValue("1 Rok")
        }
    }, [comboboxValue])


    return (
        <div>
            <h2 className='text-2xl inter font-semibold'>Statistiky</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="w-72 flex flex-col justify-center mb-6">
                <button
                    onClick={() => setIsDropDownActive(!isDropDownActive)}
                    className="p-4 inter bg-[#F1EAFF] flex gap-x-2 items-center text-sm rounded-lg focus:outline-none justify-between"
                >
                    {comboboxTextValue}
                    <span
                        className={`transform transition-transform duration-300 ${isDropDownActive ? 'rotate-180' : 'rotate-0'
                            }`}
                    >
                        <CaretDown />
                    </span>
                </button>
                {isDropDownActive && (
                    <div className="bg-[#F1EAFF] rounded-lg flex flex-col">
                        <button onClick={() => { setComboboxValue(1) }} className='p-4 inter bg-[#F1EAFF] rounded-lg'>1 Týden</button>
                        <button onClick={() => { setComboboxValue(2) }} className='p-4 inter bg-[#F1EAFF] rounded-lg'>1 Měsíc</button>
                        <button onClick={() => { setComboboxValue(3) }} className='p-4 inter bg-[#F1EAFF] rounded-lg'>6 Měsíců</button>
                        <button onClick={() => { setComboboxValue(4) }} className='p-4 inter bg-[#F1EAFF] rounded-lg'>1 rok</button>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div className="">
                    <h3 className='text-xl inter font-semibold'>Celkové statistiky</h3>
                    <p className='text-gray-500 inter mb-2'>Jak moc jsi aktivní a kolik jsi toho již zvládnul</p>
                    <div className="full flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 h-auto lg:h-80">
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Počet hotových testů</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <AreaChart />
                        </div>
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Počet hodin strávených v testu</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <AreaChart />
                        </div>
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Počet hodin strávených v testu</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <AreaChartDouble />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
                <div className="">
                    <h3 className='text-xl inter font-semibold'>Aktivita</h3>
                    <p className='text-gray-500 inter mb-2'>Co preferuješ a jak ti to jde</p>
                    <div className="full flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 h-auto lg:h-80">
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Často procvičovaný předmět</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <PieChartStats />
                        </div>
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Častěji procvičovaný typ</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <PieChartStats />
                        </div>
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Počet hodin strávených v testu</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <AreaChartDouble />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
                <div className="">
                    <h3 className='text-xl inter font-semibold'>Předměty</h3>
                    <p className='text-gray-500 inter mb-2'>Kde ti to dělá problémy a co</p>
                    <p className='inter font-semibold'>Matematika</p>
                    <div className="full flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 h-auto lg:h-80">
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Často procvičovaný předmět</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <PieChartStats />
                        </div>
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-2/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Počet hodin strávených v testu</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <BarChartStats />
                        </div>
                    </div>
                    <p className='inter font-semibold mt-2'>Čeština</p>
                    <div className="full flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 h-auto lg:h-80">
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-2/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Počet hodin strávených v testu</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <BarChartStats />
                        </div>
                        <div className="bg-[#F1EAFF] rounded-lg lg:w-1/3 w-full min-h-72 p-4">
                            <p className='font-semibold inter'>Často procvičovaný předmět</p>
                            <p className='text-gray-500 text-sm inter'>Za posledních {comboboxTextValue}</p>
                            <PieChartStats />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default StatsLogged