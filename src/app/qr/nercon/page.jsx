import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/nercon.webp';
    const pdfEsp = '/uploads/nercon-es.pdf';
    const pdfEng = '/uploads/nercon-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora de Gracia de Nercón';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
