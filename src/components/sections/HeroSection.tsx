
// src/components/sections/HeroSection.tsx
'use client';

import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useScrollTo } from '@/hooks/useScrollTo';
import { personalInfo } from '@/data/personal';

export const HeroSection: React.FC = () => {
    const { scrollToSection } = useScrollTo();

    return (
        <section className="pt-32 pb-20 px-6 lg:hidden">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                        {personalInfo.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-200">
                        {personalInfo.title}
                    </h2>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                        {personalInfo.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            onClick={() => scrollToSection('projects')}
                            size="lg"
                            className="flex items-center gap-2"
                        >
                            View My Work
                            <ArrowUpRight size={18} />
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => scrollToSection('about')}
                            size="lg"
                        >
                            About Me
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};