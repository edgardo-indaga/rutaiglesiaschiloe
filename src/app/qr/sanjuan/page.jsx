import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia San Juan Bautista de San Juan',
};

export default function qrAchaoPage() {
    const imgBg = '/qr/sanjuan.webp';
    const linkEsp = '/qr/sanjuan/es';
    const linkEng = '/qr/sanjuan/en';
    const titleChurch = 'Iglesia San Juan Bautista de San Juan';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
