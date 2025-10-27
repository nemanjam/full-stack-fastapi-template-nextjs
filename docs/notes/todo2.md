```ts
fix css formatting
separate ssr layouts from client components, maybe server actions for forms
fix danger button text, tab title cursor pointer
fix eslint errors, error checking didnt work before
handle runtime env vars for multiple envs, arm1, opi, rpi, mpc and deploy
runtime env vars - must use ssr components
github actions deploy with tailscale
react-query for fetching or ssr
card list fix flex full height
cva css for components
frontend tests, vitest, playwright
--------
client components because of localStorage auth
const token = localStorage.getItem('access_token');
refactor backend to use cookie instead of localStorage // important
look in other fastApi starters

git checkout -b feature/cookie-auth

https://github.com/fastapi/full-stack-fastapi-template/pull/1606/files
https://github.com/sinkozs/full-stack-fastapi-template/tree/use-http-only-cookie
https://github.com/fastapi/full-stack-fastapi-template/discussions/1564

fix python formatting, 2 newlines between functions, 1 new lines ..., installed "charliermarsh.ruff" extension
keep backend tests running correctly
migrate cookie logic in frontend
tiangolo already uses react-query, its replaced with axios in next.js project
frontend has no tests, next.js deleted them, original has only playwright e2e, no unit tests
------
forward cookie from client on each request, instead of localStorage token
setup react query and regenerate client
setup error logger
forward cookie in verifySession()
simply call const me = ApiClient.usersReadUserMe() ?
client next.js and react-query plugin // better next.js that uses fetch options for ssr
https://heyapi.dev/openapi-ts/clients/next-js
https://heyapi.dev/openapi-ts/plugins/tanstack-query
fix format script and turbo
// which client
https://chatgpt.com/s/t_68fde3f3aac481918ed11203317d902a
find react-query client with server components tutorial
react-query only for client side events, e.g. infinite scroll
server state management lib for client
analyze existing react-query openapi client in tiangolo
----
use only next-client and for client calls use next-client in react-query fetch data function_
use next-client in queryFn in react-query for client fetching and thats it // final
const { data: user } = useQuery<UserPublic | null, Error>({
    queryKey: ["currentUser"],
    queryFn: UsersService.readUserMe,
    enabled: isLoggedIn(),
})

do i need to pass token as header from cookie?
----
server actions
https://github.com/vintasoftware/nextjs-fastapi-template/blob/main/nextjs-frontend/components/actions/items-action.ts
simple client.setConfig({ baseURL }) call, axios client, "@hey-api/openapi-ts": "^0.60.1",
https://github.com/vintasoftware/nextjs-fastapi-template/blob/main/nextjs-frontend/lib/clientConfig.ts
validate env vars with createEnv t3
// client-next config example
https://github.dev/hey-api/openapi-ts/tree/main/examples/openapi-ts-next
bash scripts/generate-client.sh is in root but must use activated backend venv
in root because it uses both frontend and backend
-----
build docker scripts
```
