import QRLayout from '@/components/QRLayout';
import { Suspense } from 'react';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora de Gracia de Nercón',
};

export default function qrAchaoPage() {
    const imgBg = '/qr/nercon.webp';
    const pdfEsp = '/uploads/nercon-es.pdf';
    const pdfEng = '/uploads/nercon-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora de Gracia de Nercón';
    return (
        <main>
            <Suspense fallback={<p>Cargando...</p>}>
                <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
            </Suspense>
        </main>
    );
}
