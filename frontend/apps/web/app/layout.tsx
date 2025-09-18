'use client';

import { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { useRouter } from 'next/navigation';

// import Sidebar from '@/components/Common/Sidebar';
import { Providers } from '@/providers';

import Navbar from '@/components/Common/Navbar';
import { isLoggedIn } from '@/hooks/useAuth';

// "exports": in packages/ui/package.json
import '@workspace/ui/globals.css';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // const router = useRouter();

  // if (!isLoggedIn()) router.push('/auth/login');

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}>
        <Providers>
          <Navbar />
          <div className="flex flex-1">
            {/* <Sidebar /> */}
            <main className="flex flex-col flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
