import React, { useState } from 'react';
import { CheckCircle, XCircle, Confetti, SmileySad, SmileyMeh } from '@phosphor-icons/react';

export default function ResultInfoMessage({ correctAnswers, wrongAnswers }) {

    const totalQuestions = correctAnswers.length + wrongAnswers.length;

    let score = 0;
    if (totalQuestions > 0) {
        score = (correctAnswers.length + 1) / totalQuestions;
    }


    let status = 'není dobrý';
    if (score >= 0.75) {
        status = 'Je dobrý';
    } else if (score >= 0.5) {
        status = 'je nic moc, ale může být lepší i horší';
    } else if (score >= 0.25) {
        status = 'je špatný';
    }

    return (
        <div className="w-full flex justify-center items-center flex-col">
            {status === 'Je dobrý' && (
                <Confetti size={64} color="#2DCA57" />
            )}
            {status === 'je nic moc, ale může být lepší i horší' && (
                <SmileyMeh size={64} color="#FFD700" />
            )}
            {status === 'je špatný' && (
                <SmileySad size={64} color="#FFC107" />
            )}
            {status === 'není dobrý' && (
                <SmileySad size={64} color="#FB435B" />
            )}
            <h3 className='text-xl inter font-semibold text-center'>Test je u konce. a tvůj výsledek {status} </h3>
            <p className='text-gray-500 inter font-medium text-center'>
                {status === 'Je dobrý' && 'Jde vidět, že ti to jde. Jen tak dál! Pojď se ale s námi podívat na odpovědi a kde se ještě můžeš zlepšit.'}
                {status === 'je nic moc, ale může být lepší i horší' && 'Můžeš se zlepšit!'}
                {status === 'je špatný' && 'Bohužel, z tohoto výsledku nemáš dobré výsledky. Co takhle se na to znovu podívat a procvičit si, co ti nejde?'}
                {status === 'není dobrý' && 'Bohužel, z tohoto výsledku nemáš dobré výsledky. Co takhle se na to znovu podívat a procvičit si, co ti nejde?'}
            </p>
        </div>
    );
}
