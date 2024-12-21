import { X, Info, Sparkle, XCircle } from '@phosphor-icons/react';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import React, { useState } from 'react';
import TestResultsProgressBar from './TestResultsProgressBar';
import ResultInfoMessage from './ResultInfoMessage';

function TestResults({ correctAnswers, wrongAnswers, deleteSession }) {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold inter">Test ukončen</h2>
            <p className=" inter">
                Přijímací zkoušky / Simulace Nanečisto
            </p>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
            <div className="w-full">
                <ResultInfoMessage
                    correctAnswers={correctAnswers}
                    wrongAnswers={wrongAnswers}
                />
                <TestResultsProgressBar correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
            </div>


            <div className="section my-6 mt-12">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-x-5 inter">
                    <CheckCircle color='#2DCA57' size={32} />Správné odpovědi
                </h3>
                <div className="">
                    {correctAnswers.length > 0 ? (
                        correctAnswers.map((item, index) => (
                            <div key={index} className="mb-2 p-4 bg-[#F8F6FF] rounded-xl flex justify-between">
                                <div className="w-2/5">
                                    <p className='inter font-semibold'>Otázka:</p>
                                    <p className='text-gray-500 inter'>{item.question}</p>
                                </div>
                                <div className="flex w-1/3 justify-between items-center">
                                    <div className="">
                                        <p className='inter font-semibold'>Odpověď:</p>
                                        <p className='text-gray-500 inter'> {item.selectedAnswer}</p>
                                    </div>
                                    <div className=" flex text-color-500 items-center gap-x-2">
                                        <Info color='#6b7280' size={24} />
                                        <p className='inter text-gray-500 hidden md:block'>Proč?</p>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p>Žádné správné odpovědi ❌😥.</p>
                    )}
                </div>

            </div>

            <div className="section">
                <h3 className="text-2xl font-semibold mb-3 inter flex gap-x-5">
                    Špatné odpovědi <X color='#FB435B' size={32} />
                </h3>
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
