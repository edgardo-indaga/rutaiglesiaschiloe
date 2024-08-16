import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia San Francisco de Castro',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/castro.webp';
    const linkEsp = '/qr/castro/es';
    const linkEng = '/qr/castro/en';
    const titleChurch = 'Iglesia San Francisco de Castro';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
