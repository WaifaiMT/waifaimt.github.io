
// src/components/ui/SectionHeader.tsx
import { cn } from '@/lib/utils';
import type { SectionHeaderProps } from '@/types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    sticky = true,
    className
}) => {
    return (
        <div className={cn(
            "mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12",
            sticky ? "sticky top-0 z-20 -mx-6" : "",
            "lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0",
            className
        )}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                {title}
            </h2>
        </div>
    );
};
