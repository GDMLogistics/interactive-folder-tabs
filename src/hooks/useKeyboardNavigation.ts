import { useEffect } from 'react';
import { Tab } from '@/types/tabs';

export const useKeyboardNavigation = (
  tabs: Tab[],
  activeTab: string,
  setActiveTab: (id: string) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey) return;
      
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
      
      switch (e.key) {
        case 'ArrowRight':
          if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1].id);
          }
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1].id);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabs, activeTab, setActiveTab]);
};