import QRVideo from '@components/QRPages/QRVideo';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRHeaderGeneral from '@components/QRPages/QRHeaderGeneral';
import QRFooterGeneral from '@components/QRPages/QRFooterGeneral';

import Image from 'next/image';

export const metadata = {
    title: 'PTI | QR Iglesia | Chiloé y la ruta de las iglesias',
};

export default function qrRutaIglesiasEsp() {
    const imgMain = '/qr/fichageneral.webp';
    const nameChurch = 'Chiloé y la ruta de las iglesias';
    const imgProtoloco = '/qr/qr-protocolo.png';

    const listTexts = [
        {
            text: '<b>El archipiélago de Chiloé,</b> es un territorio compuesto por más de 40 islas, posee una extensión total de 9.181 km², con la Isla Grande extendiéndose 180 km de norte a sur, el territorio se divide en diez comunas. Se distingue por su folklore, mitología, diversidad de papas nativas, artesanía, gastronomía y arquitectura singular; fruto de siglos de influencias huilliches, españolas y chonos desarrolladas en un relativo aislamiento. Su clima templado lluvioso, abundancia de recursos marinos y vastos bosques han moldeado la vida en estas islas.',
        },
        {
            text: '<b>La Ruta de las Iglesias</b> abarca el recorrido por las Iglesias Patrimoniales de Chiloé, junto con su paisaje cultural, atractivos y servicios turísticos circundantes. En los años 2000 y 2001, la UNESCO declaró 16 iglesias del archipiélago de Chiloé como “Sitios de Patrimonio Mundial”. Estas iglesias, representativas de un conjunto de más de 150 templos, ubicados tanto en Chiloé como en el Seno de Reloncaví, reflejan la rica herencia cultural en este territorio.',
        },
        {
            text: 'Chiloé ha recibido otros reconocimientos internacionales que destacan su cultura, incluida la designación de la agricultura del archipiélago como “Sistema Importante del Patrimonio Agrícola Mundial” (SIPAM) por la FAO en 2011. Además, la isla Lemuy fue galardonada en 2022 por la Organización Mundial del Turismo con el sello “Best Tourism Villages”, destacándola como un ejemplo de turismo rural a nivel mundial.',
        },
    ];

    return (
        <>
            <QRHeaderGeneral imgMain={imgMain} nameChurch={nameChurch} />
            <section className="bg-[#F0EBE1] md:py-[40px] py-[40px]">
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0">
                    <div>
                        {listTexts.map((listText, index) => (
                            <p
                                key={index}
                                className="text-justify text-tinto text-[22px] leading-[30px] py-[10px] md:text-[28px] md:leading-[38px] md:py-[20px]"
                                dangerouslySetInnerHTML={{ __html: listText.text }}
                            />
                        ))}
                    </div>
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0">
                    <Image src={imgProtoloco} alt="Imagen" width={1128} height={608} />
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[40px] mt-[30px]">
                    <QRVideo videoId="3GArrx4sVUE" />
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[70px] mt-[60px]">
                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Testimonios
                    </h2>
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[50px] mt-[40px]">
                    <h5 className="text-tinto text-[28px] leading-[30px] md:text-[40px] md:leading-[46px]">
                        Legado Arquitectónico
                    </h5>
                    <div className="mt-[30px]">
                        <QRVideo videoId="94Yc_Z6ubpo" />
                    </div>
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[50px] mt-[40px]">
                    <h5 className="text-tinto text-[28px] leading-[30px] md:text-[40px] md:leading-[46px]">
                        Reflejos de una forma de vida
                    </h5>
                    <div className="mt-[30px]">
                        <QRVideo videoId="i6WwIu5KDn4" />
                    </div>
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[50px] mt-[40px]">
                    <h5 className="text-tinto text-[28px] leading-[30px] md:text-[40px] md:leading-[46px]">
                        Testigos del pasado
                    </h5>
                    <div className="mt-[30px]">
                        <QRVideo videoId="B7t_Pp9ku5c" />
                    </div>
                </div>
                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooterGeneral
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Sobre Chiloé"
                    linkService="https://tinyurl.com/chiloegeneral"
                    textServiceUno="Sobra la ruta de las iglesias"
                    linkServiceUno="https://www.rutaiglesiaschiloe.cl/"
                    textServiceDos="Sobre SIPAM"
                    linkServiceDos="https://tinyurl.com/sipamchiloe"
                    textServiceTres="Descarga el pasaporte de la ruta"
                    linkServiceTres="https://www.rutaiglesiaschiloe.cl/uploads/pasaporte.pdf"
                />
            </section>
        </>
    );
}
