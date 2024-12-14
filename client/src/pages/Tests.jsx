import React from 'react';
import Sidebar from '../components/Sidebar';

const Tests = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar className="fixed top-0 left-0 md:w-[20vw] sm:w-[30vw] lg:w-[17.5vw] xl:w-[17vw] 2xl:w-[12vw] w-screen bg-[#F8F6FF] h-screen p-5 border-r-2 overflow-y-auto overflow-x-hidden z-10" />
      <div className="flex-1 ml-[100vw] md:ml-[20vw] sm:ml-[30vw] lg:ml-[17.5vw] xl:ml-[17vw] 2xl:ml-[12vw] p-16 h-full overflow-y-auto">
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
    </div>
  );
};

export default Tests;
