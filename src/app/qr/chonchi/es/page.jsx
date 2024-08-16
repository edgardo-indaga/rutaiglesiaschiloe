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

export default function QRChonchiEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/chonchi.webp';
    const nameChurch = 'Iglesia Nuestra Señora del Rosario de Chonchi';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Chonchi';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1893';
    const patronNameChurch = 'Nuestra Señora del Rosario y San Carlos de Borromeo';
    const feastDayNameChurch = '7 de octubre y 4 de noviembre';

    const chonchiIglesia = '/iglesias/chonchi/qr/chonchi.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'La iglesia de Chonchi <b>destaca de inmediato por el colorido de su fachada y su torre.</b> En su interior, llaman la atención las figuras geométricas talladas entre y sobre los pilares, además de las estrellas blancas que adornan su bóveda central. Según los lugareños, estas <b>estrellas representan las constelaciones del cielo nocturno</b> con un nivel de detalle tan impresionante que, a la fecha, no han podido ser restauradas.';

    const listTexts = [
        {
            text: 'La iglesia actual está construida sobre otra más antigua, lo que se puede evidenciar al observar las bases de la antigua iglesia a través de una pieza de vidrio ubicada en el suelo del altar. Los altares lucen curiosos y coloridos diseños, los cuales fueron descubiertos por un sacerdote al raspar la última capa de pintura.',
        },
        {
            text: '<b>Cada año, durante el día de su fiesta, la imagen de la patrona, Nuestra Señora del Rosario, recibe un nuevo vestido.</b> Además, la comunidad celebra a San Carlos de Borromeo, dado que es el patrono de la Parroquia, que abarca más de 20 capillas de la zona.',
        },
        {
            text: 'La comunidad recuerda vívidamente el temporal de 2002, ya que derribó la torre de la iglesia. Afortunadamente, esta pudo ser reconstruida al año siguiente.',
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Columna vertebral llena de historia y tradiciones."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="caminando"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Selvas valdivianas, alerzales, fauna única. Un tesoro en Los Lagos, Chile, con acceso a mágicas vistas y cultura."
                        distanceAttractionTwo="70 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Refugio de aves, paisajes de ensueño y tranquilidad. Un destino imperdible para amantes de la naturaleza."
                        distanceAttractionTwo="13 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Antiguo bastión en Chonchi, Chiloé. Erigido en 1779, se alza sobre la costa, custodiando las tradiciones e historias marítimas."
                        distanceAttractionTwo="24 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageFuerte} />
                </div>
                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    linkService="https://tinyurl.com/mr35hwsy"
                />
            </section>
        </>
    );
}
