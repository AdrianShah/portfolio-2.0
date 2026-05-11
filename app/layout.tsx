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
import Script from 'next/script';

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
    title: 'Portfolio - Adrian Shahnazari Darcheh',
    description:
        'Personal portfolio of Adrian Shahnazari Darcheh, a first-year Computer Engineering student building full-stack projects and polished user experiences.',
    metadataBase: new URL('https://adrianshah.github.io'),
    openGraph: {
        title: 'Portfolio - Adrian Shahnazari Darcheh',
        description:
            'Personal portfolio of Adrian Shahnazari Darcheh, showcasing projects, experience, and technical skills.',
        url: '/',
        siteName: 'Adrian Shahnazari Portfolio',
        type: 'website',
        images: [
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Portfolio - Adrian Shahnazari Darcheh',
        description:
            'Explore Adrian Shahnazari Darcheh\'s portfolio projects, experience, and technical work.',
        images: ['/icon.svg'],
    },
    icons: {
        icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />
            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
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
                        {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
                        <Navbar />
                        <HashScroll />
                        <main>{children}</main>
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
