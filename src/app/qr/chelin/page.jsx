import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora del Rosario de Chelín',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/chelin.webp';
    const linkEsp = '/qr/chelin/es.pdf';
    const linkEng = '/qr/chelin/en.pdf';
    const titleChurch = 'Iglesia Nuestra Señora del Rosario de Chelín';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
