// src/components/layout/SocialLinks.tsx
'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface SocialLinksProps {
    className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
    return (
        <ul className={`ml-1 mt-8 flex items-center ${className}`} aria-label="Social media">
            <li className="mr-5 text-xs">
                <a
                    href={personalInfo.social.github}
                    className="block hover:text-slate-200 transition-colors"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                </a>
            </li>
            <li className="mr-5 text-xs">
                <a
                    href={personalInfo.social.linkedin}
                    className="block hover:text-slate-200 transition-colors"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>
            </li>
            {personalInfo.social.twitter && (
                <li className="mr-5 text-xs">
                    <a
                        href={personalInfo.social.twitter}
                        className="block hover:text-slate-200 transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Twitter"
                    >
                        <Twitter size={20} />
                    </a>
                </li>
            )}
            <li className="mr-5 text-xs">
                <a
                    href={`mailto:${personalInfo.email}`}
                    className="block hover:text-slate-200 transition-colors"
                    aria-label="Email"
                >
                    <Mail size={20} />
                </a>
            </li>
        </ul>
    );
};
