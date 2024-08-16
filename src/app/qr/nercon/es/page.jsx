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

export default function QRNerconEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/iglesias/nercon/qr/nercon.webp';
    const nameChurch = 'Iglesia Nuestra Señora de Gracia de Nercón';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1879';
    const patronNameChurch = 'Virgen de Gracia y Arcángel San Miguel ';
    const feastDayNameChurch = '8 y 29 de septiembre';

    const castroIglesia = '/iglesias/nercon/qr/nercon.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Al visitar esta iglesia inmediatamente llaman la atención su <b>bello antejardín y el cementerio tradicional que la acompañan.</b> Destacan también el vistoso color celeste utilizado tanto en la fachada como en los nichos que albergan a los santos; y las columnas interiores pintadas imitando el mármol.';

    const listTexts = [
        {
            text: 'Tras la última restauración se dejó a la vista el “esqueleto” de la iglesia, lo que <b>permite al visitante recorrer el entretecho para apreciar la parte exterior de la bóveda y el uso de ensambles y tarugos de madera.</b> ',
        },
        {
            text: 'Se cuenta que la figura de San Miguel pisando a Lucifer fue confeccionada por un artesano local a partir de un madero recogido del bosque.',
        },
        {
            text: 'La Virgen de Gracia vela por sus fieles desde el nicho central, vestida de prendas rosadas que le renuevan cada año familias que se ofrecen para cuidarla. Otra imagen más pequeña de la patrona fue encontrada por un lugareño en 1.730, al lado de la actual iglesia, donde anteriormente se ubicaba la capilla. ',
        },
        {
            text: '<b>Se expone en su interior una lancha chilota y cuelgan del techo pequeñas embarcaciones.</b> Estas son ofrendas de fieles navegantes, para quienes antiguamente la iglesia cumplía el rol de faro.',
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Destino para amantes de lo fresco: verduras y pescados junto a otros productos locales. Calidad y buenos precios en un edificio encantador."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Centro neurálgico en Castro, con edificaciones icónicas y espíritu comunitario. Espacio para arte, cultura y lazos sociales."
                        distanceAttractionTwo="8 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListPlaza} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Costanera Castro"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="4,8 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Paseo marítimo en Chiloé que encanta con sus vistas al mar y arquitectura. Ideal para caminatas al atardecer y sentir la brisa."
                        distanceAttractionTwo="9 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Ventana única a casas sobre el agua en Chiloé. Ofrece vistas inolvidables de la arquitectura tradicional."
                        distanceAttractionTwo="5 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Santuario natural en Chiloé, hogar de aves migratorias y biodiversidad única. Un paisaje sereno que invita a la contemplación."
                        distanceAttractionTwo="26 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Península ubicada al frente de Castro, donde se puede encontrar naturaleza, balnearios, miradores escénicos, artesanía, historia, tradiciones chilotas, gastronomía y hoteles."
                        distanceAttractionTwo="40 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListRilan} />
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
