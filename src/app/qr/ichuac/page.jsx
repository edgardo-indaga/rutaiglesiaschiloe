import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/ichuac.webp';
    const pdfEsp = '/uploads/ichuac-es.pdf';
    const pdfEng = '/uploads/ichuac-en.pdf';
    const titleChurch = 'Iglesia Natividad de María de Ichuac';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
