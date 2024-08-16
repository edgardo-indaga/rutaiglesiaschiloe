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

export default function QRTenaunEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/tenaun.webp';
    const nameChurch = 'Iglesia Nuestra Señora del Patrocinio de Tenaún';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Dalcahue';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1842';
    const patronNameChurch = 'Nuestra Señora del Patrocinio';
    const feastDayNameChurch = '30 de Enero';

    const castroIglesia = '/iglesias/tenaun/qr/tenaun.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'La iglesia de Tenaún, junto con la de Castro, <b>se distingue por sus tres torres</b>, ya que la gran mayoría de las iglesias patrimoniales del archipiélago cuentan con solo una. También llaman la atención su colorida pintura exterior y las dos grandes estrellas azules que adornan su fachada. Si bien según la información que se entrega en el lugar, la iglesia data de 1.877, un documento parroquial confirma que su construcción se inició en el año 1.842.';

    const listTexts = [
        {
            text: '<b>En su interior</b>, la iglesia cuenta con un tradicional púlpito desde donde antiguamente los sacerdotes predicaban sus sermones. Además, se exhiben antiguos reclinatorios con diseños personalizados que pertenecían a los fieles de la iglesia en el pasado.',
        },
        {
            text: 'Al interior de la iglesia se encuentran tres lápidas funerarias del siglo XIX, que pertenecen a la familia Cheuqueman. Según se cuenta, se trata de los donantes del terreno donde se ubica la actual iglesia, quienes descansan enterrados bajo su estructura.',
        },
        {
            text: 'Si bien la patrona de la iglesia es Nuestra Señora del Patrocinio, se celebra también a otros santos, como la Virgen de Lourdes, la Virgen del Carmen, la Virgen del Tránsito, Jesús Nazareno, Nuestra Señora del Rosario, San Pedro y la Virgen de Gracia. La imagen de esta última luce un bello vestido de lana tejido a palillo por su antigua patrona.',
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Mercado tradicional en Chiloé donde el sabor local cobra vida. Un festín de mariscos, platos típicos y artesanía."
                        distanceAttractionTwo="41 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Este punto de encuentro en Chiloé celebra la cultura local a través de sus artesanías."
                        distanceAttractionTwo="40 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Corazón cultural de Chiloé, donde se mezclan la artesanía, la gastronomía y las leyendas. Encanto natural e histórico a cada paso."
                        distanceAttractionTwo="38 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Este lugar en Chiloé destila historia y serenidad, rodeado de naturaleza. Ideal para quienes buscan conectar con tradiciones."
                        distanceAttractionTwo="2 min"
                        extentAttractionTwo="caminando"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Espectáculo natural en Chiloé, donde el agua cae majestuosamente entre verdes bosques. Un lugar mágico para aventureros."
                        distanceAttractionTwo="15 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="San Juan, donde el arte de construir barcos revive. Su iglesia histórica, los cisnes de cuello negro y la calidez del pueblo te envuelven."
                        distanceAttractionTwo="24 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageSanJuan} />
                </div>

                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    linkService="https://tinyurl.com/c3633ub2"
                />
            </section>
        </>
    );
}
