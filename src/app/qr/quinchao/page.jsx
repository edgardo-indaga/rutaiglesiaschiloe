import QRLayout from '@/components/QRLayout';
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
