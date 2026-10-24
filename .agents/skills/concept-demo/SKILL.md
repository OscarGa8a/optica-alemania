---
name: concept-demo
description: Master operational protocol for scaffolding, implementing, and visually certifying Concept Demos (high-impact visual MVPs) in the monorepo. Use when the user asks to "crear proyecto", "nuevo concept demo", "andamiar app", "maquetar landing", "implementar seccion", "validar con playwright", or work through the section-by-section landing lifecycle.
license: MIT
metadata:
  authors: "oscar-dev-projects"
  version: "1.0.0"
---

# Concept Demo Lifecycle & Onboarding Skill

This skill enforces the **canonical 7-step lifecycle** for building and certifying Concept Demos in `oscar-dev-projects`.  
The full reference manual is maintained at [`docs/CONCEPT_DEMO.md`](file:///home/oscar/.herdr/worktrees/oscar-dev-projects/worktree-brave-cloud-8048/docs/CONCEPT_DEMO.md).

---

## 🏛️ Core Philosophy: Concepts > Code & Anti-Slop

1. **Fase A (Concept Demo)**: Validate value proposition, editorial design, and section hierarchy without premature infrastructure overengineering (no heavy external analytics or complex tag managers yet).
2. **Fase B (Production Certification)**: Pass the baton to [`docs/PLAYBOOK.md`](file:///home/oscar/.herdr/worktrees/oscar-dev-projects/worktree-brave-cloud-8048/docs/PLAYBOOK.md) for 100/100 Lighthouse, deferred GTM Zero-TBT, Schema.org, and `llms.txt`.
3. **Zero Blind Coding**: Never create components or write markup without crossing the Input Gates first.
4. **Anti-Slop**: Reject generic purple/blue gradients, dark voids, and repetitive cards. Prioritize real photography, editorial typography, and tactile micro-interactions.

---

## 🚪 Step 0: Input Gates (Mandatory)

Before scaffolding or creating files in `apps/`, verify the physical presence of:
1. **App Identity**: `apps/<proyecto>/` and monorepo package `@oscar-dev/<proyecto>`.
2. **Master Blueprint (`*Blueprint*.md`)**: Content hierarchy, copy, real CTAs, validated business data (phones, locations).
3. **Design System (`*Design_System*.md`)**: Semantic color tokens, corporate typography, spacing scales.
4. **Mockups & Assets in `apps/<proyecto>/docs/`**:
   - Original logo files (`logo.png`, `logo-horizontal.png`, `favicon.svg`).
   - Section mockups (`<seccion>_desktop.png` and `<seccion>_mobile.png`).
   - Individual section images (`<seccion>_image_*.png`).

> ⛔ **BLOCKING RULE**: If blueprint, design system, or mockups are missing, STOP and request them from the user.

---

## 🛠️ Step 1: Canonical Scaffolding

Standard directory layout:
```text
apps/<proyecto>/
├── docs/                      # Blueprints, Design Systems, mockups and Playwright screenshots
│   └── screenshots/           # Verification captures
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                # Optimized Web graphics
├── src/
│   ├── components/            # Atomic section components (Hero.astro, Needs.astro, etc.)
│   ├── data/
│   │   └── siteConfig.ts      # Centralized business data model
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML shell and fonts
│   ├── pages/
│   │   └── index.astro        # Sequential landing page composition
│   ├── styles/
│   │   └── global.css         # Tailwind v4 import & @theme tokens
│   └── utils/
│       └── whatsapp.ts        # Dynamic encoded WhatsApp links
├── astro.config.mjs           # Astro with @tailwindcss/vite
├── package.json               # Monorepo dependencies
└── tsconfig.json              # Strict Astro config ("extends": "astro/tsconfigs/strict")
```

### Dependencies
```bash
pnpm --filter @oscar-dev/<proyecto> add astro @tailwindcss/vite tailwindcss @fontsource/<display> @fontsource/<body> lucide-astro sharp
```

---

## 🎨 Step 2: Design Tokens in Tailwind v4 (`@theme`)

Tailwind v4 does not use `tailwind.config.js`. Define tokens in `src/styles/global.css`:
```css
@import "tailwindcss";
@import "@fontsource/<font-body>/400.css";
@import "@fontsource/<font-body>/600.css";
@import "@fontsource/<font-body>/700.css";

@theme {
  --font-sans: "<FontBody>", system-ui, sans-serif;
  --font-display: "<FontDisplay>", system-ui, sans-serif;

  --color-primary: #...;
  --color-secondary: #...;
  --color-background: #...;
  --color-surface: #...;
  --color-line: #...;
  --color-text: #...;

  /* Emil Kowalski motion curve (no bounce) */
  --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 📦 Step 3: Centralized Data Layer (`siteConfig.ts`)

Strict separation between business data and presentation:
- All copy, navigation links, branch locations, phone numbers, and FAQs live in `src/data/siteConfig.ts`.
- Components `.astro` consume structured props; no hardcoded strings in markup.

---

## 📐 Step 4: Atomic Section-by-Section Loop

> ⚠️ **RULE**: Never implement the whole landing page at once. Iterate section by section.

1. **Verify Section Inputs**: Ensure `<seccion>_desktop.png`, `<seccion>_mobile.png`, and required images exist.
2. **Implement Component**: Create `src/components/<Section>.astro` (mobile-first, `clamp()` fluid typography, GPU-accelerated micro-interactions).
3. **Mount in `index.astro`**: Add to main page sequence.
4. **Playwright Visual Verification**:
   - Build: `pnpm --filter @oscar-dev/<proyecto> build`.
   - Run runner: `node scripts/test-<proyecto>.mjs`.
   - Viewports: Desktop (1440x900) & Mobile (390x844).
   - Assertions: **0 console errors, 0 broken 404 resources, 0 horizontal overflow**.
5. **Visual Audit**: Compare rendered screenshots in `docs/screenshots/` against mockup with `view_file`.
6. **User Approval Gate**: Present results and ask for sign-off before proceeding to the next section.

---

## 🎨 Step 5: Anti-Slop Heuristics

1. **Organic Silhouettes & Masks**:
   - Never approximate organic fluid shapes or blobs with generic `rounded-[...]`.
   - Model exact contours using normalized SVG `<clipPath id="..." clipPathUnits="objectBoundingBox">` (`0..1` scale).
2. **Cursive Accents**:
   - Load corporate handwriting fonts (`@fontsource/caveat`) with natural angle (-5° to -8°) and vector swoosh underlines.
3. **SVG Icons**:
   - Use inline SVG or `lucide-astro`. No raw OS emojis in production UI.

---

## 🚀 Step 6: PR & Memory

1. **Save to Engram**: Record decisions with `mem_save` and close session with `mem_session_summary`.
2. **Git Branch & Conventional Commits**:
   - Branch: `feat/<proyecto>-landing`.
   - Commits: `feat(<proyecto>): ...` or `docs(<proyecto>): ...`.
   - **Never add `Co-Authored-By` or AI attribution**.
3. **Open Pull Request**:
   - Create PR using `gh pr create` documenting architecture, sections, and Playwright verification pass status.
