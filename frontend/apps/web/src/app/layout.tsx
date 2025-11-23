import { Inter } from 'next/font/google';

import { Toaster } from '@workspace/ui/components/ui/toaster';

import ThemeProvider from '@/components/common/theme-provider';

import type React from 'react';

import '@workspace/ui/global.css';

import { METADATA } from '@/constants/metadata';

import type { FC, ReactNode } from 'react';

const fontInter = Inter({ subsets: ['latin'] });

export const metadata = METADATA;

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
