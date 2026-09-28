import { PROJECTS } from '@/lib/data';
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from '@/lib/ogImage';

export const alt = 'Project case study';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function Image({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = PROJECTS.find((item) => item.slug === slug);

    const description = project?.description ?? '';
    const firstSentence = description.split(/(?<=\.)\s/)[0] ?? description;

    return renderOgCard({
        eyebrow: `Project · ${project?.year ?? ''}`,
        title: project?.title ?? 'Project',
        subtitle:
            firstSentence.length > 160
                ? `${firstSentence.slice(0, 157)}…`
                : firstSentence,
        tags: project?.techStack ?? [],
    });
}
