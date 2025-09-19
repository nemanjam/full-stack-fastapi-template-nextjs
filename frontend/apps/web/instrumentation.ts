/** Runs only once on server start. */
export const register = async () => {
  // imports fail on return early
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // conditional imports
    // const { OpenAPI } = await import('@/client');
    // OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASE as string;
  }
};
