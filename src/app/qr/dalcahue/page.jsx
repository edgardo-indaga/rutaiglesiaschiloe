import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora de los Dolores de Dalcahue',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/dalcahue.webp';
    const linkEsp = '/qr/dalcahue/es';
    const linkEng = '/qr/dalcahue/en';
    const titleChurch = 'Iglesia Nuestra Señora de los Dolores de Dalcahue';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
