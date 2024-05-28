import QRLayout from '@/components/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Jesús Nazareno de Aldachildo',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/aldachildo.webp';
    const pdfEsp = '/uploads/aldachildo-es.pdf';
    const pdfEng = '/uploads/aldachildo-en.pdf';
    const titleChurch = 'Iglesia Jesús Nazareno de Aldachildo';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
