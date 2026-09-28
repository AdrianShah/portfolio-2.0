# Adrian Shahnazari - Portfolio

> Credit: This project was originally forked from [Tajmirul's portfolio repository](https://github.com/Tajmirul/portfolio-2.0). Thank you to the original author for the foundation and inspiration.

Personal portfolio website built with Next.js to showcase projects, experience, and technical skills with interactive transitions and responsive layouts.

## Overview

This repository contains my portfolio source code, project case-study pages, and reusable UI sections. The site is designed to be fast, clean, and easy to customize as my work evolves.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP

## Features

- Responsive, modern portfolio layout
- Project showcase with detailed pages
- Smooth UI animations and transitions
- Easy-to-update profile and social data
- Organized project screenshots and media assets

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Common Scripts

- `npm run dev` - Start the local development server
- `npm run build` - Create an optimized production build
- `npm start` - Run the production build
- `npm run lint` - Run lint checks
- `npm run typecheck` - Run the TypeScript compiler without emitting

## Environment Variables

All optional. Set them in Vercel (or `.env.local`) as needed.

- `NEXT_PUBLIC_SITE_URL` - Canonical site URL used for metadata, sitemap, robots and Open Graph images (defaults to the Vercel deployment URL in `lib/site.ts`).
- `NEXT_PUBLIC_GA_ID` - Google Analytics measurement ID. Analytics are disabled when unset.

## Project Structure

- `app` - Routes, pages, and layouts
- `components` - Reusable UI components
- `lib` - Portfolio data and helper logic
- `public` - Static assets and screenshots

## Customization Notes

To personalize this portfolio, update profile and project content in:

- `lib/data.ts` - projects and social links
- `lib/site.ts` - site name, description and canonical URL
- `lib/stackIcons.ts` - stack groups; icons live in `public/stack`
- `components/LanguageProvider.tsx` - page copy for each language

Then adjust page copy/styling in the relevant `app` and `components` files as needed.

## Contributing

Suggestions and improvements are welcome through issues and pull requests.

## License

Licensed under the MIT License. See the local `LICENSE` file for details.
