import QRLayout from '@/components/QRLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/chonchi.webp';
    const pdfEsp = '/uploads/chonchi-es.pdf';
    const pdfEng = '/uploads/chonchi-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora del Rosario de Chonchi';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
