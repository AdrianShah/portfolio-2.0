'use client';

import { GENERAL_INFO, mailtoContactHref } from '@/lib/data';
import { useLanguage } from '@/components/LanguageProvider';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const { copy } = useLanguage();

    return (
        <footer className="text-center pb-16" id="contact">
            <div className="container">
                <p className="text-lg text-muted-foreground">
                    {copy.footer.prompt}
                </p>

                <div className="my-10 flex items-center justify-center gap-5 flex-wrap">
                    <a
                        href={GENERAL_INFO.linkedinProfile}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-full border border-foreground bg-background/70 px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                    >
                        <Linkedin size={16} />
                        LinkedIn
                    </a>
                    <a
                        href={mailtoContactHref}
                        className="inline-flex items-center gap-2 rounded-full border border-foreground bg-background/70 px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                    >
                        <Mail size={16} />
                        Email
                    </a>
                    <a
                        href={GENERAL_INFO.githubProfile}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-full border border-foreground bg-background/70 px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                    >
                        <Github size={16} />
                        GitHub
                    </a>
                </div>

                <div className="leading-none text-muted-foreground">
                    {copy.footer.credit}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
