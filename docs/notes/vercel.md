```ts

git checkout -b feature/vercel-deploy

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

vercel --local-config backend/vercel.json --prod
vercel --local-config frontend/vercel.json --prod

"name": "api-full-stack-fastapi-template-nextjs",
"name": "full-stack-fastapi-template-nextjs",


```