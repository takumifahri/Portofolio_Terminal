// FILE 1: terminal-window.tsx
'use client';

import React, { useState } from 'react';
import TerminalTabs from './terminal-tabs';
import TerminalContent from './terminal-content';
import { useTerminalTabs, DEFAULT_TABS } from './use-tabs';
import TerminalInput from './terminal-input';

export default function TerminalWindow() {
  const { activeTab, openTabs, switchTab, closeTab, processCommand } = useTerminalTabs();
  const [showInput, setShowInput] = useState(false);
  const [hasShownAnimation, setHasShownAnimation] = useState(false);

  return (
    <div className="flex flex-col h-dvh w-screen bg-[#0D1117] p-0 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-[#39FF14] rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-screen h-screen bg-[#0D1117] flex flex-col border border-[#1a1f2e] sm:border-2 shadow-lg sm:shadow-2xl shadow-[#39FF14]/10 sm:shadow-[#39FF14]/20 overflow-hidden">
        {/* Title Bar */}
        <div className="flex-shrink-0 bg-[#1a1f2e] border-b border-[#2d3748] px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 flex items-center justify-between hover:bg-[#252b38] transition-colors gap-2">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF3366] hover:shadow-lg hover:shadow-[#FF3366]/50 cursor-pointer transition-all"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFFF00] hover:shadow-lg hover:shadow-[#FFFF00]/50 cursor-pointer transition-all"></div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#39FF14] hover:shadow-lg hover:shadow-[#39FF14]/50 cursor-pointer transition-all"></div>
            <span className="ml-1 sm:ml-2 text-[#00FFFF] text-[10px] xs:text-xs sm:text-xs font-mono neon-glow-cyan hidden sm:block flex-shrink-0">
              user@portfolio ~ %
            </span>
            <span className="ml-1 sm:ml-2 text-[#00FFFF] text-[10px] font-mono neon-glow-cyan sm:hidden flex-shrink-0">
              ~/
            </span>
          </div>
          <div className="text-[#888888] text-[10px] xs:text-xs font-mono hover:text-[#39FF14] transition-colors cursor-default flex-shrink-0">
            Shell
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex-shrink-0 overflow-hidden">
          <TerminalTabs
            tabs={DEFAULT_TABS}
            activeTab={activeTab}
            openTabs={openTabs}
            onTabSwitch={switchTab}
            onTabClose={closeTab}
            onToggleInput={() => setShowInput(!showInput)}
            inputVisible={showInput}
          />
        </div>

        {/* Content Area - GROWS TO FILL AVAILABLE SPACE */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <TerminalContent 
            activeTab={activeTab} 
            onTabSwitch={switchTab}
            hasShownAnimation={hasShownAnimation}
            onAnimationComplete={() => setHasShownAnimation(true)}
          />
        </div>
        
        {/* Terminal Input - ONLY SHOWS WHEN OPEN */}
        {showInput && (
          <div className="flex-shrink-0 overflow-hidden">
            <TerminalInput
              onCommand={processCommand}
              onTabOpen={switchTab}
              onClose={() => setShowInput(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}