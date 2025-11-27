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
```
