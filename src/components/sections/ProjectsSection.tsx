
// src/components/sections/ProjectsSection.tsx
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { featuredProjects } from '@/data/projects';
import type { SectionProps } from '@/types';

export const ProjectsSection: React.FC<SectionProps> = ({ id, className }) => {
    return (
        <section
            id={id}
            aria-label="Selected projects"
            className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}
        >
            <SectionHeader title="Projects" />
            <div>
                <ul className="group/list">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </ul>

                <div className="mt-12">
                    <Link
                        href="/archive"
                        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                    >
                        <span>View Full Project Archive</span>
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                    </Link>
                </div>
            </div>
        </section>
    );
};