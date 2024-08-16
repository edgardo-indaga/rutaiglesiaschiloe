import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Santiago Apóstol de Detif',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/detif.webp';
    const linkEsp = '/qr/detif/es';
    const linkEng = '/qr/detif/en';
    const titleChurch = 'Iglesia Santiago Apóstol de Detif';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
