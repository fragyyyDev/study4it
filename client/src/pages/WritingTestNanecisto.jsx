import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TestWritingNanecisto from '../components/TestWritingNanecisto';

const WritingTestNanecisto = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <Sidebar onVisibilityChange={setSidebarVisible} />
      <div
        className={`flex-1 transition-all duration-300 p-4 md:p-6 lg:p-8 xl:p-12 overflow-y-auto mt-12 ${isSidebarVisible
          ? "ml-[100vw] md:ml-[30vw] sm:ml-[35vw] lg:ml-[25vw] xl:ml-[22vw] 2xl:ml-[17vw]"
          : "ml-0"
          }`}
      >
        <TestWritingNanecisto />
      </div>
    </div>
  );
};

export default WritingTestNanecisto;
