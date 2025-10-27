import { PROCESS_ENV } from '@/config/process-env';

import type { CreateClientConfig } from '@/client/client.gen';

const { NEXT_PUBLIC_API_URL } = PROCESS_ENV;

// Runtime config
export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: NEXT_PUBLIC_API_URL,
});
