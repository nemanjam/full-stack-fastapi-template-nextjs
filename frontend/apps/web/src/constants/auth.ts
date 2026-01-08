/** Matches backend/app/core/config.py */
export const AUTH_COOKIE = 'auth_cookie' as const satisfies string;
export const AUTH_COOKIE_FORWARDED = 'auth_cookie_forwarded' as const satisfies string;

export const COOKIES = {
  AUTH_COOKIE: 'auth_cookie',
  AUTH_COOKIE_FORWARDED: 'auth_cookie_forwarded',
} as const;
