import VideoPlayer from '@/components/VideoPlayer';
import GalleryView from '@/components/GalleryView';
import Image from 'next/image';
import Link from 'next/link';

import HeaderPage from '@components/HeaderPage/HeaderPage';
import HeaderImg from '@public/arquitectura/arquitectura-01.webp';

export const metadata = {
    title: 'PTI | La Arquitectura',
};
export default function LaArquitectura() {
    const slides = [
        {
            src: '/arquitectura/gallery/arquitectura_galeria_01.jpg',
            width: 1333,
            height: 2000,
            title: 'Iglesia de Aldachildo',
            description: 'Fachada',
        },
        {
            src: '/arquitectura/gallery/arquitectura_galeria_02.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Detif',
            description: 'Bóveda',
        },
        {
            src: '/arquitectura/gallery/arquitectura_galeria_03.jpg',
            width: 1333,
            height: 2000,
            title: 'Iglesia de Quinchao',
            description: 'Detalle constructivo',
        },
        {
            src: '/arquitectura/gallery/arquitectura_galeria_04.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Chelín',
            description: 'Detalle ornamental',
        },
        {
            src: '/arquitectura/gallery/arquitectura_galeria_05.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Rilán',
            description: 'Bóveda de crucerías',
        },
        {
            src: '/arquitectura/gallery/arquitectura_galeria_06.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Dalcahue',
            description: 'Columnas pintadas imitando el mármol',
        },
        {
            src: '/arquitectura/gallery/arquitectura_galeria_07.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Vilupulli',
            description: 'Plano de la iglesia',
        },
        {
            src: '/arquitectura/gallery/arquitectura_galeria_08.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Nercón',
            description: 'Vista exterior de la bóveda',
        },
    ];

    return (
        <main>
            <HeaderPage HeaderTitle="LA ARQUITECTURA" HeaderImg={HeaderImg} />

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex items-center justify-center align-middle">
                    <VideoPlayer videoId="94Yc_Z6ubpo" />
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center mb-[20px] md:mb-[70px]">
                    <h1 className="font-semibold text-tinto text-[24px] xl:text-[48px]">
                        LEGADO ARQUITECTÓNICO
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>
                            La carpintería tradicional chilota es fruto del profundo conocimiento
                            que los pueblos originarios, chonos y veliches, tenían de las
                            propiedades de las maderas nativas del archipiálago.{' '}
                        </b>
                        Estos saberes son el resultado de una necesidad de adaptarse al medio que
                        requirió de mucho ingenio.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Las iglesias de Chiloé son la expresión monumental de esta maestría y
                        creatividad. En ellas, cada madera nativa, ya fuera el ciprés, el coihue, el
                        alerce, el mañío, el laurel, la tepa, el canelo, o el arrayán, cumplía una
                        función particular.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Destaca en estas obras el{' '}
                        <b>
                            uso de técnicas constructivas tradicionales, como los ensambles,
                            empalmes y detalles ornamentales.
                        </b>
                        Debido a la escasez de metales en las islas, en la obra gruesa casi no se
                        utilizaban clavos de hierro, sino remaches de madera.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Las iglesias patrimoniales de Chiloé, representantes de la{' '}
                        <b>Escuela Chilota de Arquitectura Religiosa en Madera</b> responden a un
                        <b>modelo tipológico</b> muy distintivo, ya que tienen todas la misma
                        estructura básica:
                    </p>
                    <ul className="list-disc md:ml-[50px] md:pb-[40px] px-5 md:px-0 mb-[20px]">
                        <li className="font-thin text-tinto text-[18px] md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Una fachada caracterizada por un pórtico y una torre-campanario, que
                            puede tener uno o dos tambores (o pisos).
                        </li>
                        <li className="font-thin text-tinto text-[18px] md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Un volumen horizontal con techo a dos aguas.
                        </li>
                        <li className="font-thin text-tinto text-[18px] md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Tres naves en su interior, la central con el techo habitualmente
                            abovedado.
                        </li>
                        <li className="font-thin text-tinto text-[18px] md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Una gran explanada frente a la edificación.
                        </li>
                    </ul>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Las 16 iglesias reconocidas como Patrimonio de la Humanidad son
                        <b>representativas de un conjunto mucho mayor de iglesias,</b> distribuidas
                        tanto en el archipiélago de Chiloé como en el Seno de Reloncaví.
                    </p>
                </div>
            </section>

            <section className="md:py-[100px] md:mb-[100px] md:h-auto px-5 py-10 md:px-0">
                <div className="container mx-auto">
                    <GalleryView slides={slides} />

                    <Link href="/#arquitectura" alt="PAGINA DE INICIO">
                        <Image
                            src="/btn-volver.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[180px] hidden xl:block"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
