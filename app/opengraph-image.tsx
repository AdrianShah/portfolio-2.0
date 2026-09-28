import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from '@/lib/ogImage';
import { SITE_NAME } from '@/lib/site';

export const alt = `${SITE_NAME} | Portfolio`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
    return renderOgCard({
        eyebrow: 'Portfolio',
        title: SITE_NAME,
        subtitle:
            'Computer Engineering student at York University building full-stack and AI-native projects.',
        tags: ['Next.js', 'TypeScript', 'FastAPI', 'AI'],
    });
}
