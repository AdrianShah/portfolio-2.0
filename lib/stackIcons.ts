/** Devicon & Simple Icons SVGs (allow-list URLs for <img> / next/image). */
const D =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons' as const;

const si = (slug: string, color = 'ffffff') =>
    `https://cdn.simpleicons.org/${slug}/${color}`;

export function stackItemIcon(name: string): string {
    const map: Record<string, string> = {
        HTML: `${D}/html5/html5-original.svg`,
        CSS: `${D}/css3/css3-original.svg`,
        JavaScript: `${D}/javascript/javascript-original.svg`,
        TypeScript: `${D}/typescript/typescript-original.svg`,
        React: `${D}/react/react-original.svg`,
        'Next.js': `${D}/nextjs/nextjs-original.svg`,
        'Tailwind CSS': `${D}/tailwindcss/tailwindcss-original.svg`,
        GSAP: si('greensock', '88CE02'),
        Electron: `${D}/electron/electron-original.svg`,
        Vite: `${D}/vitejs/vitejs-original.svg`,
        'Firebase (Auth + Firestore)': `${D}/firebase/firebase-plain.svg`,
        Supabase: si('supabase', '3FCF8E'),
        Convex: si('convex', 'FF6B6B'),
        Clerk: si('clerk', '6C47FF'),
        FFmpeg: si('ffmpeg', '007808'),
        Sharp: si('sharp', '99D071'),
        Git: `${D}/git/git-original.svg`,
        GitHub: si('github', 'ffffff'),
        'GitHub Actions': si('githubactions', '2088FF'),
    };

    return (
        map[name] ?? `${D}/github/github-original.svg`
    );
}

export type StackCategory = { title: string; items: string[] };

export const MY_STACK_GROUPS: StackCategory[] = [
    {
        title: 'Languages',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
        title: 'Frontend & UI',
        items: ['React', 'Next.js', 'Tailwind CSS', 'GSAP'],
    },
    {
        title: 'Desktop & build',
        items: ['Electron', 'Vite'],
    },
    {
        title: 'Data & auth',
        items: ['Firebase (Auth + Firestore)', 'Supabase', 'Convex', 'Clerk'],
    },
    {
        title: 'Media',
        items: ['FFmpeg', 'Sharp'],
    },
    {
        title: 'Tooling',
        items: ['Git', 'GitHub', 'GitHub Actions'],
    },
];
