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

export default function QRColoEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/colo.webp';
    const nameChurch = 'Iglesia San Antonio de Colo';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Quemchi';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1890';
    const patronNameChurch = 'St. Anthony';
    const feastDayNameChurch = 'June 13th';

    const castroIglesia = '/iglesias/colo/qr/colo.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Among the churches that form part of the World Heritage Site, the one in Colo is one of <b>the smallest, most rustic, and welcoming.</b> It resembles a smaller version of the Quicaví church, which lost one of its tower levels during restoration by the community. Although many of the churches are erected upon rocks, in Colo’s case, this feature is particularly evident.';

    const listTexts = [
        {
            text: "Situated in a predominantly rural area, the church of Colo <b>stands in solitude,</b> with only a few houses across from it and it's back to the estuary of the river bearing the same name. A path leads down the cliff to a natural cave within the forest, rumored to have been a gathering place for witches. A picturesque cemetery lies adjacent to the church.",
        },
        {
            text: '<b>Father Mariano Puga, affectionately known as the "worker priest"</b> and revered across Chile for his dedication to human rights during the military dictatorship, served as the parish priest of Colo\'s church and shared 12 years of his life with a family from the area. His services were extremely popular, drawing attendees from throughout the archipelago. He is warmly remembered by the local community for his visits to the nearby islands, "drenched to the bone" and playing the accordion. Following his passing, his ashes were scattered here.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/colo/qr/colo_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/colo/qr/colo_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/colo/qr/colo_galeria_04.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleUno = '/iglesias/colo/qr/colo_galeria_06.jpg';

    const imageMuseo = [
        {
            src: '/iglesias/colo/qr/colo_galeria_07.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/colo/qr/colo_galeria_08.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleDos = '/iglesias/colo/qr/colo_galeria_09.jpg';

    const imageQuemchi = [
        {
            src: '/iglesias/colo/qr/colo_galeria_10.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/colo/qr/colo_galeria_11.jpg',
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
                            <QRVideo videoId="-qGAL9fYUug" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <QRInfoAttractions
                        titleAttraction="Casa Museo Francisco Coloane"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="21,1 km"
                        extentAttractionOne="from the church"
                        infoAttraction="This cultural space in Chiloé pays homage to the life and work of an iconic literary figure, immersing visitors in his world."
                        distanceAttractionTwo="23 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageMuseo} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <QRInfoAttractions
                        titleAttraction="Quemchi"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="20,5 km"
                        extentAttractionOne="from the church"
                        infoAttraction="Chiloé village that charms with its seascapes and rich culture. Birthplace of writers and tradition, it invites exploration."
                        distanceAttractionTwo="22 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageQuemchi} />
                </div>

                <QRChurchesMaps titleContent="The Churches Route" />
                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    linkService="https://tinyurl.com/v3atf3zn"
                />
            </section>
        </>
    );
}
