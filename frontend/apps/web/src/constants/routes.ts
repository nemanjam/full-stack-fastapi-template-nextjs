// Todo: handle trailing '/' in Next.js app

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login/',
  REGISTER: '/register/',
  FORGOT_PASSWORD: '/forgot-password/',
  DASHBOARD: '/dashboard/',
  ITEMS: '/dashboard/items/',
  SETTINGS: '/dashboard/settings/',
  ADMIN: '/dashboard/admin/',
  _404: '/404/',
  _500: '/500/',
  STATIC: {
    IMAGES: '/images/',
    FAVICONS: '/images/favicons/',
  },
  API: {
    OG_IMAGES: '/api/open-graph/',
  },
} as const;
