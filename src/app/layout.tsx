import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import Header from '@/components/sections/Header';

const PageLoader = dynamic(() => import('@/components/ui/PageLoader'));
const AnimatedBackground = dynamic(() => import('@/components/ui/AnimatedBackground'));
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'));

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Punit Jain | Software Engineer & AI Innovator',
  description:
    'Professional portfolio website of Punit Jain, Software Engineer, AI Enthusiast, Full Stack Developer, Android Developer, and IoT Innovator. Showcasing software builds, hardware networks, and machine learning models.',
  keywords: [
    'Punit Jain',
    'Software Engineer Portfolio',
    'AI Developer',
    'Android Developer',
    'IoT Innovator',
    'Avantika University CS',
    'React Developer India',
    'Full Stack Engineer India',
  ],
  authors: [{ name: 'Punit Jain', url: 'mailto:punit.jain@avantika.edu.in' }],
  creator: 'Punit Jain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://punitjain.dev',
    title: 'Punit Jain | Software Engineer & AI Innovator',
    description:
      'Professional portfolio website of Punit Jain. Showcasing Full Stack systems, native Android layouts, smart IoT nodes, and data visualizations.',
    siteName: 'Punit Jain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punit Jain | Software Engineer & AI Innovator',
    description:
      'Professional portfolio of Punit Jain. Showcasing Android architectures, IoT models, and relational database normalization.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden antialiased">
        {/* Core page entrance load counter */}
        <PageLoader />

        {/* Global animated background grid & canvas */}
        <AnimatedBackground />

        {/* Custom interactive desktop cursor */}
        <CustomCursor />

        {/* Floating navbar */}
        <Header />

        {/* Main layout views */}
        <div className="flex-1 flex flex-col w-full relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
