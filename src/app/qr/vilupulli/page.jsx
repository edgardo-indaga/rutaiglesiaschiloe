import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia San Antonio de Padua de Vilupulli',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/vilupulli.webp';
    const linkEsp = '/qr/vilupulli/es';
    const linkEng = '/qr/vilupulli/en';
    const titleChurch = 'Iglesia San Antonio de Padua de Vilupulli';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
