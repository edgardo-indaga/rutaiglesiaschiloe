import { Barlow } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
});

export const metadata = {
    title: 'PTI Iglesias Patrimoniales De Chiloé',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={barlow.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
