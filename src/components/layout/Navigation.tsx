// src/components/layout/Navigation.tsx
'use client';

import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrollTo } from '@/hooks/useScrollTo';
import { navigationItems } from '@/data/navigation';
import { personalInfo } from '@/data/personal';

interface NavigationProps {
    className?: string;
}

export const Navigation: React.FC<NavigationProps> = () => {
    const activeSection = useScrollSpy(navigationItems.map(item => item.id));


    // Find the current section label
    const currentSectionLabel = navigationItems.find(item => item.id === activeSection)?.label;

    return (
        <>
            {/* Mobile Navigation Bar */}
            <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="text-lg font-bold text-slate-200">
                        {personalInfo.name}
                    </div>
                    <div className="text-sm font-medium text-slate-400">
                        {currentSectionLabel}
                    </div>
                </div>
            </nav>
        </>
    );
};

//  component for desktop sidebar navigation
export const DesktopNavigation: React.FC<NavigationProps> = ({ className }) => {
    const activeSection = useScrollSpy(navigationItems.map(item => item.id));
    const { scrollToSection } = useScrollTo();

    return (
        <nav className={`nav ${className}`} aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {navigationItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''
                                }`}
                        >
                            <span className={`nav-indicator mr-4 h-px transition-all ${activeSection === item.id
                                ? 'w-16 bg-slate-200'
                                : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                                }`}></span>
                            <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === item.id
                                ? 'text-slate-200'
                                : 'text-slate-500 group-hover:text-slate-200'
                                }`}>
                                {item.label}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
