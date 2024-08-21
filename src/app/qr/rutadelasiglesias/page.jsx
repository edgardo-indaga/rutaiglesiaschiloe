import QRLayout from '@components/QRPages/QRLayout';
export const metadata = {
    title: 'QR | PTI | Iglesia Ficha General',
};

export default function qrFichaIglesiasPage() {
    const imgBg = '/qr/fichageneral.webp';
    const linkEsp = '/qr/rutadelasiglesias/es';
    const linkEng = '/qr/rutadelasiglesias/en';
    const titleChurch = 'Chiloé y la ruta de las iglesias';
    return (
        <main>
            <QRLayout imgBg={imgBg} linkEsp={linkEsp} linkEng={linkEng} titleChurch={titleChurch} />
        </main>
    );
}
