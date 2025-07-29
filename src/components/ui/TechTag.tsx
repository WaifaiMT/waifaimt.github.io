// src/components/ui/TechTag.tsx
import { cn } from '@/lib/utils';
import type { TechTagProps } from '@/types';

export const TechTag: React.FC<TechTagProps> = ({
    tech,
    variant = 'default',
    className
}) => {
    return (
        <div className={cn(
            "flex items-center rounded-full bg-teal-400/10 text-teal-300 font-medium leading-5",
            variant === 'default' ? 'px-3 py-1 text-xs' : 'px-2 py-0.5 text-[10px]',
            className
        )}>
            {tech}
        </div>
    );
};

