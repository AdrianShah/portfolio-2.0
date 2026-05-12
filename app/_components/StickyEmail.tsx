'use client';

import TranslationIcon from '@/components/TranslationIcon';
import { LANGUAGE_OPTIONS, useLanguage } from '@/components/LanguageProvider';
import { MoonStar, SunMedium } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const SidebarDock = () => {
    const { language, setLanguage, copy } = useLanguage();
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [langOpen, setLangOpen] = useState(false);
    const dockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('portfolio-theme');

        if (storedTheme === 'light') {
            document.documentElement.classList.add('light');
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        if (!langOpen) return;
        const close = (e: MouseEvent) => {
            if (dockRef.current && !dockRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, [langOpen]);

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';

        setTheme(nextTheme);
        document.documentElement.classList.toggle('light', nextTheme === 'light');
        window.localStorage.setItem('portfolio-theme', nextTheme);
    };

    return (
        <div ref={dockRef}>
            <div className="fixed left-5 top-1/2 z-[40] hidden -translate-y-1/2 flex-col items-start gap-4 xl:flex">
                <div className="flex flex-col gap-3">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background/80 text-sm text-foreground backdrop-blur-md transition-colors hover:border-primary/70 hover:text-primary before:absolute before:-inset-1.5 before:rounded-full before:content-['']"
                    >
                        {theme === 'dark' ? (
                            <SunMedium size={18} />
                        ) : (
                            <MoonStar size={18} />
                        )}
                    </button>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setLangOpen((o) => !o)}
                            aria-expanded={langOpen}
                            aria-haspopup="listbox"
                            aria-label="Language"
                            className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground backdrop-blur-md transition-colors hover:border-primary/70 hover:text-primary before:absolute before:-inset-1.5 before:rounded-full before:content-['']"
                        >
                            <TranslationIcon size={20} />
                        </button>
                        {langOpen && (
                            <ul
                                className="absolute left-full top-1/2 z-[50] ml-3 flex -translate-y-1/2 flex-col gap-1 rounded-xl border border-border/80 bg-background/95 p-2 shadow-lg backdrop-blur-md"
                                role="listbox"
                            >
                                {LANGUAGE_OPTIONS.map(({ code, label }) => (
                                    <li key={code} role="option" aria-selected={language === code}>
                                        <button
                                            type="button"
                                            className={`w-full rounded-lg px-4 py-2 text-left text-sm transition-colors ${
                                                language === code
                                                    ? 'bg-primary/15 text-primary'
                                                    : 'text-foreground hover:bg-muted/80'
                                            }`}
                                            onClick={() => {
                                                setLanguage(code);
                                                setLangOpen(false);
                                            }}
                                        >
                                            {label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-4 left-1/2 z-[40] flex w-[min(92vw,360px)] -translate-x-1/2 items-center gap-3 rounded-full border border-border/80 bg-background/90 p-2 shadow-lg backdrop-blur-md xl:hidden">
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={
                        theme === 'dark'
                            ? copy.sidebar.themeLight
                            : copy.sidebar.themeDark
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
                >
                    {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
                    <span>{theme === 'dark' ? copy.sidebar.themeLight : copy.sidebar.themeDark}</span>
                </button>

                <div className="relative flex-1">
                    <button
                        type="button"
                        onClick={() => setLangOpen((o) => !o)}
                        aria-expanded={langOpen}
                        aria-haspopup="listbox"
                        aria-label={copy.sidebar.language}
                        className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
                    >
                        <TranslationIcon size={18} />
                        <span>
                            {LANGUAGE_OPTIONS.find((option) => option.code === language)?.label ||
                                copy.sidebar.languageLabel}
                        </span>
                    </button>
                    {langOpen && (
                        <ul
                            className="absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 flex-col gap-1 rounded-xl border border-border/80 bg-background/95 p-2 shadow-lg backdrop-blur-md"
                            role="listbox"
                        >
                            {LANGUAGE_OPTIONS.map(({ code, label }) => (
                                <li key={code} role="option" aria-selected={language === code}>
                                    <button
                                        type="button"
                                        className={`w-full rounded-lg px-4 py-2 text-left text-sm transition-colors ${
                                            language === code
                                                ? 'bg-primary/15 text-primary'
                                                : 'text-foreground hover:bg-muted/80'
                                        }`}
                                        onClick={() => {
                                            setLanguage(code);
                                            setLangOpen(false);
                                        }}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SidebarDock;
