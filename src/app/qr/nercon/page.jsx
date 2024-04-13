import QrLayout from '@/components/qrLayout';
import { Suspense } from 'react';

export default function qrAchaoPage() {
    const imgBg = '/qr/nercon.webp';
    const pdfEsp = '/uploads/nercon-es.pdf';
    const pdfEng = '/uploads/nercon-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora de Gracia de Nercón';
    return (
        <main>
            <Suspense fallback={<p>Cargando...</p>}>
                <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
            </Suspense>
        </main>
    );
}
