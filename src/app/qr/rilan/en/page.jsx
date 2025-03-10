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

export default function QRRilanEn() {
    const titlePage = 'La Iglesia';
    const imgMain = '/iglesias/rilan/qr/rilan-01.webp';
    const nameChurch = 'Church of Saint Mary of Rilan';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patroness';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1908';
    const patronNameChurch = 'Our Lady of Lourdes';
    const feastDayNameChurch = '11 de febrero';

    const castroIglesia = '/iglesias/rilan/qr/rilan.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        "The construction of Rilán's church began in 1908 and took more than 10 years to complete, with the community finally finishing the project in 1920. <b>The lumber used for its construction was transported from Dalcahue by ox-drawn carts and rowing rafts.</b>";

    const listTexts = [
        {
            text: 'It blends different styles and is built with various native woods such as tepa, ulmo, tineo, and larch. <b>Its colorful ribbed vault, characteristic of Gothic architecture, is noteworthy.</b> These vaults are constructed by the intersection of two or more arches that cross and intertwine at the ceiling, creating a complex and highly decorative structure.',
        },
        {
            text: 'Alongside the Virgin of Lourdes, in addition to the Chilean flag, <b>a Huilliche flag is displayed in acknowledgment of this indigenous people who played a crucial role in the construction of the Chiloé churches</b> and who strongly influenced the rites and traditions that revolve around them.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/rilan/qr/rilan_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_04.jpg',
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

    const imageListQuilquico = [
        {
            src: '/iglesias/rilan/qr/rilan_galeria_08.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_09.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const imageListYutuy = [
        {
            src: '/iglesias/rilan/qr/rilan_galeria_11.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_12.jpg',
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
    const circleSeis = '/iglesias/rilan/qr/rilan_galeria_06.jpg';
    const circleSiete = '/iglesias/rilan/qr/rilan_galeria_07.png';
    const circleOcho = '/iglesias/rilan/qr/rilan_galeria_10.jpg';

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
                        distanceAttractionOne="25,6 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="A haven for fresh food lovers: vegetables, fish, and local goods. Quality and affordability in a charming building."
                        distanceAttractionTwo="29 min"
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
                        distanceAttractionOne="26 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Nerve center in Castro, with iconic buildings and community spirit. A space for art, culture, and social bonds."
                        distanceAttractionTwo="30 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListPlaza} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Costanera Castro"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="26,3 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Seaside promenade in Chiloé that charms with ocean views and architecture. Perfect for sunset walks and feeling the breeze."
                        distanceAttractionTwo="30 min"
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
                        distanceAttractionOne="26,7 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Unique window to overwater homes in Chiloé. Offers unforgettable views of traditional architecture."
                        distanceAttractionTwo="33 min"
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
                        distanceAttractionOne="17,6 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Natural sanctuary in Chiloé, home to migratory birds and unique biodiversity. A serene landscape inviting contemplation."
                        distanceAttractionTwo="19 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListHumedalPutemun} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSiete} />

                    <QRInfoAttractions
                        titleAttraction="Quilquico"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="10,4 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="In Chiloé, a haven of peace and nature. Landscapes of hills and waters, perfect for disconnecting and experiencing island culture."
                        distanceAttractionTwo="11 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListQuilquico} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSeis} />

                    <QRInfoAttractions
                        titleAttraction="Mirador La Estancia"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="11,2 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Sublime panoramic in Chiloé, where the view stretches to merge with the horizon. A spectacle of nature."
                        distanceAttractionTwo="18 min"
                        extentAttractionTwo="by car"
                    />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleOcho} />

                    <QRInfoAttractions
                        titleAttraction="Yutuy"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="14,9 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="A charming little town in the middle of the archipelago."
                        distanceAttractionTwo="17 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageListYutuy} />
                </div>

                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    schedule="Churches schedule"
                    linkService="https://tinyurl.com/castrochile2"
                />
            </section>
        </>
    );
}
