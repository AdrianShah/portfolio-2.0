# Add Recent Projects to Portfolio: Design Spec

**Date:** 2026-07-26  
**Status:** Approved for implementation planning  
**Approach:** Data-only (extend `lib/data.ts` + screenshots; no new UI patterns)

## Goal

Add five recent projects to the portfolio project list, excluding Hall-Sense (school project). Keep the existing four projects unchanged. Use product names and the current `IProject` shape.

## Scope

### In scope

- New entries in `lib/data.ts` `PROJECTS` array
- Screenshots under `/public/project-screenshots` captured from live demos (or best available UI for projects without a public deploy)
- Source and live links where available
- No per-project i18n: `LanguageProvider` only translates chrome (e.g. section titles); project title/description/role stay English in `lib/data.ts`

### Out of scope

- Hall-Sense
- New badge/tag UI for hackathon names
- Featured-strip / alternate layout
- Changing File Changer, Potluckio, WPM ATLAS, or Portfolio Website entries
- Publishing Fan Translator if no public deploy exists (omit `liveUrl`)

## Project order (newest-first, above existing)

1. Synergo  
2. Codessey  
3. Delatio  
4. Elenchus  
5. Fan Translator  
6. *(existing)* File Changer  
7. *(existing)* Hackathon 1 (Potluckio)  
8. *(existing)* WPM ATLAS  
9. *(existing)* Portfolio Website  

## Entry details

### 1. Synergo

| Field | Value |
|-------|--------|
| slug | `synergo` |
| year | 2026 |
| sourceCode | `https://github.com/AdrianShah/HackDay-HacktheValley` |
| liveUrl | `https://hackday-agent-viewer.vercel.app` |
| techStack | TypeScript, React, Vite, FastAPI, WebSocket, Gemini |

**Description:** Synergo is a live multiplayer AI agent viewer for hackathons and parallel coding sessions. It streams IDE activity, prompts, AI captions, and file diffs from every teammate into one shared board, and flags overlapping edits before they turn into merge conflicts. Contributors join a shared room with a code (no accounts) while a local watcher pushes batched saves over WebSockets to a FastAPI relay that broadcasts to a React dashboard.

**Role:** Owned the backend relay: room lifecycle, WebSocket join/broadcast flows for watchers and spectators, activity ingestion (debounced diffs and prompts), and the conflict-detection path that surfaces overlapping file edits. Wired Gemini captioning/conflict labeling as a best-effort AI layer so the demo still works when the model is slow or offline.

### 2. Codessey

| Field | Value |
|-------|--------|
| slug | `codessey` |
| year | 2026 |
| sourceCode | `https://github.com/AdrianShah/Codessey` |
| liveUrl | `https://codessey-review.vercel.app` |
| techStack | Python, FastAPI, Google ADK, Gemini 2.5, Pydantic |

**Description:** Codessey is a multi-agent code review system that ingests pasted code, uploads, or GitHub URLs and produces a structured Markdown report. Four specialist agents (logic, security, readability, performance) run in parallel via Google ADK, then a conductor synthesizes findings with deterministic health scoring, secret redaction, and SSRF-safe GitHub ingestion. Built for the GDG YorkU Hackathon.

**Role:** Built the product end-to-end outside the backend service layer for now: agent workflow design (fan-out/fan-in specialists + conductor), review UX and report rendering, ingestion/validation flows (chunking, language detect, GitHub URL path), security hardening (injection defenses, redaction), CLI demo path, and overall system architecture for a reliable demo-day experience.

### 3. Delatio

| Field | Value |
|-------|--------|
| slug | `delatio` |
| year | 2026 |
| sourceCode | `https://github.com/AdrianShah/NVIDIA-SparkHacks` |
| liveUrl | `https://delatio.vercel.app/` |
| techStack | Next.js, TypeScript, FastAPI, LangGraph, Mapbox, Expo/React Native (mobile) |

**Description:** Delatio (CivicVox-Omni) is a local-first, low-latency multimodal emergency intelligence platform from NVIDIA Spark Hack Toronto. A phone camera and mic feed an edge pipeline that classifies hazards, pulls nearby Toronto open-data context (hydrants, RentSafeTO, 311), and streams a dispatch-style report to a coordinator dashboard, designed to keep working without cloud dependency on a GB10 node.

**Role:** Built out the mobile experience, got the GB10 agent/inference path running for the demo, and connected the full stack so mobile capture, local agents, and the dashboard stayed in sync during live incident flows.

### 4. Elenchus

| Field | Value |
|-------|--------|
| slug | `elenchus` |
| year | 2026 |
| sourceCode | `https://github.com/AppleAyaan/elenchus` |
| liveUrl | `https://useelenchus.vercel.app/` |
| techStack | TypeScript, ElevenLabs, Anam AI, Cursor |

**Description:** Elenchus is an AI pitch roaster: founders get a short window to pitch their startup to a realistic human avatar that cross-examines like a ruthless VC: no fluff, just the questions that expose weak assumptions. Built in under 90 minutes for Cursor × Toronto Tech Week; won Best Use of ElevenLabs in track.

**Role:** Owned the frontend UI/UX and co-led the demo pitch, shaping the product narrative, live presentation, and the interface founders use to face the avatar under time pressure.

### 5. Fan Translator

| Field | Value |
|-------|--------|
| slug | `fan-translator` |
| year | 2026 |
| sourceCode | `https://github.com/drahcir8805/fifa_fan_translate` |
| liveUrl | omit unless a public deploy is discovered during implementation |
| techStack | TypeScript, React, Vite, FastAPI, Gemini, Expo |

**Description:** Fan Translator (PitchTalk) is a World Cup 2026 fan translation app for real conversations across language barriers. Fans type or speak in their language and hear it in another, with a hybrid cloud/offline model: live Gemini translation when connected, plus a localized phrasebook, chants, and on-device TTS that still work when stadium Wi‑Fi drops. Covers primary languages for all 48 WC26 teams (17 languages).

**Role:** Built the mobile app (Expo / React Native): matchday conversation UX, shared PitchTalk content (languages, phrasebook, chants), on-device speech playback, and the offline-first flows so fans can still communicate when the network dies.

## Screenshots

- Capture 1–3 UI shots per project from live demos where possible.
- Save under `/public/project-screenshots` with kebab-case names matching existing convention (`synergo-*.png`, `codessey-*.png`, etc.).
- Wire via a `shots` helper object in `lib/data.ts` (same pattern as Potluck / WPM / portfolio).
- Fan Translator: if no live URL, capture from local `web/` or `mobile` UI, or use the best static/demo artifact available in-repo; never invent fake product UI.
- Prefer real product UI; avoid decorative placeholders.

## Implementation notes

- Follow existing `IProject` fields only; no schema or i18n changes for project body copy.
- Do not add Hall-Sense.
- Keep stack icons working: only use tech names already mapped in `lib/stackIcons.ts`, or extend the map if new labels are needed for display.

## Success criteria

- All five projects appear in the selected-projects list and have working detail pages at `/projects/[slug]`.
- Links open correct GitHub/live URLs.
- Descriptions and roles match the approved copy above.
- Screenshots load and look like the real product UIs.
- Existing projects remain unchanged.
