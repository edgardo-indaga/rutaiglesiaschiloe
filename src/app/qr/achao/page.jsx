import QRLayout from '@components/QRPages/QRLayout';
import { Suspense } from 'react';
export const metadata = {
    title: 'PTI | QR Iglesia | Iglesia Santa María de Loreto de Achao',
};

export default function qrAchaoPage() {
    const imgBg = '/qr/achao.webp';
    const linkEsp = '/qr/achao/es';
    const linkEng = '/qr/achao/en';
    const titleChurch = 'Iglesia Santa María de Loreto de Achao';
    return (
        <main>
            <Suspense fallback={<p>Cargando...</p>}>
                <QRLayout
                    imgBg={imgBg}
                    linkEsp={linkEsp}
                    linkEng={linkEng}
                    titleChurch={titleChurch}
                />
            </Suspense>
        </main>
    );
}
