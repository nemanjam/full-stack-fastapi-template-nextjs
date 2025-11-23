# Full stack FastAPI template Next.js

Next.js v16 fork of the official [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template) template. Server components, server actions, HttpOnly cookie auth, ShadcnUI with TailwindCSS v4, simplified local development environment and Docker production.

Unstable, work in progress.

## Demo

**[https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com](https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com)**

## Credits

- The original repository: [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template)
- Next.js client side rendered PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1733
- HttpOnly cookie PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1606

## Features

- [x] Next.js v16, server components
- [x] React Hook Form and server actions for forms
- [x] HttpOnly cookie auth, enables SSR
- [x] Hey Api with client-next
- [x] Suspense, error boundaries
- [x] Turborepo monorepo, TailwindCSS v4, ShadcnUI
- [x] Validated env vars with Zod

## Todo

- [ ] Register page, Github login
- [ ] Migrate Playwright tests
- [ ] Unit tests with Vitest, Testing Library
- [ ] Tag Docker images
- [ ] API sort params
- [ ] no-monorepo branch
- [ ] Env vars with [t3-oss/t3-env](https://github.com/t3-oss/t3-env)
- [ ] Runtime only env vars, reusable build
- [ ] Versioning with [changesets/changesets](https://github.com/changesets/changesets) or [semantic-release/semantic-release](https://github.com/semantic-release/semantic-release)
- [ ] API internationalization
- [ ] Update Python
- [ ] Open graph, SEO
- [ ] Tailscale Github Actions
- [ ] Integration tests frontend and backend

## Installation and running

Docs: [docs/running.md](docs/running.md)

## Routes

```bash
# Frontend
http://localhost:3000
https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com

# Backend
http://localhost:8000/docs
https://api.full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com/docs

# openapi.json
# API_V1_STR: str = "/api/v1"
http://localhost:8000/api/v1/openapi.json
https://api.full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com/api/v1/openapi.json

```
