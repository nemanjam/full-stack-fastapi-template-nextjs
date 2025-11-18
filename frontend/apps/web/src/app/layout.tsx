import { Inter } from 'next/font/google';

import { Toaster } from '@workspace/ui/components/ui/toaster';

import ThemeProvider from '@/components/theme-provider';

import type { Metadata } from 'next';
import type React from 'react';

import '@workspace/ui/main.css';

import { FC, ReactNode } from 'react';

const fontInter = Inter({ subsets: ['latin'] });

// Todo:  extract metadata as constants

export const metadata: Metadata = {
  title: 'Full Stack FastAPI Project',
  description: 'A modern full-stack web application built with FastAPI and Next.js',
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={fontInter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {/* Slot with server components */}
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
