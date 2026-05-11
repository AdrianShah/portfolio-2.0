/* eslint-disable @next/next/no-img-element -- Stack icons load from external CDNs. */
'use client';

import SectionTitle from '@/components/SectionTitle';
import { MY_STACK_GROUPS, stackItemIcon } from '@/lib/stackIcons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {MY_STACK_GROUPS.map(({ title, items }) => (
                        <div className="grid sm:grid-cols-12" key={title}>
                            <div className="sm:col-span-5">
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {title}
                                </p>
                            </div>

                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                {items.map((item) => (
                                    <div
                                        className="slide-up flex gap-3.5 items-center leading-none"
                                        key={item}
                                    >
                                        <div className="relative size-10 shrink-0 overflow-hidden rounded-sm bg-background-light">
                                            <img
                                                src={stackItemIcon(item)}
                                                alt=""
                                                width={40}
                                                height={40}
                                                className="h-full w-full object-contain p-1"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-2xl capitalize">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
