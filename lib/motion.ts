/** True when the user has asked the OS/browser to reduce motion. Client only. */
export function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True for mouse/trackpad-driven devices; false for touch-only devices. */
export function hasFinePointer(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(pointer: fine)').matches;
}
