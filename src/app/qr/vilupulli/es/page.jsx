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

export default function QRVilupulliEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/iglesias/vilupulli/qr/vilupulli_galeria_01.jpg';
    const nameChurch = 'Iglesia San Antonio de Padua Vilupulli';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Chonchi';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = 'Alrededor de 1900';
    const patronNameChurch = 'San Antonio de Padua';
    const feastDayNameChurch = '13 de junio';

    const chonchiIglesia = '/iglesias/vilupulli/qr/vilupulli.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Se dice que la iglesia de Vilupulli posee <b>la torre más esbelta y delicada de todos los templos</b> del archipiélago. Construida por la comunidad a través de mingas, esta iglesia tiene una historia rica en leyendas. <b>Se dice que unos niños de la escuela fueron sorprendidos jugando con calaveras que salían de las excavaciones durante la construcción.</b> Este evento dio origen a la creencia de que la iglesia fue erigida sobre un cementerio, o que algunos fieles del lugar fueron sepultados bajo el antiguo templo.';

    const listTexts = [
        {
            text: "Entre las imágenes de la iglesia, destaca la 'Virgen sentada', que representa a la Inmaculada Concepción en un trono de madera, pisando a un demonio en forma de serpiente. Esta imagen es única en el archipiélago y se asocia directamente con la localidad, dado que nombre mapudungún de Vilupulli, se traduce como 'Loma de la culebra' o 'Colina de la serpiente'.",
        },
        {
            text: 'Muchas personas recuerdan que alrededor de 1940 llegó la campana y que para lograr subirla hasta lo alto de la torre tuvo que participar gran parte de la comunidad local.',
        },
        {
            text: '<b>También se cuenta que Charles Darwin visitó la iglesia de Vilupulli en 1843.</b>',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/vilupulli/qr/vilupulli_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/vilupulli/qr/vilupulli_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/vilupulli/qr/vilupulli_galeria_04.jpg',
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
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="5,1 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Columna vertebral llena de historia y tradiciones."
                        distanceAttractionTwo="9 min"
                        extentAttractionTwo="en auto"
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
                        distanceAttractionOne="17,8 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Refugio de aves, paisajes de ensueño y tranquilidad. Un destino imperdible para amantes de la naturaleza."
                        distanceAttractionTwo="28 min"
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
                        distanceAttractionOne="13,7 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Antiguo bastión en Chonchi, Chiloé. Erigido en 1779, se alza sobre la costa, custodiando las tradiciones e historias marítimas."
                        distanceAttractionTwo="21 min"
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
