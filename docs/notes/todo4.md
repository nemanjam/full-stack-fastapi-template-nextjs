```ts
// forgot password, first
@router.post("/password-recovery/{email}")
link, action and email
------
tests
fix python, migrate Playwright, write unit Vitest
------
tag Docker images
git tag and docker image must match package (release) version
versioning with changesets/changesets or semantic-release/semantic-release, read docs
------
backend constants
------
must run local prod, edit .env, maybe docker on ports or traefik
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

```