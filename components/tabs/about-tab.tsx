'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

export default function AboutTab() {
  const timeline = [
    {
      year: 'Feb 2025 - Oct 2025',
      role: 'Lead Backend Developer',
      company: 'AGRIDATION 2025 - Bogor',
      description: 'National agricultural competition platform - Led backend architecture, built RESTful APIs using Laravel, managed participant data & evaluation workflows',
      color: 'terminal-green',
      link: 'https://github.com/takumifahri/agridation.git',
    },
    {
      year: 'Nov 2025 - Present',
      role: 'Full-Stack Developer',
      company: 'JR Konveksi - Depok',
      description: 'Tailoring business web app - Built order management system, admin dashboard, and product gallery with responsive design',
      color: 'terminal-cyan',
      link: 'https://jrkonveksi.takumifahri.my.id',
    },
    {
      year: 'Oct 2025 - Nov 2025',
      role: 'Full-Stack Developer',
      company: 'MAUNA V.1 - Purwokerto',
      description: 'Sign language learning platform with ML-powered gesture recognition using FastAPI backend & Next.js frontend',
      color: 'terminal-yellow',
      link: 'https://mauna.takumifahri.my.id',
    },
    {
      year: 'Nov 2024 - Feb 2025',
      role: 'Freelance IT Support',
      company: 'Hasta Sejahtera - Cibinong',
      description: 'Developed SIMPOL v2.0 building permit management system using Laravel 11 with document generation & advanced search',
      color: 'terminal-blue',
    },
    {
      year: 'Aug 2024 - Dec 2024',
      role: 'Frontend Developer',
      company: 'HeyCow - Bogor',
      description: 'Cattle management platform - Optimized frontend using Next.js, integrated RESTful APIs, implemented responsive UI',
      color: 'terminal-red',
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-6">
      {/* Title with Name */}
      <div className="border-b border-[#1a1f2e] pb-3 sm:pb-4">
        <div className="terminal-cyan font-mono text-sm sm:text-lg neon-glow-cyan">
          $ cat about.md
        </div>
        <div className="mt-2 text-[#39FF14] font-mono text-xs sm:text-sm">
          <span className="text-[#00FFFF]">&gt; </span>
          Fahri Radiansyah <span className="text-[#666666]">// takumi</span>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-2 sm:mt-4 ml-2 sm:ml-4 border-l-2 border-[#39FF14] pl-2 sm:pl-4 text-[#888888] space-y-2 sm:space-y-3">
        <p className="text-xs sm:text-sm leading-relaxed">
          Software Engineering student at <span className="text-[#39FF14]">IPB University</span> with a focus on backend development and system design.
        </p>
        <p className="text-xs sm:text-sm leading-relaxed">
          Experienced in building scalable web applications, adaptable, and eager to learn new technologies. Committed to delivering high-quality solutions and contributing to impactful digital products.
        </p>
      </div>

      {/* Download CV Section */}
      <div className="bg-[#1a1f2e] border-2 border-[#39FF14] rounded p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="terminal-green font-mono text-xs sm:text-sm neon-glow-green font-bold">
              $ ./download --cv
            </div>
            <p className="text-[#888888] text-xs sm:text-sm mt-1">
              Get my CV/Resume for more details
            </p>
          </div>
          <a
            href="/CV_Resume_Fahri_Radiansyah.pdf"
            download
            className="flex-shrink-0 flex items-center gap-2 bg-[#39FF14] hover:bg-[#00FFFF] text-[#0D1117] px-3 sm:px-4 py-2 rounded font-mono text-xs sm:text-sm font-bold transition-colors hover:shadow-lg hover:shadow-[#39FF14]/50"
          >
            <Download size={16} />
            <span className="hidden lg:block xs:inline">Download</span>
            <span className="xs:block lg:hidden">DL</span>
          </a>
        </div>
      </div>

      {/* Experience Header */}
      <div className="border-t border-[#1a1f2e] pt-3 sm:pt-4 mt-3 sm:mt-4">
        <div className="terminal-yellow font-mono text-xs sm:text-sm neon-glow-yellow">
          $ ls -la experience/
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="pl-4 sm:pl-6 border-l-2 border-[#39FF14] relative hover:border-[#00FFFF] transition-colors group cursor-pointer"
            onClick={() => item.link && window.open(item.link, '_blank')}
          >
            {/* Timeline dot */}
            <div className="absolute -left-2 sm:-left-2.5 top-[-18] sm:top-[-20] w-4 sm:w-5 h-4 sm:h-5 bg-[#39FF14] rounded-full shadow-lg shadow-[#39FF14]/50 group-hover:bg-[#00FFFF] transition-colors"></div>

            {/* Content */}
            <div className="space-y-0.5 sm:space-y-1">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                <span className={`font-mono font-bold text-xs sm:text-sm ${item.color}`}>
                  {item.year}
                </span>
                <span className="text-[#666666] text-xs">→</span>
                {item.link && <span className="text-[#00FFFF] text-xs">🔗</span>}
              </div>
              <div className="terminal-cyan font-mono font-bold text-xs sm:text-sm group-hover:text-[#00FFFF] transition-colors">
                {item.role}
              </div>
              <div className="text-[#888888] text-xs sm:text-sm font-mono">
                @ {item.company}
              </div>
              <div className="text-[#666666] text-xs sm:text-sm mt-1">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#1a1f2e] space-y-4 sm:space-y-6">
        <div className="terminal-cyan font-mono text-xs sm:text-sm neon-glow-cyan">
          $ echo $TECH_STACK
        </div>

        {/* Languages */}
        <div>
          <div className="terminal-yellow font-mono text-[9px] xs:text-[10px] sm:text-xs neon-glow-yellow mb-2 sm:mb-3">
            Languages
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['PHP', 'JavaScript', 'Python', 'Go-Lang', 'Java', 'TypeScript'].map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 bg-[#1a1f2e] border border-[#39FF14] rounded text-[#39FF14] text-[9px] xs:text-[10px] sm:text-xs font-mono hover:border-[#00FFFF] hover:text-[#00FFFF] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <div className="terminal-green font-mono text-[9px] xs:text-[10px] sm:text-xs neon-glow-green mb-2 sm:mb-3">
            Backend & Framework
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['Laravel', 'FastAPI', 'Node.js', 'Express.js', 'RESTful API', 'System Architecture'].map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 bg-[#1a1f2e] border border-[#00FFFF] rounded text-[#00FFFF] text-[9px] xs:text-[10px] sm:text-xs font-mono hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <div className="terminal-cyan font-mono text-[9px] xs:text-[10px] sm:text-xs neon-glow-cyan mb-2 sm:mb-3">
            Frontend
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['Next.js', 'NUXT/Vue.js', 'React', 'Tailwind CSS'].map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 bg-[#1a1f2e] border border-[#FFFF00] rounded text-[#FFFF00] text-[9px] xs:text-[10px] sm:text-xs font-mono hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <div className="terminal-red font-mono text-[9px] xs:text-[10px] sm:text-xs mb-2 sm:mb-3" style={{ color: '#FF3366' }}>
            Database
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['PostgreSQL', 'MySQL'].map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 bg-[#1a1f2e] border border-[#FF3366] rounded text-[#FF3366] text-[9px] xs:text-[10px] sm:text-xs font-mono hover:border-[#00FFFF] hover:text-[#00FFFF] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Special Skills */}
        <div>
          <div className="terminal-yellow font-mono text-[9px] xs:text-[10px] sm:text-xs neon-glow-yellow mb-2 sm:mb-3">
            Specialization
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['System Design', 'API Development', 'Database Design'].map((skill) => (
              <span
                key={skill}
                className="px-2 sm:px-3 py-1 bg-[#1a1f2e] border border-[#0099FF] rounded text-[#0099FF] text-[9px] xs:text-[10px] sm:text-xs font-mono hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Personality Traits - Spider/Radar Chart */}
      <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#1a1f2e]">
        <div className="terminal-green font-mono text-xs sm:text-sm neon-glow-green mb-3 sm:mb-4">
          $ cat personality.traits
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Chart */}
          <div className="flex justify-center items-center bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-2 sm:p-4">
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={[
                { trait: 'Adaptive', level: 90 },
                { trait: 'Curious', level: 95 },
                { trait: 'Teamwork', level: 85 },
                { trait: 'Active', level: 88 },
              ]}>
                <PolarGrid stroke="#39FF14" strokeOpacity={0.3} />
                <PolarAngleAxis dataKey="trait" tick={{ fill: '#00FFFF', fontSize: 10 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#666666', fontSize: 8 }} />
                <Radar name="Level" dataKey="level" stroke="#39FF14" fill="#39FF14" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Traits Description */}
          <div className="space-y-2 sm:space-y-3">
            {[
              { name: 'Adaptive', desc: 'Quickly adjust to new technologies and work environments', level: 90 },
              { name: 'Curious', desc: 'Always eager to learn and explore new concepts', level: 95 },
              { name: 'Teamwork', desc: 'Collaborate effectively with team members', level: 85 },
              { name: 'Active', desc: 'Proactive in solving problems and taking initiatives', level: 88 }
            ].map((trait) => (
              <div key={trait.name} className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center justify-between">
                  <span className="terminal-cyan font-mono text-xs sm:text-sm">{trait.name}</span>
                  <span className="text-[#39FF14] font-mono text-[9px] xs:text-[10px] sm:text-xs">{trait.level}%</span>
                </div>
                <div className="w-full bg-[#0D1117] border border-[#39FF14]/30 rounded h-2">
                  <div
                    className="bg-gradient-to-r from-[#39FF14] to-[#00FFFF] h-full rounded"
                    style={{ width: `${trait.level}%` }}
                  ></div>
                </div>
                <p className="text-[#666666] text-[8px] xs:text-[9px] sm:text-xs leading-relaxed">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}