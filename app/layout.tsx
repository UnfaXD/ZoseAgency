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
  title: 'Zose Agency',
  description: 'Platform for agents to manage their businesses',
  keywords: [
    'Zose Agency',
    'Orion Systems & Designs',
    'Platform',
    'Agents',
    'Business',
    'Management',
  ],
  authors: [{ name: 'Orion Systems & Designs' }],
  icons: {
    icon: [{ url: '/assets/favicon.png', type: 'image/png' }],
    shortcut: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
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
