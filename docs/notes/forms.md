```ts
Forms with React 19 and Next.js - leerob

https://www.youtube.com/watch?v=KhO4VjaYSXU
https://v0.app/chat/form-with-use-action-state-CiFWYqPHKvT?b=b_0v5ES6AiBeq
// client component that calls action
'use client'
const [state, action, isPending] = useActionState(submitAddress, initialState)
<form action={action} className="space-y-6" autoComplete="on">

// conclusion
form component client, everything above server components

```
