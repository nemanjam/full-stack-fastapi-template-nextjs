import { isServer } from '@/utils/runtime';
import { PROCESS_ENV } from '@/config/process-env';

// import { waitMs } from '@/utils/wait';

import type { CreateClientConfig } from '@/client/client.gen';

const { NEXT_PUBLIC_API_URL } = PROCESS_ENV;

/** Runtime config. Runs and imported both on server and in browser. */
export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: NEXT_PUBLIC_API_URL,
  credentials: 'include',
  ...(isServer() ? { fetch: serverFetch } : {}),
});

const serverFetch: typeof fetch = async (input, init = {}) => {
  // Note: Dynamic import to avoid bundling 'next/headers' on client
  const { cookies } = await import('next/headers');

  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join('; ');

  // Note: must append auth_cookie like this or content-type header will break in server actions
  const headers = new Headers(init.headers);
  headers.append('Cookie', cookieHeader);

  // test skeletons styling
  // await waitMs(3000);

  const response = fetch(input, { ...init, headers });

  return response;
};
