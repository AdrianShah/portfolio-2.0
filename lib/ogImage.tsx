import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/png';

interface OgCardProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    tags?: string[];
}

/**
 * Shared Open Graph card used by the site and project OG image routes.
 * Uses only system fonts and flex layout so it renders in the edge runtime
 * without extra font fetches.
 */
export function renderOgCard({ eyebrow, title, subtitle, tags = [] }: OgCardProps) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 72,
                    background:
                        'linear-gradient(135deg, #0e1118 0%, #161b26 100%)',
                    color: '#ebebeb',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                        fontSize: 28,
                        color: '#a3a3a3',
                        letterSpacing: 2,
                        textTransform: 'uppercase',
                    }}
                >
                    <div
                        style={{
                            width: 18,
                            height: 18,
                            borderRadius: 999,
                            background: '#961215',
                        }}
                    />
                    {eyebrow}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div
                        style={{
                            fontSize: title.length > 24 ? 84 : 112,
                            fontWeight: 800,
                            lineHeight: 0.95,
                            letterSpacing: -2,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: 34,
                            lineHeight: 1.3,
                            color: '#b8b8b8',
                            maxWidth: 1000,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <div style={{ display: 'flex', gap: 12 }}>
                        {tags.slice(0, 4).map((tag) => (
                            <div
                                key={tag}
                                style={{
                                    fontSize: 24,
                                    padding: '10px 20px',
                                    borderRadius: 999,
                                    border: '2px solid rgba(150,18,21,0.7)',
                                    background: 'rgba(150,18,21,0.15)',
                                    color: '#f2b5b7',
                                }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div style={{ fontSize: 26, color: '#a3a3a3' }}>
                        Adrian Shahnazari
                    </div>
                </div>
            </div>
        ),
        OG_SIZE,
    );
}
