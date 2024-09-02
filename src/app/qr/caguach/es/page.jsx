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

export default function QRCaguachEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/caguach.webp';
    const nameChurch = 'Iglesia Jesús Nazareno de Caguach';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Quinchao';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrono';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1919';
    const patronNameChurch = 'Jesús Nazareno ';
    const feastDayNameChurch = '30 de agosto';

    const castroIglesia = '/iglesias/caguach/qr/caguach.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'De entre las iglesias que conforman el Sitio de Patrimonio Mundial, la de Caguach es <b>la más alejada de la isla grande y, por lo tanto, la de más difícil acceso.</b> Sin embargo, <b>es también lugar de la celebración religiosa más importante de todo Chiloé.</b> Cada 30 de agosto se celebra a Jesús Nazareno, movilizando a miles de fieles que llegan desde todo el archipiélago.';

    const listTexts = [
        {
            text: 'La imagen de Jesús Nazareno de Caguach, con su pelo natural y capa morada, es la más venerada e imitada. Según la leyenda, a fines del siglo XVIII, los habitantes de las islas de Caguach, Alao, Apiao, Tac y Chaulinec vivían en conflicto constante. Con el fin de unir a estos pueblos, el sacerdote franciscano Hilario Martínez les llevó la imagen del Nazareno que estaba en Tenaún, con la idea de que organizaran una fiesta en conjunto. Sin embargo, al no llegar a un acuerdo sobre qué isla debía quedarse con la imagen, se decidió realizar una competencia de embarcaciones a remo. Los remeros de Caguach resultaron ganadores, por lo que la imagen quedó bajo su resguardo.',
        },
        {
            text: '<b>En 1.919 un incendio destruyó la capilla de Caguach, sin embargo, la imagen del Nazareno salió ilesa</b> y la comunidad inició inmediatamente los trabajos para levantar el nuevo templo. Desde hace algunos años, la fiesta del Nazareno se celebra también el tercer domingo de enero, lo que permite que más personas puedan rendirle homenaje a la imagen más popular del archipiélago.',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/caguach/qr/caguach_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/caguach/qr/caguach_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/caguach/qr/caguach_galeria_04.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
    ];

    const circleUno = '/iglesias/achao/circle-01.png';

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

    const circleDos = '/iglesias/achao/circle-02.png';

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

    const circleTres = '/iglesias/achao/circle-03.png';

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

    const circleCuatro = '/iglesias/achao/circle-04.png';

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

    const circleCinco = '/iglesias/achao/circle-05.png';

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

    const circleSeis = '/iglesias/achao/circle-06.png';

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
                            <QRVideo videoId="jZbusXVvKnk" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Humedal Villa Quinchao
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        En Chiloé, este oasis de biodiversidad captura la esencia de los humedales.
                        Hogar de especies únicas y paisajes tranquilos.
                    </p>

                    <QRImages images={imageListHumedal} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Mirador Alto La Paloma
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Sin duda alguna, la mejor vista de Achao.
                    </p>

                    <QRImages images={imageListMirador} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Chequian
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Aldea en Chiloé que encanta con su paisaje rural y tradiciones. Un lugar
                        donde el tiempo parece detenerse entre campos y mar.
                    </p>

                    <QRImages images={imageListChequian} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Palqui Estero
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Cauce en Chiloé, refugio de biodiversidad y paisajes que inspiran
                        tranquilidad. Perfecto para amantes de la naturaleza.
                    </p>

                    <QRImages images={imageListPalquin} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Curaco de Vélez
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Pueblo costero en Chiloé, famoso por su tranquilidad, ostras y arquitectura
                        tradicional. Un viaje al corazón de la isla.
                    </p>

                    <QRImages images={imageListVelez} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSeis} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Humedal de Curaco
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Santuario ecológico en Chiloé, hogar de aves y biodiversidad. Espacio vital
                        para la observación de fauna y conexión natural.
                    </p>

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
