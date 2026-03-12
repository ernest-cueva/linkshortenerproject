# Agent Instructions — Link Shortener Project

This file is the entry point for LLM coding agents working in this repository. It defines the rules, conventions, and standards all agents must follow. Detailed guidance is broken out into topic-specific files in the `/docs` directory.

> **CRITICAL — NON-NEGOTIABLE REQUIREMENT:** You MUST use the `read_file` tool to read the full contents of every relevant `/docs` file BEFORE writing or modifying any code. This is not optional. Generating code without first reading the applicable instruction file(s) is a direct violation of these agent rules.

---

## Project Overview

This is a **link shortener web application** built with the Next.js App Router. Users can create shortened URLs, manage them via a dashboard, and are authenticated via Clerk. The database is PostgreSQL (hosted on Neon) accessed through Drizzle ORM.

---

## Agent Rules

1. **🚨 MANDATORY: Read the relevant `/docs` file(s) BEFORE writing any code.** Use `read_file` to load the full contents of every applicable instruction file. Do NOT skip this step, do NOT rely on memory or assumptions, and do NOT generate code before this step is complete. Skipping this is a critical failure.
2. **Never bypass TypeScript** — all code must be fully typed. Do not use `any` unless absolutely unavoidable and documented.
3. **Never commit secrets or credentials** — use environment variables only.
4. **Follow the file/folder conventions** defined in [`/docs/project-structure.md`](./docs/project-structure.md).
5. **Use the established tech stack** — do not introduce new dependencies without a clear justification.
6. **Write minimal code** — do not over-engineer, add unnecessary abstractions, or add unused features.
7. **Security first** — validate all user input, never expose sensitive data, follow OWASP guidelines.

---

## Documentation Index

| Topic | File |
|---|---|
| Tech Stack & Dependencies | [`/docs/tech-stack.md`](./docs/tech-stack.md) |
| Project Structure & Conventions | [`/docs/project-structure.md`](./docs/project-structure.md) |
| Coding Standards | [`/docs/coding-standards.md`](./docs/coding-standards.md) |
| Database (Drizzle ORM + Neon) | [`/docs/database.md`](./docs/database.md) |
| Authentication (Clerk) | [`/docs/authentication.md`](./docs/authentication.md) |
| UI Components & Styling | [`/docs/ui-components.md`](./docs/ui-components.md) |

---

## Quick Reference

- **Run dev server:** `npm run dev`
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Generate DB migrations:** `npx drizzle-kit generate`
- **Push DB schema:** `npx drizzle-kit push`
- **Path alias:** `@/` maps to the project root (e.g. `@/lib/utils`, `@/db`)
