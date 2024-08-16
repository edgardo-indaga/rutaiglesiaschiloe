import { Barlow } from 'next/font/google';
import './qrstyle.css';
import QRHeader from '@components/QRPages/QRHeader';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
});

export const metadata = {
    description: 'Ruta de las Iglesias de Chiloé, Patrimonio de la Humanidad.',
    icons: {
        icon: '/favicon.svg',
        apple: '/favicon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/favicon.png',
        },
    },
    keywords: [
        'Chile',
        'Chiloé',
        'Patrimonio',
        'Patrimonio de la humanidad',
        'Sitio patrimonio mundial',
        'Iglesias',
        'Arquitectura',
        'Cultura',
        'Historia',
        'Carpintería',
        'Tradicional',
        'Comunidades',
        'Fiestas religiosas',
        'Ruta',
        'Turismo',
        'Visita',
    ],
    generator: 'Next.js',
    applicationName: 'WebPage PTI Iglesias Patrimoniales de Chiloé',
    authors: [{ name: 'Edgardo Ruotolo Cardozo', url: 'https://crowadvance.com' }],
    creator: 'Edgardo Ruotolo Cardozo',
    publisher: 'Indaga.me',
    category: 'Información',
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function DashboardLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${barlow.className} bg-[#F0EBE1]`}>
                <QRHeader />
                {children}
                <Analytics />
            </body>
            <GoogleAnalytics gaId="G-2XRWN8XZBF" />
        </html>
    );
}
