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

export default function QRColoEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/colo.webp';
    const nameChurch = 'Iglesia San Antonio de Colo';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Quemchi';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1890';
    const patronNameChurch = 'San Antonio';
    const feastDayNameChurch = '13 de junio';

    const castroIglesia = '/iglesias/colo/qr/colo.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'De entre las iglesias que forman parte del Sitio de Patrimonio Mundial, la de Colo es <b>una de las más pequeñas, rústicas y acogedoras.</b> Es una versión de menor tamaño de la iglesia de Quicaví, que al ser restaurada por la comunidad, perdió uno de los pisos de su torre. Si bien muchas de las iglesias están construidas sobre rocas, en la de Colo esto se puede evidenciar fácilmente.';

    const listTexts = [
        {
            text: 'Al tratarse de una localidad principalmente rural, la iglesia de Colo <b>se alza solitaria</b>, con sólo un par de casas al frente y dándole la espalda al estuario del río del mismo nombre. Un sendero desciende por el acantilado hasta una cueva natural en medio del bosque, que se dice fue lugar de reunión de brujos. Junto a la iglesia destaca un hermoso cementerio.',
        },
        {
            text: 'El <b>sacerdote Mariano Puga, conocido como el “cura obrero”</b> y recordado en todo Chile por su compromiso con los derechos humanos durante la dictadura militar, fue párroco de la iglesia de Colo y vivió durante 12 años con una familia del lugar. Sus misas eran muy populares y convocaban a personas de todo el archipiélago. Se le recuerda con mucho cariño por la comunidad local, que lo veía recorrer las islas cercanas “mojado hasta los huesos” y tocando el acordeón. Tras su muerte, sus cenizas fueron esparcidas en el lugar.',
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Este espacio cultural en Chiloé rinde homenaje a la vida y obra de un icónico literato, sumergiendo a visitantes en su mundo."
                        distanceAttractionTwo="23 min"
                        extentAttractionTwo="en auto"
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
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Pueblo de Chiloé que encanta con sus paisajes marinos y rica cultura. Cuna de escritores y tradición, invita a la exploración."
                        distanceAttractionTwo="22 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageQuemchi} />
                </div>

                <QRChurchesMaps titleContent="La ruta de las Iglesias" />
                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    linkService="https://tinyurl.com/v3atf3zn"
                />
            </section>
        </>
    );
}
