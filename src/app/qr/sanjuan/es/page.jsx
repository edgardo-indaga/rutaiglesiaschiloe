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

export default function QRSanJuanEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/sanjuan.webp';
    const nameChurch = 'Iglesia San Juan Bautista de San Juan';
    const districtTitleChurch = 'Comuna';
    const districtNameChurch = 'Dalcahue';
    const buildTitleChurch = 'Construcción';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Fiesta';
    const buildNameChurch = '1887';
    const patronNameChurch = 'San Juan Bautista';
    const feastDayNameChurch = '24 de junio';

    const castroIglesia = '/iglesias/sanjuan/qr/sanjuan.png';
    const attractionZone = 'Atractivos de la zona';
    const attractionZoneSub = '¡Mira esta cápsula y descúbre los atractivos de la zona!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Llama la atención el emplazamiento de la iglesia de San Juan, que se encuentra <b>muy cerca del borde marino cuando sube la marea.</b> Según cuentan los lugareños, esto se debe al terremoto y posterior maremoto de 1960, cuando el nivel del mar se elevó y socavó el terreno. Afortunadamente, la iglesia se mantuvo en pie. Sin embargo, el cementerio contiguo quedó completamente sumergido y la imagen del patrón San Juan Bautista, tallada en madera, cayó y se trizó.';

    const listTexts = [
        {
            text: 'Junto a la iglesia se encuentra un astillero que mantiene vivo el oficio de carpintería de ribera tradicional de Chiloé. Desde el techo de la iglesia cuelgan miniaturas de barcos chilotes, dejadas como ofrenda por un vecino de la comunidad haciendo alusión a este oficio.',
        },
        {
            text: 'Durante las últimas restauraciones, <b>se descubrieron restos humanos bajo la iglesia,</b> lo que sugiere la presencia de un antiguo cementerio en el lugar. Las osamentas fueron colocadas en un cajón y posteriormente enterradas nuevamente bajo la iglesia.',
        },
        {
            text: 'Con orgullo, la comunidad sanjuanina afirma que su iglesia alberga la mayor cantidad de santos en todo el archipiélago',
        },
    ];

    const imageList = [
        {
            src: '/iglesias/sanjuan/qr/sanjuan_galeria_02.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/sanjuan/qr/sanjuan_galeria_03.jpg',
            alt: 'Iglesia Imagen 01',
            width: '1024',
            height: '576',
        },
        {
            src: '/iglesias/sanjuan/qr/sanjuan_galeria_04.jpg',
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
                        distanceAttractionOne="34,8 km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Mercado tradicional en Chiloé donde el sabor local cobra vida. Un festín de mariscos, platos típicos y artesanía."
                        distanceAttractionTwo="39 min"
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
                        distanceAttractionOne="34,8 km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Este punto de encuentro en Chiloé celebra la cultura local a través de sus artesanías."
                        distanceAttractionTwo="39 min"
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
                        distanceAttractionOne="34,1 km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Corazón cultural de Chiloé, donde se mezclan la artesanía, la gastronomía y las leyendas. Encanto natural e histórico a cada paso."
                        distanceAttractionTwo="35 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageDalcahue} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <QRInfoAttractions
                        titleAttraction="Tenaún"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="17,3 km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Este lugar en Chiloé destila historia y serenidad, rodeado de naturaleza. Ideal para quienes buscan conectar con tradiciones."
                        distanceAttractionTwo="23 min"
                        extentAttractionTwo="en auto"
                    />

                    <QRImages images={imageTenaun} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <QRInfoAttractions
                        titleAttraction="Cascada Tocoihue"
                        pinOne={pinLocationMorado}
                        pinTwo={pinCarMorado}
                        distanceAttractionOne="10,4 km"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="Espectáculo natural en Chiloé, donde el agua cae majestuosamente entre verdes bosques. Un lugar mágico para aventureros."
                        distanceAttractionTwo="17 min"
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
                        distanceAttractionOne="26 mts"
                        extentAttractionOne="de la iglesia"
                        infoAttraction="San Juan, donde el arte de construir barcos revive. Su iglesia histórica, los cisnes de cuello negro y la calidez del pueblo te envuelven."
                        distanceAttractionTwo="1 min"
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
