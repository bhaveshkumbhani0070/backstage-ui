'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { sidebarDays } from '@/data/sidebarDays';
import { ChevronLeft } from 'lucide-react';

export default function LayoutWrapper({ children }) {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="theme-shell flex min-h-0 flex-1 flex-col bg-[#F8F9FA]">
      <div className="theme-subheader shrink-0 border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="flex items-center justify-between lg:hidden">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:text-black">
            <ChevronLeft className="h-4 w-4" />
          </button>

          <h2 className="px-2 text-center text-sm font-bold text-gray-800 sm:px-3 sm:text-base">
            9-Day Fitness Challenge
          </h2>

          <div className="flex h-8 w-8 cursor-help items-center justify-center rounded-full border border-gray-200 bg-white text-[9px] font-black text-gray-500">
            i
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-1 font-semibold text-gray-600 transition-colors hover:text-black">
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="h-6 w-[1px] bg-gray-200" />
            <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-bold shadow-sm">
              Day {selectedDay} of {sidebarDays.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-gray-800">9-Day Fitness Challenge</h2>
            <div className="flex h-5 w-5 cursor-help items-center justify-center rounded-full border-2 border-gray-400 text-[10px] font-black text-gray-500">
              i
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
        <Sidebar selectedDay={selectedDay} onSelectDay={setSelectedDay} />
        {children}
      </div>
    </div>
  );
}
