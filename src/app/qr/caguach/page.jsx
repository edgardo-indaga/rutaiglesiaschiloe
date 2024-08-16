import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Jesús Nazareno de Caguach',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/caguach.webp';
    const linkEsp = '/qr/caguach/es';
    const linkEng = '/qr/caguach/en';
    const titleChurch = 'Iglesia Jesús Nazareno de Caguach';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
