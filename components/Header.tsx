
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-4 flex flex-col items-center">
      <div className="w-full max-w-2xl px-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-slate-800 text-lg tracking-tight">Men's Health Insider</span>
        </div>
        <div className="hidden md:flex items-center text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Special Health Report
        </div>
      </div>
    </header>
  );
};
