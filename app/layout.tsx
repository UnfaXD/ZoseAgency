import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';

import { Header } from '@/components/layout/header';

import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Zose Agency - Production-Ready Next.js',
  description:
    'A staff-level engineered Next.js foundation with zero tech debt, built for 10+ year maintainability.',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Production-Ready',
  ],
  authors: [{ name: 'Zose Agency' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <div className="flex-1 w-full pt-14 sm:pt-16">{children}</div>
      </body>
    </html>
  );
}
