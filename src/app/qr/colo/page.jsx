import QRLayout from '@/components/QRLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/colo.webp';
    const pdfEsp = '/uploads/colo-es.pdf';
    const pdfEng = '/uploads/colo-en.pdf';
    const titleChurch = 'Iglesia San Antonio de Colo';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
