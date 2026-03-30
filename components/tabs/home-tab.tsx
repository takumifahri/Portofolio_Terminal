// FILE 3: home-tab.tsx (ganti header ASCII dengan responsive versi)
'use client';

import React, { useState } from 'react';
import Typewriter from '../typewriter';

interface HomeTabProps {
  onTabSwitch?: (tabId: string) => void;
  hasShownAnimation?: boolean;
  onAnimationComplete?: () => void;
}

export default function HomeTab({
  onTabSwitch,
  hasShownAnimation = false,
  onAnimationComplete
}: HomeTabProps) {
  const [showCommand, setShowCommand] = useState(hasShownAnimation);

  const commands = [
    { id: 'about', label: 'about', desc: 'Learn my background', icon: '@' },
    { id: 'projects', label: 'projects', desc: 'See my portfolio', icon: '*' },
    { id: 'skills', label: 'skills', desc: 'Tech expertise', icon: '&' },
    { id: 'achievements', label: 'achievements', desc: 'Milestones', icon: '#' },
    { id: 'contact', label: 'contact', desc: 'Get in touch', icon: '!' },
  ];

  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
      {/* ASCII Art Header - RESPONSIVE VERSION */}
      <div className="terminal-green font-mono overflow-x-auto">
        <pre className="neon-glow-green whitespace-pre-wrap animate-pulse text-[9px] xs:text-[10px] sm:text-xs lg:text-sm inline-block min-w-full">
{`╔══════════════════════════════════════════════════════╗
║  !! Welcome to My Interactive Terminal Portfolio !!  ║
║  $ ./greet.sh                                        ║
╚══════════════════════════════════════════════════════╝`}
        </pre>
      </div>

      {/* Typewriter Greeting */}
      <div className="space-y-2 sm:space-y-3">
        <div className="terminal-green font-mono text-xs sm:text-sm lg:text-base overflow-x-auto">
          <span className="terminal-cyan">fahri@portfolio</span>
          <span className="text-white">:</span>
          <span className="terminal-yellow">~</span>
          <span className="text-white">$</span>
          {' '}
          {!hasShownAnimation ? (
            <Typewriter
              text="Hello, I'm Fahri Radiansyah"
              speed={40}
              delay={300}
              className="terminal-green neon-glow-green font-bold"
              onComplete={() => {
                setShowCommand(true);
                onAnimationComplete?.();
              }}
            />
          ) : (
            <span className="terminal-green neon-glow-green font-bold">Hello, I'm Fahri Radiansyah</span>
          )}
        </div>
      </div>

      {/* Main Content - Animated */}
      {showCommand && (
        <div className="space-y-3 sm:space-y-4 lg:space-y-6 animate-fade-in">
          {/* Role & Status */}
          <div className="bg-[#1a1f2e] border-l-4 border-[#39FF14] p-2.5 sm:p-3 lg:p-4 rounded">
            <div className="terminal-cyan font-mono text-[9px] xs:text-[10px] sm:text-xs lg:text-sm mb-0.5 sm:mb-1">$ whoami</div>
            <div className="text-[#39FF14] font-mono font-bold text-xs sm:text-base lg:text-lg leading-tight">
              Backend Developer & System Design Enthusiast
            </div>
            <div className="text-[#00FFFF] font-mono text-[9px] xs:text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-1.5">
              Jakarta Timur, Indonesia | IPB University
            </div>
          </div>

          {/* Quick Bio */}
          <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
            <div className="terminal-green font-mono text-[9px] xs:text-[10px] sm:text-xs lg:text-sm neon-glow-green">
              $ cat bio.txt
            </div>
            <div className="ml-2 sm:ml-3 lg:ml-4 border-l-2 border-[#39FF14] pl-2 sm:pl-3 lg:pl-4 text-[#888888] space-y-1 sm:space-y-1.5">
              <p className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm leading-relaxed">
                Building scalable web applications with <span className="text-[#39FF14]">Laravel</span>,
                <span className="text-[#39FF14]"> FastAPI</span>, and <span className="text-[#39FF14]">Next.js</span>.
              </p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm leading-relaxed">
                Passionate about system architecture, clean code, and turning ideas into impactful digital products.
              </p>
            </div>
          </div>

          {/* Stats Grid - Enhanced */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3">
            {[
              { label: 'PROJECTS', value: '5+', unit: 'completed', color: 'border-[#39FF14] text-[#39FF14]' },
              { label: 'EXPERIENCE', value: '1.5Y+', unit: 'as developer', color: 'border-[#00FFFF] text-[#00FFFF]' },
              { label: 'TECH STACK', value: '15+', unit: 'languages & tools', color: 'border-[#FFFF00] text-[#FFFF00]' },
              { label: 'SKILLS', value: 'Intermediate', unit: 'backend focus', color: 'border-[#0099FF] text-[#0099FF]' },
            ].map((stat, i) => (
              <div key={i} className={`bg-[#1a1f2e] border ${stat.color}/50 p-2 sm:p-2.5 lg:p-3 rounded hover:border-[#39FF14] hover:shadow-lg hover:shadow-[#39FF14]/30 transition-all group cursor-pointer`}>
                <div className={`font-mono text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs font-bold group-hover:text-[#00FFFF] transition-colors truncate`}>
                  {stat.label}
                </div>
                <div className="text-sm sm:text-lg lg:text-2xl font-bold text-[#00FFFF] mt-1 group-hover:text-[#39FF14] transition-colors font-mono truncate">
                  {stat.value}
                </div>
                <div className="text-[#666666] text-[7px] xs:text-[8px] sm:text-[9px] lg:text-xs mt-0.5 truncate">
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Commands */}
          <div className="border-t border-[#1a1f2e] pt-3 sm:pt-4 lg:pt-6">
            <div className="terminal-cyan font-mono text-[9px] xs:text-[10px] sm:text-xs lg:text-sm neon-glow-cyan mb-2 sm:mb-3 lg:mb-4">
              $ ls commands/ --all
            </div>
            <div className="space-y-1 sm:space-y-1.5 lg:space-y-2">
              {commands.map((cmd) => (
                <div
                  key={cmd.id}
                  onClick={() => {
                    if (onTabSwitch) {
                      onTabSwitch(cmd.id);
                    }
                  }}
                  className="p-2 sm:p-2.5 lg:p-4 bg-[#1a1f2e] border border-[#39FF14]/50 rounded hover:border-[#39FF14] hover:bg-[#252b38] hover:shadow-lg hover:shadow-[#39FF14]/30 transition-all group cursor-pointer active:scale-95"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                    <span className="text-[#39FF14] font-bold text-xs sm:text-base lg:text-xl group-hover:text-[#00FFFF] transition-colors flex-shrink-0">[{cmd.icon}]</span>
                    <div className="flex-1 min-w-0">
                      <div className="terminal-green font-mono text-[8px] xs:text-[9px] sm:text-xs lg:text-sm font-bold group-hover:text-[#00FFFF] transition-colors truncate">
                        $ open {cmd.label}
                      </div>
                      <div className="text-[#666666] text-[7px] xs:text-[8px] sm:text-[9px] lg:text-xs truncate">{cmd.desc}</div>
                    </div>
                    <span className="text-[#00FFFF] text-xs sm:text-sm lg:text-base group-hover:text-[#39FF14] transition-colors flex-shrink-0">↵</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="bg-[#1a1f2e] border border-[#00FFFF]/30 p-2.5 sm:p-3 lg:p-4 rounded">
            <div className="terminal-yellow font-mono text-[9px] xs:text-[10px] sm:text-xs lg:text-sm neon-glow-yellow mb-2 sm:mb-3">
              $ echo $RANDOM_FACTS
            </div>
            <ul className="space-y-1 text-[#888888] text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs font-mono">
              <li>Learning: <span className="text-[#39FF14]">Go-Lang</span>, ML, DevOps, Linux</li>
              <li>Goal: Build impactful products that solve real problems</li>
              <li>Languages: Bahasa Indonesia, English, Japanese (N5)</li>
              <li>Love: Clean code, optimized systems, teamwork</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-1 sm:pt-2">
            <div className="terminal-green font-mono text-[8px] xs:text-[9px] sm:text-[10px] lg:text-sm neon-glow-green">
              $ Type <span className="text-[#00FFFF]">'open [tab]'</span> to explore!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}