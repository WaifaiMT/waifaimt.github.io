// src/components/ui/Button.tsx
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center font-mono text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none relative",
                {
                    // Primary - Clean teal with minimal styling (Brittany's style)
                    'bg-transparent border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] focus-visible:ring-[#64ffda]/50 active:bg-[#64ffda]/20': variant === 'primary',

                    // Secondary - Subtle navy with teal border
                    'bg-transparent border border-slate-600 text-slate-300 hover:border-[#64ffda] hover:text-[#64ffda] hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] focus-visible:ring-[#64ffda]/50': variant === 'secondary',

                    // Ghost - Very minimal, text only
                    'text-[#64ffda] bg-transparent hover:bg-[#64ffda]/5 hover:shadow-[0_0_10px_rgba(100,255,218,0.2)] focus-visible:text-[#64ffda] focus-visible:ring-[#64ffda]/50': variant === 'ghost',
                },
                {
                    'px-4 py-2 text-xs rounded': size === 'sm',
                    'px-7 py-3 text-sm rounded': size === 'md',
                    'px-8 py-4 text-sm rounded': size === 'lg',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};