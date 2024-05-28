import QRLayout from '@/components/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora de los Dolores de Dalcahue',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/dalcahue.webp';
    const pdfEsp = '/uploads/dalcahue-es.pdf';
    const pdfEng = '/uploads/dalcahue-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora de los Dolores de Dalcahue';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
