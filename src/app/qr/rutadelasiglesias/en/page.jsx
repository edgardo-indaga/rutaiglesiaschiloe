import QRVideo from '@components/QRPages/QRVideo';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRHeaderGeneral from '@components/QRPages/QRHeaderGeneral';
import QRFooterGeneral from '@components/QRPages/QRFooterGeneral';

import Image from 'next/image';
import IglesiasItems from '@components/IglesiasItems/IglesiasItems';

export const metadata = {
    title: 'PTI | QR Iglesia | Chiloé and the route of the churches',
};

const data = [
    {
        id: 1,
        name: 'Church of San Francisco de Castro',
        image: '/iglesias-vector/castro-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/castro/es',
    },
    {
        id: 2,
        name: 'Church of Our Lady of Grace of Nercón',
        image: '/iglesias-vector/nercon-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/nercon/en',
    },
    {
        id: 3,
        name: 'Church of Our Lady of Sorrows of Dalcahue',
        image: '/iglesias-vector/dalcahue-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/dalcahue/en',
    },
    {
        id: 4,
        name: 'Church of Santa María de Rilán',
        image: '/iglesias-vector/rilan-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/rilan/en',
    },
    {
        id: 5,
        name: 'Church of Our Lady of the Rosary of Chelín',
        image: '/iglesias-vector/chelin-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/chelin/en',
    },
    {
        id: 6,
        name: 'Church of San Juan Bautista de San Juan',
        image: '/iglesias-vector/sanjuan-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/sanjuan/en',
    },
    {
        id: 7,
        name: 'Church of Our Lady of the Patronage of Tenaún',
        image: '/iglesias-vector/tenaun-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/tenaun/en',
    },
    {
        id: 8,
        name: 'Church of San Antonio de Colo',
        image: '/iglesias-vector/colo-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/colo/en',
    },
    {
        id: 9,
        name: 'Church of Santa María de Loreto de Achao',
        image: '/iglesias-vector/achao-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/achao/en',
    },
    {
        id: 10,
        name: 'Church of Our Lady of Grace of Quinchao',
        image: '/iglesias-vector/quinchao-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/quinchao/en',
    },
    {
        id: 11,
        name: 'Church of Jesus Nazarene of Caguach',
        image: '/iglesias-vector/caguach-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/caguach/en',
    },
    {
        id: 12,
        name: 'Church of Our Lady of the Rosary of Chonchi',
        image: '/iglesias-vector/chonchi-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/chonchi/en',
    },
    {
        id: 13,
        name: 'Church of San Antonio de Padua de Vilupulli',
        image: '/iglesias-vector/vilupulli-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/vilupulli/en',
    },
    {
        id: 14,
        name: 'Church of the Nativity of Mary of Ichuac',
        image: '/iglesias-vector/ichuac-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/ichuac/en',
    },
    {
        id: 15,
        name: 'Church of Jesus Nazarene of Aldachildo',
        image: '/iglesias-vector/aldachildo-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/aldachildo/en',
    },
    {
        id: 16,
        name: 'Church of Santiago Apóstol de Detif',
        image: '/iglesias-vector/detif-iglesia.png',
        linkTitle: 'VIEW',
        url: '/qr/detif/en',
    },
];

export default function qrRutaIglesiasEn() {
    const imgMain = '/qr/fichageneral.webp';
    const nameChurch = 'Chiloé and the route of the churches';
    const imgProtoloco = '/qr/qr-protocolo.png';

    const listTexts = [
        {
            text: '<b>The Chiloé Archipelago</b> is a territory composed of more than 40 islands, with a total area of 9,181 km². The main island extends 180 km from north to south, and the territory is divided into ten communes. It is distinguished by its folklore, mythology, diversity of native potatoes, craftsmanship, gastronomy, and unique architecture; the result of centuries of Huilliche, Spanish, and Chono influences developed in relative isolation. Its temperate rainy climate, abundance of marine resources, and vast forests have shaped life on these islands.',
        },
        {
            text: '<b>The route of the Churches</b> encompasses the journey through the Heritage Churches of Chiloé, along with its cultural landscape, attractions, and surrounding tourist services. In the years 2000 and 2001, UNESCO declared 16 churches in the Chiloé archipelago as "World Heritage Sites." These churches, representative of a set of more than 150 temples located both in Chiloé and the Reloncaví Sound, reflect the rich cultural heritage of this territory.',
        },
        {
            text: 'Chiloé has received other international recognitions that highlight its culture, including the designation of the archipelago\'s agriculture as an "Important Agricultural Heritage System" (SIPAM) by the FAO in 2011. Additionally, in 2022, the island of Lemuy was awarded the "Best Tourism Villages\'\' seal by the World Tourism Organization, highlighting it as an example of rural tourism worldwide.',
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
                        Testimonials
                    </h2>
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[50px] mt-[40px]">
                    <h5 className="text-tinto text-[28px] leading-[30px] md:text-[40px] md:leading-[46px]">
                        Architectural Legacy
                    </h5>
                    <div className="mt-[30px]">
                        <QRVideo videoId="94Yc_Z6ubpo" />
                    </div>
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[50px] mt-[40px]">
                    <h5 className="text-tinto text-[28px] leading-[30px] md:text-[40px] md:leading-[46px]">
                        Reflections of a way of life
                    </h5>
                    <div className="mt-[30px]">
                        <QRVideo videoId="i6WwIu5KDn4" />
                    </div>
                </div>
                <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0 md:mt-[50px] mt-[40px]">
                    <h5 className="text-tinto text-[28px] leading-[30px] md:text-[40px] md:leading-[46px]">
                        Witnesses of the past
                    </h5>
                    <div className="mt-[30px]">
                        <QRVideo videoId="B7t_Pp9ku5c" />
                    </div>
                </div>
                <QRChurchesMaps titleContent="The route of the Churches" />
                <IglesiasItems data={data} tituloPage="The route of the Churches" />
                <QRFooterGeneral
                    titleContent="More information"
                    titleContact="Contact"
                    textService="About Chiloé"
                    linkService="https://tinyurl.com/chiloegeneral"
                    textServiceUno="On the route of the churches"
                    linkServiceUno="https://www.rutaiglesiaschiloe.cl/"
                    textServiceDos="About SIPAM"
                    linkServiceDos="https://tinyurl.com/sipamchiloe"
                    textServiceTres="Download the route passport"
                    linkServiceTres="https://www.rutaiglesiaschiloe.cl/uploads/pasaporte.pdf"
                />
            </section>
        </>
    );
}
