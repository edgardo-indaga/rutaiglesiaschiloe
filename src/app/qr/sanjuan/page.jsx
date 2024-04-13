import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/sanjuan.webp';
    const pdfEsp = '/uploads/sanjuan-es.pdf';
    const pdfEng = '/uploads/sanjuan-en.pdf';
    const titleChurch = 'Iglesia San Juan Bautista de San Juan';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
