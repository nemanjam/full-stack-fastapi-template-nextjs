# Vercel deployment frontend

## Demo

**[https://full-stack-fastapi-template-nextjs.vercel.app](https://full-stack-fastapi-template-nextjs.vercel.app)**

## Screenshot

![Frontend screenshot](screenshots/frontend-screenshot.png)

## Environment variables

#### Minimal required environment variables

```bash
# Backend url
API_URL=https://my-backend-url.vercel.app
```

#### All available environment variables

```bash
# Backend url
API_URL=https://my-backend-url.vercel.app

# Frontend url
# If omitted defaults to VERCEL_URL
SITE_URL=https://my-frontend-url.vercel.app
```

## Deploy using Vercel CLI

Checkout `vercel-deploy` branch. This branch has the required configuration files: `frontend/apps/web/vercel.json`, `frontend/.vercelignore`.

```bash
git checkout vercel-deploy
```

Create a new Vercel project, and deploy it.

```bash
# Install Vercel CLI
pnpm install -g vercel

# Log in to Vercel
vercel login

# Navigate to the frontend folder
cd frontend

# Deploy for the first time (production)
# Fill prompts for name, root directory `./apps/web/` (vercel.json dir)
vercel --prod

# Set required environment variables (production)
echo "https://api-full-stack-fastapi-template-nextjs-my-slug.vercel.app" | vercel env add API_URL production
# Set more optional variables...

# List existing environment variables
vercel env ls

# Redeploy after changes
vercel --prod  # production

# After deploy, the CLI outputs the URL
# Example: https://full-stack-fastapi-template-nextjs-my-slug.vercel.app

# Debug deployment
vercel inspect https://full-stack-fastapi-template-nextjs-my-slug.vercel.app --json
```