import React, { useState } from 'react';
import { CheckCircle, XCircle } from '@phosphor-icons/react';

export default function TestResultsProgressBar({ correctAnswers, wrongAnswers }) {

    const totalQuestions = correctAnswers.length + wrongAnswers.length;

    // Calculate score (e.g., from 0 to 1)
    let score = 0;
    if (totalQuestions > 0) {
        score = (correctAnswers.length + 1) / totalQuestions;
    }

    // Determine the background color based on the score
    let barColor = '#FB435B'; // Red (default)
    if (score >= 0.75) {
        barColor = '#2DCA57'; // Green
    } else if (score >= 0.5) {
        barColor = '#FFD700'; // Yellow
    } else if (score >= 0.25) {
        barColor = '#FFA500'; // Orange
    }

    return (
        <div className="progress-container my-4 mt-12">
            <div className="flex w-full justify-between">
                <p className="inter font-medium">
                    Správně zodpovězených otázek
                </p>
                <div className="flex items-center gap-x-4">
                    <p
                        className="flex inter text-[#2DCA57] items-center gap-x-2 font-medium text-sm cursor-pointer"
                    >
                        <CheckCircle color="#2DCA57" size={16} />
                        {correctAnswers.length}
                    </p>
                    <p className="flex inter text-[#FB435B] items-center gap-x-2 font-medium text-sm">
                        <XCircle color="#FB435B" size={16} />
                        {wrongAnswers.length}
                    </p>
                </div>
            </div>

            <div className="w-full bg-[#F1EAFF] rounded-full h-2.5">
                <div
                    className="h-2.5 rounded-full transition-all duration-500 ease-in-out"
                    style={{
                        width:
                            totalQuestions === 0
                                ? '0%'
                                : `${score * 100}%`,
                        backgroundColor: barColor
                    }}
                />
            </div>
        </div>
    );
}
