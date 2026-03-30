'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

export default function AchievementsTab() {
  const competitions = [
    {
      title: 'Participant – Student Creativity Program (PKM)',
      organization: 'IPB University',
      date: '2026',
      description: 'Innovation-driven research and creative project development',
      color: 'terminal-red',
    },
    {
      title: '1st Place – ITASE Web Development Competition',
      organization: 'Telkom University Purwokerto',
      date: '2025',
      description: 'Full-stack web development, problem-solving, and innovative project implementation',
      color: 'terminal-green',
    },
    {
      title: '1st Place – Business Plan Management Competition',
      organization: 'Universitas Negeri Jakarta',
      date: '2024',
      description: 'Strategic planning, business modeling, and presentation skills',
      color: 'terminal-yellow',
    },
    {
      title: '1st Runner-up – Web Development Competition (FIT)',
      organization: 'Universitas Kristen Satya Wacana',
      date: '2024',
      description: 'Technical skills and innovative project implementation',
      color: 'terminal-cyan',
    },
    {
      title: 'Participant – Indonesian Vocational Olympiad (OLIVIA)',
      organization: 'Web Development Track',
      date: '2024',
      description: 'National level vocational competition in web development',
      color: 'terminal-blue',
    },

  ];

  const organizationalRoles = [
    {
      title: 'Head of Multimedia Division',
      organization: 'HIMAVO Micro IT',
      organizationLink: 'https://www.instagram.com/micro_ipb/',
      date: 'Nov 2024 - Nov 2025',
      description: 'Led creative and digital content initiatives, managed team collaboration, oversaw design and media production',
      color: 'terminal-cyan',
    },
    {
      title: 'Competition Staff – IT FEST 2025',
      organization: 'HIMAVO Micro IT',
      organizationLink: 'https://www.instagram.com/micro_ipb/',
      date: 'Mar 2025',
      description: 'Managed finalist coordination, provided guidance during finals, ensured smooth event execution',
      color: 'terminal-yellow',
    },
    {
      title: 'Steering Committee – Micro Techno Education (MTE)',
      organization: 'HIMAVO Micro IT',
      organizationLink: 'https://www.instagram.com/micro_ipb/',
      date: 'Jan 2025',
      description: 'Oversaw program execution, guided planning and implementation, coordinated with multiple divisions',
      color: 'terminal-green',
    },
    {
      title: 'Webmaster Division Member',
      organization: 'HIMAVO Micro IT',
      organizationLink: 'https://www.instagram.com/micro_ipb/',
      date: 'Sep 2023',
      description: 'Built and maintained web applications, contributed to team-based development, enhanced internal systems',
      color: 'terminal-blue',
    },
  ];

  const stats = [
    { label: 'Competitions Won', value: '3', color: 'terminal-green' },
    { label: 'Competition Participations', value: '3+', color: 'terminal-yellow' },
    { label: 'Organizational Roles', value: '4', color: 'terminal-cyan' },
    { label: 'Years Active', value: '2023-2025', color: 'terminal-blue' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Title */}
      <div className="border-b border-[#1a1f2e] pb-3 sm:pb-4">
        <div className="terminal-cyan font-mono text-sm sm:text-lg neon-glow-cyan">
          $ ./achievements --display-all
        </div>
      </div>

      {/* Competition Achievements Section */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 sm:gap-3 font-mono font-bold text-[#39FF14]">
          <span className="text-lg sm:text-xl"></span>
          <span className="text-xs sm:text-sm lg:text-base">Competitions & Awards</span>
          <span className="flex-1 border-b border-[#1a1f2e]"></span>
          <span className="text-[#666666] text-xs">({competitions.length})</span>
        </div>

        <div className="space-y-2 sm:space-y-3 lg:space-y-4 ml-2 sm:ml-4">
          {competitions.map((achievement, index) => (
            <div
              key={index}
              className="border-l-2 border-[#39FF14]/50 hover:border-[#39FF14] pl-3 sm:pl-4 py-2 sm:py-3 transition-colors group"
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="flex-1 min-w-0">
                  <div className={`font-mono font-bold text-xs sm:text-sm ${achievement.color} group-hover:text-[#00FFFF] transition-colors truncate`}>
                    {achievement.title}
                  </div>
                  <div className="text-[#666666] text-[8px] xs:text-[9px] sm:text-xs font-mono mt-0.5">
                    @ {achievement.organization}
                  </div>
                </div>
              </div>

              <p className="text-[#888888] text-[9px] xs:text-xs sm:text-xs lg:text-sm leading-relaxed mb-1 sm:mb-1.5">
                {achievement.description}
              </p>

              <div className="inline-block px-2 py-0.5 sm:py-1 bg-[#1a1f2e] border border-[#39FF14] rounded text-[#39FF14] font-mono text-[8px] xs:text-[9px] sm:text-xs">
                {achievement.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organizational Experience Section */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e] space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 sm:gap-3 font-mono font-bold text-[#00FFFF]">
          <span className="text-lg sm:text-xl"></span>
          <span className="text-xs sm:text-sm lg:text-base">Organizational Leadership</span>
          <span className="flex-1 border-b border-[#1a1f2e]"></span>
          <span className="text-[#666666] text-xs">({organizationalRoles.length})</span>
        </div>

        <div className="space-y-2 sm:space-y-3 lg:space-y-4 ml-2 sm:ml-4">
          {organizationalRoles.map((role, index) => (
            <div
              key={index}
              className="border-l-2 border-[#00FFFF]/50 hover:border-[#00FFFF] pl-3 sm:pl-4 py-2 sm:py-3 transition-colors group"
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="flex-1 min-w-0">
                  <div className={`font-mono font-bold text-xs sm:text-sm ${role.color} group-hover:text-[#39FF14] transition-colors truncate`}>
                    {role.title}
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                    <span className="text-[#666666] text-[8px] xs:text-[9px] sm:text-xs font-mono">
                      @
                    </span>
                    <a
                      href={role.organizationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00FFFF] hover:text-[#39FF14] text-[8px] xs:text-[9px] sm:text-xs font-mono underline hover:no-underline transition-colors group/link flex items-center gap-0.5"
                      title="Visit HIMAVO Micro IT Instagram"
                    >
                      {role.organization}
                      <Instagram size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-[#888888] text-[9px] xs:text-xs sm:text-xs lg:text-sm leading-relaxed mb-1 sm:mb-1.5">
                {role.description}
              </p>

              <div className="inline-block px-2 py-0.5 sm:py-1 bg-[#1a1f2e] border border-[#00FFFF] rounded text-[#00FFFF] font-mono text-[8px] xs:text-[9px] sm:text-xs">
                {role.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e]">
        <div className="terminal-green font-mono text-xs sm:text-sm neon-glow-green mb-3 sm:mb-4">
          $ cat achievements.stats
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-2.5 sm:p-3 hover:border-[#39FF14] transition-colors`}>
              <div className={`font-mono text-[9px] xs:text-[10px] sm:text-xs font-bold truncate`}>
                {stat.label}
              </div>
              <div className={`font-mono font-bold text-sm sm:text-base lg:text-lg mt-1 truncate ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GPA & Education Highlight */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e]">
        <div className="terminal-yellow font-mono text-xs sm:text-sm neon-glow-yellow mb-3 sm:mb-4">
          $ cat education.status
        </div>

        <div className="bg-[#1a1f2e] border-2 border-[#39FF14] rounded p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="terminal-cyan font-mono text-xs sm:text-sm font-bold">
                Bachelor of Applied Science
              </div>
              <div className="text-[#888888] text-[9px] xs:text-xs sm:text-xs mt-1">
                Software Engineering
              </div>
              <div className="text-[#39FF14] font-mono font-bold text-sm sm:text-base mt-1">
                IPB University
              </div>
            </div>
            <div>
              <div className="terminal-cyan font-mono text-xs sm:text-sm font-bold">
                GPA
              </div>
              <div className="text-[#39FF14] font-mono font-bold text-2xl sm:text-3xl mt-1">
                3.51/4.00
              </div>
              <div className="text-[#888888] text-[9px] xs:text-xs sm:text-xs mt-1">
                Aug 2023 - Aug 2027
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}