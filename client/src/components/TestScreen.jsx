import React from 'react'

const TestScreen = () => {
    return (
        <div>
            <h2 className="inter text-2xl font-semibold">Testy</h2>
            <div className="w-full h-[1px] bg-[#E2E0FF] my-6"></div>
            <div>
                <h2 className="inter text-xl font-semibold">Přijímací zkoušky</h2>
                <p className="inter text-gray-500">Testy a úlohy pro základní školy a gymnázia</p>
                <div className="flex flex-wrap w-full gap-4 h-auto mt-2">
                    <div className="p-4 flex-1 h-[300px] min-w-[300px] bg-[#e2e0ff] rounded-lg shadow-md"></div>
                    <div className="p-4 flex-1 h-[300px] min-w-[300px] bg-[#e2e0ff] rounded-lg shadow-md"></div>
                    <div className="p-4 flex-1 h-[300px] min-w-[300px] bg-[#e2e0ff] rounded-lg shadow-md"></div>
                </div>
            </div>
        </div>
    )
}

export default TestScreen
