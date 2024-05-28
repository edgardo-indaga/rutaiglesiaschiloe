import QRLayout from '@/components/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Natividad de María de Ichuac',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/ichuac.webp';
    const pdfEsp = '/uploads/ichuac-es.pdf';
    const pdfEng = '/uploads/ichuac-en.pdf';
    const titleChurch = 'Iglesia Natividad de María de Ichuac';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
