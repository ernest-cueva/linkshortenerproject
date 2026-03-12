# UI Components & Styling

All UI in this app is built exclusively with **shadcn/ui**. Do not create custom components or introduce other component libraries.

---

## Rules

- **Always use shadcn/ui components.** Never build custom UI elements from scratch.
- **Never install alternative UI libraries** (e.g. MUI, Chakra, Radix primitives directly, Headless UI).
- Add new shadcn/ui components via the CLI — do not copy/paste component code manually:
  ```bash
  npx shadcn@latest add <component-name>
  ```
- All added components land in `components/ui/` — do not move or rename them.
- Compose complex UI by combining shadcn/ui primitives rather than wrapping them in custom abstractions.

---

## Styling

- Tailwind CSS is the only styling mechanism. Do not write plain CSS or use CSS Modules.
- Use the `cn()` utility from `@/lib/utils` to merge class names conditionally.
- Stick to the design tokens (colors, spacing, radius) defined in `globals.css` and `components.json`. Do not hard-code raw color or spacing values.

---

## Adding Components

1. Run `npx shadcn@latest add <component-name>`.
2. Import from `@/components/ui/<component-name>`.
3. Do not modify the generated file unless absolutely necessary; prefer composition over modification.

---

## Available Components

Check `components/ui/` for the components already installed before adding a new one.
