// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { personalInfo } from '@/data/personal';

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">{personalInfo.name}</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {personalInfo.title}
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
                {personalInfo.description}
            </p>
        </div>
    );
};