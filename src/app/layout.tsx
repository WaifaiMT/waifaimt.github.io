// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gilbert Gyan Addai - Full-Stack Developer & Designer',
  description: 'I build exceptional digital experiences through thoughtful design and robust engineering.',
  keywords: ['developer', 'designer', 'react', 'nextjs', 'typescript', 'javascript', 'photography'],
  authors: [{ name: 'Gilbert Gyan Addai' }],
  creator: 'Gilbert Gyan Addai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gilbertgyanaddai.com',
    title: 'Gilbert Gyan Addai - Full-Stack Developer & Designer',
    description: 'I build exceptional digital experiences through thoughtful design and robust engineering.',
    siteName: 'Gilbert Gyan Addai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilbert Gyan Addai - Full-Stack Developer & Designer',
    description: 'I build exceptional digital experiences through thoughtful design and robust engineering.',
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


