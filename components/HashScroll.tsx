'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHash(hash: string) {
    const id = hash.replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export default function HashScroll() {
    const pathname = usePathname();

    useEffect(() => {
        scrollToHash(window.location.hash);
    }, [pathname]);

    useEffect(() => {
        const onHashChange = () => scrollToHash(window.location.hash);
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return null;
}
