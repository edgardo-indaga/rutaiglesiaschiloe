import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/aldachildo.webp';
    const pdfEsp = '/uploads/aldachildo-es.pdf';
    const pdfEng = '/uploads/aldachildo-en.pdf';
    const titleChurch = 'Iglesia Jesús Nazareno de Aldachildo';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
