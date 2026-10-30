// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gilbert Addai Gyan — Full-Stack Software Engineer',
  description: 'Full-stack software engineer building production SaaS end-to-end with TypeScript, React, Node.js, and PostgreSQL.',
  keywords: ['full-stack engineer', 'software engineer', 'react', 'nextjs', 'typescript', 'node.js', 'postgresql', 'saas', 'ghana'],
  authors: [{ name: 'Gilbert Addai Gyan' }],
  creator: 'Gilbert Addai Gyan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gilbertgyanaddai.com',
    title: 'Gilbert Addai Gyan — Full-Stack Software Engineer',
    description: 'Full-stack software engineer building production SaaS end-to-end with TypeScript, React, Node.js, and PostgreSQL.',
    siteName: 'Gilbert Addai Gyan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilbert Addai Gyan — Full-Stack Software Engineer',
    description: 'Full-stack software engineer building production SaaS end-to-end with TypeScript, React, Node.js, and PostgreSQL.',
    creator: '@waifai_agg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scrollbar-thin">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}


