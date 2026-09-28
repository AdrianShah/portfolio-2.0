import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
        url: `${SITE_URL}/projects/${project.slug}`,
        lastModified: new Date(project.date),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...projectPages,
    ];
}
