import { cookies } from 'next/headers';

// import { waitMs } from '@/utils/wait';
import { PROCESS_ENV } from '@/config/process-env';

import type { CreateClientConfig } from '@/client/client.gen';

const { NEXT_PUBLIC_API_URL } = PROCESS_ENV;

// Todo: client with cookies can be used only on server, rethink this

/** Runtime config */
export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: NEXT_PUBLIC_API_URL,
  credentials: 'include',
  fetch: fetchFn,
});

const fetchFn: typeof fetch = async (input, init = {}) => {
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
