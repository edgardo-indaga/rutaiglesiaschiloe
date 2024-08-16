import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora del Patrocinio de Tenaú',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/tenaun.webp';
    const linkEsp = '/qr/tenaun/es';
    const linkEng = '/qr/tenaun/en';
    const titleChurch = 'Iglesia Nuestra Señora del Patrocinio de Tenaún';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
