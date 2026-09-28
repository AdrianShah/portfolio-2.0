'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

gsap.registerPlugin(useGSAP);

/** Preloader dismisses itself after this delay; any input dismisses it sooner. */
const AUTO_DISMISS_MS = 900;

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);
    const [done, setDone] = useState(false);
    const startedRef = useRef(false);

    useEffect(() => {
        if (prefersReducedMotion()) {
            setDone(true);
            return;
        }

        const start = () => {
            if (startedRef.current) return;
            startedRef.current = true;
            setStarted(true);
        };

        const timeoutId = window.setTimeout(start, AUTO_DISMISS_MS);
        const events: Array<keyof WindowEventMap> = [
            'wheel',
            'touchstart',
            'keydown',
            'pointerdown',
        ];
        events.forEach((name) =>
            window.addEventListener(name, start, { passive: true }),
        );

        return () => {
            window.clearTimeout(timeoutId);
            events.forEach((name) => window.removeEventListener(name, start));
        };
    }, []);

    useGSAP(
        () => {
            if (!started) return;

            const tl = gsap.timeline({
                defaults: { ease: 'power1.inOut' },
                onComplete: () => setDone(true),
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.04,
                duration: 0.2,
            })
                .to('.preloader-item', {
                    delay: 0.4,
                    y: '100%',
                    duration: 0.5,
                    stagger: 0.08,
                })
                .to('.name-text span', { autoAlpha: 0 }, '<0.4')
                .to(preloaderRef.current, { autoAlpha: 0 }, '<0.8');
        },
        { scope: preloaderRef, dependencies: [started] },
    );

    if (done) return null;

    return (
        <div
            className="fixed inset-0 z-[6] flex pointer-events-none bg-background"
            ref={preloaderRef}
            aria-hidden="true"
        >
            {Array.from({ length: 10 }).map((_, index) => (
                <div
                    key={index}
                    className="preloader-item h-full w-[10%] bg-background-light"
                />
            ))}

            <p className="name-text flex text-[10vw] sm:text-[9vw] lg:text-[120px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden text-foreground">
                {'Adrian Shahnazari'.split('').map((char, index) => (
                    <span
                        key={`${char}-${index}`}
                        className="inline-block translate-y-full"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default Preloader;
