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

export default function QrAchaoEsp() {
    const imgMain = '/qr/achao.webp';
    const nameChurch = 'Iglesia Santa María de Loreto de Achao';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Quinchao';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1730';
    const patronNameChurch = 'Santa María de Loreto';
    const feastDayNameChurch = '10 de diciembre o 3er domingo de octubre';

    const achaoIglesia = '/iglesias-vector/achao-iglesia.png';

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
        'La iglesia de Achao es reconocida como <b>la construcción de madera más antigua de Chile</b> y se distingue de las demás iglesias chilotas por su estilo interior recargado, propio del barroco. Tanto su bóveda principal como sus altares, nichos y púlpito están adornados con finos y coloridos tallados de madera.';

    const listTexts = [
        {
            text: '<b>Llama la atención que la patrona de la iglesia de Achao sea María de Loreto, ya que su imagen no está presente en ninguna otra iglesia del archipiélago.</b> Hasta hace poco, se desconocía su origen. Un estudio histórico reveló que provenía del Lago Nahuelhuapi, en Argentina, donde se estableció una misión jesuita para evangelizar al pueblo poya. El misionero Nicolás Mascardi recibió una imagen mariana del virrey del Perú para el templo que se construiría allí. Durante una revuelta, los indígenas dieron muerte a los misioneros y escondieron la imagen de la mujer blanca que los misioneros habían traído con ellos. En medio de la devastación, la imagen fue encontrada y trasladada a Chiloé, donde se convirtió en la patrona de la iglesia de Achao. En el Lago Nahuelhuapi, podemos encontrar una réplica idéntica de la imagen de Nuestra Señora del Loreto, que fue entregada a la comunidad de Bariloche en el año 2006.',
        },
        {
            text: '<b>Una de las fiestas más importantes se celebra el 1° de enero</b> con una procesión en la que se trasladan las imágenes de las vírgenes de las capillas rurales de la parroquia de Achao hasta la ciudad de Achao.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/achao/achao_galeria_01.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/achao/achao_galeria_08.jpg',
            alt: 'Iglesia Imagen 02',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/achao/achao_galeria_05.jpg',
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
                        distanceAttractionOne="250 mts"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="En Chiloé, este oasis de biodiversidad captura la esencia de los humedales. Hogar de especies únicas y paisajes tranquilos."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListHumedal} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <QRInfoAttractions
                        titleAttraction="Mirador Alto La Paloma"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="250 mts"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Sin duda alguna, la mejor vista de Achao."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListMirador} />
                </div>
                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <QRInfoAttractions
                        titleAttraction="Chequian"
                        pinOne={pinLocationMorado}
                        pinTwo={pinWalkMorado}
                        distanceAttractionOne="49 mts"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Aldea en Chiloé que encanta con su paisaje rural y tradiciones. Un lugar donde el tiempo parece detenerse entre campos y mar."
                        distanceAttractionTwo="1 min"
                        extentAttractionTwo="caminando"
                    />

                    <QRImages images={imageListChequian} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Palqui Estero"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="36,9 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Cauce en Chiloé, refugio de biodiversidad y paisajes que inspiran tranquilidad. Perfecto para amantes de la naturaleza"
                        distanceAttractionTwo="38 min"
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
                        distanceAttractionOne="30 Km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Pueblo costero en Chiloé, famoso por su tranquilidad, ostras y arquitectura tradicional. Un viaje al corazón de la isla."
                        distanceAttractionTwo="32 min"
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
                        distanceAttractionOne="34,7 KM"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Santuario ecológico en Chiloé, hogar de aves y biodiversidad. Espacio vital para la observación de fauna y conexión natural."
                        distanceAttractionTwo="38 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageListHumedalCuraco} />
                </div>

                <QRChurchesMaps titleContent="La ruta de las Iglesias" />

                <QRFooter
                    titleContent="Más información"
                    titleContact="Contacto"
                    textService="Servicios Turísticos"
                    linkService="https://tinyurl.com/quinchao"
                />
            </section>
        </>
    );
}
