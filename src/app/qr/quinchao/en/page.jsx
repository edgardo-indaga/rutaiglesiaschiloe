import QRHeaderSingle from '@components/QRPages/QRHeaderSingle';
import QRIntro from '@components/QRPages/QRIntro';
import QRImages from '@components/QRPages/QRImages';
import QRVideo from '@components/QRPages/QRVideo';
import QRCircleImage from '@components/QRPages/QRCircleImage';
import QRInfoAttractions from '@components/QRPages/QRInfoAttractions';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRFooter from '@components/QRPages/QRFooter';

export const metadata = {
    title: 'PTI | QR Church | Area attractions ',
};

export default function QrAchaoEn() {
    const imgMain = '/qr/achao.webp';
    const nameChurch = 'Our Lady of Grace Church of Quinchao';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Quinchao';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1880';
    const patronNameChurch = 'Our Lady of Grace';
    const feastDayNameChurch = 'December 8th';
    const titlePage = 'The Church';
    const achaoIglesia = '/iglesias/quinchao/qr/quinchao.png';

    const firstText =
        "Though Villa Quinchao is a sparsely populated locality, its <b>church is the second-largest in the archipelago,</b> after Castro's. Its substantial size is because it serves as the main venue for the celebration of the Immaculate Conception, one of the most popular feasts in the archipelago.";

    const listTexts = [
        {
            text: 'Traditionally, throngs of parishioners would arrive at the church to participate in this celebration every December 8th, whether by walking along the beach, on horseback, or by sailing. Today, more than 4,000 people arrive on this date, filling both the interior of the church and its forecourt. ',
        },
        {
            text: 'Thanks to its large dimensions, the Quinchao church boasts <b>excellent acoustics,</b> making it a preferred rehearsal space for choirs from various localities.',
        },
    ];

    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const circleUno = '/iglesias/achao/circle-01.png';
    const circleDos = '/iglesias/achao/circle-02.png';
    const circleTres = '/iglesias/achao/circle-03.png';
    const circleCuatro = '/iglesias/achao/circle-04.png';
    const circleCinco = '/iglesias/achao/circle-05.png';
    const circleSeis = '/iglesias/achao/circle-06.png';
    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const imageList = [
        {
            src: '/iglesias/quinchao/qr/quinchao_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/quinchao/qr/quinchao_galeria_03.jpg',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/quinchao/qr/quinchao_galeria_04.jpg',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '576',
        },
    ];

    const imageListHumedal = [
        {
            src: '/iglesias/achao/qr-image-01.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '682',
        },
        {
            src: '/iglesias/achao/qr-image-02.png',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '682',
        },
    ];

    const imageListMirador = [
        {
            src: '/iglesias/achao/qr-image-03.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '682',
        },
        {
            src: '/iglesias/achao/qr-image-04.png',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '682',
        },
    ];

    const imageListChequian = [
        {
            src: '/iglesias/achao/qr-image-05.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '682',
        },
        {
            src: '/iglesias/achao/qr-image-06.png',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '682',
        },
    ];

    const imageListPalquin = [
        {
            src: '/iglesias/achao/qr-image-07.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '682',
        },
        {
            src: '/iglesias/achao/qr-image-08.png',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '682',
        },
    ];

    const imageListVelez = [
        {
            src: '/iglesias/achao/qr-image-09.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '682',
        },
        {
            src: '/iglesias/achao/qr-image-10.png',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '682',
        },
    ];

    const imageListHumedalCuraco = [
        {
            src: '/iglesias/achao/qr-image-11.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '682',
        },
        {
            src: '/iglesias/achao/qr-image-12.png',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '682',
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
                    imgChurch={achaoIglesia}
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
                            <QRVideo videoId="jZbusXVvKnk" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <QRInfoAttractions
                        titleAttraction="Humedal Villa Quinchao"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="700 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="In Chiloé, this biodiversity oasis captures the essence of wetlands. Home to unique species and tranquil landscapes."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListHumedal} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Alto La Paloma"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="12,6 km"
                        extentAttractionOne="from the church"
                        infoAttraction="Without a doubt, the best view of Achao."
                        distanceAttractionTwo="16 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListMirador} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Chequian"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="7,3 km"
                        extentAttractionOne="from the church"
                        infoAttraction="Village in Chiloé that charms with its rural landscape and traditions. A place where time seems to stand still among fields and sea."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListChequian} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Palqui Estero"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="22,5 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Stream in Chiloé, a haven of biodiversity and landscapes that inspire tranquility. Perfect for nature lovers."
                        distanceAttractionTwo="28 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListPalquin} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <QRInfoAttractions
                        titleAttraction="Curaco de Vélez"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="21,4 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Coastal town in Chiloé, famed for its tranquility, oysters, and traditional architecture. A journey to the island's heart."
                        distanceAttractionTwo="25 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListVelez} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSeis} />

                    <QRInfoAttractions
                        titleAttraction="Humedal de Curaco"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="22,6 KM"
                        extentAttractionOne="from the church"
                        infoAttraction="Ecological sanctuary in Chiloé, home to birds and biodiversity. A vital space for wildlife observation and natural connection."
                        distanceAttractionTwo="29 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListHumedalCuraco} />
                </div>

                <QRChurchesMaps titleContent="The Churches Route" />

                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    linkService="https://tinyurl.com/quinchao"
                />
            </section>
        </>
    );
}
