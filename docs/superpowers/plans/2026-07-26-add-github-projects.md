# Add GitHub Projects Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Synergo, Codessey, Delatio, Elenchus, and Fan Translator to the portfolio with screenshots, and keep en/fa/el translations consistent for project detail labels and copy.

**Architecture:** Data-only additions in `lib/data.ts` plus screenshot assets. Project case-study strings and UI labels move behind language-aware lookups (`lib/projectLocales.ts` + `LanguageProvider` labels) so switching language updates project pages like the rest of the site.

**Tech Stack:** Next.js, TypeScript, Playwright (screenshot capture), existing LanguageProvider (`en` | `fa` | `el`)

## Global Constraints

- Exclude Hall-Sense
- Product names: Synergo, Codessey, Delatio, Elenchus, Fan Translator
- Order: five new projects first, then existing four unchanged in content
- Approved EN description/role copy from `docs/superpowers/specs/2026-07-26-add-github-projects-design.md`
- Omit Fan Translator `liveUrl` unless a public deploy exists
- Translate project labels + title/description/role for all projects in `fa` and `el`

---

### Task 1: Capture screenshots

**Files:**
- Create: `public/project-screenshots/synergo-*.png`, `codessey-*.png`, `delatio-*.png`, `elenchus-*.png`, `fan-translator-*.png`

- [ ] **Step 1:** Use Playwright to screenshot live demos (and Fan Translator repo UI if needed)
- [ ] **Step 2:** Save 1–3 PNGs per project under `/public/project-screenshots`

### Task 2: Add project data + stack icons

**Files:**
- Modify: `lib/data.ts`
- Modify: `lib/stackIcons.ts` (add FastAPI, Python, Gemini, WebSocket, Mapbox, Expo, ElevenLabs, etc. as needed)

- [ ] **Step 1:** Add `shots` keys and five `PROJECTS` entries at the top of the array with approved copy/links
- [ ] **Step 2:** Extend `stackItemIcon` map for any new tech labels

### Task 3: Project i18n (labels + copy)

**Files:**
- Create: `lib/projectLocales.ts`
- Modify: `components/LanguageProvider.tsx`
- Modify: `app/projects/[slug]/_components/ProjectDetails.tsx`
- Modify: `app/_components/Project.tsx` (localized title in list if shown)

- [ ] **Step 1:** Add `projects.labels` (`year`, `tech`, `description`, `role`) in en/fa/el
- [ ] **Step 2:** Add slug-keyed title/description/role translations for all nine projects in en/fa/el
- [ ] **Step 3:** Wire `ProjectDetails` (and list title) to `useLanguage` + locale lookup with EN fallback from `data.ts`

### Task 4: Verify

- [ ] **Step 1:** Confirm `/projects/[slug]` works for each new slug
- [ ] **Step 2:** Confirm language switch updates labels + project copy
- [ ] **Step 3:** Commit
