'use client';

import React from 'react';

export default function SkillsTab() {
  const skillsData = [
    {
      category: 'Projects',
      icon: ' ',
      color: 'terminal-green',
      items: [
        {
          year: '2026',
          title: 'JR Konveksi Remake',
          description: 'E-commerce & order management system for tailoring business'
        }
      ]
    },
    {
      category: 'Hard Skills',
      icon: ' ',
      color: 'terminal-cyan',
      items: [
        {
          year: '2025',
          title: 'Basic Go-Lang for Back-End Developer',
          description: 'Backend development fundamentals using Go'
        },
        {
          year: '2025',
          title: 'Belajar Dasar Visualisasi Data',
          description: 'Data visualization techniques and best practices'
        },
        {
          year: '2025',
          title: 'Memulai Pemrograman dengan Python',
          description: 'Python programming fundamentals'
        },
        {
          year: '2025',
          title: 'Memulai Pemrograman Dengan Java',
          description: 'Java programming fundamentals'
        },
        {
          year: '2024',
          title: 'Belajar Dasar AI',
          description: 'Artificial Intelligence basics and concepts'
        },
        {
          year: '2024',
          title: 'Belajar Back-End Pemula dengan JavaScript',
          description: 'Backend development with JavaScript/Node.js'
        },
        {
          year: '2024',
          title: 'Belajar Dasar Pemrograman JavaScript',
          description: 'JavaScript programming fundamentals'
        }
      ]
    },
    {
      category: 'Soft Skills',
      icon: ' ',
      color: 'terminal-yellow',
      items: [
        {
          year: '2026',
          title: 'Introduction to Financial Literacy - DBS Program Dicoding',
          description: 'Financial literacy and business acumen'
        },
        {
          year: '2025',
          title: 'Financial Literacy 101 (Advance)',
          description: 'Advanced financial planning and management'
        },
        {
          year: '2023',
          title: 'Japanese Language Proficiency Test - N5',
          description: 'JLPT N5 Japanese language certification'
        }
      ]
    },
    {
      category: 'Achievements',
      icon: ' ',
      color: 'terminal-red',
      items: [
        {
          year: '2025',
          title: '1st Place - ITASE Web Development Competition',
          description: 'Telkom University Purwokerto | Full-stack development, problem-solving, and innovative project implementation'
        },
        {
          year: '2024',
          title: '1st Place - Business Plan Management Competition',
          description: 'Universitas Negeri Jakarta | Strategic planning, business modeling, and presentation skills'
        },
        {
          year: '2024',
          title: '1st Runner-up - Web Development Competition',
          description: 'FIT Competition, Universitas Kristen Satya Wacana | Technical skills and innovative project implementation'
        }
      ]
    }
  ];

  const hardSkills = [
    'PHP/Laravel',
    'Python/FastAPI',
    'Go-Lang',
    'Java',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'REST APIs',
    'System Design',
    'AI Basics',
    'Data Visualization'
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Project Management',
    'Mentoring',
    'Leadership',
    'Japanese (N5)',
    'Financial Literacy'
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Title */}
      <div className="border-b border-[#1a1f2e] pb-3 sm:pb-4">
        <div className="terminal-cyan font-mono text-sm sm:text-lg neon-glow-cyan">
          $ source skills.sh && display
        </div>
      </div>

      {/* Skills Categories */}
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {skillsData.map((section, sectionIdx) => (
          <div key={sectionIdx} className="space-y-3 sm:space-y-4">
            {/* Category Header */}
            <div className={`flex items-center gap-2 sm:gap-3 font-mono font-bold ${section.color}`}>
              <span className="text-lg sm:text-xl">{section.icon}</span>
              <span className="text-xs sm:text-sm lg:text-base">{section.category}</span>
              <span className="flex-1 border-b border-[#1a1f2e]"></span>
              <span className="text-[#666666] text-xs">({section.items.length})</span>
            </div>

            {/* Items List */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 ml-2 sm:ml-4">
              {section.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="border-l-2 border-[#39FF14]/50 hover:border-[#39FF14] pl-3 sm:pl-4 py-2 sm:py-2.5 transition-colors group"
                >
                  {/* Year Badge */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-1.5">
                    <span className="inline-block px-2 py-0.5 sm:py-1 bg-[#1a1f2e] border border-[#39FF14] rounded text-[#39FF14] font-mono text-[9px] xs:text-[10px] sm:text-xs">
                      {item.year}
                    </span>
                    <span className="text-[#00FFFF] text-xs group-hover:text-[#39FF14] transition-colors">→</span>
                  </div>

                  {/* Title */}
                  <div className="terminal-cyan font-mono font-bold text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">
                    {item.title}
                  </div>

                  {/* Description */}
                  <p className="text-[#888888] text-[9px] xs:text-xs sm:text-xs lg:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e]">
        <div className="terminal-green font-mono text-xs sm:text-sm neon-glow-green mb-3 sm:mb-4">
          $ cat summary.stats
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {[
            { label: 'Certifications', value: '10+' },
            { label: 'Achievements', value: '3' },
            { label: 'Projects', value: '2' },
            { label: 'Years Active', value: '2023-2026' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-2.5 sm:p-3 hover:border-[#39FF14] transition-colors">
              <div className="text-[#39FF14] font-mono text-[9px] xs:text-[10px] sm:text-xs font-bold truncate">
                {stat.label}
              </div>
              <div className="text-[#00FFFF] font-mono font-bold text-sm sm:text-base lg:text-lg mt-1 truncate">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hard Skills Tech Stack */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e]">
        <div className="terminal-cyan font-mono text-xs sm:text-sm neon-glow-cyan mb-3 sm:mb-4">
          $ echo $HARD_SKILLS
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {hardSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 sm:px-3 py-1 bg-[#1a1f2e] border border-[#00FFFF]/50 rounded text-[#00FFFF] text-[8px] xs:text-[9px] sm:text-xs font-mono hover:border-[#00FFFF] hover:text-[#39FF14] hover:shadow-lg hover:shadow-[#00FFFF]/30 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e]">
        <div className="terminal-yellow font-mono text-xs sm:text-sm neon-glow-yellow mb-3 sm:mb-4">
          $ echo $SOFT_SKILLS
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 sm:px-3 py-1 bg-[#1a1f2e] border border-[#FFFF00]/50 rounded text-[#FFFF00] text-[8px] xs:text-[9px] sm:text-xs font-mono hover:border-[#FFFF00] hover:text-[#39FF14] hover:shadow-lg hover:shadow-[#FFFF00]/30 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}