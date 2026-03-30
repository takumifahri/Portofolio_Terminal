'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsTab() {
  const projects = [
    {
      name: 'SIMPOL v2.0',
      description: 'Web-based building permit management system for Cibinong administration',
      fullDescription: 'Information management system for building permit administration. Features include data duplication, document generation, advanced search with multi-variable validation, and system architecture design.',
      tech: ['PHP', 'Laravel 11', 'Frontend', 'Backend', 'Document Generation'],
      status: 'completed',
      color: 'terminal-green',
      period: 'Nov 2024 - Feb 2025',
      role: 'Freelance - IT Support',
      company: 'Hasta Sejahtera - Cibinong',
      link: null,
    },
    {
      name: 'MAUNA V.1',
      description: 'Sign language learning platform with ML-powered gesture recognition',
      fullDescription: 'Machine learning-powered web platform for sign language education. Features real-time gesture recognition, interactive learning modules, SIBI library, AI-driven practice lab, and gamified elements.',
      tech: ['FastAPI', 'PostgreSQL', 'Next.js', 'Machine Learning', 'TensorFlow'],
      status: 'completed',
      color: 'terminal-cyan',
      period: 'Oct 2025 - Nov 2025',
      role: 'Full-Stack Developer - Competition Project',
      company: 'Competition',
      link: 'https://mauna.takumifahri.my.id',
    },
    {
      name: 'JR Konveksi',
      description: 'Tailoring business web app with order management and product gallery',
      fullDescription: 'Fullstack web application featuring online ordering system, admin dashboard, product gallery, order management, responsive design, and system reliability.',
      tech: ['Next.js', 'Node.js', 'RESTful APIs', 'Responsive Design', 'Admin Dashboard'],
      status: 'in-progress',
      color: 'terminal-yellow',
      period: 'Nov 2025 - Present',
      role: 'Freelance - Full-Stack Developer',
      company: 'JR Konveksi - Depok',
      link: 'https://jrkonveksi.takumifahri.my.id',
    },
    {
      name: 'HeyCow',
      description: 'Cattle management platform with optimized frontend performance',
      fullDescription: 'Frontend development for cattle management platform. Built scalable frontend architecture with Next.js, integrated RESTful APIs, implemented responsive UI with focus on performance and usability.',
      tech: ['Next.js', 'React', 'RESTful APIs', 'Responsive UI', 'Performance Optimization'],
      status: 'completed',
      color: 'terminal-blue',
      period: 'Aug 2024 - Dec 2024',
      role: 'Frontend Developer - Academic Project',
      company: 'HeyCow - Bogor',
      link: null,
    },
    {
      name: 'AGRIDATION 2025',
      description: 'National agricultural competition management platform backend',
      fullDescription: 'National agricultural competition platform with scalable backend infrastructure. Features include participant selection, evaluation workflows, RESTful APIs, database design, and seamless frontend integration.',
      tech: ['Laravel', 'RESTful APIs', 'PostgreSQL', 'System Architecture', 'Backend'],
      status: 'completed',
      color: 'terminal-red',
      period: 'Feb 2025 - Oct 2025',
      role: 'Lead Backend Developer',
      company: 'AGRIDATION 2025 - Bogor',
      link: 'https://github.com/takumifahri/agridation.git',
    },
  ];

  const stats = [
    { label: 'Total Projects', value: '5', color: 'terminal-green' },
    { label: 'Tech Stack', value: '15+', color: 'terminal-cyan' },
    { label: 'Live Projects', value: '2', color: 'terminal-yellow' },
    { label: 'Years', value: '2024-2026', color: 'terminal-blue' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Title */}
      <div className="border-b border-[#1a1f2e] pb-3 sm:pb-4">
        <div className="terminal-cyan font-mono text-sm sm:text-lg neon-glow-cyan">
          $ find . -type project -name "*.tsx"
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-3 sm:p-4 hover:border-[#39FF14] transition-all hover:shadow-lg hover:shadow-[#39FF14]/20 group"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
              <div className="flex-1 min-w-0">
                <h3 className={`font-mono font-bold text-xs sm:text-sm ${project.color}`}>
                  {project.name}
                </h3>
                <p className="text-[#666666] text-[9px] xs:text-xs sm:text-xs mt-0.5 sm:mt-1 leading-tight">
                  {project.description}
                </p>
              </div>
              {project.status === 'in-progress' && (
                <div className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-[#FF3366]/20 border border-[#FF3366] rounded text-[#FF3366] text-[7px] xs:text-[8px] sm:text-xs font-mono whitespace-nowrap flex-shrink-0">
                  IN PROGRESS
                </div>
              )}
              {project.status === 'completed' && (
                <div className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-[#39FF14]/20 border border-[#39FF14] rounded text-[#39FF14] text-[7px] xs:text-[8px] sm:text-xs font-mono whitespace-nowrap flex-shrink-0">
                  COMPLETED
                </div>
              )}
            </div>

            {/* Full Description */}
            <p className="text-[#888888] text-[8px] xs:text-[9px] sm:text-xs mb-2 sm:mb-3 leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Meta Info */}
            <div className="text-[#666666] text-[8px] xs:text-[9px] sm:text-xs font-mono space-y-0.5 sm:space-y-1 mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-[#39FF14]/20">
              <div><span className="terminal-cyan">Period:</span> {project.period}</div>
              <div><span className="terminal-yellow">Role:</span> {project.role}</div>
              <div><span className={project.color}>Org:</span> {project.company}</div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2.5 sm:mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-[#0D1117] border border-[#39FF14]/50 rounded text-[#39FF14] text-[7px] xs:text-[8px] sm:text-xs font-mono group-hover:border-[#39FF14] group-hover:text-[#00FFFF] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#39FF14] hover:text-[#00FFFF] text-[8px] xs:text-[9px] sm:text-xs font-mono group-hover:opacity-100 transition-all"
              >
                {project.link.includes('github') ? (
                  <>
                    <Github size={12} />
                    View on GitHub
                  </>
                ) : (
                  <>
                    <ExternalLink size={12} />
                    Visit Live
                  </>
                )}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e]">
        <div className="terminal-green font-mono text-xs sm:text-sm neon-glow-green mb-3 sm:mb-4">
          $ cat projects.stats
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-2.5 sm:p-3 text-center hover:border-[#39FF14] transition-colors">
              <div className={`text-lg sm:text-2xl font-bold font-mono ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-[#666666] text-[8px] xs:text-[9px] sm:text-xs font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Facts */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e]">
        <div className="terminal-yellow font-mono text-xs sm:text-sm neon-glow-yellow mb-3 sm:mb-4">
          $ cat projects-insights.txt
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-[#1a1f2e] border border-[#00FFFF]/30 rounded p-2.5 sm:p-3">
            <div className="terminal-cyan font-mono text-[9px] xs:text-[10px] sm:text-xs font-bold mb-1 sm:mb-2">
              Backend Focus
            </div>
            <p className="text-[#888888] text-[8px] xs:text-[9px] sm:text-xs leading-relaxed">
              Strong expertise in Laravel, FastAPI, Node.js, and RESTful API development with scalable system architecture.
            </p>
          </div>

          <div className="bg-[#1a1f2e] border border-[#FFFF00]/30 rounded p-2.5 sm:p-3">
            <div className="terminal-yellow font-mono text-[9px] xs:text-[10px] sm:text-xs font-bold mb-1 sm:mb-2">
              Full-Stack Capability
            </div>
            <p className="text-[#888888] text-[8px] xs:text-[9px] sm:text-xs leading-relaxed">
              Proficient in both frontend (Next.js, React) and backend technologies with responsive design expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}