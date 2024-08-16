import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Nuestra Señora de Gracia de Quinchao',
};
export default function qrAchaoPage() {
    const imgBg = '/qr/quinchao.webp';
    const linkEsp = '/qr/quinchao/es';
    const linkEng = '/qr/quinchao/en';
    const titleChurch = 'Iglesia Nuestra Señora de Gracia de Quinchao';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
