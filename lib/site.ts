/**
 * Canonical site URL used for metadata, sitemap, robots and OG images.
 * Override per environment with NEXT_PUBLIC_SITE_URL (no trailing slash).
 */
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-20-two.vercel.app'
).replace(/\/$/, '');

export const SITE_NAME = 'Adrian Shahnazari';

export const SITE_DESCRIPTION =
    'Portfolio of Adrian Shahnazari Darcheh, a Computer Engineering student at York University building full-stack and AI-native projects.';
