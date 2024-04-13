import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/detif.webp';
    const pdfEsp = '/uploads/detif-es.pdf';
    const pdfEng = '/uploads/detif-en.pdf';
    const titleChurch = 'Iglesia Santiago Apóstol de Detif';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
