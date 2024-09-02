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

export default function QRAldachildoEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/aldachildo.webp';
    const nameChurch = 'Iglesia Jesús Nazareno de Aldachildo';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Puqueldón';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrono';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1905';
    const patronNameChurch = 'Jesús Nazareno';
    const feastDayNameChurch = '31 de agosto';

    const chonchiIglesia = '/iglesias/detif/qr/detif.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        "La comunidad cuenta que la iglesia de <b>Aldachildo se 'salvó de milagro' en 1995, cuando estuvo a punto de ser demolida debido a su paupérrimo estado de conservación.</b> Se dice que esto estuvo tan cerca de ocurrir, que varias personas locales ya habían donado papas y recursos para financiar las obras de construcción de una nueva iglesia. Afortunadamente, tras ser declarada Monumento Nacional, pudo ser restaurada.";

    const listTexts = [
        {
            text: 'Al igual que la iglesia de Vilupulli, llama la atención su estilizada torre. <b>En el interior destaca su bóveda central, que luce estrellas pintadas con productos naturales de la zona,</b> al igual que las flores rojas y amarillas que adornan los arcos entre los pilares.',
        },
        {
            text: 'Hoy, la comunidad se mantiene organizada para la celebración de las fiestas patronales. La fiesta de Jesús Nazareno está a cargo de la Sociedad de Jesús Nazareno, de la que participan alrededor de 30 personas; mientras que la fiesta de la Virgen Purísima, el 8 de diciembre, es organizada por la Congregación Hijas de María, una agrupación compuesta exclusivamente por mujeres.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/aldachildo/qr/aldachildo_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/aldachildo/qr/aldachildo_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/aldachildo/qr/aldachildo_galeria_04.jpg',
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
                        distanceAttractionOne="9,1 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Siente la adrenalina en el puente colgante y el contacto puro con la naturaleza en senderos y cascadas."
                        distanceAttractionTwo="16 min"
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
                        distanceAttractionOne="5,2 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Descubre la tradición chilota en el cultivo orgánico de papas nativas en Lemuy, una experiencia cultural auténtica."
                        distanceAttractionTwo="10 min"
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
                        distanceAttractionOne="10,6 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Una playa escondida con gusto local."
                        distanceAttractionTwo="16 min"
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
                        distanceAttractionOne="14,5 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Carretera espectacular, con agua a cada lado, evoca cola de ballena vista desde arriba."
                        distanceAttractionTwo="20 min"
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
                        distanceAttractionOne="20,6 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Un mirador que captura la esencia de la isla, entre mares y verdes, un rincón para respirar paz y belleza."
                        distanceAttractionTwo="35 min"
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
