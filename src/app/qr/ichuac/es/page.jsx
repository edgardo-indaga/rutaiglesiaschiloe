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

export default function QRIchuacEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/ichuac.webp';
    const nameChurch = 'Iglesia Natividad de María de Ichuac';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Puqueldón';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1880';
    const patronNameChurch = 'Natividad de María';
    const feastDayNameChurch = '8 de septiembre';

    const chonchiIglesia = '/iglesias/ichuac/qr/ichuac.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Se dice que <b>Ichuac era la primera parada en el recorrido anual de la misión circular,</b> luego de zarpar desde Castro. La iglesia actual fue construida por la comunidad con maderas de ciprés, coigüe y alerce. Según testimonios de los locales, <b>trabajaron en ello unas 150 personas, durante 5 años.</b>';

    const listTexts = [
        {
            text: '<b>El reloj pintado en el pórtico de la iglesia marca las tres de la tarde, la hora tradicionalmente asociada con la muerte de Cristo.</b> También destacan los motivos geométricos de la fachada.',
        },
        {
            text: 'Aunque actualmente todo el exterior presenta el color natural de las maderas nativas, fotografías de hace algunos años muestran que la fachada estuvo pintada de blanco y celeste en el pasado.',
        },
        {
            text: 'En 1997, los santos de la iglesia fueron enviados a Ancud para ser restaurados, lo que generó preocupación en la comunidad, temiendo que no regresaran a la iglesia. Sin embargo, este proceso resultó beneficioso, ya que <b>hoy sus principales imágenes lucen revitalizadas, preservando así el legado histórico y religioso de la iglesia de Ichuac.</b>',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/ichuac/qr/ichuac_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/ichuac/qr/ichuac_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/ichuac/qr/ichuac_galeria_04.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleUno = '/iglesias/detif/qr/detif_galeria_05.jpg';

    const imageParque = [
        {
            src: '/iglesias/detif/qr/detif_galeria_06.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/detif/qr/detif_galeria_07.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleDos = '/iglesias/detif/qr/detif_galeria_08.jpg';

    const imageChilcoop = [
        {
            src: '/iglesias/detif/qr/detif_galeria_09.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleTres = '/iglesias/detif/qr/detif_galeria_10.jpg';

    const imageMarico = [
        {
            src: '/iglesias/detif/qr/detif_galeria_11.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/detif/qr/detif_galeria_12.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleCuatro = '/iglesias/detif/qr/detif_galeria_13.jpg';

    const imageCortao = [
        {
            src: '/iglesias/detif/qr/detif_galeria_14.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleCinco = '/iglesias/detif/qr/detif_galeria_15.jpg';

    const imageApahuen = [
        {
            src: '/iglesias/detif/qr/detif_galeria_16.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/detif/qr/detif_galeria_17.jpg',
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
                            <QRVideo videoId="9Z9FEbAgRbk" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <QRInfoAttractions
                        titleAttraction="Parque Yayanes"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="5,7 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Siente la adrenalina en el puente colgante y el contacto puro con la naturaleza en senderos y cascadas."
                        distanceAttractionTwo="8 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageParque} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Chilcoop"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="15,1 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Descubre la tradición chilota en el cultivo orgánico de papas nativas en Lemuy, una experiencia cultural auténtica."
                        distanceAttractionTwo="22 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageChilcoop} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Playa Marico"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="17,9 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Una playa escondida con gusto local."
                        distanceAttractionTwo="26 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageMarico} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Paso el Cortao"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="21,8 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Carretera espectacular, con agua a cada lado, evoca cola de ballena vista desde arriba."
                        distanceAttractionTwo="31 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageCortao} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Apahuen"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="27,9 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Un mirador que captura la esencia de la isla, entre mares y verdes, un rincón para respirar paz y belleza."
                        distanceAttractionTwo="44 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageApahuen} />
                </div>

                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    linkService="https://tinyurl.com/puqueldon2"
                />
            </section>
        </>
    );
}
