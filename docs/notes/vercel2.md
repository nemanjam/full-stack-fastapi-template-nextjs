https://vercel.com/new/clone?demo-description=Build%20full-stack%20apps%20with%20Next.js%20and%20FastAPI.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3OFhcgXIeEap6JyvSi3gjA%2Fbc483323972379fc927e8bba00e04f18%2Ffrontend-screenshot-1200x630.png&demo-title=Full%20stack%20FastAPI%20template%20with%20Next.js&demo-url=https%3A%2F%2Ffull-stack-fastapi-template-nextjs.vercel.app&from=templates&monorepo=1&products=%255B%257B%2522type%2522%253A%2522integration%2522%252C%2522protocol%2522%253A%2522storage%2522%252C%2522productSlug%2522%253A%2522neon%2522%252C%2522integrationSlug%2522%253A%2522neon%2522%257D%255D&project-name=Full%20stack%20FastAPI%20template%20with%20Next.js&project-names=full-stack-fastapi-frontend%2Cfull-stack-fastapi-backend&repository-name=full-stack-fastapi-template-with-next-js&repository-url=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy&root-directories=frontend%2Fapps%2Fweb%2Cbackend&skippable-integrations=1&teamSlug=amy-vtest314&totalProjects=2


```bash
https://vercel.com/new/clone
  ?demo-description=Build full-stack apps with Next.js and FastAPI.
  &demo-image=//images.ctfassets.net/e5382hct74si/3OFhcgXIeEap6JyvSi3gjA/bc483323972379fc927e8bba00e04f18/frontend-screenshot-1200x630.png
  &demo-title=Full stack FastAPI template with Next.js
  &demo-url=https://full-stack-fastapi-template-nextjs.vercel.app
  &from=templates
  &monorepo=1
  &products=[
    {
      "type": "integration",
      "protocol": "storage",
      "productSlug": "neon",
      "integrationSlug": "neon"
    }
  ]
  &project-name=Full stack FastAPI template with Next.js
  &project-names=full-stack-fastapi-frontend,full-stack-fastapi-backend
  &repository-name=full-stack-fastapi-template-with-next-js
  &repository-url=https://github.com/nemanjam/full-stack-fastapi-template-nextjs/tree/vercel-deploy
  &root-directories=frontend/apps/web,backend
  &skippable-integrations=1
  &teamSlug=amy-vtest314
  &totalProjects=2
```

ovo ce biti url-ovi &project-names=full-stack-fastapi-frontend,full-stack-fastapi-backend
https://full-stack-fastapi-frontend.vercel.app/
https://full-stack-fastapi-backend.vercel.app/

// monorepo flow
monorepo=1
totalProjects=2
project-names=frontend,backend
root-directories=frontend/apps/web,backend

// template flow - undocumented
-------------------

[![Deploy to Vercel](https://vercel.com/button)](
  https://vercel.com/new/clone
    ?repository-url=https://github.com/nemanjam/nemanjam.github.io
    &env=SITE_URL,PLAUSIBLE_DOMAIN,PLAUSIBLE_SCRIPT_URL
    &envDefaults={
      "SITE_URL":"https://my-blog.vercel.app",
      "PLAUSIBLE_DOMAIN":"my-blog.vercel.app",
      "PLAUSIBLE_SCRIPT_URL":"https://plausible.io/js/script.js"
    }
    &envDescription=https://github.com/nemanjam/nemanjam.github.io#environment-variables
    &envLink=https://github.com/nemanjam/nemanjam.github.io/blob/main/.env.production.example
    &project-name=Developer blog
    &repository-name=nemanjam.github.io
    &demo-title=Developer blog
    &demo-description=Developer blog template built with Astro and Tailwind.
    &demo-url=https://nemanjam.vercel.app
    &demo-image=https://raw.githubusercontent.com/nemanjam/nemanjam.github.io/refs/heads/main/docs/screenshots/developer-blog-screenshot-1200x630.png
    &skippable-integrations=1
)

```ts
// config.py, add VERCEL === 1 condition, to detect vercel or local
// backend log
pydantic_core._pydantic_core.ValidationError: 1 validation error for Settings
FIRST_SUPERUSER // ovo je greska
Field required [type=missing, input_value={'VERCEL_ENV': 'production'}, input_type=dict] //  a ne ovo

// local backend and frontend /me
INFO:     127.0.0.1:35074 - "GET /api/v1/users/me HTTP/1.1" 403 Forbidden

// no env vars defined for both frontend and backend, not even neon

next.js add warning logs on build
detect vercel in both frontend and backend
backend config.py vercel conditional logic
database migrations stays, check neon demo
from templates database_url and neon vars undefined??? // fora je 2 projekta, mora posle u integrations da poveze integraciju za backend projekat
pregledaj postojece monorepo full stack templejte
template md: 1. local installation, 2. vercel deploy

Can you update your template to catch the error and let the dev know which variable needs to be set to make the frontend and backend communicate?
```