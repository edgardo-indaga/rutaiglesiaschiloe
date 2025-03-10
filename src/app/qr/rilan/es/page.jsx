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

export default function QRRilanEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/iglesias/rilan/qr/rilan-01.webp';
    const nameChurch = 'Iglesia Santa María de Rilán';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Castro';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1908';
    const patronNameChurch = 'Nuestra Señora de Lourdes';
    const feastDayNameChurch = '11 de febrero';

    const castroIglesia = '/iglesias/rilan/qr/rilan.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'La construcción de la iglesia de Rilán comenzó en 1.908 y tardó más de 10 años. Recién en la 1.920 la comunidad logró finalizar el proyecto. <b>Las maderas para su construcción fueron llevadas desde Dalcahue en yuntas de bueyes y balsas a remo.</b>';

    const listTexts = [
        {
            text: 'Combina diferentes estilos y está construida con diversas maderas nativas, como tepa, ulmo, tineo y alerce. Destaca su <b>colorida bóveda de crucerías, característica de la arquitectura gótica.</b> Estas bóvedas se construyen mediante la intersección de dos o más arcos que se cruzan y se entrelazan en el techo, creando una estructura compleja y muy decorativa.',
        },
        {
            text: 'Junto a la Virgen de Lourdes, además de la bandera chilena <b>se expone una bandera huilliche, en reconocimiento de este pueblo originario que fue clave en la construcción de las iglesias chilotas</b> y que influyó fuertemente en los ritos y tradiciones que se desarrollan en torno a ellas.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/rilan/qr/rilan_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_04.jpg',
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

    const imageListQuilquico = [
        {
            src: '/iglesias/rilan/qr/rilan_galeria_08.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_09.png',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const imageListYutuy = [
        {
            src: '/iglesias/rilan/qr/rilan_galeria_11.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/rilan/qr/rilan_galeria_12.jpg',
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
    const circleSeis = '/iglesias/rilan/qr/rilan_galeria_06.jpg';
    const circleSiete = '/iglesias/rilan/qr/rilan_galeria_07.png';
    const circleOcho = '/iglesias/rilan/qr/rilan_galeria_10.jpg';

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
                        distanceAttractionOne="25,6 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Destino para amantes de lo fresco: verduras y pescados junto a otros productos locales. Calidad y buenos precios en un edificio encantador."
                        distanceAttractionTwo="29 min"
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
                        distanceAttractionOne="26 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Centro neurálgico en Castro, con edificaciones icónicas y espíritu comunitario. Espacio para arte, cultura y lazos sociales."
                        distanceAttractionTwo="30 min"
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
                        distanceAttractionOne="26,3 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Paseo marítimo en Chiloé que encanta con sus vistas al mar y arquitectura. Ideal para caminatas al atardecer y sentir la brisa."
                        distanceAttractionTwo="30 min"
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
                        distanceAttractionOne="26,7 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Ventana única a casas sobre el agua en Chiloé. Ofrece vistas inolvidables de la arquitectura tradicional."
                        distanceAttractionTwo="33 min"
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
                        distanceAttractionOne="17,6 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Santuario natural en Chiloé, hogar de aves migratorias y biodiversidad única. Un paisaje sereno que invita a la contemplación."
                        distanceAttractionTwo="19 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListHumedalPutemun} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSiete} />

                    <QRInfoAttractions
                        titleAttraction="Quilquico"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="10,4 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="En Chiloé, un refugio de paz y naturaleza. Panoramas de colinas y aguas, ideal para desconectar y vivir la cultura insular."
                        distanceAttractionTwo="11 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListQuilquico} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSeis} />

                    <QRInfoAttractions
                        titleAttraction="Mirador La Estancia"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="11,2 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Panorámica sublime en Chiloé, donde la vista se extiende hasta fusionarse con el horizonte. Un espectáculo de la naturaleza."
                        distanceAttractionTwo="18 min"
                        extentAttractionTwo="en auto"
                    />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleOcho} />

                    <QRInfoAttractions
                        titleAttraction="Yutuy"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="14,9 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Un pueblito encantador en la mitad del archipiélago."
                        distanceAttractionTwo="17 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListYutuy} />
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
