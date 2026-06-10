# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server with Turbopack
npm run build    # Production build with Turbopack
npm start        # Start production server
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

Single-page portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Deployed on Vercel with Vercel Analytics.

### Data Flow

All portfolio content (personal info, projects, skills, services, etc.) is managed through a **singleton class** `app/models/PortfolioData.ts`. There is no database or CMS — data is hardcoded in this class and accessed via `PortfolioData.getInstance()`. Keys are typed in `app/types/index.ts` (e.g. `ProjectKey`) — adding a project requires updating the type, the singleton, and all five message files.

### i18n

next-intl with five locales (tr default, en, de, fr, es). Pages live under `app/[locale]/`; translations in `messages/{locale}.json` with namespaces per section (`hero`, `about`, `projects.items.{key}`, …). Locale routing via `i18n/routing.ts` + `middleware.ts` ("as-needed" prefix: default locale has no URL prefix). All user-facing strings come from translations — components only hold keys.

### Component Structure

All section components live in `app/components/` and use `'use client'`. The page (`app/[locale]/page.tsx`) composes them in order: Navbar → Hero → About → Experience → Projects → Skills → Services → Contact → Footer. Navigation uses smooth scroll to hash anchors (#home, #about, etc.) with a scroll-spy in Navbar. Shared UI primitives in `app/components/ui/`: SectionWrapper, SectionHeader (mono index + display title), SplitLines (GSAP SplitText reveal), Reveal (GSAP fade), Marquee, ProjectRow, CountUp.

### Design System (monochrome editorial / Swiss)

Pure black/white inversion design — **no gradients, no glassmorphism, no shadows, no color accents, no border radius**.

- Tokens in `app/globals.css`: `--background`/`--foreground` (pure b/w, inverted in `.dark`), `--gray-1`/`--gray-2`, `--hairline`. There is **no `tailwind.config.ts`** — Tailwind v4 is configured entirely via `@theme inline` in globals.css; `dark:` follows the `.dark` class via `@custom-variant`.
- Custom utilities (defined with `@utility`, so variants like `lg:hairline-l` work): `.hairline-t/b/r/l`, `.mono-label` (Archivo 600 12px uppercase labels), `.display-huge` (massive uppercase display type), `.text-stroke` (outline type), `.invert-block`, `.link-draw` (underline draw on hover).
- Fonts (next/font, all with `latin-ext` subset for Turkish İ/ğ/ş): **Archivo** (`--font-display`), **DM Sans** (`--font-body`), **JetBrains Mono** (`--font-mono`). Uppercase always via CSS `text-transform`, never JS `.toUpperCase()` (Turkish dotted İ).
- Hover grammar: row/block color inversion (`hover:bg-foreground hover:text-background`), `.link-draw` underlines, `↗` arrows translating diagonally, magnetic CTAs (`app/hooks/useMagnetic.ts`).
- Taste rules (owner preference): bold type for labels — no thin letterspaced 11px mono, no thin italic serif; real icons (lucide / react-icons) for contact and social actions instead of text abbreviations; project logos visible on desktop and eager-loaded.

### Animations

GSAP is primary; plugins registered once in `app/lib/gsap.ts` (ScrollTrigger + SplitText — free since GSAP 3.13). Components import gsap only from that module and run animations inside `useGSAP` + `gsap.matchMedia(PREFERS_MOTION)` so prefers-reduced-motion gets a fully static page. Patterns: SplitText line/char mask reveals (`ui/SplitLines.tsx`), scrubbed parallax (hero name, footer name), infinite marquee, `gsap.quickTo` cursor-follow preview in Projects. Framer Motion remains only for: Navbar entrance + mobile menu, ThemeToggle icon swap, Contact status messages. `app/utils/animations.ts` was deleted.

### Theme & State

Three-way theme (light/dark/system) via zustand store `app/store/useThemeStore.ts` + `ThemeProvider` with inline `themeInitScript` in layout head (no flash). Theme = pure b/w inversion of the CSS variables.

### API

Single endpoint: `POST /api/contact` — validates and submits contact form data to Google Forms via server-side fetch.

### Path Alias

`@/*` maps to the project root (configured in tsconfig.json).

## Content Language

Default UI language is Turkish; en/de/fr/es translations must be kept in sync when adding keys.
