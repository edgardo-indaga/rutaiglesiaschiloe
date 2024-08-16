import QRHeaderSingle from '@components/QRPages/QRHeaderSingle';
import QRIntro from '@components/QRPages/QRIntro';
import QRImages from '@components/QRPages/QRImages';
import QRVideo from '@components/QRPages/QRVideo';
import QRCircleImage from '@components/QRPages/QRCircleImage';
import QRInfoAttractions from '@components/QRPages/QRInfoAttractions';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRFooter from '@components/QRPages/QRFooter';

export const metadata = {
    title: 'PTI | QR Iglesia | Atractivos de la zona ',
};

export default function QRChelinEn() {
    const titlePage = 'The Church';
    const imgMain = '/iglesias/chelin/qr/chelin.webp';
    const nameChurch = 'Our Lady of the Rosary Church of Chelín';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patroness';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1888';
    const patronNameChurch = 'Our Lady of the Rosary';
    const feastDayNameChurch = 'August 30th (Jesús of Nazareno)';

    const castroIglesia = '/iglesias/chelin/qr/chelin-iglesia.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        '<b>The church of Chelín is one of the most remote in the archipelago,</b> making it not easily accessible. It stands out for its striking facade, decorated with six neoclassical columns and two circular windows. ';

    const listTexts = [
        {
            text: '<b>Inside, it is distinguished from other churches in the archipelago by its predominant white paint, which gives it remarkable brightness and cleanliness.</b> Similar to the churches of Nercón and Detif, the paint on its interior columns mimics marble. ',
        },
        {
            text: 'Although its official patroness is Our Lady of the Rosary, the main feast celebrated on the island is in honor of Jesus of Nazareth.',
        },
        {
            text: 'A path leads to a traditional cemetery, with graves in the form of small Chilote houses, serving as residences for the souls of the deceased. <b>Further up the same path, there is the Grotto of Our Lady of Mount Carmel, from which one can enjoy a panoramic view of the church and its forecourt,</b> the locality of Chelín, and across the channel, the island of Quehui.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/chelin/qr/chelin_galeria_01.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/chelin/qr/chelin_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/chelin/qr/chelin_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleUno = '/iglesias/chelin/qr/chelin_galeria_05.jpg';

    const imageListMirados = [
        {
            src: '/iglesias/chelin/qr/chelin_galeria_06.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleDos = '/iglesias/chelin/qr/chelin_galeria_07.jpg';

    const imageListQuehui = [
        {
            src: '/iglesias/chelin/qr/chelin_galeria_08.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleTres = '/iglesias/castro/qr/castro_galeria_03.jpg';

    const imageListPlaza = [
        {
            src: '/iglesias/castro/qr/castro_galeria_07.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_08.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleCuatro = '/iglesias/castro/qr/castro_galeria_09.jpg';

    const imageListCostanera = [
        {
            src: '/iglesias/castro/qr/castro_galeria_10.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_11.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleCinco = '/iglesias/castro/qr/castro_galeria_15.jpg';
    const circleSeis = '/iglesias/castro/qr/castro_galeria_18.jpg';
    const circleSiete = '/iglesias/castro/qr/castro_galeria_21.jpg';

    return (
        <>
            <QRHeaderSingle
                imgMain={imgMain}
                nameChurch={nameChurch}
                districtTitleChurch={districtTitleChurch}
                districtNameChurch={districtNameChurch}
                buildTitleChurch={buildTitleChurch}
                patronTitleChurch={patronTitleChurch}
                feastDayTitleChurch={feastDayTitleChurch}
                buildNameChurch={buildNameChurch}
                patronNameChurch={patronNameChurch}
                feastDayNameChurch={feastDayNameChurch}
            />

            <section className="bg-[#F0EBE1] md:py-[40px] py-[40px]">
                <QRIntro
                    imgChurch={castroIglesia}
                    titlePage={titlePage}
                    firstText={firstText}
                    listTexts={listTexts}
                />

                <div className="container mx-auto max-w-[1024px]">
                    <QRImages images={imageList} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[40px]">
                    <div className="flex flex-col items-center">
                        <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                            {attractionZone}
                        </h2>
                        <h5 className="text-center text-tinto text-[28px] leading-[30px] px-[30px] md:px-[200px] md:text-[40px] md:leading-[46px]">
                            {attractionZoneSub}
                        </h5>
                        <div className="mt-[50px]">
                            <QRVideo videoId="iO4dmHJJ5UQ" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Gruta Virgen del Carmen"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="1 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Walking along a path surrounded by nature, crossing the cemetery, you will find the grotto where you can contemplate a wide view of the church and its esplanade, the town of Chelín, and, on the other side of the stream, the island of Quehui."
                        distanceAttractionTwo="15 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListMirados} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Isla Quehui
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        It´s the closest island to Chelín, it hosts shipyards, the route of
                        ancestral trades, a replica of a chona’s mummy and a church.
                    </p>

                    <QRImages images={imageListQuehui} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Plaza de Castro
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Nerve center in Castro, with iconic buildings and community spirit. A space
                        for art, culture, and social bonds.
                    </p>

                    <QRImages images={imageListPlaza} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Costanera Castro
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Seaside promenade in Chiloé that charms with ocean views and architecture.
                        Perfect for sunset walks and feeling the breeze.
                    </p>

                    <QRImages images={imageListCostanera} />
                </div>

                <QRChurchesMaps titleContent="The Churches Route" />
                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    linkService="https://tinyurl.com/castrochile2"
                />
            </section>
        </>
    );
}
