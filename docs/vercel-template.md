
# Full stack FastAPI template Next.js

Next.js v16 fork of the official [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template) template. Server components, server actions, HttpOnly cookie auth, ShadcnUI with TailwindCSS v4, Github login, simplified local development environment and Vercel and Docker production.

# Screenshot

![Frontend screenshot](https://github.com/nemanjam/full-stack-fastapi-template-nextjs/raw/vercel-deploy/docs/screenshots/frontend-screenshot-1200x630.png)

# Demo

**Vercel: [https://full-stack-fastapi-template-nextjs.vercel.app](https://full-stack-fastapi-template-nextjs.vercel.app)**

**Docker: [https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com](https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com)**

# Features

- Next.js v16, server components
- React Hook Form and server actions for forms
- HttpOnly cookie auth, enables SSR
- Hey Api with client-next
- Suspense, error boundaries
- Turborepo monorepo, TailwindCSS v4, ShadcnUI
- Register page, Github login
- Validated env vars with Zod
- Runtime only env vars with [alizeait/next-public-env](https://github.com/alizeait/next-public-env), reusable build
- Deploy with Vercel and Docker
- Simple local dev environment, simplified Docker production

# Running locally

Install and run project locally for development. 

## Environment variables

Clone the repository, create `.env` files for backend and frontend and populate them. Available environment variables: 

- Backend: [.env.example](https://github.com/nemanjam/full-stack-fastapi-template-nextjs/blob/main/.env.example).
- Frontend: [frontend/apps/web/.env.example](https://github.com/nemanjam/full-stack-fastapi-template-nextjs/blob/main/frontend/apps/web/.env.example).

```bash
# Clone repository
git clone git@github.com:nemanjam/full-stack-fastapi-template-nextjs.git

# Create backend .env file
cp .env.example .env

# Create frontend .env file
cd frontend/apps/web
cp .env.example .env
```

## Backend

Create and activate virtual environment, install dependencies and run FastAPI dev server.

```bash
# From /backend
cd ./backend

# Create virtual environment
uv venv

# Activate the environment
source .venv/bin/activate

# Install dependencies
uv sync

# Start the FastAPI development server (after database)
uvicorn app.main:app --reload

# Automatic Interactive Docs (Swagger UI)
http://localhost:8000/docs

# Run backend tests (cd ./backend)
bash ./scripts/test.sh
```

## Database

Run Postgres container, run migrations and seed the initial data.

```bash
# From project root
cd ~/Desktop/full-stack-fastapi-template-nextjs

# Run just Postgres database service
docker compose up -d database adminer

# From /backend
cd ./backend

# Needs activated venv and Python dependencies

# Await db, run migrations and seed (must have .env), reminder: MUST rerun after delete db in dev
bash scripts/prestart.sh

# Apply just database migrations
alembic upgrade head

# If changed models generate migration
alembic revision --autogenerate -m "e.g. Add column last_name to User model"
```

## Frontend

Generate OpenAPI client and run Next.js dev server.

```bash
# From project root, with activated backend/ venv, fix this
cd ~/Desktop/full-stack-fastapi-template-nextjs

# Generate client (needs activated venv)
bash scripts/generate-client.sh

# From /frontend
cd ./frontend

# Run dev
pnpm dev
```

# Deploying to Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=Build%20full-stack%20apps%20with%20Next.js%20and%20FastAPI.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3OFhcgXIeEap6JyvSi3gjA%2Fbc483323972379fc927e8bba00e04f18%2Ffrontend-screenshot-1200x630.png&demo-title=Full%20stack%20FastAPI%20template%20with%20Next.js&demo-url=https%3A%2F%2Ffull-stack-fastapi-template-nextjs.vercel.app&project-name=Full%20stack%20FastAPI%20template%20with%20Next.js&project-names=full-stack-fastapi-frontend%2Cfull-stack-fastapi-backend&repository-name=full-stack-fastapi-template-with-next-js&repository-url=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy&root-directories=frontend%2Fapps%2Fweb%2Cbackend&from=templates&teamSlug=amy-vtest314&monorepo=1&totalProjects=2&skippable-integrations=1&products=%5B%7B%22type%22%3A%22integration%22%2C%22protocol%22%3A%22storage%22%2C%22productSlug%22%3A%22neon%22%2C%22integrationSlug%22%3A%22neon%22%7D%5D)

Clicking the "Deploy" button above will take you to the Vercel deployment wizard. It will create a **single GitHub repository** and **two separate Vercel projects**, pointing to the `/backend` and `/frontend/apps/web` directories for the backend and frontend, respectively. 

No environment variables will be set automatically, you will need to configure them manually after the wizard completes. During setup, you will be prompted to add the Neon integration for a Postgres database. Make sure to select the **backend** project as the integration target. Finally, you will need to run the database migrations and seed the newly provisioned database.

For detailed guide how to deploy using both "Vercel Deploy" button and Vercel CLI check the documentation:

- Backend docs: [docs/vercel-deployment-backend.md](https://github.com/nemanjam/full-stack-fastapi-template-nextjs/tree/main/docs/vercel-deployment-backend.md)
- Frontend docs: [docs/vercel-deployment-frontend.md](https://github.com/nemanjam/full-stack-fastapi-template-nextjs/tree/main/docs/vercel-deployment-frontend.md)

# Credits

- The original repository: [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template)
- Next.js client side rendered PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1733
- HttpOnly cookie PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1606
