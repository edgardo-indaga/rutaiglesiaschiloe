import QrLayout from '@/components/qrLayout';
export default function qrAchaoPage() {
    const imgBg = '/qr/achao.webp';
    const pdfEsp = '/uploads/achao-es.pdf';
    const pdfEng = '/uploads/achao-en.pdf';
    const titleChurch = 'Iglesia Santa María de Loreto de Achao';
    return (
        <main>
            <QrLayout imgBg={imgBg} pdfEsp={pdfEsp} pdfEng={pdfEng} titleChurch={titleChurch} />
        </main>
    );
}
