'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const TriondaBall = dynamic(() => import('./TriondaBall'), { ssr: false });

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <TriondaBall size={32} className={classNames?.icon} />
            )}
            <h2
                className={cn(
                    'text-xl uppercase leading-none',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
