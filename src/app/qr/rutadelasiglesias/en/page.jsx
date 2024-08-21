import QRVideo from '@components/QRPages/QRVideo';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRHeaderGeneral from '@components/QRPages/QRHeaderGeneral';
import QRFooterGeneral from '@components/QRPages/QRFooterGeneral';

import Image from 'next/image';

export const metadata = {
    title: 'PTI | QR Iglesia | Chiloé and the route of the churches',
};

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
