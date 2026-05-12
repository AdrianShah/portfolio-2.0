'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

/** Classic black-and-white panel pattern so shapes read clearly as soccer balls. */
const soccerBallSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="15" fill="#f5f5f5" stroke="#0a0a0a" stroke-width="1.6"/>
  <path fill="#0a0a0a" d="M16 5.5l-4.2 3.1 1.6 5h5.2l1.6-5z"/>
  <path fill="none" stroke="#0a0a0a" stroke-width="0.9" stroke-linejoin="round"
    d="M16 5.5l6.1 2.2 2.2 6.1-4 4.8m-8.6 0l-4-4.8 2.2-6.1zm8.6 0l-4.8 5.5-4.8-5.5"/>
  <path fill="#0a0a0a" d="M9.9 18.4l3.1 8.1h6l3.1-8.1-6.1-3.6z"/>
</svg>
`);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            if (!particle) return;
            const size = Math.random() * 12 + 16;
            gsap.set(particle, {
                width: size,
                height: size,
                opacity: Math.random() * 0.45 + 0.45,
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });

            gsap.to(particle, {
                y: window.innerHeight + 40,
                duration: Math.random() * 10 + 14,
                opacity: 0.12,
                repeat: -1,
                ease: 'none',
            });
        });
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {[...Array(48)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) particlesRef.current.push(el);
                    }}
                    className="absolute bg-no-repeat bg-center bg-contain drop-shadow-[0_0_1px_rgba(0,0,0,0.8)]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,${soccerBallSvg}")`,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
