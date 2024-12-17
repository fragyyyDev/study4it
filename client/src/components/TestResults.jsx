import { X } from '@phosphor-icons/react';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

function TestResults({ correctAnswers, wrongAnswers, deleteSession }) {
    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold inter">Výsledek tvého testu</h2>
            <div className="w-full h-[1px] bg-[#F1EAFF] my-6"></div>
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
