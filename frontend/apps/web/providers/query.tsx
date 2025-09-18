import React, { ReactNode } from 'react';

import { ApiError, OpenAPI } from '@/client';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

OpenAPI.BASE = `${process.env.NEXT_PUBLIC_API_URL}`;

OpenAPI.TOKEN = async () => {
  return localStorage.getItem('access_token') || '';
};

const handleApiError = (error: Error) => {
  if (error instanceof ApiError && [401, 403].includes(error.status)) {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
  }
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleApiError,
  }),
  mutationCache: new MutationCache({
    onError: handleApiError,
  }),
});

export function Query({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
