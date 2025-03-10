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

export default function QRVilupulliEn() {
    const titlePage = 'The Church';
    const imgMain = '/iglesias/vilupulli/qr/vilupulli_galeria_01.jpg';
    const nameChurch = 'St. Anthony of Padua Church of Vilupulli';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Chonchi';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patron';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = 'Around 1900';
    const patronNameChurch = 'St. Anthony of Padua';
    const feastDayNameChurch = 'June 13th';

    const chonchiIglesia = '/iglesias/vilupulli/qr/vilupulli.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'It is said that the church of Vilupulli has <b>the most slender and delicate tower of all the temples</b> in the archipelago. Built by the community through collective work parties known as "mingas," this church has a history rich in legends. <b>It is told that schoolchildren were caught playing with skulls emerging from excavations during the construction.</b> This event led to the belief that the church was erected over a cemetery or that some faithful from the area were buried under the old temple.';

    const listTexts = [
        {
            text: "Among the church's images, the 'Seated Virgin,' representing the Immaculate Conception on a wooden throne, stepping on a demon in the form of a serpent, stands out. This image is unique in the archipelago and is directly associated with the locality, as the Mapudungun name of Vilupulli translates to 'Hill of the snake' or 'Serpent's hill.'",
        },
        {
            text: 'Many recall that around 1940 the bell arrived and that hoisting it to the top of the tower required the participation of a large part of the local community.',
        },
        {
            text: '<b>It is also recounted that Charles Darwin visited the church of Vilupulli in 1843.</b>',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/vilupulli/qr/vilupulli_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/vilupulli/qr/vilupulli_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/vilupulli/qr/vilupulli_galeria_04.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleUno = '/iglesias/chonchi/qr/chonchi_galeria_05.jpg';

    const imageCentenario = [
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_06.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleDos = '/iglesias/chonchi/qr/chonchi_galeria_07.jpg';

    const imageParque = [
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_08.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_09.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleTres = '/iglesias/chonchi/qr/chonchi_galeria_10.jpg';

    const imageHullinco = [
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_11.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_12.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleCuatro = '/iglesias/chonchi/qr/chonchi_galeria_13.jpg';

    const imageFuerte = [
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_14.jpg',
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
                    imgChurch={chonchiIglesia}
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
                            <QRVideo videoId="4NDWjjDyl0Y" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <QRInfoAttractions
                        titleAttraction="Avda. Centenario"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="5,1 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Spine full of history and traditions."
                        distanceAttractionTwo="9 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageCentenario} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Parque Nacional de Chiloé"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="57 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Valdivian rainforests, ancient forests, unique wildlife. A treasure in Los Lagos, Chile, offering magical views and culture."
                        distanceAttractionTwo="70 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageParque} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Lago Huillinco"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="17,8 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Bird haven, dreamy landscapes, and tranquility. A must-visit for nature lovers."
                        distanceAttractionTwo="28 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageHullinco} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Fuerte Tauco"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="13,7 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Ancient bastion in Chonchi, Chiloé. Built in 1779, it stands on the coast, guarding maritime traditions and stories."
                        distanceAttractionTwo="21 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageFuerte} />
                </div>
                <QRChurchesMaps titleContent="The Churches Route" />
                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    schedule="Churches schedule"
                    linkService="https://tinyurl.com/mr35hwsy"
                />
            </section>
        </>
    );
}
