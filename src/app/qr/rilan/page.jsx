import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Santa María de Rilán',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/rilan.webp';
    const linkEsp = '/qr/rilan/es';
    const linkEng = '/qr/rilan/en';
    const titleChurch = 'Iglesia Santa María de Rilán';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
