import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/castro.webp';
    const pdfEsp = '/uploads/castro-es.pdf';
    const pdfEng = '/uploads/castro-en.pdf';
    const titleChurch = 'Iglesia San Francisco de Castro';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
