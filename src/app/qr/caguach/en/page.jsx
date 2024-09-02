import QRHeaderSingle from '@components/QRPages/QRHeaderSingle';
import QRIntro from '@components/QRPages/QRIntro';
import QRImages from '@components/QRPages/QRImages';
import QRVideo from '@components/QRPages/QRVideo';
import QRCircleImage from '@components/QRPages/QRCircleImage';
import QRInfoAttractions from '@components/QRPages/QRInfoAttractions';
import QRChurchesMaps from '@components/QRPages/QRChurchesMaps';
import QRFooter from '@components/QRPages/QRFooter';

export const metadata = {
    title: 'PTI | QR Church | Area attractions ',
};

export default function QRCaguachEsp() {
    const titlePage = 'La Iglesia';
    const imgMain = '/qr/caguach.webp';
    const nameChurch = 'Iglesia Jesús Nazareno de Caguach';
    const districtTitleChurch = 'District';
    const districtNameChurch = 'Quinchao';
    const buildTitleChurch = 'Built';
    const patronTitleChurch = 'Patron';
    const feastDayTitleChurch = 'Feast Day';
    const buildNameChurch = '1919';
    const patronNameChurch = 'Jesus of Nazareth';
    const feastDayNameChurch = 'August 30th';

    const castroIglesia = '/iglesias/caguach/qr/caguach.png';
    const attractionZone = 'Area attractions';
    const attractionZoneSub = 'Check out this capsule and discover the attractions of the area!';

    const pinLocationMorado = '/qr/pin-location-morado.svg';
    const pinWalkMorado = '/qr/pin-walk-morado.svg';
    const pinCarMorado = '/qr/pin-car-morado.svg';

    const firstText =
        'Among the churches that comprise the World Heritage Site, the one in Caguach is <b>the most remote from the main island,</b> making it the most difficult to access. Nonetheless, <b>it is also the site of the most significant religious celebration in all of Chiloé.</b> Every August 30th, the feast day of Jesus of Nazareth mobilizes thousands of faithful from across the archipelago.';

    const listTexts = [
        {
            text: 'The image of Jesus of Nazareth of Caguach, with its natural hair and purple cloak, is the most venerated and replicated. According to legend, at the end of the 18th century, the inhabitants of the islands of Caguach, Alao, Apiao, Tac, and Chaulinec were in constant conflict. To unite these communities, Franciscan priest Hilario Martínez brought them the image of the Nazarene from Tenaún, intending that they organize a joint festival. However, failing to agree on which island should keep the image, it was decided to hold a rowing boat competition. The rowers from Caguach emerged victorious, thus the image remained in their care.',
        },
        {
            text: "<b>In 1919, a fire destroyed the chapel of Caguach, but the image of the Nazarene was unharmed,</b> and the community immediately began work to erect a new temple. For some years now, the feast of the Nazarene is also celebrated on the third Sunday of January, allowing more people the opportunity to pay homage to the archipelago's most popular image.",
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
                            <QRVideo videoId="85hxz8ddW44" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleUno} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Humedal Villa Quinchao
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        In Chiloé, this biodiversity oasis captures the essence of wetlands. Home to
                        unique species and tranquil landscapes.
                    </p>

                    <QRImages images={imageListHumedal} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleDos} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Mirador Alto La Paloma
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Without a doubt, the best view of Achao.
                    </p>

                    <QRImages images={imageListMirador} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleTres} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Chequian
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Village in Chiloé that charms with its rural landscape and traditions. A
                        place where time seems to stand still among fields and sea.
                    </p>

                    <QRImages images={imageListChequian} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCuatro} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Palqui Estero
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Stream in Chiloé, a haven of biodiversity and landscapes that inspire
                        tranquility. Perfect for nature lovers.
                    </p>

                    <QRImages images={imageListPalquin} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleCinco} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Curaco de Vélez
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Coastal town in Chiloé, famed for its tranquility, oysters, and traditional
                        architecture. A journey to the island´s heart.
                    </p>

                    <QRImages images={imageListVelez} />
                </div>

                <div className="container mx-auto max-w-[1024px] mt-[70px]">
                    <QRCircleImage imageCircle={circleSeis} />

                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        Humedal de Curaco
                    </h2>

                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        Ecological sanctuary in Chiloé, home to birds and biodiversity. A vital
                        space for wildlife observation and natural connection.
                    </p>

                    <QRImages images={imageListHumedalCuraco} />
                </div>

                <QRChurchesMaps titleContent="The Churches Route" />

                <QRFooter
                    titleContent="More information"
                    titleContact="Contact"
                    textService="Tourist Services"
                    linkService="https://tinyurl.com/quinchao"
                />
            </section>
        </>
    );
}
