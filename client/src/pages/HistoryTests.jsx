import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import History from '../components/History';

const HistoryTests = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <Sidebar onVisibilityChange={setSidebarVisible} />
      <div
        className={`flex-1 transition-all duration-300 p-4 md:p-6 lg:p-8 xl:p-12 overflow-y-auto mt-12 ${isSidebarVisible
            ? "ml-[100vw] md:ml-[20vw] sm:ml-[30vw] lg:ml-[17.5vw] xl:ml-[17vw] 2xl:ml-[12vw]"
            : "ml-0"
          }`}
      >
        <History />
      </div>
    </div>
  );
};

export default HistoryTests;
