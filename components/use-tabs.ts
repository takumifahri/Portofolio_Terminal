'use client';

import { useState, useCallback } from 'react';

export interface Tab {
  id: string;
  label: string;
  icon: string;
}

export const DEFAULT_TABS: Tab[] = [
  { id: 'home', label: 'home', icon: '~' },
  { id: 'about', label: 'about', icon: '@' },
  { id: 'projects', label: 'projects', icon: '*' },
  { id: 'skills', label: 'skills', icon: '&' },
  { id: 'achievements', label: 'achievements', icon: '#' },
  { id: 'roadmap', label: 'roadmap', icon: '$' },
  { id: 'contact', label: 'contact', icon: '!' },
];

export function useTerminalTabs(initialTab: string = 'home') {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [openTabs, setOpenTabs] = useState<string[]>([initialTab]);

  const switchTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
    if (!openTabs.includes(tabId)) {
      setOpenTabs([...openTabs, tabId]);
    }
  }, [openTabs]);

  const closeTab = useCallback((tabId: string) => {
    if (tabId === 'home') return; // Prevent closing home tab

    const newOpenTabs = openTabs.filter(id => id !== tabId);

    if (activeTab === tabId) {
      setActiveTab(newOpenTabs[newOpenTabs.length - 1] || 'home');
    }

    setOpenTabs(newOpenTabs);
  }, [openTabs, activeTab]);

  const closeAllTabs = useCallback(() => {
    setOpenTabs(['home']);
    setActiveTab('home');
  }, []);

  const processCommand = useCallback((command: string) => {
    const trimmed = command.trim().toLowerCase();

    // Parse commands: "open about", "close projects", "ls", "help"
    if (trimmed.startsWith('open ')) {
      const tabName = trimmed.substring(5);
      const tab = DEFAULT_TABS.find(t => t.label === tabName);
      if (tab) {
        switchTab(tab.id);
        return `Opened ${tabName} tab`;
      }
      return `Tab "${tabName}" not found`;
    } else if (trimmed.startsWith('close ')) {
      const tabName = trimmed.substring(6);
      const tab = DEFAULT_TABS.find(t => t.label === tabName);
      if (tab && tab.id !== 'home') {
        closeTab(tab.id);
        return `Closed ${tabName} tab`;
      }
      return `Cannot close ${tabName}`;
    } else if (trimmed === 'ls' || trimmed === 'list') {
      const available = DEFAULT_TABS.map(t => t.label).join(', ');
      return `Available tabs: ${available}`;
    } else if (trimmed === 'help') {
      return 'Commands: open [tab], close [tab], ls, clear';
    }
    return 'Command not found. Type "help" for commands.';
  }, [switchTab, closeTab]);

  return {
    activeTab,
    openTabs,
    switchTab,
    closeTab,
    closeAllTabs,
    processCommand,
  };
}
