# Vercel deployment backend

## Demo

**[https://api-full-stack-fastapi-template-nextjs.vercel.app/docs](https://api-full-stack-fastapi-template-nextjs.vercel.app/docs)**

## Screenshot

![Backend screenshot](screenshots/backend-screenshot-1200x630.png)

## Environment variables

#### Minimal required environment variables

```bash
# Frontend url
# Used by the backend to generate links in emails to the frontend
SITE_URL=my-frontend-url.vercel.app

# Auth
JWT_SECRET_KEY=my-secret
SESSION_SECRET_KEY=my-secret

# Superuser email and password
FIRST_SUPERUSER=admin@example.com
FIRST_SUPERUSER_PASSWORD=password

# Postgres database, e.g. Neon
# Format: postgresql://<username>:<password>@<host>/<database>?<query>
DATABASE_URL=
```

#### All available environment variables

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

## Deploy using `Vercel Deploy button`

Go to [README.md](../README.md#deploy-to-vercel), and in the `Deploy to Vercel -> Backend` section, click the `Deploy` button. You will be redirected to the Vercel form, where you need to specify the name of your cloned repository, add the Neon integration, and set the required environment variables. If you don't have the values already prepared, just deploy with the supplied defaults and later edit them (along with any additional optional variables) in the `Environment` tab in the dashboard. Redeploy to apply the new values for the variables.

This is especially true for `SITE_URL` if you don’t have the frontend deployed yet. Once you do, you should set it to your frontend URL, for example `SITE_URL=https://full-stack-fastapi-template-nextjs-my-slug.vercel.app`, and redeploy.

**Note:** `DATABASE_URL` is a required variable. The Neon integration will set it by default, which is why it is omitted from the form in the wizard.

After a successful deployment, proceed to migrate and seed the database as described in the [Migrate and Seed Database](#migrate-and-seed-database) section.

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

Then, run the migrations and seed the database the same way as described in [docs/running.md#database](docs/running.md#database):

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
