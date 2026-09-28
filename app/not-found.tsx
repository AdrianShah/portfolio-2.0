import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <section className="container flex min-h-[70svh] flex-col items-start justify-center gap-6">
            <p className="font-anton text-muted-foreground">_404.</p>
            <h1 className="font-anton text-5xl leading-none sm:text-7xl">
                Page not <span className="text-primary">found.</span>
            </h1>
            <p className="max-w-[520px] text-lg text-muted-foreground">
                The page you are looking for does not exist or has moved.
            </p>
            <Link
                href="/"
                className="group inline-flex h-12 items-center gap-2 hover:text-primary"
            >
                <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                Back to home
            </Link>
        </section>
    );
}
