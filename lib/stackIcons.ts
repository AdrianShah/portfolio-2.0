/**
 * Stack icons are vendored under `public/stack` so the Stack section never
 * depends on a third-party CDN at runtime. Sources: Devicon and Simple Icons.
 *
 * `mono` marks icons drawn in a single dark colour; those are inverted in
 * dark mode so they stay visible on the dark background.
 */
export type StackIcon = { src: string; mono?: boolean };

const icon = (file: string, mono = false): StackIcon => ({
    src: `/stack/${file}.svg`,
    mono,
});

const ICONS: Record<string, StackIcon> = {
    HTML: icon('html'),
    CSS: icon('css'),
    JavaScript: icon('javascript'),
    TypeScript: icon('typescript'),
    React: icon('react'),
    'Next.js': icon('nextjs', true),
    'Tailwind CSS': icon('tailwindcss'),
    GSAP: icon('gsap'),
    Electron: icon('electron'),
    Vite: icon('vite'),
    'Firebase (Auth + Firestore)': icon('firebase'),
    'Firebase Auth': icon('firebase'),
    Firestore: icon('firebase'),
    Supabase: icon('supabase'),
    Convex: icon('convex'),
    Clerk: icon('clerk'),
    FFmpeg: icon('ffmpeg'),
    Sharp: icon('sharp'),
    Git: icon('git'),
    GitHub: icon('github', true),
    'GitHub Actions': icon('githubactions'),
    Python: icon('python'),
    FastAPI: icon('fastapi'),
    WebSocket: icon('websocket'),
    Gemini: icon('gemini'),
    'Gemini 2.5': icon('gemini'),
    'Google ADK': icon('google'),
    Pydantic: icon('pydantic'),
    LangGraph: icon('langchain', true),
    Mapbox: icon('mapbox'),
    Expo: icon('expo', true),
    ElevenLabs: icon('elevenlabs', true),
    'Anam AI': icon('anam'),
    Cursor: icon('cursor', true),
};

const FALLBACK: StackIcon = icon('github', true);

export function stackItemIcon(name: string): StackIcon {
    return ICONS[name] ?? FALLBACK;
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
