// import 'server-only'; // should be for runtime env vars

import { processEnvSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import { ProcessEnvType } from '@/types/config';

// Note: maybe function for runtime vars
const processEnvData: ProcessEnvType = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

export const PROCESS_ENV = validateData(processEnvData, processEnvSchema);
