
# Full stack FastAPI template Next.js

Next.js v16 fork of the official [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template) template. Server components, server actions, HttpOnly cookie auth, ShadcnUI with TailwindCSS v4, Github login, simplified local development environment and Vercel and Docker production.

# Screenshot

![Frontend screenshot](https://github.com/nemanjam/full-stack-fastapi-template-nextjs/raw/vercel-deploy/docs/screenshots/frontend-screenshot-1200x630.png)

# Demo

**Vercel: [https://full-stack-fastapi-template-nextjs.vercel.app](https://full-stack-fastapi-template-nextjs.vercel.app)**

**Docker: [https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com](https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com)**

# Features

- [x] Next.js v16, server components
- [x] React Hook Form and server actions for forms
- [x] HttpOnly cookie auth, enables SSR
- [x] Hey Api with client-next
- [x] Suspense, error boundaries
- [x] Turborepo monorepo, TailwindCSS v4, ShadcnUI
- [x] Register page, Github login
- [x] Validated env vars with Zod
- [x] Runtime only env vars with [alizeait/next-public-env](https://github.com/alizeait/next-public-env), reusable build
- [x] Deploy with Vercel and Docker
- [x] Simple local dev environment, simplified Docker production

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



# Credits

- The original repository: [fastapi/full-stack-fastapi-template](https://github.com/fastapi/full-stack-fastapi-template)
- Next.js client side rendered PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1733
- HttpOnly cookie PR: https://github.com/fastapi/full-stack-fastapi-template/pull/1606
