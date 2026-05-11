import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'adrianshahnazari@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Adrian, I am reaching out to you because...',

    linkedinProfile:
        'https://www.linkedin.com/in/adrian-shahnazari-darcheh/',
    githubProfile: 'https://github.com/AdrianShah',
};

export const mailtoContactHref = `mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`;

export const SOCIAL_LINKS = [
    { name: 'linkedin', url: GENERAL_INFO.linkedinProfile },
    { name: 'email', url: mailtoContactHref },
    { name: 'github', url: GENERAL_INFO.githubProfile },
];

/** Static captures of the live UI under `/public/project-screenshots`. */
const shots = {
    fileChanger: '/project-screenshots/file-changer-main.png',
    potluck: [
        '/project-screenshots/potluck-landing.png',
        '/project-screenshots/potluck-login.png',
        '/project-screenshots/potluck-my-events.png',
    ],
    wpm: [
        '/project-screenshots/wpm-atlas-play.png',
        '/project-screenshots/wpm-atlas-level-bar.png',
        '/project-screenshots/wpm-atlas-edit-profile.png',
        '/project-screenshots/wpm-atlas-leaderboard.png',
    ],
    portfolio: [
        '/project-screenshots/portfolio-hero-main.png',
        '/project-screenshots/portfolio-selected-projects-v2.png',
        '/project-screenshots/portfolio-stack-v2.png',
        '/project-screenshots/portfolio-experience-v2.png',
    ],
} as const;

export const PROJECTS: IProject[] = [
    {
        title: 'File Changer',
        slug: 'file-changer',
        year: 2026,
        description:
            'A local-first desktop file conversion and compression utility focused on speed and privacy. It supports queue-based batch processing, configurable output formats, conflict handling, worker concurrency, and integrated Sharp/FFmpeg pipelines with drag-and-drop input. The desktop release is still in progress, so there is no public repository link yet.',
        role: 'Designed as a desktop workflow tool with conversion-focused UX and local processing.',
        techStack: [
            'TypeScript',
            'React',
            'Electron',
            'Vite',
            'Sharp',
            'FFmpeg',
        ],
        thumbnail: shots.fileChanger,
        longThumbnail: shots.fileChanger,
        images: [shots.fileChanger],
    },
    {
        title: 'Hackathon 1 (Potluckio)',
        slug: 'hackathon-1-potluckio',
        year: 2026,
        description:
            'A collaborative event planning app for potlucks where hosts can create events, share join links, and coordinate contributions so guests can claim what they are bringing. It includes account access, event management flows, and a simple dashboard experience for managing hosted events.',
        role: 'Worked on backend architecture and Firebase integration while refining the production-ready version.',
        techStack: [
            'HTML',
            'CSS',
            'JavaScript',
            'Firebase Auth',
            'Firestore',
            'GitHub Actions',
        ],
        thumbnail: shots.potluck[0],
        longThumbnail: shots.potluck[0],
        images: [...shots.potluck],
        sourceCode:
            'https://github.com/AdrianShah/CTRL-DEL-HACK-2.0---Potluck-App',
        liveUrl:
            'https://adrianshah.github.io/CTRL-DEL-HACK-2.0---Potluck-App./',
    },
    {
        title: 'WPM ATLAS',
        slug: 'wpm-game',
        year: 2026,
        description:
            'A typing-speed web app with arcade-style rounds, live WPM feedback, profile progression, and leaderboard competition. Players can customize profile identity, compete across multiple durations and difficulties, and track rank improvements over time.',
        role: 'Built as an interactive practice tool with real-time-oriented backend support.',
        techStack: [
            'JavaScript',
            'Vite',
            'Convex',
            'Clerk',
        ],
        thumbnail: shots.wpm[0],
        longThumbnail: shots.wpm[0],
        images: [...shots.wpm],
        sourceCode: 'https://github.com/AdrianShah/WPM-ATLAS',
        liveUrl: 'https://adrianshah.github.io/Typing-Game/',
    },
    {
        title: 'Portfolio Website',
        slug: 'portfolio-website',
        year: 2026,
        description:
            'This is my personal portfolio website, built to present projects with interactive transitions, rich case-study pages, responsive layouts, and smooth motion-driven storytelling.',
        role: 'Designed and implemented the full personal brand experience from UI to data structure.',
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'GSAP',
        ],
        thumbnail: shots.portfolio[0],
        longThumbnail: shots.portfolio[0],
        images: [...shots.portfolio],
        sourceCode: 'https://github.com/AdrianShah/portfolio-2.0',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'First Year Computer Engineering Student',
        company: 'University Student',
        duration: 'Current',
    },
];
