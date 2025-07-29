
// src/components/sections/ExperienceSection.tsx
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceItem } from '@/components/ui/ExperienceItem';
import { experiences } from '@/data/experience';
import type { SectionProps } from '@/types';

export const ExperienceSection: React.FC<SectionProps> = ({ id, className }) => {
    return (
        <section
            id={id}
            aria-label="Work experience"
            className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}
        >
            <SectionHeader title="Experience" />
            <div>
                <ol className="group/list">
                    {experiences.map((experience) => (
                        <ExperienceItem
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </ol>

                <div className="mt-12">
                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>View Full Résumé</span>
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                    </a>
                </div>
            </div>
        </section>
    );
};
