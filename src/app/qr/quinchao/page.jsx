import QRLayout from '@/components/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora de Gracia de Quinchao',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/quinchao.webp';
    const pdfEsp = '/uploads/quinchao-es.pdf';
    const pdfEng = '/uploads/quinchao-en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora de Gracia de Quinchao';
    return (
        <main>
            <QRLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
