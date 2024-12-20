import { X } from '@phosphor-icons/react';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

function TestResults({ correctAnswers, wrongAnswers, deleteSession }) {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold inter">Výsledek tvého testu</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="progress-container my-4 mt-12">
                <div className="flex w-full justify-between">
                    <p className='inter font-medium'>
                         {correctAnswers.lenght} Správně z {correctAnswers.lenght + wrongAnswers.lenght}
                    </p>
                    <div className="flex items-center gap-x-4">
                        <p className='flex inter text-gray-500 items-center gap-x-2 font-medium text-sm'>
                            <Info color='black' size={16} onClick={() => setShowHints(!showHints)} className='cursor-pointer' />
                            Potřebuji nápovědu
                        </p>
                        <p className='flex inter text-[#7263FF] items-center gap-x-2 font-medium text-sm'>
                            <Sparkle color='#7263FF' size={16} />
                            Vysvětlit pomocí AI
                        </p>
                    </div>
                </div>

                <div className="w-full bg-[#F1EAFF] rounded-full h-2.5">
                    <div
                        className="bg-[#7263FF] h-2.5 rounded-full transition-all duration-500 ease-in-out"
                        style={{ width: `${((correctAnswers.lenght + 1) / (correctAnswers.lenght + wrongAnswers.lenght)) * 100}%` }}
                    ></div>
                </div>
            </div>
            <div className="section mb-6">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-x-5 inter">Správné odpovědi <CheckCircle color='#2DCA57' size={32} /></h3>
                {correctAnswers.length > 0 ? (
                    correctAnswers.map((item, index) => (
                        <div key={index} className="mb-2 p-4 bg-[#F1EAFF] rounded-xl">
                            <p><strong>Otázka:</strong> {item.question}</p>
                            <p><strong>Odpověď:</strong> {item.selectedAnswer}</p>
                        </div>
                    ))
                ) : (
                    <p>Žádné správné odpovědi ❌😥.</p>
                )}
            </div>

            <div className="section">
                <h3 className="text-2xl font-semibold mb-3 inter flex gap-x-5">Špatné odpovědi <X color='#FB435B' size={32} /></h3>
                {wrongAnswers.length > 0 ? (
                    wrongAnswers.map((item, index) => (
                        <div key={index} className="mb-2 p-4 bg-[#F1EAFF] rounded-xl">
                            <p><strong>Otázka:</strong> {item.question}</p>
                            <p><strong>Tvoje odpověď:</strong> {item.selectedAnswer}</p>
                            <p><strong>Správná odpověď:</strong> {item.correctAnswer}</p>
                        </div>
                    ))
                ) : (
                    <p>Všechno jen správně❗👀🧐</p>
                )}
            </div>

            <button
                onClick={deleteSession}
                className="mt-6 px-4 py-2 bg-[#7263FF] text-white rounded"
            >
                Ukončit test
            </button>
        </div>
    );
}

export default TestResults;
