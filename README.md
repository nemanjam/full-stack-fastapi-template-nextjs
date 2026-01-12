# Full stack FastAPI template Next.js

Next.js v16 fork of the official [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template) template. Server components, server actions, HttpOnly cookie auth, ShadcnUI with TailwindCSS v4, simplified local development environment and Docker production.

Unstable, work in progress.

## Demo

**[https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com](https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com)**

## Screenshot

![Dashboard screenshot](docs/screenshots/dashboard-screenshot.png)

## Credits

- The original repository: [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template)
- Next.js client side rendered PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1733
- HttpOnly cookie PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1606

## Deploy to Vercel

### Frontend

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?)

### Backend

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?)

## Features

- [x] Next.js v16, server components
- [x] React Hook Form and server actions for forms
- [x] HttpOnly cookie auth, enables SSR
- [x] Hey Api with client-next
- [x] Suspense, error boundaries
- [x] Turborepo monorepo, TailwindCSS v4, ShadcnUI
- [x] Validated env vars with Zod
- [x] Simple local dev environment, simplified Docker production

## Todo

- [x] Register page, Github login
- [ ] Migrate Playwright tests
- [ ] Unit tests with Vitest, Testing Library
- [ ] Tag Docker images
- [ ] API sort params
- [ ] Support emails, Sentry from the original repo
- [ ] no-monorepo branch
- [x] Runtime only env vars, reusable build
- [x] Env vars with [alizeait/next-public-env](https://github.com/alizeait/next-public-env)
- [ ] Versioning with [changesets/changesets](https://github.com/changesets/changesets) or [semantic-release/semantic-release](https://github.com/semantic-release/semantic-release)
- [ ] API internationalization
- [ ] Update Python
- [ ] Open graph, SEO, analytics
- [ ] Tailscale Github Actions
- [ ] Integration tests frontend and backend

## Installation and running

Docs: [docs/running.md](docs/running.md)

## Vercel environment variables

```bash

PROJECT_NAME="Full stack FastAPI template Next.js"
SITE_URL=my-frontend-url.vercel.app
BACKEND_CORS_ORIGINS="https://my-frontend-url.vercel.app"

FIRST_SUPERUSER=admin@example.com
FIRST_SUPERUSER_PASSWORD=password

# Format: postgresql://<username>:<password>@<host>/<database>?<query>
# Example: postgresql://neondb_owner:npg_someHash@ep-solitary-moon-some-hash-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
DATABASE_URL=
```

## Routes

```bash
# Frontend
http://localhost:3000
https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com

# Backend
http://localhost:8000/docs
https://api-full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com/docs

# openapi.json
http://localhost:8000/api/v1/openapi.json
https://api-full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com/api/v1/openapi.json
```

## License

MIT license: [License](LICENSE)
