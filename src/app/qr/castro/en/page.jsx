import QRHeaderSingle from '@components/QRPages/QRHeaderSingle';
import QRIntro from '@components/QRPages/QRIntro';
import QRImages from '@components/QRPages/QRImages';
import QRVideo from '@components/QRPages/QRVideo';
import QRCircleImage from '@components/QRPages/QRCircleImage';
import QRInfoAttractions from '@components/QRPages/QRInfoAttractions';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRFooter from '@components/QRPages/QRFooter';

export const metadata = {
    title: 'PTI | QR Iglesia | Area attractions ',
};

export default function QRCastroEn() {
    const titlePage = 'The Church';
    const imgMain = '/qr/castro.webp';
    const nameChurch = 'St. Francis Church of Castro';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patron';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1910';
    const patronNameChurch = 'St. Francis';
    const feastDayNameChurch = 'October 4th';

    const castroIglesia = '/iglesias/castro/castro.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const circleUno = '/iglesias/castro/qr/castro_galeria_04.jpg';
    const circleDos = '/iglesias/castro/qr/castro_galeria_03.jpg';
    const circleTres = '/iglesias/castro/qr/castro_galeria_09.jpg';
    const circleCuatro = '/iglesias/castro/qr/castro_galeria_12.jpg';
    const circleCinco = '/iglesias/castro/qr/castro_galeria_15.jpg';
    const circleSeis = '/iglesias/castro/qr/castro_galeria_18.jpg';
    const circleSiete = '/iglesias/castro/qr/castro_galeria_21.jpg';

    const firstText =
        'The first church in Castro was constructed in 1567 and, like several subsequent reconstructions, was destroyed by fire. The predecessor of the current church, which stood on the same site, burned down in 1902, of which beautiful photographs have been preserved.';

    const listTexts = [
        {
            text: '<b>St. Francis Church of Castro is the main temple of the archipelago and a symbol of its capital.</b> It is a monumental construction whose original design, from Europe, envisaged the use of stone and concrete. However, local carpenters decided to build it in the Chilote tradition: in wood.',
        },
        {
            text: "<b>Its exterior appearance differs from the traditional model of Chilote religious architecture.</b> However, inside, it evokes the same sensation as in the other heritage churches, characterized by the warmth of the spaces, the smell of native wood, the uniqueness of the religious imagery influenced by local traditions, and the vivacity of the archipelago's typical rites.",
        },
        {
            text: 'Its facade has been painted various colors throughout its history, ranging from orange and sky blue to the current <b>yellow with purple, which is said to have been its original color.</b>',
        },
        {
            text: 'Among the religious images, the archangel Michael, victorious over Satan, and a replica of the famous Jesus of Nazareth of Caguach stand out.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/castro/qr/castro_galeria_01.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const imageListYumbel = [
        {
            src: '/iglesias/castro/qr/castro_galeria_05.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_06.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

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

    const imageListPalafitoGamboa = [
        {
            src: '/iglesias/castro/qr/castro_galeria_13.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_14.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const imageListHumedalPutemun = [
        {
            src: '/iglesias/castro/qr/castro_galeria_16.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_17.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const imageListRilan = [
        {
            src: '/iglesias/castro/qr/castro_galeria_19.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_20.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const imageListNercon = [
        {
            src: '/iglesias/castro/qr/castro_galeria_22.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_23.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

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
                        titleAttraction="Feria Campesina Yumbel"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="1,7 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="A haven for fresh food lovers: vegetables, fish, and local goods. Quality and affordability in a charming building."
                        distanceAttractionTwo="18 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListYumbel} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Castro Square"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="24 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="Nerve center in Castro, with iconic buildings and community spirit. A space for art, culture, and social bonds."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListPlaza} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Castro Waterfront"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="550 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="Seaside promenade in Chiloé that charms with ocean views and architecture. Perfect for sunset walks and feeling the breeze."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListCostanera} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Palafitos Gamboa"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="700 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="Unique window to overwater homes in Chiloé. Offers unforgettable views of traditional architecture."
                        distanceAttractionTwo="12 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListPalafitoGamboa} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <QRInfoAttractions
                        titleAttraction="Humedal de Putemún"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="11,6 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Natural sanctuary in Chiloé, home to migratory birds and unique biodiversity. A serene landscape inviting contemplation."
                        distanceAttractionTwo="23 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListHumedalPutemun} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSeis} />

                    <QRInfoAttractions
                        titleAttraction="Península de Rilán"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="27 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Peninsula located in front of Castro, where you can find nature, beaches, scenic viewpoints, craftsmanship, history, Chilote traditions, gastronomy, and hotels."
                        distanceAttractionTwo="30 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListRilan} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSiete} />

                    <QRInfoAttractions
                        titleAttraction="Nercón"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="4 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="A village where you can find the Heritage Church Our Lady of Grace of Nercón characterized by its beautiful front garden and the traditional cemetery that accompanies it."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListNercon} />
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
