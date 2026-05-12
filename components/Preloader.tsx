'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const dismissedRef = useRef(false);

    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const markStart = () => {
            if (dismissedRef.current) return;
            dismissedRef.current = true;
            setHasScrolled(true);
        };

        const onWheel = (e: WheelEvent) => {
            if (!dismissedRef.current) {
                e.preventDefault();
                markStart();
            }
        };

        const onTouchStart = () => markStart();

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
        };
    }, []);

    /** If GSAP fails, never leave the body scroll-locked. */
    useEffect(() => {
        if (!hasScrolled) return;
        const timeoutId = window.setTimeout(() => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            window.scrollTo(0, 0);
        }, 8000);
        return () => window.clearTimeout(timeoutId);
    }, [hasScrolled]);

    useGSAP(
        () => {
            if (!hasScrolled) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
                onComplete: () => {
                    document.documentElement.style.overflow = '';
                    document.body.style.overflow = '';
                    window.scrollTo(0, 0);
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef, dependencies: [hasScrolled] },
    );

    return (
        <>
            <div
                className="fixed inset-0 z-[6] flex pointer-events-none bg-background"
                ref={preloaderRef}
            >
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>
                <div className="preloader-item h-full w-[10%] bg-background-light"></div>

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

                {!hasScrolled && (
                    <div
                        className="absolute bottom-8 left-1/2 z-[1] flex w-[min(84vw,376px)] -translate-x-1/2 flex-col items-center gap-3 text-center"
                        aria-live="polite"
                    >
                        <svg
                            width="376"
                            height="111"
                            viewBox="0 0 376 111"
                            fill="transparent"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-auto w-full max-w-[376px]"
                            aria-hidden="true"
                        >
                            <path
                                d="M1 1V39.9286L188 110V70.6822L1 1Z"
                                stroke="#2C2C2C"
                            />
                            <path
                                d="M375 1V39.9286L188 110V70.6822L375 1Z"
                                stroke="#2C2C2C"
                            />
                        </svg>
                        <p className="font-anton text-sm uppercase tracking-[0.3em] text-muted-foreground">
                            Scroll Down
                        </p>
                        <ArrowDown
                            size={18}
                            className="animate-bounce text-primary"
                            aria-hidden="true"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Preloader;
