
// src/components/effects/SpotlightEffect.tsx
'use client';

import { useMouseTracker } from '@/hooks/useMouseTracker';

export const SpotlightEffect: React.FC = () => {
    const mousePosition = useMouseTracker();

    return (
        <div
            className="fixed inset-0 transition-all duration-300 pointer-events-none z-10"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
            }}
        />
    );
};
