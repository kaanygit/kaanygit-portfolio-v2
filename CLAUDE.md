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

All portfolio content (personal info, projects, skills, services, etc.) is managed through a **singleton class** `app/models/PortfolioData.ts`. There is no database or CMS — data is hardcoded in this class and accessed via `PortfolioData.getInstance()`.

### Component Structure

All section components live in `app/components/` and use `'use client'` directive. The single page (`app/page.tsx`) composes them in order: Hero → About → Experience → Projects → Skills → Services → Contact → Footer. Navigation uses smooth scroll to hash anchors (#home, #about, etc.).

### Styling

- Dark theme defined via CSS variables in `app/globals.css`
- Custom utility classes: `.gradient-text`, `.glass` (glassmorphism), `.neon-glow`
- Tailwind dark mode via `"class"` strategy in `tailwind.config.ts`
- Custom fonts: Geist Sans and Geist Mono

### Animations

Framer Motion presets are defined in `app/utils/animations.ts` (fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn, slideInFromTop). Components use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations.

### API

Single endpoint: `POST /api/contact` — validates and submits contact form data to Google Forms via server-side fetch.

### Path Alias

`@/*` maps to the project root (configured in tsconfig.json).

## Content Language

UI text and content are in Turkish.
