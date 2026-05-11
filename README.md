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

- Node.js 18+ recommended
- pnpm

### Installation

```bash
pnpm install
```

### Run in Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
pnpm build
pnpm start
```

## Common Scripts

- `pnpm dev` - Start the local development server
- `pnpm build` - Create an optimized production build
- `pnpm start` - Run the production build
- `pnpm lint` - Run lint checks

## Project Structure

- `app` - Routes, pages, and layouts
- `components` - Reusable UI components
- `lib` - Portfolio data and helper logic
- `public` - Static assets and screenshots

## Customization Notes

To personalize this portfolio, update profile and project content in:

- `lib/data.ts`

Then adjust page copy/styling in the relevant `app` and `components` files as needed.

## Contributing

Suggestions and improvements are welcome through issues and pull requests.

## License

Licensed under the MIT License. See the local `LICENSE` file for details.
