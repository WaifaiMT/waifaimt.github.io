// src/app/archive/page.tsx
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ArchiveTable } from '@/components/ui/ArchiveTable';
import { archiveProjects } from '@/data/projects';
import { personalInfo } from '@/data/personal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: `All Projects - ${personalInfo.name}`,
    description: 'A complete archive of projects and work from throughout my career.',
};

export default function ArchivePage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-400">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:py-24">
                    {/* Header */}
                    <Link
                        href="/"
                        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 hover:text-teal-200 transition-colors"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        {personalInfo.name}
                    </Link>

                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                        All Projects
                    </h1>

                    <ArchiveTable projects={archiveProjects} />
                </div>
            </div>
        </div>
    );
}