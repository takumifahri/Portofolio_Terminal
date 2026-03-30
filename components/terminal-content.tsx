'use client';

import React from 'react';
import HomeTab from './tabs/home-tab';
import AboutTab from './tabs/about-tab';
import ProjectsTab from './tabs/projects-tab';
import SkillsTab from './tabs/skills-tab';
import AchievementsTab from './tabs/achievements-tab';
import RoadmapTab from './tabs/roadmap-tab';
import ContactTab from './tabs/contact-tab';

interface TerminalContentProps {
  activeTab: string;
  onTabSwitch?: (tabId: string) => void;
  hasShownAnimation?: boolean;
  onAnimationComplete?: () => void;
}

const tabComponents: { [key: string]: React.ComponentType<any> } = {
  home: HomeTab,
  about: AboutTab,
  projects: ProjectsTab,
  skills: SkillsTab,
  achievements: AchievementsTab,
  roadmap: RoadmapTab,
  contact: ContactTab,
};

export default function TerminalContent({
  activeTab,
  onTabSwitch,
  hasShownAnimation,
  onAnimationComplete,
}: TerminalContentProps) {
  const TabComponent = tabComponents[activeTab] || HomeTab;

  return (
    <div className="w-full h-full bg-[#0D1117] px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 animate-fade-in overflow-auto scrollbar-hidden">
      <TabComponent 
        onTabSwitch={onTabSwitch}
        hasShownAnimation={hasShownAnimation}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}