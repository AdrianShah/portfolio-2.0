import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return { title: 'Project not found' };
    }

    const title = `${project.title} - ${project.techStack.slice(0, 3).join(', ')}`;

    return {
        title,
        description: project.description,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title,
            description: project.description,
            url: `/projects/${project.slug}`,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: project.description,
        },
    } satisfies Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
