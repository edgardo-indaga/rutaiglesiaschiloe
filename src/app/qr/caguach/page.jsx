import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/caguach.webp';
    const pdfEsp = '/uploads/caguach-es.pdf';
    const pdfEng = '/uploads/caguach-en.pdf';
    const titleChurch = 'Iglesia Jesús Nazareno de Caguach';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
