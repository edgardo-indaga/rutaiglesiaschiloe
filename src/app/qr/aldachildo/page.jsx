import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Jesús Nazareno de Aldachildo',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/aldachildo.webp';
    const linkEsp = '/qr/aldachildo/es';
    const linkEng = '/qr/aldachildo/en';
    const titleChurch = 'Iglesia Jesús Nazareno de Aldachildo';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
