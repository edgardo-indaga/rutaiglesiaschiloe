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

export default function QRTenaunEn() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/tenaun.webp';
    const nameChurch = 'Our Lady of Patronage Church of Tenaún';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Dalcahue';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1842';
    const patronNameChurch = 'Our Lady of Patronage';
    const feastDayNameChurch = 'January 30th';

    const castroIglesia = '/iglesias/tenaun/qr/tenaun.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'The church of Tenaún, along with that of Castro, <b>is distinguished by its three towers</b>, as the vast majority of the heritage churches of the archipelago have only one. Its colorful exterior paint and the two large blue stars adorning its facade are also striking. Although information provided on-site dates the church to 1877, a parish document confirms that its construction began in 1842.';

    const listTexts = [
        {
            text: '<b>Inside</b>, the church has a traditional pulpit from which priests used to deliver their sermons. Additionally, old kneelers with custom designs that belonged to churchgoers in the past are on display.',
        },
        {
            text: 'Three 19th-century funeral slabs belonging to the Cheuqueman family are found within the church. Legend has it that they are the donors of the land where the current church stands, and they rest buried beneath its structure.',
        },
        {
            text: "While the church's <b>patroness is Our Lady of Patronage,</b> other saints are also celebrated, such as Our Lady of Lourdes, Our Lady of Mount Carmel, Our Lady of the Transition, Jesus of Nazareth, Our Lady of the Rosary, Saint Peter, and Our Lady of Grace. The latter's image is adorned with a beautiful dress made of wool, hand-knitted by its former patroness.",
        },
    ];

    const imageList = [
        {
            src: '/iglesias/tenaun/qr/tenaun_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/tenaun/qr/tenaun_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/tenaun/qr/tenaun_galeria_04.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleUno = '/iglesias/dalcahue/qr/dalcahue_galeria_05.jpg';

    const imageCocineras = [
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_06.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_07.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleDos = '/iglesias/dalcahue/qr/dalcahue_galeria_08.jpg';

    const imageArtensal = [
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_09.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_10.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleTres = '/iglesias/dalcahue/qr/dalcahue-02.webp';

    const imageDalcahue = [
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_12.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_13.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleCuatro = '/iglesias/dalcahue/qr/dalcahue_galeria_14.jpg';

    const imageTenaun = [
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_15.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_16.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleCinco = '/iglesias/dalcahue/qr/dalcahue_galeria_17.jpg';

    const imageTocoihue = [
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_18.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleSeis = '/iglesias/dalcahue/qr/dalcahue_galeria_19.jpg';

    const imageSanJuan = [
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_20.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/dalcahue/qr/dalcahue_galeria_21.jpg',
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
                            <QRVideo videoId="85hxz8ddW44" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <QRInfoAttractions
                        titleAttraction="Cocinerias Dalcahue"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="37,5 km"
                        extentAttractionOne="from the church"
                        infoAttraction="Traditional market in Chiloé where local flavor comes alive. A feast of seafood, typical dishes, and crafts."
                        distanceAttractionTwo="41 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageCocineras} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Feria Artesanal Dalcahue"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="37,2 km"
                        eextentAttractionOne="from the church"
                        infoAttraction="This meeting point in Chiloé celebrates local culture through its crafts."
                        distanceAttractionTwo="40 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageArtensal} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Dalcahue"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="36,4 km"
                        extentAttractionOne="from the church"
                        infoAttraction="Cultural heart of Chiloé, blending crafts, cuisine, and legends. Natural and historical charm at every step."
                        distanceAttractionTwo="38 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageDalcahue} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="170 mts"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="17,3 km"
                        eextentAttractionOne="from the church"
                        infoAttraction="This place in Chiloé distills history and serenity, surrounded by nature. Ideal for those looking to connect with traditions."
                        distanceAttractionTwo="2 min"
                        extentAttractionTwo="walking"
                    />

                    <QRImages images={imageTenaun} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <QRInfoAttractions
                        titleAttraction="Cascada Tocoihue"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="6,4 km"
                        extentAttractionOne="from the church"
                        infoAttraction="Natural spectacle in Chiloé, where water falls majestically among green forests. A magical place for adventurers."
                        distanceAttractionTwo="15 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageTocoihue} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSeis} />

                    <QRInfoAttractions
                        titleAttraction="San Juan"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="17,5 mts"
                        extentAttractionOne="from the church"
                        infoAttraction="San Juan, where the art of shipbuilding comes alive. Its historic church, black-necked swans, and the town's warmth envelop you."
                        distanceAttractionTwo="24 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageSanJuan} />
                </div>

                <QRChurchesMaps titleContent="The Churches Route" />
                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    schedule="Churches schedule"
                    linkService="https://tinyurl.com/c3633ub2"
                />
            </section>
        </>
    );
}
