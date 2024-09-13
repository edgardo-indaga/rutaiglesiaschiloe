import QRVideo from '@components/QRPages/QRVideo';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRHeaderGeneral from '@components/QRPages/QRHeaderGeneral';
import QRFooterGeneral from '@components/QRPages/QRFooterGeneral';

import Image from 'next/image';
import IglesiasItems from '@components/IglesiasItems/IglesiasItems';

export const metadata = {
    title: 'PTI | QR Iglesia | Chiloé y la ruta de las iglesias',
};

const data = [
    {
        id: 1,
        name: 'Iglesia San Francisco de Castro',
        image: '/iglesias-vector/castro-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/castro/es',
    },
    {
        id: 2,
        name: 'Iglesia Nuestra Señora de Gracia de Nercón',
        image: '/iglesias-vector/nercon-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/nercon/es',
    },
    {
        id: 3,
        name: 'Iglesia Nuestra Señora de los Dolores de Dalcahue',
        image: '/iglesias-vector/dalcahue-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/dalcahue/es',
    },
    {
        id: 4,
        name: 'Iglesia Santa María de Rilán',
        image: '/iglesias-vector/rilan-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/rilan/es',
    },
    {
        id: 5,
        name: 'Iglesia Nuestra Señora del Rosario de Chelín',
        image: '/iglesias-vector/chelin-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/chelin/es',
    },
    {
        id: 6,
        name: ' Iglesia San Juan Bautista de San Juan',
        image: '/iglesias-vector/sanjuan-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/sanjuan/es',
    },
    {
        id: 7,
        name: 'Iglesia Nuestra Señora del Patrocinio de Tenaún',
        image: '/iglesias-vector/tenaun-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/tenaun/es',
    },
    {
        id: 8,
        name: 'Iglesia San Antonio de Colo',
        image: '/iglesias-vector/colo-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/colo/es',
    },
    {
        id: 9,
        name: 'Iglesia Santa María de Loreto de Achao',
        image: '/iglesias-vector/achao-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/achao/es',
    },
    {
        id: 10,
        name: 'Iglesia Nuestra Señora de la Gracia de Quinchao',
        image: '/iglesias-vector/quinchao-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/quinchao/es',
    },
    {
        id: 11,
        name: 'Iglesia Jesús Nazareno de Caguach',
        image: '/iglesias-vector/caguach-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/caguach/es',
    },
    {
        id: 12,
        name: 'Iglesia Nuestra Señora del Rosario de Chonchi',
        image: '/iglesias-vector/chonchi-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/chonchi/es',
    },
    {
        id: 13,
        name: 'Iglesia San Antonio de Padua de Vilupulli',
        image: '/iglesias-vector/vilupulli-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/vilupulli/es',
    },
    {
        id: 14,
        name: 'Iglesia Natividad de María de Ichuac',
        image: '/iglesias-vector/ichuac-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/ichuac/es',
    },
    {
        id: 15,
        name: 'Iglesia Jesús Nazareno de Aldachildo',
        image: '/iglesias-vector/aldachildo-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/aldachildo/es',
    },
    {
        id: 16,
        name: 'Iglesia Santiago Apóstol de Detif',
        image: '/iglesias-vector/detif-iglesia.png',
        linkTitle: 'VER',
        url: '/qr/detif/es',
    },
];

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
                <IglesiasItems tituloPage="La ruta de las Iglesias" data={data} />
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
