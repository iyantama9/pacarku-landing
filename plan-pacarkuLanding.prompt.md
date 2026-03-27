# Plan: PacarKu Landing Page

## Project Overview

PacarKu is an AI companion product that lives in the real world — not an ordinary chatbot. Users can chat via WhatsApp without downloading a new app. This landing page is the main showcase for the product, focusing on **premium visual experience** and **engaging interactions**.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme`)
- **Animation:** Framer Motion 12
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Fonts:** League Spartan, Manrope (Google Fonts)

## Current Structure

```
pacarku-landing/
├── public/
│   ├── animated_ara/          # 192-frame character animation (JPG sequence)
│   ├── logo_pacarku.png
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                # Character images (Ara, Gracia, Lisa)
│   ├── components/
│   │   ├── Hero.tsx           # 3D scroll-driven hero + canvas animation
│   │   ├── Features.tsx       # Bento grid feature section
│   │   ├── CallToAction.tsx   # Companion selector + character modal
│   │   ├── Navbar.tsx         # Floating glassmorphism navbar
│   │   ├── Footer.tsx         # Minimal footer
│   │   ├── AnimatedGrid.tsx   # Moving grid background
│   │   ├── ScrollReveal.tsx   # Scroll-triggered reveal wrapper
│   │   └── IntroText.tsx      # (Archived — merged into Hero timeline)
│   ├── index.css              # Design tokens & global styles
│   ├── App.tsx                # Root layout + Lenis init
│   └── main.tsx               # React entry point
├── index.html                 # HTML template + OG tags
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Implementation Plan

### Phase 1 — Foundation (Complete)
- [x] Project scaffold with Vite + React + TypeScript
- [x] Tailwind CSS v4 integration
- [x] Lenis smooth scroll setup
- [x] Animated grid background (`AnimatedGrid.tsx`)
- [x] Glassmorphism navbar with scroll-driven visibility (`Navbar.tsx`)
- [x] Scroll reveal wrapper component (`ScrollReveal.tsx`)

### Phase 2 — Hero Section (Complete)
- [x] 192-frame canvas animation driven by scroll position
- [x] Progressive frame loading (first frame instant, rest lazy-loaded)
- [x] Smooth scroll integration via Lenis + Framer Motion `useSpring`
- [x] Hero copy, CTA button, and scroll indicator

### Phase 3 — Features Section (Complete)
- [x] Bento grid layout (12-column CSS Grid)
- [x] Feature cards with hover effects and top highlight gradient
- [x] Scroll-reveal animations with staggered entry
- [x] Icons, tags, and optional links per card

### Phase 4 — Companion Selector (Complete)
- [x] Three AI characters: Gracia Amadea, Ara Kayla, Lisa Permata
- [x] Interactive collage layout with click-to-expand
- [x] Fullscreen modal with `layoutId` animation (Framer Motion)
- [x] Character profiles: personality, traits, description

### Phase 5 — Polish & Accessibility (Complete)
- [x] `prefers-reduced-motion` support across all animations
- [x] Custom scrollbar matching color palette
- [x] Ethereal CSS mask blending character images into background
- [x] Open Graph meta tags for social sharing

### Phase 6 — Future Improvements (Pending)
- [ ] Add unit and integration tests (Vitest + React Testing Library)
- [ ] Add E2E tests (Playwright)
- [ ] Optimize image assets (WebP conversion, lazy loading)
- [ ] Add i18n support (Indonesian / English toggle)
- [ ] Integrate analytics (e.g., Plausible or PostHog)
- [ ] Add a pricing / subscription section
- [ ] Performance audit and Lighthouse CI integration

## Design Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#0b0914` | Main background |
| `--color-primary` | `#fe88fe` | Pink — primary accent, highlight text |
| `--color-secondary` | `#679dfc` | Blue — labels, secondary elements |
| `--color-tertiary` | `#f5e7fe` | Light pink-white — soft text |
| `--color-accent` | `#679dfc` | Accent blue for glow effects |

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type-check + production build
npm run build

# Lint
npm run lint

# Preview production build
npm run preview
```
