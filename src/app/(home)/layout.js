import { Barlow } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
});

export const metadata = {
    title: 'PTI Iglesias Patrimoniales De Chiloé',
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
        'PTI Iglesias Patrimoniales De Chiloé',
        'Ruta de las Iglesias de Chiloé',
        'Patrimonio de la Humanidad',
        'iglesia nuestra señora de gracia de nercon',
        'iglesia nuestra señora de los dolores de dalcahue',
        'iglesia santa maria de rilan',
        'iglesia nuestra señora del rosario de chelin',
        'iglesia san juan bautista de san juan',
        'iglesia nuestra señora del patrocinio de tenaun',
        'iglesia san antonio de colo',
        'iglesia santa maria de loreto de achao',
        'iglesia nuestra señora de la gracia de quinchao',
        'iglesia jesús nazareno de caguach',
        'iglesia nuestra señora del rosario de chonchi',
        'iglesia san antonio de padua de vilupulli',
        'iglesia natividad de maría de ichuac',
        'iglesia jesús nazareno de aldachildo',
        'iglesia santiago apóstol de detif',
        'Ancud',
        'Castro',
        'Chonchi',
        'Curaco de Vélez',
        'Dalcahue',
        'Puqueldón',
        'Queilén',
        'Quellón',
        'Quemchi',
        'Quinchao',
        '16 iglesias',
        'UNESCO',
        'Patrimonio chilote',
        'Conservación del patrimonio',
        'Iglesias de madera',
        'Cultura chilota',
        'Viaje a Chiloé',
        'Destinos turísticos de Chile',
        'Cultura y tradición chilena',
        'Chiloé histórico',
        'Artes y oficios chilotas',
        'Viaje patrimonial',
        'Arquitectura de la isla',
        'Ruta del patrimonio',
        'Monumentos de Chiloé',
        'Iglesias patrimoniales de Chile',
        'Turismo histórico en Chile',
        'Arquitectura insular',
        'Artesanía chilota',
        'Isla de Chiloé',
        'Valores universales excepcionales',
        'Turismo responsable',
        'Descubrir Chiloé',
        'Viaje a las iglesias de madera',
        'Ruta del patrimonio chilote',
        'Arquitectura de madera',
        'Patrimonio cultural',
        'Turismo cultural',
        'Monumentos históricos',
        'Arquitectura chilota',
        'Rutas culturales',
        'Patrimonio arquitectónico',
        'Visitas guiadas',
        'Islas de Chiloé',
        'Arquitectura religiosa',
        'Patrimonio UNESCO de Chile',
        'Turismo en Chiloé',
        'Iglesias chilotas',
        'Viaje cultural',
        'Arquitectura tradicional chilena',
        'Patrimonio de la humanidad en Chile',
        'Descubrimiento de Chiloé',
    ],
    generator: 'Next.js',
    applicationName: 'WebPage PTI Iglesias Patrimoniales de Chiloé',
    authors: [{ name: 'Edgardo Ruotolo Cardozo', url: 'https://crowadvance.com' }],
    creator: 'Edgardo Ruotolo Cardozo',
    publisher: 'Indaga.me',
    category: 'Información',
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://www.rutaiglesiaschiloe.cl/',
        language: {
            es: '/',
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={barlow.className}>
                <Header />
                {children}
                <Footer />
                <Analytics />
            </body>
            <GoogleAnalytics gaId="G-2XRWN8XZBF" />
        </html>
    );
}
