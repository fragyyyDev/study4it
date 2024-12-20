import { ArrowCircleRight, Coffee } from '@phosphor-icons/react'
import React from 'react'
import TestTimer from './TestTimer'; // Make sure this import is correct

const PauzaScreen = ({ expirationTime, onExpire, stageName, isPauseStage, onSkipPause }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className="flex flex-col items-center">
                <Coffee size={64} color='#7263FF' />
                <div className="my-2">
                    <TestTimer
                        expirationTime={expirationTime}
                        onExpire={onExpire}
                        stageName={stageName}
                        isPauseStage={isPauseStage}
                        onSkipPause={onSkipPause}
                        showTimer={true}
                        timerColor={"#7263FF"}
                    />
                </div>
                <h3 className='text-xl font-semibold inter text-center'>Nyní máš 15 minut na pauzu</h3>
                <p className='text-gray-500 inter font-medium w-2/3 text-center'>Přesně jako u přijímaček, tak i zde máš pauzu na odpočinutí. Využij ji, nebo rovnou pokračuj na další test.
                    Jakmile uplyne čas pauzy, spustí se ti automaticky další část testu.
                </p>
                <button className='rounded-lg text-white inter flex flex-row gap-x-2 items-center bg-[#7263FF] px-4 py-4 mt-4'
                    onClick={onSkipPause}
                >
                    Přeskočit pauzu a Pokračovat
                    <ArrowCircleRight/>
                </button>
            </div>
        </div>
    )
}

export default PauzaScreen
