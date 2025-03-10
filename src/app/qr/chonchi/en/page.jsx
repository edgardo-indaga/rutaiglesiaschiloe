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

export default function QRChonchiEn() {
    const titlePage = 'The Church';
    const imgMain = '/qr/chonchi.webp';
    const nameChurch = 'Our Lady of the Rosary Church of Chonchi';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Chonchi';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1893';
    const patronNameChurch = 'Our Lady of the Rosary and St. Charles Borromeo';
    const feastDayNameChurch = 'October 7th and November 4th';

    const chonchiIglesia = '/iglesias/chonchi/qr/chonchi.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'The church of Chonchi <b>immediately stands out for the colorful facade and its tower.</b> Inside, the geometric figures carved between and above the pillars, as well as the white stars that adorn its central vault, draw attention. According to locals, <b>these stars represent the constellations of the night sky with such an impressive level of detail</b> that they have not been able to be restored to date.';

    const listTexts = [
        {
            text: 'The current church is built over an older one, which can be evidenced by viewing the foundations of the old church through a glass piece located on the altar floor. The altars feature curious and colorful designs, which were discovered by a priest when scraping off the last layer of paint.',
        },
        {
            text: '<b>Every year, on the day of its feast, the image of the patroness, Our Lady of the Rosary, receives a new dress.</b> In addition, the community celebrates St. Charles Borromeo, as he is the patron of the Parish, which encompasses over 20 chapels in the area. ',
        },
        {
            text: "The community vividly remembers the storm of 2002, as it knocked down the church's tower. Fortunately, it was able to be rebuilt the following year.",
        },
    ];

    const imageList = [
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/chonchi/qr/chonchi_galeria_04.jpg',
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
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="160 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="Spine full of history and traditions."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="walking"
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
                        distanceAttractionOne="12,7 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Bird haven, dreamy landscapes, and tranquility. A must-visit for nature lovers."
                        distanceAttractionTwo="13 min"
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
                        distanceAttractionOne="16,3 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Ancient bastion in Chonchi, Chiloé. Built in 1779, it stands on the coast, guarding maritime traditions and stories."
                        distanceAttractionTwo="24 min"
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
