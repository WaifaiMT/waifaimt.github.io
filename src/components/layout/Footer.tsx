// src/components/layout/Footer.tsx
const linkClass = "font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors";

export const Footer: React.FC = () => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Coded in{' '}
                <a href="https://code.visualstudio.com" className={linkClass} target="_blank" rel="noreferrer">
                    Visual Studio Code
                </a>{' '}
                by yours truly. Built with{' '}
                <a href="https://nextjs.org" className={linkClass} target="_blank" rel="noreferrer">
                    Next.js
                </a>{' '}
                and{' '}
                <a href="https://tailwindcss.com" className={linkClass} target="_blank" rel="noreferrer">
                    Tailwind CSS
                </a>
                . Layout inspired by{' '}
                <a href="https://brittanychiang.com" className={linkClass} target="_blank" rel="noreferrer">
                    Brittany Chiang
                </a>
                . All text is set in the{' '}
                <a href="https://rsms.me/inter/" className={linkClass} target="_blank" rel="noreferrer">
                    Inter
                </a>{' '}
                typeface.
            </p>
        </footer>
    );
};
