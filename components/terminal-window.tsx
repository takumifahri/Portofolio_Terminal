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
    <div className="relative flex justify-center items-center min-h-screen w-full bg-[#0D1117] p-0 py-4 sm:py-6 lg:py-8 px-2 sm:px-4 overflow-hidden">
      {/* Background glow effect with animated code particles */}
      {/* Background glow effect with animated code particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated grid background */}
        <div
          className="absolute inset-0 animate-grid-move opacity-5"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, #39FF14 25%, #39FF14 26%, transparent 27%, transparent 74%, #39FF14 75%, #39FF14 76%, transparent 77%, transparent),
                        linear-gradient(90deg, transparent 24%, #39FF14 25%, #39FF14 26%, transparent 27%, transparent 74%, #39FF14 75%, #39FF14 76%, transparent 77%, transparent)`,
            backgroundSize: '30px 30px'
          }}
        ></div>

        {/* Multiple animated pulsing glows */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-64 lg:w-96 h-40 sm:h-64 lg:h-96 bg-[#39FF14] rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[#00FFFF] rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 sm:w-56 lg:w-72 h-36 sm:h-56 lg:h-72 bg-[#FF3366] rounded-full blur-3xl opacity-15 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 sm:w-56 lg:w-80 h-40 sm:h-56 lg:h-80 bg-[#FFFF00] rounded-full blur-3xl opacity-10 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>

        {/* Dense code rain particles - 37 particles untuk lebih ramai! */}
        {/* Row 1 - Green */}
        <div className="absolute top-0 left-0 animate-float-down-slow text-[#39FF14]/70 font-mono text-xs delay-0">const build = () =&gt;</div>
        <div className="absolute top-10 left-1/4 animate-float-down-slower text-[#39FF14]/65 font-mono text-xs delay-300">let count = 0</div>
        <div className="absolute top-20 left-1/2 animate-float-down-slow text-[#39FF14]/75 font-mono text-xs delay-600">return success</div>
        <div className="absolute top-32 left-1/3 animate-float-down-slower text-[#39FF14]/60 font-mono text-xs delay-900">import &#123;&#125;</div>
        <div className="absolute top-1/4 left-1/6 animate-float-down-slow text-[#39FF14]/70 font-mono text-xs delay-200">function run()</div>

        {/* Row 2 - Cyan */}
        <div className="absolute top-5 right-1/3 animate-float-down-slow text-[#00FFFF]/70 font-mono text-xs delay-200">export default App</div>
        <div className="absolute top-24 right-1/4 animate-float-down-slower text-[#00FFFF]/65 font-mono text-xs delay-500">&lt;Component /&gt;</div>
        <div className="absolute top-40 right-1/2 animate-float-down-slow text-[#00FFFF]/60 font-mono text-xs delay-800">map()</div>
        <div className="absolute top-60 left-3/4 animate-float-down-slow text-[#00FFFF]/65 font-mono text-xs delay-700">if (success)</div>
        <div className="absolute top-1/3 right-1/3 animate-float-down-slower text-[#00FFFF]/70 font-mono text-xs delay-1200">setData()</div>
        <div className="absolute top-2/3 right-0 animate-float-down-slower text-[#00FFFF]/60 font-mono text-xs delay-850">getData()</div>

        {/* Row 3 - Yellow */}
        <div className="absolute top-1/4 left-1/3 animate-float-down-slow text-[#FFFF00]/60 font-mono text-xs delay-800">.then(resolve)</div>
        <div className="absolute top-72 right-10 animate-float-down-slower text-[#FFFF00]/55 font-mono text-xs delay-300">return true;</div>
        <div className="absolute top-1/2 right-1/3 animate-float-down-slower text-[#FFFF00]/50 font-mono text-xs delay-1800">await fetch()</div>
        <div className="absolute top-3/4 right-1/2 animate-float-down-slower text-[#FFFF00]/65 font-mono text-xs delay-1000">reduce()</div>
        <div className="absolute top-1/3 left-0 animate-float-down-slow text-[#FFFF00]/60 font-mono text-xs delay-500">function deploy()</div>

        {/* Row 4 - Red */}
        <div className="absolute top-0 right-1/3 animate-float-down-slow text-[#FF3366]/60 font-mono text-xs delay-600">catch(error)</div>
        <div className="absolute top-2/3 left-1/4 animate-float-down-slower text-[#FF3366]/55 font-mono text-xs delay-1100">console.log()</div>
        <div className="absolute top-1/2 left-1/3 animate-float-down-slow text-[#FF3366]/65 font-mono text-xs delay-700">filter()</div>
        <div className="absolute top-3/4 left-1/2 animate-float-down-slow text-[#FF3366]/60 font-mono text-xs delay-1300">throw new Error</div>
        <div className="absolute top-40 left-1/4 animate-float-down-slower text-[#FF3366]/70 font-mono text-xs delay-400">try &#123;</div>

        {/* Row 5 - Mixed */}
        <div className="absolute top-2/5 right-0 animate-float-down-slow text-[#39FF14]/70 font-mono text-xs delay-100">promise</div>
        <div className="absolute top-1/2 right-1/4 animate-float-down-slower text-[#00FFFF]/60 font-mono text-xs delay-400">.catch()</div>
        <div className="absolute top-3/5 right-1/3 animate-float-down-slow text-[#FFFF00]/65 font-mono text-xs delay-700">new Array()</div>
        <div className="absolute top-5/6 right-1/4 animate-float-down-slow text-[#FF3366]/65 font-mono text-xs delay-1150">&#125;</div>

        {/* Extra scattered - untuk lebih ramai */}
        <div className="absolute top-1/6 right-1/6 animate-float-down-slower text-[#39FF14]/55 font-mono text-xs delay-1400">async ()</div>
        <div className="absolute top-1/2 left-0 animate-float-down-slow text-[#00FFFF]/65 font-mono text-xs delay-450">resolve()</div>
        <div className="absolute top-2/3 right-1/3 animate-float-down-slower text-[#FFFF00]/60 font-mono text-xs delay-950">dispatch()</div>
        <div className="absolute top-1/4 right-1/3 animate-float-down-slow text-[#FF3366]/60 font-mono text-xs delay-250">for (let i)</div>
      </div>

      <div className="relative w-full max-w-5xl h-[90vh] sm:h-[85vh] bg-[#0D1117] flex flex-col z-10 border border-[#1a1f2e] sm:border-2 rounded-lg shadow-lg sm:shadow-2xl shadow-[#39FF14]/10 sm:shadow-[#39FF14]/20 overflow-hidden">
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
    </div >
  );
}