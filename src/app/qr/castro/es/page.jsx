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

export default function QRCastroEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/castro.webp';
    const nameChurch = 'Iglesia San Francisco de Castro';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrono';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1910';
    const patronNameChurch = 'San Francisco';
    const feastDayNameChurch = '4 de octubre';

    const castroIglesia = '/iglesias/castro/castro.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const circleUno = '/iglesias/castro/qr/castro_galeria_04.jpg';
    const circleDos = '/iglesias/castro/qr/castro_galeria_03.jpg';
    const circleTres = '/iglesias/castro/qr/castro_galeria_09.jpg';
    const circleCuatro = '/iglesias/castro/qr/castro_galeria_12.jpg';
    const circleCinco = '/iglesias/castro/qr/castro_galeria_15.jpg';
    const circleSeis = '/iglesias/castro/qr/castro_galeria_18.jpg';
    const circleSiete = '/iglesias/castro/qr/castro_galeria_21.jpg';

    const firstText =
        'La primera iglesia de Castro fue construida en 1.567 y, al igual que varias reconstrucciones posteriores, fue destruida por un incendio. La predecesora de la iglesia actual que se erigía en el mismo sitio, se quemó en 1.902. De ella se conservan bellas fotografías.';

    const listTexts = [
        {
            text: '<b>La Iglesia San Francisco de Castro es el principal templo del archipiélago y símbolo de su capital.</b> Se trata de una construcción monumental cuyo diseño original, proveniente de Europa, consideraba la utilización de piedra y hormigón para su construcción. Sin embargo, los carpinteros locales decidieron levantarla a la usanza chilota: en madera.',
        },
        {
            text: 'Su <b>aspecto exterior se diferencia del modelo tradicional de arquitectura religiosa chilota,</b> sin embargo, en su interior se experimenta la misma sensación que en las demás iglesias patrimoniales, caracterizada por la calidez de los espacios, el olor a madera nativa, la peculiaridad de la imaginería religiosa influenciada por tradiciones locales, y la vivacidad los ritos típicos del archipiélago.',
        },
        {
            text: 'Su fachada se ha pintado de diversos colores durante su historia, pasando por el naranjo y el celeste hasta el actual <b>amarillo con morado, que se dice era su color original.</b>',
        },
        {
            text: 'Entre las imágenes religiosas destacan el arcángel Miguel, victorioso sobre Satanás y una réplica del famoso Jesús de Nazareno de Caguach.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/castro/qr/castro_galeria_01.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_03.jpg',
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

    const imageListNercon = [
        {
            src: '/iglesias/castro/qr/castro_galeria_22.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/castro/qr/castro_galeria_23.jpg',
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
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="1,7 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Destino para amantes de lo fresco: verduras y pescados junto a otros productos locales. Calidad y buenos precios en un edificio encantador."
                        distanceAttractionTwo="18 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListYumbel} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Plaza de Castro"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="24 mts"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Centro neurálgico en Castro, con edificaciones icónicas y espíritu comunitario. Espacio para arte, cultura y lazos sociales."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListPlaza} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Costanera Castro"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="550 mts"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Paseo marítimo en Chiloé que encanta con sus vistas al mar y arquitectura. Ideal para caminatas al atardecer y sentir la brisa."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListCostanera} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Palafitos Gamboa"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="700 mts"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Ventana única a casas sobre el agua en Chiloé. Ofrece vistas inolvidables de la arquitectura tradicional."
                        distanceAttractionTwo="12 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListPalafitoGamboa} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <QRInfoAttractions
                        titleAttraction="Humedal de Putemún"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="11,6 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Santuario natural en Chiloé, hogar de aves migratorias y biodiversidad única. Un paisaje sereno que invita a la contemplación."
                        distanceAttractionTwo="23 min"
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
                        distanceAttractionOne="27 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Península ubicada al frente de Castro, donde se puede encontrar naturaleza, balnearios, miradores escénicos, artesanía, historia, tradiciones chilotas, gastronomía y hoteles."
                        distanceAttractionTwo="30 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListRilan} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSiete} />

                    <QRInfoAttractions
                        titleAttraction="Nercón"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="4 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Poblado ubicado al sur de Castro, donde se encuentra la Iglesia Patrimonial Nuestra Señora de Gracia de Nercón caracterizada por su bello antejardín y el cementerio tradicional que la acompañan."
                        distanceAttractionTwo="10 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListNercon} />
                </div>
                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    schedule="Horario Iglesias"
                    linkService="https://tinyurl.com/castrochile2"
                />
            </section>
        </>
    );
}
