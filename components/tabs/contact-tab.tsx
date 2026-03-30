'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactLinks = [
    {
      name: 'Email',
      value: 'fahri.radiansyah@gmail.com',
      link: 'mailto:fahri.radiansyah@gmail.com',
      icon: Mail,
      color: 'terminal-green',
      iconColor: '#39FF14',
    },
    {
      name: 'GitHub',
      value: 'github.com/takumifahri',
      link: 'https://github.com/takumifahri',
      icon: Github,
      color: 'terminal-cyan',
      iconColor: '#00FFFF',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/fahri-radiansyah-82b135295',
      link: 'https://www.linkedin.com/in/fahri-radiansyah-82b135295/',
      icon: Linkedin,
      color: 'terminal-yellow',
      iconColor: '#FFFF00',
    },
    {
      name: 'Instagram',
      value: '@fhri.r_',
      link: 'https://instagram.com/fhri',
      icon: Instagram,
      color: 'terminal-blue',
      iconColor: '#0099FF',
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Title */}
      <div className="border-b border-[#1a1f2e] pb-3 sm:pb-4">
        <div className="terminal-cyan font-mono text-sm sm:text-lg neon-glow-cyan">
          $ ./contact.sh
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Contact Information */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <div className="terminal-yellow font-mono text-xs sm:text-sm neon-glow-yellow mb-3 sm:mb-4">
              $ cat contact-info.txt
            </div>
            <div className="space-y-2 sm:space-y-3">
              {contactLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-2.5 sm:p-3 hover:border-[#39FF14] hover:shadow-lg hover:shadow-[#39FF14]/30 transition-all cursor-pointer">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <IconComponent 
                          size={20} 
                          style={{ color: link.iconColor }}
                          className="flex-shrink-0 group-hover:scale-110 transition-transform"
                        />
                        <div className="flex-1 min-w-0">
                          <div className={`font-mono text-[9px] xs:text-[10px] sm:text-xs ${link.color} group-hover:text-[#00FFFF] transition-colors`}>
                            {link.name}
                          </div>
                          <div className="text-[#666666] text-[8px] xs:text-[9px] sm:text-xs font-mono group-hover:text-[#888888] transition-colors truncate">
                            {link.value}
                          </div>
                        </div>
                        <span className="text-[#39FF14] group-hover:text-[#00FFFF] transition-colors flex-shrink-0 text-xs sm:text-sm">
                          ↗
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-[#1a1f2e] border border-[#39FF14]/30 rounded p-2.5 sm:p-3 lg:p-4">
            <div className="terminal-green font-mono text-xs sm:text-sm mb-2 sm:mb-3 neon-glow-green">
              $ echo $AVAILABILITY
            </div>
            <div className="text-[#888888] text-[9px] xs:text-xs sm:text-xs lg:text-sm space-y-1.5 sm:space-y-2">
              <p>Open to opportunities in:</p>
              <ul className="ml-3 sm:ml-4 space-y-1">
                <li>• Full-time roles</li>
                <li>• Consulting projects</li>
                <li>• Open source contributions</li>
                <li>• Mentorship & speaking</li>
              </ul>
            </div>
          </div>

          {/* Quick Response */}
          <div className="bg-[#1a1f2e] border border-[#00FFFF]/30 rounded p-2.5 sm:p-3 lg:p-4">
            <div className="terminal-cyan font-mono text-xs sm:text-sm mb-2 sm:mb-3 neon-glow-cyan">
              $ cat response-time.txt
            </div>
            <div className="text-[#888888] text-[9px] xs:text-xs sm:text-xs lg:text-sm leading-relaxed">
              I typically respond to messages within 24-48 hours.
              For urgent matters, reach out on LinkedIn or Instagram.
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 lg:space-y-4">
            <div>
              <label className="terminal-green font-mono text-[9px] xs:text-[10px] sm:text-xs block mb-1.5 sm:mb-2">
                $ name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1f2e] border border-[#39FF14]/30 rounded px-2.5 sm:px-3 py-1.5 sm:py-2 text-[#888888] font-mono text-[9px] xs:text-xs sm:text-xs focus:outline-none focus:border-[#39FF14] transition-colors placeholder:text-[#666666]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="terminal-cyan font-mono text-[9px] xs:text-[10px] sm:text-xs block mb-1.5 sm:mb-2">
                $ email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1f2e] border border-[#00FFFF]/30 rounded px-2.5 sm:px-3 py-1.5 sm:py-2 text-[#888888] font-mono text-[9px] xs:text-xs sm:text-xs focus:outline-none focus:border-[#00FFFF] transition-colors placeholder:text-[#666666]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="terminal-yellow font-mono text-[9px] xs:text-[10px] sm:text-xs block mb-1.5 sm:mb-2">
                $ subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1f2e] border border-[#FFFF00]/30 rounded px-2.5 sm:px-3 py-1.5 sm:py-2 text-[#888888] font-mono text-[9px] xs:text-xs sm:text-xs focus:outline-none focus:border-[#FFFF00] transition-colors placeholder:text-[#666666]"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label className="terminal-blue font-mono text-[9px] xs:text-[10px] sm:text-xs block mb-1.5 sm:mb-2">
                $ message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#1a1f2e] border border-[#0099FF]/30 rounded px-2.5 sm:px-3 py-1.5 sm:py-2 text-[#888888] font-mono text-[9px] xs:text-xs sm:text-xs focus:outline-none focus:border-[#0099FF] transition-colors placeholder:text-[#666666] resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#39FF14] text-[#0D1117] font-mono font-bold py-2 sm:py-2.5 rounded text-xs sm:text-sm hover:bg-[#00FFFF] hover:text-[#0D1117] transition-all neon-glow-green hover:neon-glow-cyan"
            >
              $ send --message
            </button>

            {submitted && (
              <div className="bg-[#39FF14]/20 border border-[#39FF14] rounded p-2.5 sm:p-3 text-[#39FF14] font-mono text-[9px] xs:text-xs sm:text-xs text-center">
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1a1f2e] text-center">
        <div className="terminal-green font-mono text-[8px] xs:text-[9px] sm:text-xs neon-glow-green">
          $ echo "Thanks for visiting!" && exit 0
        </div>
      </div>
    </div>
  );
}