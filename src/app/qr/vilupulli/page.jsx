import QRLayout from '@/components/QRLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/vilupulli.webp';
    const pdfEsp = '/uploads/vilupulli-es.pdf';
    const pdfEng = '/uploads/vilupulli-en.pdf';
    const titleChurch = 'Iglesia San Antonio de Padua de Vilupulli';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
