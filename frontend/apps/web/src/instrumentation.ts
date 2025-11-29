/** Runs only once on server start. */

/** Log loaded env vars. */
export const register = async () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { prettyPrintObject } = await import('@/utils/log');
    const { PROCESS_ENV } = await import('@/config/process-env');
    const { _PROCESS_ENV } = await import('@/config/_process-env');

    prettyPrintObject(PROCESS_ENV, 'parsed PROCESS_ENV');
    prettyPrintObject(_PROCESS_ENV, 'parsed _PROCESS_ENV');
  }
};
