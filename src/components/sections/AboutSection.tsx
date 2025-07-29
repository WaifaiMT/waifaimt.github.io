// src/components/sections/AboutSection.tsx
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { SectionProps } from '@/types';

export const AboutSection: React.FC<SectionProps> = ({ id, className }) => {
    return (
        <section
            id={id}
            aria-label="About me"
            className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}
        >
            <SectionHeader title="About" />
            <div>
                <p className="mb-4">
                    I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                </p>
                <p className="mb-4">
                    Currently, I&apos;m a{' '}
                    <span className="font-medium text-slate-200">Senior Front-End Engineer</span> at{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Your Company
                    </a>
                    , specializing in building exceptional user experiences. I contribute to the creation and maintenance of UI components that power our platform&apos;s frontend, ensuring our applications meet modern web standards and accessibility best practices.
                </p>
                <p className="mb-4">
                    In the past, I&apos;ve had the opportunity to develop software across a variety of settings — from{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        advertising agencies
                    </a>{' '}
                    and{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        large corporations
                    </a>{' '}
                    to{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        start-ups
                    </a>{' '}
                    and{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        small digital product studios
                    </a>
                    . Additionally, I also released a{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                    >
                        comprehensive video course
                    </a>{' '}
                    a few years ago, guiding learners through building modern web applications.
                </p>
                <p>
                    In my spare time, I&apos;m usually exploring new technologies, contributing to open-source projects, or capturing the world through photography.
                </p>
            </div>
        </section>
    );
};


