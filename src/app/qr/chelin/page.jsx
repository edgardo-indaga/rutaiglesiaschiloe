import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/chelin.webp';
    const pdfEsp = '/uploads/chelin-es.pdf';
    const pdfEng = '/uploads/chelin-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora del Rosario de Chelín';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
