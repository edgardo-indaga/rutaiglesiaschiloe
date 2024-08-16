import QRLayout from '@components/QRPages/QRLayout';
import { Suspense } from 'react';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora de Gracia de Nercón',
};

export default function qrAchaoPage() {
    const imgBg = '/qr/nercon.webp';
    const linkEsp = '/qr/nercon/es';
    const linkEng = '/qr/nercon/en';
    const titleChurch = 'Iglesia Nuestra Señora de Gracia de Nercón';
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
