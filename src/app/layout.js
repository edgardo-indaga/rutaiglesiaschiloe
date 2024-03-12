import { Barlow } from 'next/font/google';
import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
});

export const metadata = {
    title: 'PTI Iglesias Patrimoniales De Chiloé',
    description: 'Ruta de las Iglesias de Chiloé, Patrimonio de la Humanidad.',
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

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <Head>
                <link rel="icon" href="/favicon.svg" sizes="32x32" type="image/svg+xml" />
                <link rel="icon" href="/favicon.png" sizes="64x64" type="image/png" />
            </Head>
            <body className={barlow.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
