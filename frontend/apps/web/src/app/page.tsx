'use client';

import { FC, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { isAuthenticated } from '@/lib/auth';

// Must be client component to show loader before redirect
// Todo: rethink this

const HomePage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-2 text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default HomePage;
