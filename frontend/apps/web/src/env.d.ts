declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly SITE_URL: string;
    readonly API_URL: string;
    readonly VERCEL_PROJECT_PRODUCTION_URL: string;
  }
}
