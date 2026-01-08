'use client'

import React, { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* HEADER */}
      <header className="no-print bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-lb-600 font-bold text-xl">
            <span className="p-1 border-2 border-lb-600 rounded">LB</span>
            <span className="text-gray-900">LegalBridge</span>
          </div>
          <span className="text-gray-300 text-2xl font-light">|</span>
          <h1 className="text-gray-700 font-medium">New Application Draft</h1>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.print()}
            className="bg-lb-600 hover:bg-lb-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Print / Save PDF</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-lb-100 text-lb-600 flex items-center justify-center font-bold border border-lb-200">
            D
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-auto flex justify-center p-8">
        {children}
      </main>
    </div>
  );
}