import QRHeaderSingle from '@components/QRPages/QRHeaderSingle';
import QRIntro from '@components/QRPages/QRIntro';
import QRImages from '@components/QRPages/QRImages';
import QRVideo from '@components/QRPages/QRVideo';
import QRCircleImage from '@components/QRPages/QRCircleImage';
import QRInfoAttractions from '@components/QRPages/QRInfoAttractions';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRFooter from '@components/QRPages/QRFooter';

export const metadata = {
    title: 'PTI | QR Iglesia | Area attractions',
};

export default function QRNerconEn() {
    const titlePage = 'The Church';
    const imgMain = '/iglesias/nercon/qr/nercon.webp';
    const nameChurch = 'Our Lady of Grace Church of Nercón';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patron';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1879';
    const patronNameChurch = 'Virgin of Grace and Archangel St. Michael';
    const feastDayNameChurch = 'September 8th and 29th';

    const castroIglesia = '/iglesias/nercon/qr/nercon.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Upon visiting this church, its <b>beautiful front garden and the traditional cemetery alongside it immediately catch the eye.</b> The striking sky blue color used both on the facade and in the niches that house the saints, as well as the interior columns painted to mimic marble, are also noteworthy.';

    const listTexts = [
        {
            text: 'After the last restoration, the "skeleton" of the church was left visible, <b>allowing visitors to walk through the attic to appreciate the outer part of the vault and the use of wood joints and dowels.</b>',
        },
        {
            text: 'It is said that the figure of St. Michael stepping on Lucifer was crafted by a local artisan from a log picked from the forest.',
        },
        {
            text: 'The Virgin of Grace watches over her faithful from the central niche, dressed in pink garments that are renewed each year by families who offer to take care of her. Another smaller image of the patroness was found by a local in 1730, next to the current church, where the chapel used to be located.',
        },
        {
            text: '<b>Displayed inside is a Chilote boat, and small boats hang from the ceiling.</b> These are offerings from faithful sailors, for whom the church once served the role of a lighthouse.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/nercon/qr/nercon_galeria_01.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/nercon/qr/nercon_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/nercon/qr/nercon_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleUno = '/iglesias/castro/qr/castro_galeria_04.jpg';
    const circleDos = '/iglesias/castro/qr/castro_galeria_03.jpg';
    const circleTres = '/iglesias/castro/qr/castro_galeria_09.jpg';
    const circleCuatro = '/iglesias/castro/qr/castro_galeria_12.jpg';
    const circleCinco = '/iglesias/castro/qr/castro_galeria_15.jpg';
    const circleSeis = '/iglesias/castro/qr/castro_galeria_18.jpg';
    const circleSiete = '/iglesias/castro/qr/castro_galeria_21.jpg';

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
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="4,7 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="A haven for fresh food lovers: vegetables, fish, and local goods. Quality and affordability in a charming building."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListYumbel} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Plaza de Castro"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="3,8 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Nerve center in Castro, with iconic buildings and community spirit. A space for art, culture, and social bonds."
                        distanceAttractionTwo="8 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListPlaza} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Castro Waterfront"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="4,8 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Seaside promenade in Chiloé that charms with ocean views and architecture. Perfect for sunset walks and feeling the breeze."
                        distanceAttractionTwo="9 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListCostanera} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Palafitos Gamboa"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="3,3 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Unique window to overwater homes in Chiloé. Offers unforgettable views of traditional architecture."
                        distanceAttractionTwo="5 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListPalafitoGamboa} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <QRInfoAttractions
                        titleAttraction="Humedal de Putemún"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="14,9 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Natural sanctuary in Chiloé, home to migratory birds and unique biodiversity. A serene landscape inviting contemplation."
                        distanceAttractionTwo="26 min"
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
                        distanceAttractionOne="31 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Peninsula located in front of Castro, where you can find nature, beaches, scenic viewpoints, craftsmanship, history, Chilote traditions, gastronomy, and hotels."
                        distanceAttractionTwo="40 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListRilan} />
                </div>
                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    schedule="Churches schedule"
                    linkService="https://tinyurl.com/castrochile2"
                />
            </section>
        </>
    );
}
