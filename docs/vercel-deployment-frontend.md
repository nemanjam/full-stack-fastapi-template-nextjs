# Vercel deployment frontend

## Demo

**[https://full-stack-fastapi-template-nextjs.vercel.app](https://full-stack-fastapi-template-nextjs.vercel.app)**

## Screenshot

![Frontend screenshot](screenshots/frontend-screenshot-1200x630.png)

## Environment variables

#### Required environment variables

```bash
# Backend url
API_URL=https://my-backend-url.vercel.app

# Frontend url
SITE_URL=https://my-frontend-url.vercel.app
```

## Deploy using "Vercel Deploy" button

If you haven't already, click the `Vercel Deploy` button and go through the setup wizard as described in the backend documentation: [Deploy using "Vercel deploy" button](vercel-deployment-backend#deploy-using-vercel-deploy-button).

Once the wizard is complete and you have configured and deployed the backend project, the only remaining step is to set the required environment variables for the frontend.

screenshot

### Set the environment variables

The frontend has only two environment variables, and **both are required**. In your frontend project dashboard on Vercel, set:

- `API_URL` to the URL of your backend deployment.
- `SITE_URL` to the URL of the frontend deployment itself.

```bash
# Backend url
API_URL=https://full-stack-fastapi-backend-my-slug.vercel.app

# Frontend url
SITE_URL=https://full-stack-fastapi-frontend-my-slug.vercel.app
```

Redeploy the project to apply the new environment variables, and that’s it - your application is now fully deployed and publicly accessible.

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