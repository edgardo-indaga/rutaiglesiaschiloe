import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Natividad de María de Ichuac',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/ichuac.webp';
    const linkEsp = '/qr/ichuac/es';
    const linkEng = '/qr/ichuac/en';
    const titleChurch = 'Iglesia Natividad de María de Ichuac';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
