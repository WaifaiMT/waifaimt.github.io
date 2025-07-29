
// src/hooks/useScrollSpy.ts
import { useState, useEffect } from 'react';
import { ScrollSpyOptions } from '@/types';

export const useScrollSpy = (
  sectionIds: string[],
  options: ScrollSpyOptions = {}
): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');
  const { rootMargin = '0px 0px -50% 0px', threshold = 0.1 } = options;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
};
