```ts

will create single github repo and 2 vercel projects
no separate env vars per project can be specified
no project can be selected for integration
will create blank failing 500 projects without env vars and db, display missing vars in ui

```

```bash
https://vercel.com/new/clone
?demo-description=Build full-stack apps with Next.js and FastAPI.
demo-image=https://github.com/nemanjam/full-stack-fastapi-template-nextjs/raw/main/docs/screenshots/frontend-screenshot-1200x630.png
&demo-title=Full stack FastAPI template with Next.js
&demo-url=https://full-stack-fastapi-template-nextjs.vercel.app
&project-name=Full stack FastAPI template with Next.js
&repository-name=full-stack-fastapi-template-with-next-js
&repository-url=https://github.com/nemanjam/full-stack-fastapi-template-nextjs/tree/vercel-deploy
&project-names=full-stack-fastapi-frontend,full-stack-fastapi-backend
&root-directories=frontend/apps/web,backend
&monorepo=1
&totalProjects=2
&skippable-integrations=1
&products=[
  {
    "type": "integration",
    "protocol": "storage",
    "productSlug": "neon",
    "integrationSlug": "neon"
  }
]
```