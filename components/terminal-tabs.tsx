'use client';

import React from 'react';
import { Tab } from './use-tabs';

interface TerminalTabsProps {
  tabs: Tab[];
  activeTab: string;
  openTabs: string[];
  onTabSwitch: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
  onToggleInput?: () => void;
  inputVisible?: boolean;
}

export default function TerminalTabs({
  tabs,
  activeTab,
  openTabs,
  onTabSwitch,
  onTabClose,
  onToggleInput,
  inputVisible,
}: TerminalTabsProps) {
  const visibleTabs = tabs.filter(tab => openTabs.includes(tab.id));

  return (
     <div className="flex items-center bg-[#0D1117] border-b border-[#1a1f2e] overflow-x-auto scrollbar-hide">
      {visibleTabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <div
            key={tab.id}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 border-r border-[#1a1f2e] cursor-pointer transition-all group relative whitespace-nowrap text-xs sm:text-sm ${isActive
                ? 'bg-[#1a1f2e] text-[#39FF14] neon-glow-green shadow-lg shadow-[#39FF14]/30'
                : 'text-[#666666] hover:text-[#00FFFF] hover:bg-[#0D1117]/50'
              }`}
            onClick={() => onTabSwitch(tab.id)}
          >
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent"></div>
            )}

            <span className={`hidden sm:inline text-lg transition-all ${isActive ? 'text-[#39FF14]' : 'text-[#666666] group-hover:text-[#00FFFF]'}`}>
              [{tab.icon}]
            </span>
            <span className="font-mono">{tab.label}</span>

            {/* Close button - jangan tampilkan untuk home tab */}
            {tab.id !== 'home' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTabClose(tab.id);
                }}
                className="ml-0.5 sm:ml-1 text-[#666666] hover:text-[#FF3366] text-xs sm:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Close ${tab.label} tab`}
              >
                ✕
              </button>
            )}
          </div>
        );
      })}
      {/* Plus button untuk buka tab baru */}
      <button
        onClick={onToggleInput}
        className={`ml-auto px-3 py-2 font-mono text-sm transition-all ${
          inputVisible
            ? 'text-[#39FF14] bg-[#1a1f2e] hover:shadow-lg hover:shadow-[#39FF14]/50'
            : 'text-[#00FFFF] hover:text-[#39FF14] hover:bg-[#1a1f2e]'
        }`}
        title={inputVisible ? 'Close input' : 'Open input'}
      >
        {inputVisible ? '✕' : '+'}
      </button>
    </div>
  );
}