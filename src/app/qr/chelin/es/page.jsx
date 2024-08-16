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

export default function QRChelinEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/iglesias/chelin/qr/chelin.webp';
    const nameChurch = 'Iglesia Nuestra Señora del Rosario de Chelín';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1888';
    const patronNameChurch = 'Nuestra Señora del Rosario';
    const feastDayNameChurch = '30 de agosto (Jesús Nazareno)';

    const castroIglesia = '/iglesias/chelin/qr/chelin-iglesia.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        '<b>La iglesia de Chelín es una de las más apartadas del archipiélago,</b> por lo que no es de fácil acceso. Sobresale por su llamativa fachada, decorada con seis columnas de estilo neoclásico y dos ventanas circulares.';

    const listTexts = [
        {
            text: '<b>En su interior, se destaca de entre otras iglesias del archipiélago, por su predominante pintura blanca, que la dota de una luminosidad y pulcritud notable.</b> Al igual que en las iglesias de Nercón y Detif, la pintura de sus columnas interiores imita el mármol. ',
        },
        {
            text: 'Si bien su patrona oficial es Nuestra Señora del Rosario, la principal fiesta que se celebra en la isla es en honor a Jesús Nazareno. ',
        },
        {
            text: 'Por un sendero se llega a un cementerio tradicional, con tumbas en forma de pequeñas casas chilotas, que sirven de residencia a las almas de los difuntos. Más arriba <b>por el mismo sendero, se encuentra la Gruta de la Virgen del Carmen, desde la cual se puede disfrutar de una vista panorámica de la iglesia y su explanada,</b> la localidad de Chelín y, cruzando el canal, la isla de Quehui.',
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Paseando por un sendero rodeado de naturaleza, atravesando el cementerio encontrarás la gruta donde se puede contemplar una amplia vista de la iglesia y su explanada, la localidad de Chelín y, al otro lado del canal, la isla de Quehui."
                        distanceAttractionTwo="15 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListMirados} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Isla Quehui
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Es la isla más próxima a Chelín, alberga astilleros, la ruta de oficios
                        ancestrales, una réplica de la momia Chona y una iglesia.
                    </p>

                    <QRImages images={imageListQuehui} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Plaza de Castro
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Centro neurálgico en Castro, con edificaciones icónicas y espíritu
                        comunitario. Espacio para arte, cultura y lazos sociales.
                    </p>

                    <QRImages images={imageListPlaza} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Costanera Castro
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Paseo marítimo en Chiloé que encanta con sus vistas al mar y arquitectura.
                        Ideal para caminatas al atardecer y sentir la brisa.
                    </p>

                    <QRImages images={imageListCostanera} />
                </div>

                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    linkService="https://tinyurl.com/castrochile2"
                />
            </section>
        </>
    );
}
