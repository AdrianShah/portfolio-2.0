import * as React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
    title?: string;
    titleId?: string;
}

const SvgSectionFlower = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
    const gradientId = React.useId();
    const clipId = React.useId();
    const ballSphereId = `ball-sphere-${gradientId}`;
    const ballClipId = `ball-clip-${clipId}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            aria-labelledby={titleId}
            {...props}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <defs>
                <radialGradient
                    id={ballSphereId}
                    cx="35%"
                    cy="30%"
                    r="78%"
                >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="55%" stopColor="#f4f4f4" />
                    <stop offset="100%" stopColor="#9a9a9a" />
                </radialGradient>
                <clipPath id={ballClipId}>
                    <circle cx={50} cy={50} r={48} />
                </clipPath>
            </defs>
            <circle cx={50} cy={50} r={48} fill={`url(#${ballSphereId})`} />
            <g clipPath={`url(#${ballClipId})`}>
                <path
                    d="M 8 22 C 28 4 60 0 82 18 C 92 30 88 42 75 45 C 60 42 45 48 35 52 C 22 48 12 38 8 22 Z"
                    fill="#e51937"
                />
                <path
                    d="M 5 58 C 18 52 35 58 42 70 C 42 85 30 95 15 92 C 2 86 -3 72 5 58 Z"
                    fill="#00a44d"
                />
                <path
                    d="M 95 58 C 102 72 96 88 80 92 C 65 90 55 78 58 65 C 70 60 85 55 95 58 Z"
                    fill="#0066cc"
                />
                <g
                    stroke="#0a0a0a"
                    strokeWidth={1.1}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M 8 22 C 28 4 60 0 82 18 C 92 30 88 42 75 45 C 60 42 45 48 35 52 C 22 48 12 38 8 22 Z" />
                    <path d="M 5 58 C 18 52 35 58 42 70 C 42 85 30 95 15 92 C 2 86 -3 72 5 58 Z" />
                    <path d="M 95 58 C 102 72 96 88 80 92 C 65 90 55 78 58 65 C 70 60 85 55 95 58 Z" />
                    <path
                        d="M 35 52 C 44 58 50 64 58 65"
                        strokeOpacity={0.6}
                    />
                    <path
                        d="M 42 70 C 48 64 53 64 58 65"
                        strokeOpacity={0.6}
                    />
                    <path
                        d="M 75 45 C 70 50 65 56 58 65"
                        strokeOpacity={0.55}
                    />
                    <path
                        d="M 50 50 C 50 60 50 70 52 80"
                        strokeOpacity={0.4}
                    />
                </g>
            </g>
            <circle
                cx={50}
                cy={50}
                r={48}
                fill="none"
                stroke="#0a0a0a"
                strokeWidth={1.6}
            />
        </svg>
    );
};

export default SvgSectionFlower;
