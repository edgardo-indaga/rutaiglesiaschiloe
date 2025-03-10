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

export default function QRIchuacEn() {
    const titlePage = 'The Church';
    const imgMain = '/qr/ichuac.webp';
    const nameChurch = 'Nativity of Mary Church of Ichuac';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Puqueldón';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patrona';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1880';
    const patronNameChurch = 'Nativity of Mary';
    const feastDayNameChurch = 'September 8th';

    const chonchiIglesia = '/iglesias/ichuac/qr/ichuac.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'It is said that <b>Ichuac was the first stop on the annual circuit mission</b> after setting sail from Castro. The current church was built by the community using cypress, coigüe, and larch woods. According to local testimonies, <b>about 150 people worked on it for 5 years.</b>';
    const listTexts = [
        {
            text: "<b>The clock painted on the church's porch marks three o'clock, the time traditionally associated with the death of Christ.</b> The geometric motifs on the facade are also notable.",
        },
        {
            text: 'Although currently, the entire exterior shows the natural color of the native woods, photographs from a few years ago indicate that the facade was once painted white and sky blue.',
        },
        {
            text: "In 1997, the saints of the church were sent to Ancud for restoration, causing concern within the community, fearing they would not return to the church. However, this process proved beneficial, as <b>today its main images look revitalized, thus preserving the historical and religious legacy of Ichuac's church.</b>",
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
                        extentAttractionOne="from the church"
                        infoAttraction="Feel the adrenaline on the suspension bridge and pure contact with nature on trails and waterfalls."
                        distanceAttractionTwo="8 min"
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
                        distanceAttractionOne="15,1 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Discover Chilote tradition in organic native potato farming in Lemuy, an authentic cultural experience."
                        distanceAttractionTwo="22 min"
                        extentAttractionTwo="by car"
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
                        extentAttractionOne="from the church"
                        infoAttraction="A hidden beach with local taste."
                        distanceAttractionTwo="26 min"
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
                        distanceAttractionOne="21,8 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="Stunning road, bordered by water, mimics whale's tail when viewed from above."
                        distanceAttractionTwo="31 min"
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
                        ddistanceAttractionOne="27,9 Km"
                        extentAttractionOne="from the church"
                        infoAttraction="A viewpoint capturing the island's essence, between seas and greens, a corner to breathe peace and beauty."
                        distanceAttractionTwo="44 min"
                        extentAttractionTwo="by car"
                    />

                    <QRImages images={imageApahuen} />
                </div>

                <QRChurchesMaps titleContent="The Churches Route" />
                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    schedule="Churches schedule"
                    linkService="https://tinyurl.com/puqueldon2"
                />
            </section>
        </>
    );
}
