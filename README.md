# Adawaty (JSX build)

This is the **JSX (non-TypeScript)** version of the original `adawatynew` site.

- Vite + React + Tailwind
- Multi-language UI: `en`, `ar-EG`, `ja`, `es`, `it`, `fr`, `de`
- Pricing calculator + export with unique serial number
- Backend (Neon Postgres): submissions stored in `lead_requests`
- Admin dashboard: `/admin` (requires `ADMIN_TOKEN`)

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Notes on the conversion

- `src/**/*.ts(x)` was converted to `src/**/*.js(x)` using **Sucrase**.
- Entry points:
  - `index.html` loads `src/main.jsx`
  - `vite.config.js` (converted from `vite.config.ts`)
