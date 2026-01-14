# Full stack FastAPI template Next.js

Next.js v16 fork of the official [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template) template. Server components, server actions, HttpOnly cookie auth, ShadcnUI with TailwindCSS v4, simplified local development environment and Docker production.

Unstable, work in progress.

## Demo

**Docker: [https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com](https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com)**

**Vercel: [https://full-stack-fastapi-template-nextjs.vercel.app](https://full-stack-fastapi-template-nextjs.vercel.app)**

## Screenshot

![Frontend screenshot](docs/screenshots/frontend-screenshot-1200x630.png)

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

## Deploy to Vercel

### Frontend

Docs: [docs/vercel-deployment-frontend.md](docs/vercel-deployment-frontend.md)

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy&root-directory=frontend%2Fapps%2Fweb&env=API_URL&envDefaults=%7B%0A%20%20%22API_URL%22%3A%20%22https%3A%2F%2Fmy-backend-url.vercel.app%22%0A%7D&envDescription=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy%2Fdocs%2Fvercel-deployment-frontend.md%23environment-variables&envLink=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Fblob%2Fvercel-deploy%2Ffrontend%2Fapps%2Fweb%2F.env.vercel.example&project-name=full-stack-fastapi-template-nextjs&repository-name=full-stack-fastapi-template-nextjs&demo-title=Frontend%20of%20the%20full%20stack%20FastAPI%20template%20Next.js&demo-description=Frontend%20of%20the%20Next.js%20fork%20of%20the%20official%20%22fastapi%2Ffull-stack-fastapi-template%22%20template.&demo-url=https%3A%2F%2Ffull-stack-fastapi-template-nextjs.vercel.app&demo-image=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Fraw%2Fvercel-deploy%2Fdocs%2Fscreenshots%2Ffrontend-screenshot-1200x630.png)

### Backend

Docs: [docs/vercel-deployment-backend.md](docs/vercel-deployment-backend.md)

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy&root-directory=backend&env=SITE_URL%2CFIRST_SUPERUSER%2CFIRST_SUPERUSER_PASSWORD%2CGITHUB_CLIENT_ID%2CGITHUB_CLIENT_SECRET&envDefaults=%7B%22SITE_URL%22%3A%22https%3A%2F%2Fmy-frontend-url.vercel.app%22%2C%22FIRST_SUPERUSER%22%3A%22admin%40example.com%22%2C%22FIRST_SUPERUSER_PASSWORD%22%3A%22password%22%2C%22GITHUB_CLIENT_ID%22%3A%22my-github-app-client-id%22%2C%22GITHUB_CLIENT_SECRET%22%3A%22my-github-app-client-secret%22%7D&envDescription=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy%2Fdocs%2Fvercel-deployment-backend.md%23environment-variables&envLink=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Fblob%2Fvercel-deploy%2F.env.vercel.example&project-name=api-full-stack-fastapi-template-nextjs&repository-name=api-full-stack-fastapi-template-nextjs&demo-title=Backend%20of%20the%20full%20stack%20FastAPI%20template%20Next.js&demo-description=Backend%20of%20the%20Next.js%20fork%20of%20the%20official%20%22fastapi%2Ffull-stack-fastapi-template%22%20template.&demo-url=https%3A%2F%2Ffull-stack-fastapi-template-nextjs.vercel.app&demo-image=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Fraw%2Fvercel-deploy%2Fdocs%2Fscreenshots%2Ffrontend-screenshot-1200x630.png&products=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22neon%22%2C%22productSlug%22%3A%22neon%22%2C%22protocol%22%3A%22storage%22%7D%5D)

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
