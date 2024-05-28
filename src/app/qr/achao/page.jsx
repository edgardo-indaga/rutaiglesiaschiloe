import QRLayout from '@/components/QRLayout';
import { Suspense } from 'react';
export const metadata = {
    title: 'QR | PTI | Iglesia Santa María de Loreto de Achao',
};

export default function qrAchaoPage() {
    const imgBg = '/qr/achao.webp';
    const pdfEsp = '/uploads/achao-es.pdf';
    const pdfEng = '/uploads/achao-en.pdf';
    const titleChurch = 'Iglesia Santa María de Loreto de Achao';
    return (
        <main>
            <Suspense fallback={<p>Cargando...</p>}>
                <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
            </Suspense>
        </main>
    );
}
