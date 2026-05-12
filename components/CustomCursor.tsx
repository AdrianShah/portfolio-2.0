'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;
        if (!contextSafe) return;

        const handler = contextSafe((event: MouseEvent) => {
            if (!svgRef.current) return;

            gsap.to(svgRef.current, {
                x: event.clientX,
                y: event.clientY,
                ease: 'power2.out',
                duration: 0.25,
                opacity: 1,
            });
        });

        if (!handler) return;

        window.addEventListener('mousemove', handler);

        return () => {
            window.removeEventListener('mousemove', handler);
        };
    });

    return (
        <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            className="hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none -translate-x-1/2 -translate-y-1/2 text-primary"
            fill="none"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
            aria-hidden
        >
            <rect
                x="15"
                y="3"
                width="4"
                height="12"
                rx="1"
                className="fill-primary"
            />
            <rect
                x="15"
                y="19"
                width="4"
                height="12"
                rx="1"
                className="fill-primary"
            />
            <rect
                x="3"
                y="15"
                width="12"
                height="4"
                rx="1"
                className="fill-primary"
            />
            <rect
                x="19"
                y="15"
                width="12"
                height="4"
                rx="1"
                className="fill-primary"
            />
        </svg>
    );
};

export default CustomCursor;
