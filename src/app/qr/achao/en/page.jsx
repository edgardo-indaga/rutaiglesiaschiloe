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
    const nameChurch = 'Our Lady of Loreto Church of Achao';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Quinchao';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1730';
    const patronNameChurch = 'Our Lady of Loreto';
    const feastDayNameChurch = 'December 10th or 3rd Sunday of October';
    const titlePage = 'The Church';
    const achaoIglesia = '/iglesias-vector/achao-iglesia.png';

    const firstText =
        'The church of Achao is acknowledged as <b>the oldest wooden building in Chile</b> and sets itself apart from other Chilote churches with its lavish interior, characteristic of the Baroque style. Its main vault, as well as its altars, niches, and pulpit, are adorned with intricate and colorful wooden carvings.';

    const listTexts = [
        {
            text: "<b>It is noteworthy that the patroness of Achao's church is Our Lady of Loreto, as her image is not found in any other church of the archipelago.</b> Until recently, her origin was unknown. Historical research revealed that she came from Lake Nahuelhuapi in Argentina, where a Jesuit mission was established to evangelize the Poya people. The missionary Nicolás Mascardi received a Marian image from the Viceroy of Peru for the temple that would be built there. During an uprising, the natives killed the missionaries and hid the image of the white woman that the missionaries had brought with them. Amidst the devastation, the image was found and transferred to Chiloé, where it became the patroness of the church of Achao. At Lake Nahuelhuapi, one can find an identical replica of the image of Our Lady of Loreto, which was given to the community of Bariloche in 2006.",
        },
        {
            text: '<b>One of the most important celebrations takes place on January 1st</b> with a procession in which images of the Virgins from the rural chapels of the Achao parish are carried to the town of Achao.',
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
            src: '/iglesias/achao/achao_galeria_01.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/achao/achao_galeria_08.jpg',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/achao/achao_galeria_05.jpg',
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
                        distanceAttractionOne="250 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="In Chiloé, this biodiversity oasis captures the essence of wetlands. Home to unique species and tranquil landscapes."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListHumedal} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Alto La Paloma"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="250 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="Without a doubt, the best view of Achao."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListMirador} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Chequian"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="49 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="Village in Chiloé that charms with its rural landscape and traditions. A place where time seems to stand still among fields and sea."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageListChequian} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Palqui Estero"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="36,9 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Stream in Chiloé, a haven of biodiversity and landscapes that inspire tranquility. Perfect for nature lovers."
                        distanceAttractionTwo="38 min"
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
                        distanceAttractionOne="30 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Coastal town in Chiloé, famed for its tranquility, oysters, and traditional architecture. A journey to the island's heart."
                        distanceAttractionTwo="32 min"
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
                        distanceAttractionOne="34,7 KM"
                        extentAttractionOne="from the church"
                        infoAttraction="Ecological sanctuary in Chiloé, home to birds and biodiversity. A vital space for wildlife observation and natural connection."
                        distanceAttractionTwo="38 min"
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
