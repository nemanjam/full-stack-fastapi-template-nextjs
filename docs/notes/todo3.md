```ts
t3 env for env vars https://github.com/t3-oss/t3-env
        style 404 page
        error pages, handle exceptions in pages, error.tsx for pages
        handle 2 tabs css for admin
table horizontal scroll shadcn import { ScrollArea } from "@/components/ui/scroll-area"
        extract metadata as constants
        dark theme table and list skeleton bg-color
git tags to docker images
        rename to full-stack-fastapi-template-nextjs, Full stack FastAPI template Next.js
update readme
        pre-commit hook yaml file messes up staging files for commit `.pre-commit-config.yaml` // deleted hook from .git folder
refresh token - not present, password reset and emails
@router.post("/password-recovery/{email}")
@router.post("/reset-password/")
-------
fix backend tests, add frontend vitest unit, playwright e2e
        add register form, user/pass and github
        GITHUB login should be on login page
------
        unify env vars
        frontend NEXT_PUBLIC_SITE_URL and FRONTEND_HOST 
        backend NEXT_PUBLIC_API_URL and DOMAIN
-------
        handle profile password form for Github user
        user avatar, no
        use same columns for both password user and OAuth user, just add 'provider' and 'oauth_id' columns
        before testing github login check if database is connected, volume path renamed githubcities
---------
this should fix rpi and opi login // todo: test
BACKEND_CORS_ORIGINS="...https://full-stack-fastapi-template-nextjs.rpi.nemanjamitic.com,https://full-stack-fastapi-template-nextjs.opi.nemanjamitic.com"

---------
git checkout -b feat/register-page
---------
regular user cant edit his profile name, fix permissions
update env files in rpi and opi
make 4 oauth apps for redirect url, local, arm, rpi, opi
http://localhost:8000/api/v1/auth/github
------
extract utils, constants, models, logging in backend

------
i build container with single url, runtime env vars arent applies
// .github/workflows/build-push-frontend.yml
env:
  IMAGE_NAME: ${{ github.event.repository.name }}-frontend
  NEXT_PUBLIC_SITE_URL: 'https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com'
  NEXT_PUBLIC_API_URL: 'https://api.full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com'
  # for pi?
next.js should serve this api endpoint, its frontend runtime config
runtime, buildtime, public, private, server, client
https://nextjs.org/docs/app/guides/environment-variables#runtime-environment-variables
----
even client baseUrl is wrong
maybe thats why cross domain cookie failed, it fetches wrong backend
parsed PROCESS_ENV: // on rpi, this is called in instrumentation.ts, wtf
├─ NODE_ENV: production
├─ NEXT_PUBLIC_SITE_URL: https://full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com
└─ NEXT_PUBLIC_API_URL: https://api.full-stack-fastapi-template-nextjs.arm1.nemanjamitic.com
load runtime env vars in instrumentation.ts
----
runtime env var must be server only var, without NEXT_PUBLIC_
must use 'docker compose pull' before testing
-----
// api exposes runtime vars
// frontend/apps/web/src/app/config/route.ts
export async function GET() {
  return Response.json({
    processEnv: process.env,
  });
}
server action for config api?
```
