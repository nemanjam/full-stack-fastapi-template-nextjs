import { NextResponse } from 'next/server';

import setCookieParser from 'set-cookie-parser';

import { COOKIES } from '@/constants/auth';
import { ROUTES } from '@/constants/routes';

// unset cookie endpoint is not needed, server action can unset it directly

const { AUTH_COOKIE, AUTH_COOKIE_FORWARDED } = COOKIES;
const { LOGIN, DASHBOARD } = ROUTES;

export const GET = async (request: Request) => {
  // Read from request
  const cookieHeader = request.headers.get('cookie') || '';

  // Parse all incoming cookies (from browser)
  const parsed = setCookieParser.parse(cookieHeader, {
    decodeValues: true,
  });

  // Extract forwarding cookie
  const forwardCookie = parsed.find((c) => c.name === AUTH_COOKIE_FORWARDED);
  const authToken = forwardCookie?.value;

  if (!authToken) {
    // Todo: handle on frontend on login page
    return NextResponse.redirect(`${LOGIN}?error=missing_auth_token`, { status: 302 });
  }

  const response = NextResponse.redirect(DASHBOARD, { status: 302 });

  // Forward all cookies except the auth_cookie_forwarded cookie
  for (const c of parsed) {
    // skip, we handle it separately
    if (c.name === AUTH_COOKIE_FORWARDED) continue;

    response.cookies.set({
      name: c.name,
      value: c.value,
      httpOnly: c.httpOnly,
      secure: c.secure,
      path: c.path,
      sameSite: c.sameSite as CookieSameSite,
      expires: c.expires,
    });
  }

  // Set final auth cookie for frontend domain
  response.cookies.set({
    // set new name
    name: AUTH_COOKIE,
    // forward parsed from auth_cookie_forwarded
    value: authToken,
    httpOnly: forwardCookie?.httpOnly,
    secure: forwardCookie?.secure,
    expires: forwardCookie?.expires,
    maxAge: forwardCookie?.maxAge,
    // set host-only for frontend
    path: '/',
    sameSite: 'lax',
    domain: undefined,
  });

  // Delete forwarding cookie
  const host = new URL(request.url).hostname;
  const hostParts = host.split('.');
  // parent domain or top level domain, same like in Python
  const parentDomain = hostParts.length > 2 ? hostParts.slice(1).join('.') : host;

  response.cookies.set({
    name: AUTH_COOKIE_FORWARDED,
    value: '',
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    domain: parentDomain,
    expires: new Date(0),
  });

  return response;
};
