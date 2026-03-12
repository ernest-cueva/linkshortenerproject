# Authentication — Clerk

All authentication in this app is handled exclusively by **Clerk**. No other auth methods (e.g. NextAuth, custom sessions, JWT libraries) should be introduced.

---

## Rules

- **Clerk is the only auth provider.** Do not implement any alternative authentication mechanism.
- **Never expose secret keys** — use environment variables (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`).
- Use Clerk's official Next.js SDK (`@clerk/nextjs`) for all auth logic.

---

## Route Protection

| Route | Behaviour |
|---|---|
| `/dashboard` | Protected — user must be signed in. Unauthenticated users are redirected to sign in. |
| `/` (homepage) | If the user is already signed in, redirect them to `/dashboard`. |

Enforce this via `clerkMiddleware` in `middleware.ts` at the project root.

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Redirect signed-in users away from the homepage
  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Protect the dashboard
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
```

---

## Sign In / Sign Up — Modal Mode

Sign in and sign up flows must **always launch as a modal**, never as a full-page redirect.

- Set the Clerk environment variables to prevent full-page auth routes:
  ```env
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/
  ```
- Trigger modals programmatically using the Clerk hooks:
  ```ts
  import { useClerk } from "@clerk/nextjs";

  const { openSignIn, openSignUp } = useClerk();

  // Open sign-in modal
  openSignIn();

  // Open sign-up modal
  openSignUp();
  ```
- Do **not** create dedicated `/sign-in` or `/sign-up` pages.

---

## Accessing the Current User

- **Server components / Server actions:** use `auth()` or `currentUser()` from `@clerk/nextjs/server`.
- **Client components:** use the `useUser()` or `useAuth()` hooks from `@clerk/nextjs`.

```ts
// Server
import { auth } from "@clerk/nextjs/server";
const { userId } = await auth();

// Client
import { useUser } from "@clerk/nextjs";
const { user, isSignedIn } = useUser();
```

---

## UI Components

Use Clerk's pre-built components where a UI element is needed:

- `<UserButton />` — renders the signed-in user's avatar/menu (include in the nav/header).
- `<SignInButton mode="modal">` / `<SignUpButton mode="modal">` — trigger modals from any button element.

Always pass `mode="modal"` to `<SignInButton>` and `<SignUpButton>` to keep auth in modal mode.
