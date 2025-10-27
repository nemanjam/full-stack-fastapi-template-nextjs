import { PROCESS_ENV } from '@/config/process-env';

import type { CreateClientConfig } from '@/client/client.gen';

const { NEXT_PUBLIC_API_URL } = PROCESS_ENV;

/*------------------------- Runtime config --------------------------*/

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: NEXT_PUBLIC_API_URL,
});

/*---------------- Utils for openapi-ts.config.ts ----------------*/

// not needed probably

export type Operation = {
  name?: string;
  service?: string;
  [key: string]: unknown;
};

export const methodNameBuilder = (operation: Operation) => {
  let name = operation.name as string;
  const service = operation.service as string;

  // Remove service prefix from name (e.g., UserLogin -> Login)
  if (service && name.toLowerCase().startsWith(service.toLowerCase())) {
    name = name.slice(service.length);
  }

  // Convert to camelCase and remove invalid characters
  name = name
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/[^a-zA-Z0-9]/g, '');

  // Lowercase first character
  return name.charAt(0).toLowerCase() + name.slice(1);
};
