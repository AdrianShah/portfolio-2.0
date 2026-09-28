import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${SITE_NAME} | Portfolio`,
        short_name: SITE_NAME,
        description: SITE_DESCRIPTION,
        start_url: '/',
        display: 'standalone',
        background_color: '#0e1118',
        theme_color: '#0e1118',
        icons: [
            { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
            { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
    };
}
