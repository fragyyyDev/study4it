import { ArrowCircleRight, CrownSimple, Eye } from '@phosphor-icons/react'
import React from 'react'

const TestScreen = () => {
    return (
        <div>
            <h2 className="inter text-2xl font-semibold">Testy</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div>
                <h2 className="inter text-xl font-semibold">Přijímací zkoušky</h2>
                <p className="inter text-gray-500">Testy a úlohy pro základní školy a gymnázia</p>
                <div className="flex flex-wrap w-full gap-4 h-auto mt-2">
                    <div className="p-4 flex-1 min-h-[300px] min-w-[300px] bg-[#F1EAFF] rounded-lg shadow-md">
                        <h3 className='inter font-semibold text-xl mb-3'>Simulace nanečisto</h3>
                        <p className='text-gray-500 text-sm inter'>
                            Co nejvíce důvěryhodná simulace toho, jak probíhají zkoušky na školách.
                            Zde nikdo nestopuje čas a záleží to jen na tobě
                        </p>
                        <p className='mt-3 inter font-semibold'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4">
                            <li>Časomíra 130 min celkem (bez stopování)</li>
                            <li>Úlohy z matematiky a českého jazyka</li>
                            <li>15 minut dobrovolnou pauzu mezi předměty</li>
                            <li>Úlohy různého typu, délky a obtížnosti</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-xl text-white flex inter text-sm items-center my-2'>Začni procvičovat  <ArrowCircleRight size={24} className='mx-2' /></button>
                    </div>
                    <div className="p-4 flex-1 min-h-[300px] min-w-[300px] bg-[#F1EAFF] rounded-lg shadow-md">
                        <h3 className='inter font-semibold text-xl mb-3'>Mírný režim</h3>
                        <p className='text-gray-500 text-sm inter'>
                            Odpočiň si a zároveň procvičuj své znalosti do přijímacích zkoušek. Zde můžeš své odpovědi opravovat a nechat si dávat nápovědy
                        </p>
                        <p className='mt-3 inter font-semibold'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4">
                            <li>Časomíra 130 min celkem (se stopováním)</li>
                            <li>Úlohy z matematiky a českého jazyka</li>
                            <li>Neomezeně dlouhá pauza</li>
                            <li>Úlohy různého typu, délky a obtížnosti</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-xl text-white flex inter text-sm items-center my-2'>Začni procvičovat  <ArrowCircleRight size={24} className='mx-2' /></button>
                    </div>
                    <div className="p-4 flex-1 min-h-[300px] min-w-[300px] bg-[#F1EAFF] rounded-lg shadow-md">
                        <h3 className='inter font-semibold text-xl mb-3'>Zen</h3>
                        <p className='text-gray-500 text-sm inter'>
                            Co nejvíce důvěryhodná simulace toho, jak probíhají zkoušky na školách.
                            Zde nikdo nestopuje čas a záleží to jen na tobě
                        </p>
                        <p className='mt-3 inter font-semibold'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4">
                            <li>Časomíra 130 min celkem (bez stopování)</li>
                            <li>Úlohy z matematiky a českého jazyka</li>
                            <li>15 minut dobrovolnou pauzu mezi předměty</li>
                            <li>Úlohy různého typu, délky a obtížnosti</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-xl text-white flex inter text-sm items-center my-2'>Začni procvičovat  <ArrowCircleRight size={24} className='mx-2' /></button>
                    </div>
                    <div className="p-4 flex-1 min-h-[300px] min-w-full bg-[#F1EAFF] rounded-lg shadow-md">
                        <p className='flex gap-x-2 text-[#FB435B] inter text-sm items-center'> <CrownSimple />Prémium funkce</p>
                        <h3 className='inter font-semibold text-xl mb-3'>Vlastní režim</h3>
                        <p className='text-gray-500 text-sm inter'>
                            Uč se jak to tobě vyhovuje
                            Co nejvíce důvěryhodná simulace toho, jak probíhají zkoušky na školách. Zde nikdo čas nestopuje a záleží jen na tobě
                        </p>
                        <p className='mt-3 inter font-semibold'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4">
                            <li>Látku nebo předměty tebou navolené</li>
                            <li>Buď pánem svého času, nastav si vlastní limity a délky časomíry</li>
                            <li>Neomezené opakování</li>
                            <li>Pokročilé rady a nápovědy s použitím Lofee AI</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-xl text-white flex inter text-sm items-center my-2'>Začni procvičovat  <ArrowCircleRight size={24} className='mx-2' /></button>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6">
            </div>

            <div>
                <h2 className="inter text-xl font-semibold">Maturitní zkoušky</h2>
                <p className="inter text-gray-500">Pro středoškoláky a gympláky pro opakování</p>
                <div className="flex flex-wrap w-full gap-4 h-auto mt-2">
                    <div className="p-4 flex-1 h-[300px] min-w-full bg-[#F1EAFF] rounded-lg shadow-md">
                        <p className='flex gap-x-2 text-[#7263FF] inter text-sm items-center'> <Eye />Preview </p>
                        <h3 className='inter font-semibold text-xl mb-3'>Nekonečný režim</h3>
                        <p className='text-gray-500 text-sm inter'>
                            Pro starší zde máme první použitelnou verzi, se kterou se můžeš naučit maturitu. Neustále přidáváme nové otázky do databáze a opravujeme chyby, které jsme tam nasekali, Nezapomeň nám chyby na které narazíš hlásit
                        </p>
                        <p className='mt-3 inter font-semibold'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4">
                            <li>Nové otázky přizpůsobené těm maturitním</li>
                            <li>Chyby a problémy</li>
                            <li>Neomezené opakování</li>
                            <li>Pokročilé rady a nápovědy s použitím Lofee AI</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-xl text-white flex inter text-sm items-center my-2'>Začni procvičovat  <ArrowCircleRight size={24} className='mx-2' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestScreen
