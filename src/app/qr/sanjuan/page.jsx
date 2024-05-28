import QRLayout from '@/components/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia San Juan Bautista de San Juan',
};

export default function qrAchaoPage() {
    const imgBg = '/qr/sanjuan.webp';
    const pdfEsp = '/uploads/sanjuan-es.pdf';
    const pdfEng = '/uploads/sanjuan-en.pdf';
    const titleChurch = 'Iglesia San Juan Bautista de San Juan';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
