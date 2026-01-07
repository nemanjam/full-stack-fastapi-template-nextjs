```ts

git checkout -b feature/vercel-deploy
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
https://myapp-web.vercel.app    → Next.js UI
https://myapp-api.vercel.app    → FastAPI


// must create database first

```