import QRHeaderSingle from '@components/QRPages/QRHeaderSingle';
import QRIntro from '@components/QRPages/QRIntro';
import QRImages from '@components/QRPages/QRImages';
import QRVideo from '@components/QRPages/QRVideo';
import QRCircleImage from '@components/QRPages/QRCircleImage';
import QRInfoAttractions from '@components/QRPages/QRInfoAttractions';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRFooter from '@components/QRPages/QRFooter';

export const metadata = {
    title: 'PTI | QR Iglesia | Area attractions ',
};

export default function QRAldachildoEn() {
    const titlePage = 'The Church';
    const imgMain = '/qr/aldachildo.webp';
    const nameChurch = 'Jesus of Nazareth Church of Aldachildo';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Puqueldón';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patron';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1905';
    const patronNameChurch = 'Jesus of Nazareth';
    const feastDayNameChurch = 'August 31st';

    const chonchiIglesia = '/iglesias/detif/qr/detif.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        "The community recounts that <b>the Aldachildo church was 'miraculously saved' in 1995, when it was nearly demolished due to its very poor state of preservation.</b> It is said that this was so imminent that several local people had already donated potatoes and resources to finance the construction of a new church. Fortunately, after being declared a National Monument, it was able to be restored.";

    const listTexts = [
        {
            text: 'Like the church of Vilupulli, its stylized tower is striking. <b>Inside, its central vault stands out, adorned with stars painted with natural products from the area,</b> as well as the red and yellow flowers that decorate the arches between the pillars.',
        },
        {
            text: 'Today, the community remains organized for the celebration of the patronal feasts. The feast of Jesus of Nazareth is managed by the Society of Jesus of Nazareth, which has about 30 members; while the feast of the Virgin Immaculate, on December 8th, is organized by the Congregation Daughters of Mary, a group composed exclusively of women.',
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
                        extentAttractionOne="from the church"
                        infoAttraction="Feel the adrenaline on the suspension bridge and pure contact with nature on trails and waterfalls."
                        distanceAttractionTwo="16 min"
                        extentAttractionTwo="by car"
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
                        extentAttractionOne="from the church"
                        infoAttraction="Discover Chilote tradition in organic native potato farming in Lemuy, an authentic cultural experience."
                        distanceAttractionTwo="10 min"
                        eextentAttractionTwo="by car"
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
                        extentAttractionOne="from the church"
                        infoAttraction="A hidden beach with local taste."
                        distanceAttractionTwo="16 min"
                        extentAttractionTwo="by car"
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
                        extentAttractionOne="from the church"
                        infoAttraction="Stunning road, bordered by water, mimics whale's tail when viewed from above."
                        distanceAttractionTwo="20 min"
                        extentAttractionTwo="by car"
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
                        extentAttractionOne="from the church"
                        infoAttraction="A viewpoint capturing the island's essence, between seas and greens, a corner to breathe peace and beauty."
                        distanceAttractionTwo="35 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageApahuen} />
                </div>

                <QRChurchesMaps titleContent="The Churches Route" />
                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    linkService="https://tinyurl.com/puqueldon2"
                />
            </section>
        </>
    );
}
