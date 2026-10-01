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
    Java: icon('java'),
    C: icon('c'),
    'C++': icon('cplusplus'),
    Swift: icon('swift'),
    'Framer Motion': icon('framer'),
    'Three.js': icon('threejs', true),
    'React Native': icon('react'),
    SwiftUI: icon('swift'),
    ARKit: icon('apple', true),
    'Node.js': icon('nodejs'),
    Express: icon('express', true),
    Fastify: icon('fastify', true),
    Firebase: icon('firebase'),
    PostgreSQL: icon('postgresql'),
    SQLite: icon('sqlite'),
    Redis: icon('redis'),
    JWT: icon('jwt', true),
    pandas: icon('pandas'),
    NumPy: icon('numpy'),
    OpenCV: icon('opencv'),
    MediaPipe: icon('mediapipe'),
    WebAssembly: icon('webassembly'),
    Arduino: icon('arduino'),
    Playwright: icon('playwright'),
    Docker: icon('docker'),
    CMake: icon('cmake'),
    Vercel: icon('vercel', true),
    Sentry: icon('sentry', true),
};

const FALLBACK: StackIcon = icon('github', true);

export function stackItemIcon(name: string): StackIcon {
    return ICONS[name] ?? FALLBACK;
}

export type StackCategory = { title: string; items: string[] };

export const MY_STACK_GROUPS: StackCategory[] = [
    {
        title: 'Languages',
        items: [
            'TypeScript',
            'JavaScript',
            'Python',
            'Java',
            'C',
            'C++',
            'Swift',
            'HTML',
            'CSS',
        ],
    },
    {
        title: 'Frontend & UI',
        items: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'Framer Motion',
            'GSAP',
            'Three.js',
        ],
    },
    {
        title: 'Mobile & desktop',
        items: ['React Native', 'Expo', 'SwiftUI', 'ARKit', 'Electron'],
    },
    {
        title: 'Backend & APIs',
        items: ['Node.js', 'Express', 'Fastify', 'FastAPI', 'WebSocket'],
    },
    {
        title: 'Data & auth',
        items: [
            'Firebase',
            'Supabase',
            'Convex',
            'PostgreSQL',
            'SQLite',
            'Redis',
            'Clerk',
            'JWT',
        ],
    },
    {
        title: 'AI & ML',
        items: [
            'Gemini',
            'Google ADK',
            'LangGraph',
            'pandas',
            'NumPy',
            'OpenCV',
            'MediaPipe',
        ],
    },
    {
        title: 'Media & hardware',
        items: ['FFmpeg', 'Sharp', 'WebAssembly', 'Arduino'],
    },
    {
        title: 'Testing & tooling',
        items: [
            'Vite',
            'Playwright',
            'Docker',
            'CMake',
            'Git',
            'GitHub',
            'GitHub Actions',
            'Vercel',
            'Sentry',
        ],
    },
];
