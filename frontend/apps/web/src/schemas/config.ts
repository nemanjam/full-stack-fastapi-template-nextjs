import { z } from 'zod';

export const nodeEnvValues = ['development', 'test', 'production'] as const;
export const booleanValues = ['true', 'false', ''] as const;
export const modeValues = ['light', 'dark'] as const;

// Todo: redo this with t3-env https://github.com/t3-oss/t3-env

export const processEnvSchema = z.object({
  NODE_ENV: z.enum(nodeEnvValues),
  NEXT_PUBLIC_SITE_URL: z
    .url()
    .regex(/[^/]$/, 'NEXT_PUBLIC_SITE_URL should not end with a slash "/"'),
  NEXT_PUBLIC_API_URL: z
    .url()
    .regex(/[^/]$/, 'NEXT_PUBLIC_SITE_URL should not end with a slash "/"'),
});

export const configClientSchema = z.object({
  PAGE_SIZE_TABLE: z.number(),
});
