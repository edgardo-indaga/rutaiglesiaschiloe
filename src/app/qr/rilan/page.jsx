import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/rilan.webp';
    const pdfEsp = '/uploads/rilan-es.pdf';
    const pdfEng = '/uploads/rilan-en.pdf';
    const titleChurch = 'Iglesia Santa María de Rilán';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
