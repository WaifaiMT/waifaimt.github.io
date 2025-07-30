// src/components/sections/AboutSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { SectionProps } from '@/types';
import profilePic from '@/assets/images/agg.png'

// Floating particle component
const FloatingParticle: React.FC<{ delay: number; duration: number; x: number; y: number }> = ({ delay, duration, x, y }) => (
    <div
        className="absolute w-1 h-1 bg-[#64ffda] rounded-full opacity-60"
        style={{
            left: `${x}%`,
            top: `${y}%`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
        }}
    />
);

// Tech grid background component
const TechGrid: React.FC = () => (
    <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 to-transparent" />
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64ffda" strokeWidth="0.5" opacity="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>
);

export const AboutSection: React.FC<SectionProps> = ({ id, className }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Generate random particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
    }));

    return (
        <section
            id={id}
            aria-label="About me"
            className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${className}`}
        >
            <SectionHeader title="About" />

            <div className="space-y-12">
                {/* Hero Image Section - Full Width at Top */}
                <div className="relative w-full">
                    <div
                        className="relative group cursor-pointer mx-auto"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {/* Main image container - Larger size */}
                        <div className="relative w-full max-w-md mx-auto aspect-square lg:max-w-lg">
                            {/* Tech Grid Background */}
                            <TechGrid />

                            {/* Floating Particles */}
                            {particles.map((particle) => (
                                <FloatingParticle
                                    key={particle.id}
                                    x={particle.x}
                                    y={particle.y}
                                    delay={particle.delay}
                                    duration={particle.duration}
                                />
                            ))}

                            {/* Geometric shapes - Larger for bigger image */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#64ffda]/30 rounded transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#64ffda]/10 rounded-full group-hover:scale-125 transition-transform duration-500" />
                            <div className="absolute top-1/4 -right-8 w-4 h-16 bg-[#64ffda]/20 transform rotate-12 group-hover:rotate-45 transition-transform duration-500" />
                            <div className="absolute bottom-1/4 -left-8 w-6 h-6 border-2 border-[#64ffda]/40 rounded-full group-hover:scale-150 transition-transform duration-500" />

                            {/* Scan lines effect */}
                            <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#64ffda]/20 to-transparent h-12 animate-scan" />
                            </div>

                            {/* Secondary scan line */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#64ffda]/10 to-transparent w-8 animate-scan" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                            </div>

                            {/* Main image */}
                            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-slate-700 group-hover:border-[#64ffda]/50 transition-colors duration-300 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/20 via-transparent to-slate-900/50 z-10" />


                                <Image
                                    src={profilePic}
                                    alt="Profile picture"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                    sizes="(max-width: 768px) 90vw, 600px"
                                    priority
                                />

                                {/* Holographic overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at ${isHovering ? '50% 50%' : '0% 0%'}, rgba(100, 255, 218, 0.2) 0%, transparent 50%)`
                                    }}
                                />

                                {/* Digital glitch effect overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-[#64ffda] via-transparent to-[#64ffda] mix-blend-screen" />
                            </div>

                            {/* Corner brackets - Larger */}
                            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#64ffda] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[#64ffda] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[#64ffda] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#64ffda] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Status indicator */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
                                <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse" />
                                <span className="text-sm font-mono text-[#64ffda]">ONLINE</span>
                            </div>

                            {/* Tech info overlay */}
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded border border-slate-700/50 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-mono text-[#64ffda]">DEV_MODE</span>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <p className="mb-4">
                        Currently, I&apos;m a{' '}
                        <span className="font-medium text-slate-200">Senior Front-End Engineer</span> at{' '}
                        <a
                            href="#"
                            className="font-medium text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors"
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
                            className="font-medium text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors"
                            target="_blank"
                            rel="noreferrer"
                        >
                            advertising agencies
                        </a>{' '}
                        and{' '}
                        <a
                            href="#"
                            className="font-medium text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors"
                            target="_blank"
                            rel="noreferrer"
                        >
                            large corporations
                        </a>{' '}
                        to{' '}
                        <a
                            href="#"
                            className="font-medium text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors"
                            target="_blank"
                            rel="noreferrer"
                        >
                            start-ups
                        </a>{' '}
                        and{' '}
                        <a
                            href="#"
                            className="font-medium text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors"
                            target="_blank"
                            rel="noreferrer"
                        >
                            small digital product studios
                        </a>
                        . Additionally, I also released a{' '}
                        <a
                            href="#"
                            className="font-medium text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] transition-colors"
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
            </div>
        </section>
    );
};