/** Standard-style language / translation glyph (文 ↔ A). */
export default function TranslationIcon({
    className,
    size = 20,
}: {
    className?: string;
    size?: number;
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden
        >
            {/* 文 */}
            <path d="M3 6h5M5.5 4v3M4 8l2.5 6M7 8l-2.5 6" />
            <path d="M3.5 13h4.5" />
            {/* A + crossbar */}
            <path d="M15 14h5L17.5 19z" />
            <path d="M14.5 16.5h6" />
            {/* arrows */}
            <path d="M8 5c3 1.5 5.5 4 6.5 7" />
            <path d="M19 19c-3-1.5-5.5-4-6.5-7" />
        </svg>
    );
}
