import QRLayout from '@/components/QRLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/fichageneral.webp';
    const pdfEsp = '/uploads/fichageneral-es.pdf';
    const pdfEng = '/uploads/fichageneral-en.pdf';
    const titleChurch = 'Chiloé y la ruta de las Iglesias';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
