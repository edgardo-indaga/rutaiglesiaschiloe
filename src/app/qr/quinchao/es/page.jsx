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

export default function QrQuinchaoEsp() {
    const imgMain = '/qr/quinchao.webp';
    const nameChurch = 'Iglesia Nuestra Señora de la Gracia de Quinchao';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Quinchao';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1888';
    const patronNameChurch = 'Nuestra Señora de Gracia';
    const feastDayNameChurch = '8 de diciembre';

    const achaoIglesia = '/iglesias/quinchao/qr/quinchao.png';

    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const circleUno = '/iglesias/achao/circle-01.png';
    const circleDos = '/iglesias/achao/circle-02.png';
    const circleTres = '/iglesias/achao/circle-03.png';
    const circleCuatro = '/iglesias/achao/circle-04.png';
    const circleCinco = '/iglesias/achao/circle-05.png';
    const circleSeis = '/iglesias/achao/circle-06.png';
    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Si bien Villa Quinchao es una localidad poco poblada, su iglesia es <b>la segunda más grande del archipiélago,</b> después de la de Castro. Su gran volumen se debe a que es el principal lugar de celebración de la Inmaculada Concepción, una de las fiestas más populares en el archipiélago.';

    const listTexts = [
        {
            text: 'Antiguamente, multitudes de feligreses llegaban a la iglesia para participar de esta celebración cada 8 de diciembre, ya fuera caminando por la playa, a caballo o navegando por el mar. En la actualidad, llegan en esta fecha más de 4.000 personas, colmando tanto el interior de la iglesia como su explanada.',
        },
        {
            text: 'Gracias a sus grandes dimensiones, la iglesia de Quinchao cuenta con una <b>excelente acústica</b>, por lo que coros de distintas localidades la ocupan como lugar de ensayo.',
        },
    ];

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
                    titlePage="La Iglesia"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="En Chiloé, este oasis de biodiversidad captura la esencia de los humedales. Hogar de especies únicas y paisajes tranquilos."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="caminando"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Sin duda alguna, la mejor vista de Achao."
                        distanceAttractionTwo="16 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Aldea en Chiloé que encanta con su paisaje rural y tradiciones. Un lugar donde el tiempo parece detenerse entre campos y mar."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Cauce en Chiloé, refugio de biodiversidad y paisajes que inspiran tranquilidad. Perfecto para amantes de la naturaleza"
                        distanceAttractionTwo="28 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Pueblo costero en Chiloé, famoso por su tranquilidad, ostras y arquitectura tradicional. Un viaje al corazón de la isla."
                        distanceAttractionTwo="25 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Santuario ecológico en Chiloé, hogar de aves y biodiversidad. Espacio vital para la observación de fauna y conexión natural."
                        distanceAttractionTwo="29 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListHumedalCuraco} />
                </div>

                <QRChurchesMaps titleContent="La ruta de las Iglesias" />

                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    schedule="Horario Iglesias"
                    linkService="https://tinyurl.com/quinchao"
                />
            </section>
        </>
    );
}
