
// src/components/sections/ContactSection.tsx
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import type { SectionProps } from '@/types';

export const ContactSection: React.FC<SectionProps> = ({ id, className }) => {
    return (
        <section
            id={id}
            aria-label="Contact"
            className={`py-20 px-6 text-center ${className}`}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-white">Let&apos;s Work Together</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    I&apos;m always interested in new opportunities and collaborations.
                    Let&apos;s create something amazing together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <a href={`mailto:${personalInfo.email}`}>
                            <Mail size={20} className="mr-2" />
                            Get In Touch
                        </a>
                    </Button>
                    <Button variant="secondary" size="lg" asChild>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer">
                            Download Resume
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};