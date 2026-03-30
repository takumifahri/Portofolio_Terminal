'use client';

import React from 'react';

export default function RoadmapTab() {
  const roadmap = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      items: [
        'Master Web3 & Blockchain fundamentals',
        'Deploy 2 major projects to production',
        'Complete AWS Solutions Architect certification',
      ],
      color: 'terminal-green',
    },
    {
      quarter: 'Q2 2024',
      status: 'completed',
      items: [
        'Contribute to 5 open-source projects',
        'Speak at 2 tech conferences',
        'Build mobile app with React Native',
      ],
      color: 'terminal-green',
    },
    {
      quarter: 'Q3 2024',
      status: 'in-progress',
      items: [
        'Launch AI-powered SaaS product',
        'Establish mentorship program',
        'Optimize performance for 100+ projects',
      ],
      color: 'terminal-yellow',
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      items: [
        'Explore Machine Learning applications',
        'Build developer tools for open source',
        'Create educational content & courses',
      ],
      color: 'terminal-cyan',
    },
    {
      quarter: 'Q1 2025',
      status: 'planned',
      items: [
        'Start own software consultancy',
        'Develop full-stack framework',
        'Write technical book on web dev',
      ],
      color: 'terminal-blue',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'terminal-green';
      case 'in-progress':
        return 'terminal-yellow';
      default:
        return 'terminal-cyan';
    }
  };

  const getStatusSymbol = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '→';
      default:
        return '◆';
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-[#1a1f2e] pb-4">
        <div className="terminal-cyan font-mono text-lg neon-glow-cyan">
          $ cat development-roadmap.md
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="space-y-6">
        {roadmap.map((phase, index) => (
          <div key={index} className="relative">
            {/* Phase Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`text-lg font-bold font-mono ${getStatusColor(phase.status)}`}>
                {getStatusSymbol(phase.status)}
              </div>
              <div>
                <h3 className={`font-mono font-bold ${phase.color}`}>
                  {phase.quarter}
                </h3>
                <div className="text-[#666666] text-xs font-mono">
                  Status: <span className={`${getStatusColor(phase.status)}`}>
                    {phase.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Items List */}
            <div className="ml-6 space-y-2 pl-4 border-l-2 border-[#39FF14]/50">
              {phase.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex gap-3">
                  <span className="text-[#39FF14] flex-shrink-0">→</span>
                  <p className="text-[#888888] text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Connector */}
            {index < roadmap.length - 1 && (
              <div className="ml-6 h-8 border-l-2 border-[#1a1f2e] mt-4"></div>
            )}
          </div>
        ))}
      </div>

      {/* Long-term Vision */}
      <div className="mt-8 pt-4 border-t border-[#1a1f2e]">
        <div className="terminal-green font-mono text-sm neon-glow-green mb-3">
          $ echo $VISION
        </div>
        <div className="bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-4 text-[#888888] text-sm space-y-2">
          <p>
            My vision is to become a technology leader who creates innovative solutions 
            that solve real-world problems and empower others.
          </p>
          <p>
            I aim to build a consultancy that helps startups scale their products, while 
            also contributing to the open-source community and mentoring the next generation 
            of developers.
          </p>
        </div>
      </div>

      {/* Key Skills to Develop */}
      <div className="mt-6 pt-4 border-t border-[#1a1f2e]">
        <div className="terminal-yellow font-mono text-sm neon-glow-yellow mb-3">
          $ cat goals/skills-to-learn.txt
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {['AI/ML', 'Web3', 'System Design', 'Leadership', 'Business Skills', 'Cloud Architecture'].map((skill) => (
            <div
              key={skill}
              className="px-3 py-2 bg-[#1a1f2e] border border-[#00FFFF]/30 rounded text-[#00FFFF] text-xs font-mono text-center hover:border-[#00FFFF] transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
