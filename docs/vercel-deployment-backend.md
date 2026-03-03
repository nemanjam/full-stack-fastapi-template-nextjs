# Vercel deployment backend

## Demo

**[https://api-full-stack-fastapi-template-nextjs.vercel.app/docs](https://api-full-stack-fastapi-template-nextjs.vercel.app/docs)**

## Screenshot

![Backend screenshot](screenshots/backend-screenshot-1200x630.png)

## Environment variables

### Minimal required environment variables

```bash
# Frontend url
# Used by the backend to generate links in emails to the frontend
SITE_URL=my-frontend-url.vercel.app

# Postgres database, e.g. Neon
# Format: postgresql://<username>:<password>@<host>/<database>?<query>
DATABASE_URL=
```

### All available environment variables

```bash
# Used in email templates and OpenAPI docs
PROJECT_NAME="Full stack FastAPI template Next.js"

# Frontend url
# Used by the backend to generate links in emails to the frontend
SITE_URL=my-frontend-url.vercel.app

# Whitelisted frontend urls
# SITE_URL is included by default
BACKEND_CORS_ORIGINS="http://localhost,https://localhost,http://localhost:3000,https://localhost:3000,http://localhost:3001,https://localhost:3001,https://my-frontend-url.vercel.app"

# Environment: local, staging, production
# If omitted defaults to VERCEL_ENV
ENVIRONMENT=production

# Auth
JWT_SECRET_KEY=my-secret
SESSION_SECRET_KEY=my-secret

# If omitted defaults to 7 days = 24 * 8 = 168 hours
ACCESS_TOKEN_EXPIRE_HOURS=168

# Superuser email and password
FIRST_SUPERUSER=admin@example.com
FIRST_SUPERUSER_PASSWORD=password

# Github OAuth id and secret
# Only a single deployment (callback url) per Github app is possible
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Postgres database, e.g. Neon
# Supply either all POSTGRES_* variables or a single DATABASE_URL
# If both are defined DATABASE_URL has precedence
POSTGRES_SERVER=localhost
POSTGRES_PORT=5432
POSTGRES_DB=app
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password

# Format: postgresql://<username>:<password>@<host>/<database>?<query>
DATABASE_URL=
```

## Deploy using "Vercel deploy" button

If you haven’t already, go to [README.md](../README.md#vercel-button) and, in the `Vercel button` section, click the `Deploy` button. You should click this button only once, as it will create both the backend and frontend projects at the same time.

### Setup wizard

You will be redirected to the Vercel setup form, which will:

- Create a single cloned repository on Github. You can provide a custom name or keep the default.
- Prompt you to add a Neon integration to provision **a blank** Postgres database. Add the integration and select the **backend** project as the target. This will automatically set the `DATABASE_URL` environment variable for the backend project.

After Vercel builds and deploys both projects, **they will not run correctly yet**, because the required environment variables are not configured and the database has not been migrated or seeded. You will need to complete these steps manually.

screenshot

### Set the environment variables

`SITE_URL` and `DATABASE_URL` are the only two required environment variables for the backend. In your backend project dashboard on Vercel navigate to `Project -> Settings -> Environment Variables` and set:

- `DATABASE_URL` is automatically set by the Neon integration, no action needed. 
- `SITE_URL` to the URL of your frontend deployment.

```bash
# Example

# Set manually, point to your frontend URL
SITE_URL=https://full-stack-fastapi-frontend-my-slug.vercel.app

# Already set by Neon integration
DATABASE_URL=postgresql://neondb_owner:npg_some-slug@ep-rough-cherry-some-slug-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
```
Additionally, you can configure any other optional environment variables listed above in [All available environment variables](#all-available-environment-variables).

After updating the environment variables, make sure to **redeploy the backend project** for the changes to take effect.

### Migrate and seed the Neon database

The Neon integration provisions **a blank** Postgres database. You need to create the database tables and seed the initial data.

This process is the same as when deploying with the Vercel CLI and is described in the section below: [Migrate and seed database](#migrate-and-seed-database).

## Deploy using Vercel CLI

Checkout `vercel-deploy` branch. This branch has the required configuration files: `backend/vercel.json`, `backend/.vercelignore`, modified `backend/app/core/config.py`.

```bash
git checkout vercel-deploy
```

Create a new Vercel project, and deploy it.

```bash
# Install Vercel CLI
pnpm install -g vercel

# Log in to Vercel
vercel login

# Navigate to the backend folder
cd backend

# Deploy for the first time (production)
# Fill prompts for name, root directory `./` (vercel.json dir)
vercel --prod

# Set required environment variables (production)
echo "Full stack FastAPI template Next.js" | vercel env add PROJECT_NAME production
echo "https://my-frontend-url.vercel.app" | vercel env add SITE_URL production
echo "my-secret" | vercel env add JWT_SECRET_KEY production
echo "my-secret" | vercel env add SESSION_SECRET_KEY production
echo "admin@example.com" | vercel env add FIRST_SUPERUSER production
echo "password" | vercel env add FIRST_SUPERUSER_PASSWORD production
echo "postgresql://user:pass@host/db" | vercel env add DATABASE_URL production
# Set more optional variables...

# List existing environment variables
vercel env ls

# Redeploy after changes
vercel --prod  # production

# After deploy, the CLI outputs the URL
# Example: https://api-full-stack-fastapi-template-nextjs-my-slug.vercel.app

# Debug deployment
vercel inspect https://api-full-stack-fastapi-template-nextjs-my-slug.vercel.app --json
```

Now proceed to migrate and seed the database [Migrate and seed database](#migrate-and-seed-database) section.

## Migrate and seed database

After deployment, your backend runs with a blank database. You need to create the tables and seed the initial data. Do this from your local environment in the same way you would for a local database, except this time set Neon's `DATABASE_URL` in your local `.env` file.

You can copy the `DATABASE_URL` value from the Vercel dashboard under `Project -> Settings -> Environment Variables` or from the Neon dashboard.

```bash
# .env

# Neon database url example:
DATABASE_URL=postgresql://neondb_owner:npg_some-slug@ep-rough-cherry-some-slug-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require

```

Then, run the migrations and seed the database using commands listed bellow. This process is also described in [running.md#database](running.md#database):

```bash
# From /backend
cd ./backend

# Create virtual environment
uv venv

# Activate the environment
source .venv/bin/activate

# Install dependencies
uv sync

# Migration and seed scripts need activated venv and Python dependencies

# Await db, run migrations and seed (must have .env)
# With a remote Neon database, this command can take a few minutes to complete
# Be patient and do not interrupt it
bash scripts/prestart.sh
```

Verify in Neon's dashboard that the `user` and `item` tables exist and are populated with data.
