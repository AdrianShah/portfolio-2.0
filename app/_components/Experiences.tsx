'use client';
import { useLanguage } from '@/components/LanguageProvider';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { copy } = useLanguage();

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const projectsSection =
                document.getElementById('selected-projects');
            const projectItems = projectsSection?.querySelectorAll(
                '.project-item',
            ) as NodeListOf<HTMLElement> | undefined;
            const firstProject = projectItems?.[0];
            const thirdProject = projectItems?.[2];

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: firstProject ?? containerRef.current,
                    start: firstProject ? 'top 45%' : 'bottom 30%',
                    endTrigger: thirdProject ?? firstProject ?? containerRef.current,
                    end: thirdProject
                        ? 'top 80%'
                        : firstProject
                          ? 'bottom 20%'
                          : 'bottom top',
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
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title={copy.experience.sectionTitle} />

                <div className="grid gap-14">
                    <div className="experience-item">
                        <p className="text-xl text-muted-foreground">
                            {copy.experience.recent.company}
                        </p>
                        <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                            {copy.experience.recent.title}
                        </p>
                        <p className="text-lg text-muted-foreground">
                            {copy.experience.recent.duration}
                        </p>
                        <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-base md:text-lg text-foreground/85">
                            {copy.experience.recent.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="experience-item">
                        <p className="text-xl text-muted-foreground">
                            {copy.experience.previous.company}
                        </p>
                        <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                            {copy.experience.previous.title}
                        </p>
                        <p className="text-lg text-muted-foreground">
                            {copy.experience.previous.duration}
                        </p>
                        <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-base md:text-lg text-foreground/85">
                            {copy.experience.previous.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
