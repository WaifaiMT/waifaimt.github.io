// src/components/ui/ArchiveTable.tsx
import { ExternalLink, Github } from 'lucide-react';
import { TechTag } from './TechTag';
import type { ArchiveProject } from '@/types';

interface ArchiveTableProps {
    projects: ArchiveProject[];
}

export const ArchiveTable: React.FC<ArchiveTableProps> = ({ projects }) => {
    return (
        <div className="mt-12 overflow-x-auto archive-table">
            <table className="w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Made at</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                        <th className="py-4 text-sm font-semibold text-slate-200">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr
                            key={project.id}
                            className="border-b border-slate-300/10 last:border-none"
                        >
                            <td className="py-4 pr-4 align-top text-sm">
                                <div className="translate-y-px font-mono text-slate-500">
                                    {project.year}
                                </div>
                            </td>
                            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                <div>
                                    <div className="block sm:hidden">
                                        {project.links?.external ? (
                                            <a
                                                href={project.links.external}
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {project.title}
                                            </a>
                                        ) : (
                                            <span className="text-slate-200">{project.title}</span>
                                        )}
                                    </div>
                                    <div className="hidden sm:block">
                                        {project.title}
                                    </div>
                                </div>
                                <div className="text-slate-500 sm:hidden">
                                    {project.madeAt}
                                </div>
                                <ul className="flex -ml-2 mt-2 flex-wrap sm:hidden" aria-label="Technologies used">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <li key={i} className="mr-1.5 mt-2">
                                            <TechTag tech={tech} variant="small" />
                                        </li>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <li className="mr-1.5 mt-2">
                                            <TechTag tech={`+${project.technologies.length - 3}`} variant="small" />
                                        </li>
                                    )}
                                </ul>
                            </td>
                            <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                                <div className="translate-y-px whitespace-nowrap">
                                    {project.madeAt}
                                </div>
                            </td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <ul className="flex -ml-2 flex-wrap" aria-label="Technologies used">
                                    {project.technologies.map((tech, i) => (
                                        <li key={i} className="mr-1.5 mt-2">
                                            <TechTag tech={tech} variant="small" />
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            <td className="py-4 align-top">
                                <ul className="translate-y-1">
                                    {project.links?.external && (
                                        <li className="mb-1 flex items-center">
                                            <a
                                                href={project.links.external}
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="External link"
                                            >
                                                <ExternalLink className="h-3 w-3 flex-shrink-0" />
                                            </a>
                                        </li>
                                    )}
                                    {project.links?.github && (
                                        <li className="mb-1 flex items-center">
                                            <a
                                                href={project.links.github}
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="GitHub repository"
                                            >
                                                <Github className="h-3 w-3 flex-shrink-0" />
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};