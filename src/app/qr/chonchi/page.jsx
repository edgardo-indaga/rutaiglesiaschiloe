import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora del Rosario de Chonchi',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/chonchi.webp';
    const linkEsp = '/qr/chonchi/es';
    const linkEng = '/qr/chonchi/en';
    const titleChurch = 'Iglesia Nuestra Señora del Rosario de Chonchi';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
