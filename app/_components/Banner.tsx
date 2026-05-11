'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import { useLanguage } from '@/components/LanguageProvider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { copy } = useLanguage();

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex items-center"
                ref={containerRef}
            >
                <div className="max-w-[760px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] lg:text-[96px] font-anton">
                        <span>{copy.banner.title[0]}</span>{' '}
                        <span className="text-primary">{copy.banner.title[1]}</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-8 max-w-[720px] text-xl leading-relaxed text-muted-foreground">
                        <strong className="font-semibold text-foreground">
                            {copy.banner.name}
                        </strong>{' '}
                        <span>{copy.banner.description}</span>
                    </p>

                    <div className="flex items-center gap-2 mt-5">
                        <span className="size-3 rounded-full bg-primary"></span>
                        <span className="text-sm text-muted-foreground">
                            {copy.banner.status}
                        </span>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center mt-5 rounded-full border border-primary/60 bg-primary/15 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                        Let&apos;s Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
