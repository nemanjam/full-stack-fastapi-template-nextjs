```ts

git checkout -b vercel-deploy

------
// vercel deploy and submit template
https://www.reddit.com/r/nextjs/comments/1ha7ky2/fastapi_python_on_nextjs/
https://github.com/digitros/nextjs-fastapi/issues/25
// submit template form
https://vercel.com/templates/submit
https://www.reddit.com/r/vercel/comments/1ju7vxz/how_to_submit_templates_to_vercel/
// list
https://vercel.com/templates
// example deployment configs
https://github.com/vercel-labs/ai-sdk-preview-python-streaming
-------
// database, neon
https://vercel.com/marketplace/category/storage?category=storage&search=postgres
-----
https://vercel.com/docs/frameworks/backend/fastapi
----
// 250mb limit
/backend # du -sh .
213.2M  .
// without dev deps
/backend # du -sh .
149.1M  .
// debug, 3 level, sort desc
du -h -d 3 . | sort -hr
-------
remove dev dependencies from Dockerfile

----
allow frontend url in cors
allow_origins=[
    "http://localhost:3000",
    "https://myapp-web.vercel.app",
],
----
// env vars
Neon postgres, DB pool size fix
API_URL
// new github app
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
----
// urls
https://full-stack-fastapi-template-nextjs.vercel.app    → Next.js UI
https://api-full-stack-fastapi-template-nextjs.vercel.app    → FastAPI


// must create Neon database first
// vercel exclude, .vercelignore

cd backend
vercel --prod

cd frontend
vercel --prod

"name": "api-full-stack-fastapi-template-nextjs",
"name": "full-stack-fastapi-template-nextjs",

// test ignore
vercel --prebuilt --dry-run
---------
next.js app should set cookie in browser because its on same domain
fastapi should pass cookie to next.js server that will set cookie in browser
but github redirects to fastapi callback endpoint
must have unset cookie next.js api endpoint too
// callback url
https://api-full-stack-fastapi-template-nextjs.vercel.app/api/v1/auth/github/callback
---------
// remaining
deploy button
thumbnail 1200x630 px
docs
--------------------
// deploy button, neon
`
https://vercel.com/new/clone?
demo-description=A minimal template for building full-stack React applications using Next.js, Vercel, and Neon.
&demo-image=//images.ctfassets.net/e5382hct74si/1C5qjoXApiKj8hFdKy55bp/bcf64203cf35dccf71e0a59f7535876d/home.png
&demo-title=Vercel with Neon Postgres
&demo-url=https://vercel-marketplace-neon.vercel.app/
&from=templates
&products=[{"type":"integration","protocol":"storage","productSlug":"neon","integrationSlug":"neon"}]
&project-name=Vercel with Neon Postgres
&repository-name=vercel-with-neon-postgres
&repository-url=https://github.com/neondatabase-labs/vercel-marketplace-neon
&skippable-integrations=1
&teamSlug=nemanjas-projects-5a2a285a
`
&repository-url=https://github.com/neondatabase-labs/vercel-marketplace-neon
&repository-branch=main

// my backend url, in progress:

https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy&env=PROJECT_NAME,SITE_URL,BACKEND_CORS_ORIGINS,FIRST_SUPERUSER,FIRST_SUPERUSER_PASSWORD,DATABASE_URL&envDefaults=%7B%22PROJECT_NAME%22%3A%22Full%20stack%20FastAPI%20template%20Next.js%22%2C%22SITE_URL%22%3A%22https%3A%2F%2Fmy-frontend-url.vercel.app%22%2C%22BACKEND_CORS_ORIGINS%22%3A%22https%3A%2F%2Fmy-frontend-url.vercel.app%22%2C%22FIRST_SUPERUSER%22%3A%22admin%40example.com%22%7D&envDescription=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Ftree%2Fvercel-deploy%23vercel-environment-variables&envLink=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Fblob%2Fvercel-deploy%2F.env.vercel.example&project-name=full-stack-fastapi-template-nextjs&repository-name=full-stack-fastapi-template-nextjs&demo-title=Full%20stack%20FastAPI%20template%20Next.js&demo-description=Next.js%20fork%20of%20the%20official%20%22fastapi%2Ffull-stack-fastapi-template%22%20template.%20&demo-url=https%3A%2F%2Ffull-stack-fastapi-template-nextjs.vercel.app&demo-image=https%3A%2F%2Fgithub.com%2Fnemanjam%2Ffull-stack-fastapi-template-nextjs%2Fraw%2Fvercel-deploy%2Fdocs%2Fscreenshots%2Fdashboard-screenshot.png&products=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22neon%22%2C%22productSlug%22%3A%22neon%22%2C%22protocol%22%3A%22storage%22%7D%5D


`
https://vercel.com/new/clone
repository-url=https://github.com/nemanjam/full-stack-fastapi-template-nextjs/tree/vercel-deploy
env=PROJECT_NAME,SITE_URL,BACKEND_CORS_ORIGINS,FIRST_SUPERUSER,FIRST_SUPERUSER_PASSWORD,DATABASE_URL
envDefaults={
  "PROJECT_NAME": "Full stack FastAPI template Next.js",
  "SITE_URL": "https://my-frontend-url.vercel.app",
  "BACKEND_CORS_ORIGINS": "https://my-frontend-url.vercel.app",
  "FIRST_SUPERUSER": "admin@example.com"
}
envDescription=https://github.com/nemanjam/full-stack-fastapi-template-nextjs/tree/vercel-deploy#vercel-environment-variables
envLink=https://github.com/nemanjam/full-stack-fastapi-template-nextjs/blob/vercel-deploy/.env.vercel.example
project-name=full-stack-fastapi-template-nextjs
repository-name=full-stack-fastapi-template-nextjs
demo-title=Full stack FastAPI template Next.js
demo-description=Next.js fork of the official "fastapi/full-stack-fastapi-template" template.
demo-url=https://full-stack-fastapi-template-nextjs.vercel.app
demo-image=https://github.com/nemanjam/full-stack-fastapi-template-nextjs/raw/vercel-deploy/docs/screenshots/dashboard-screenshot.png
products=[
  {
    "type": "integration",
    "integrationSlug": "neon",
    "productSlug": "neon",
    "protocol": "storage"
  }
]
`
```