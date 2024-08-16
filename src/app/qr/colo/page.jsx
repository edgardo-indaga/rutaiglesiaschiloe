import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia San Antonio de Colo',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/colo.webp';
    const linkEsp = '/qr/colo/es';
    const linkEng = '/qr/colo/en';
    const titleChurch = 'Iglesia San Antonio de Colo';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
