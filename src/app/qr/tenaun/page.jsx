import QRLayout from '@/components/QRLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/tenaun.webp';
    const pdfEsp = '/uploads/tenaun-es.pdf';
    const pdfEng = '/uploads/tenaun-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora del Patrocinio de Tenaún';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
