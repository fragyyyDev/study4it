import { ArrowCircleRight, CrownSimple, Eye } from '@phosphor-icons/react'
import React from 'react'

const TestScreen = () => {
    return (
        <div>
            <h2 className="inter text-2xl text-dark font-bold tracking-tight">Testy</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div>
                <h2 className="inter text-xl font-bold tracking-tight text-dark">Přijímací zkoušky</h2>
                <p className="inter text-text tracking-[-0.02em] font-medium">Testy a úlohy pro základní školy a gymnázia</p>
                <div className="flex flex-wrap w-full gap-4 h-auto mt-2">
                    <div className="p-4 flex-1 h-100 min-w-[300px] bg-[#F1EAFF] rounded-lg">
                        <h3 className='inter font-bold text-xl mb-2 text-dark tracking-tight'>Simulace nanečisto</h3>
                        <p className='text-text text-sm font-medium inter tracking-[-0.02em]'>
                            Co nejvíce důvěryhodná simulace toho, jak probíhají zkoušky na školách.
                            Zde nikdo nestopuje čas a záleží to jen na tobě
                        </p>
                        <p className='mt-3 inter font-semibold text-dark tracking-[-0.01em]'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                            <li>Časomíra 130 min celkem (bez stopování)</li>
                            <li>Úlohy z matematiky a českého jazyka</li>
                            <li>15 minut dobrovolnou pauzu mezi předměty</li>
                            <li>Úlohy různého typu, délky a obtížnosti</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-md text-white flex inter text-sm items-center justify-center mt-4 w-full gap-x-2 leading-6 tracking-[-0.02em] hover:bg-primarydark active:scale-[0.98] transition-all'>Začni procvičovat  <ArrowCircleRight size={18} /></button>
                    </div>
                    <div className="p-4 flex-1 h-100 min-w-[300px] bg-[#F1EAFF] rounded-lg">
                        <h3 className='inter font-bold text-xl mb-2 text-dark tracking-tight'>Mírný režim</h3>
                        <p className='text-text text-sm inter font-medium tracking-[-0.02em]'>
                            Odpočiň si a zároveň procvičuj své znalosti do přijímacích zkoušek. Zde můžeš své odpovědi opravovat a nechat si dávat nápovědy
                        </p>
                        <p className='mt-3 inter font-semibold text-dark tracking-[-0.01em]'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                            <li>Časomíra 130 min celkem (se stopováním)</li>
                            <li>Úlohy z matematiky a českého jazyka</li>
                            <li>Neomezeně dlouhá pauza</li>
                            <li>Úlohy různého typu, délky a obtížnosti</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-md text-white flex inter text-sm items-center justify-center mt-4 w-full gap-x-2 leading-6 tracking-[-0.02em] hover:bg-primarydark active:scale-[0.98] transition-all'>Začni procvičovat  <ArrowCircleRight size={18} /></button>
                    </div>
                    <div className="p-4 flex-1 h-100 min-w-[300px] bg-[#F1EAFF] rounded-lg">
                        <h3 className='inter font-bold text-xl mb-2 text-dark tracking-tight'>Zen režim</h3>
                        <p className='text-text text-sm inter font-medium tracking-[-0.02em]'>
                            Zde jsi ty pánem času. Můžeš si nastavit jak dlouho chceš trénovat a jaké předměty tě zajímají. Zde se můžeš učit a zároveň odpočívat
                        </p>
                        <p className='mt-3 inter font-semibold text-dark tracking-[-0.01em]'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                            <li>Látku nebo předměty tebou navolené</li>
                            <li>Buď pánem svého času</li>
                            <li>Neomezené opakování</li>
                            <li>Pokročilé rady a nápovědy s použitím Lofee AI</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-md text-white flex inter text-sm items-center justify-center mt-4 w-full gap-x-2 leading-6 tracking-[-0.02em] hover:bg-primarydark active:scale-[0.98] transition-all'>Začni procvičovat  <ArrowCircleRight size={18} /></button>
                    </div>
                    <div className="p-4 flex-1 h-100 min-w-full bg-[#F1EAFF] rounded-lg">
                        <p className='flex gap-x-2 text-[#FB435B] inter text-sm items-center mb-2'> <CrownSimple size={18} />Prémium funkce</p>
                        <h3 className='inter font-bold text-xl mb-2 text-dark tracking-tight'>Vlastní režim</h3>
                        <p className='text-text text-sm inter font-medium tracking-[-0.02em]'>
                            Uč se jak to tobě vyhovuje
                            Co nejvíce důvěryhodná simulace toho, jak probíhají zkoušky na školách. Zde nikdo čas nestopuje a záleží jen na tobě
                        </p>
                        <p className='mt-3 inter font-semibold text-dark tracking-[-0.01em]'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                            <li>Látku nebo předměty tebou navolené</li>
                            <li>Buď pánem svého času, nastav si vlastní limity a délky časomíry</li>
                            <li>Neomezené opakování</li>
                            <li>Pokročilé rady a nápovědy s použitím Lofee AI</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-md text-white flex inter text-sm items-center justify-center mt-4 w-full gap-x-2 leading-6 tracking-[-0.02em] hover:bg-primarydark active:scale-[0.98] transition-all'>Začni procvičovat  <ArrowCircleRight size={18} /></button>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6">
            </div>

            <div>
                <h2 className="inter text-xl font-bold tracking-tight text-dark">Maturitní zkoušky</h2>
                <p className="inter text-text tracking-[-0.02em] font-medium">Pro středoškoláky a gympláky pro opakování</p>
                <div className="flex flex-wrap w-full gap-4 h-auto mt-2">
                    <div className="p-4 flex-1 h-100 min-w-full bg-[#F1EAFF] rounded-lg">
                        <p className='flex gap-x-2 text-[#7263FF] inter text-sm items-center mb-2'> <Eye size={18} />Preview </p>
                        <h3 className='inter font-bold text-xl mb-2 text-dark tracking-tight'>Nekonečný režim</h3>
                        <p className='text-text text-sm inter font-medium tracking-[-0.02em]'>
                            Pro starší zde máme první použitelnou verzi, se kterou se můžeš naučit maturitu. Neustále přidáváme nové otázky do databáze a opravujeme chyby, které jsme tam nasekali, Nezapomeň nám chyby na které narazíš hlásit
                        </p>
                        <p className='mt-3 inter font-semibold text-dark tracking-[-0.01em]'>Obsahuje:</p>
                        <ul className="inter list-disc list-inside text-sm ml-4 text-dark tracking-[-0.01em]">
                            <li>Nové otázky přizpůsobené těm maturitním</li>
                            <li>Chyby a problémy</li>
                            <li>Neomezené opakování</li>
                            <li>Pokročilé rady a nápovědy s použitím Lofee AI</li>
                        </ul>
                        <button className='p-2 bg-[#7263FF] rounded-md text-white flex inter text-sm items-center justify-center mt-4 w-full gap-x-2 leading-6 tracking-[-0.02em] hover:bg-primarydark active:scale-[0.98] transition-all'>Začni procvičovat  <ArrowCircleRight size={18} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestScreen
