import { MetadataRoute } from 'next';

import { PROCESS_ENV } from '@/config/process-env';

export const dynamic = 'force-static';

const { NEXT_PUBLIC_SITE_URL } = PROCESS_ENV;

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  host: NEXT_PUBLIC_SITE_URL,
});

export default robots;
