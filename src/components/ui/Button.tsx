
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
                "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                {
                    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500': variant === 'primary',
                    'border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white focus-visible:ring-gray-500': variant === 'secondary',
                    'text-slate-200 hover:text-teal-300 focus-visible:text-teal-300': variant === 'ghost',
                },
                {
                    'px-3 py-1.5 text-sm rounded-md': size === 'sm',
                    'px-4 py-2 text-sm rounded-lg': size === 'md',
                    'px-6 py-3 text-base rounded-lg': size === 'lg',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};