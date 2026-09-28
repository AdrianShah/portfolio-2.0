import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import Navbar from '@/components/Navbar';
import Preloader from '../components/Preloader';
import SidebarDock from './_components/StickyEmail';
import { LanguageProvider } from '@/components/LanguageProvider';
import HashScroll from '@/components/HashScroll';
import CustomCursor from '@/components/CustomCursor';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

/** Set NEXT_PUBLIC_GA_ID in the environment to enable Google Analytics. */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    subsets: ['latin'],
    variable: '--font-roboto-flex',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s · ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: '/' },
    openGraph: {
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: '/',
        siteName: `${SITE_NAME} Portfolio`,
        type: 'website',
        locale: 'en_CA',
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon.svg', type: 'image/svg+xml' },
        ],
    },
    manifest: '/manifest.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <LanguageProvider>
                        <Navbar />
                        <HashScroll />
                        <main className="pb-28 xl:pb-0">{children}</main>
                        <Footer />

                        <SidebarDock />
                        <CustomCursor />
                        <Preloader />
                        <ScrollProgressIndicator />
                    </LanguageProvider>
                </ReactLenis>
            </body>
        </html>
    );
}
