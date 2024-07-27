import VideoPlayer from '@/components/VideoPlayer';
import GalleryView from '@/components/GalleryView';
import Image from 'next/image';
import Link from 'next/link';

import HeaderPage from '@components/HeaderPage/HeaderPage';
import HeaderImg from '@public/historia/historia-01.webp';

export const metadata = {
    title: 'PTI | La Historia',
};
export default function LaHistoria() {
    const slides = [
        {
            src: '/historia/gallery/historia_galeria_01.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Vilupulli',
            description: 'Cuaderno de la Historia de Vilupulli, elaborado por la comunidad en 1986',
        },
        {
            src: '/historia/gallery/historia_galeria_02.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Chonchi',
            description: 'Libro eclesiástico en latín',
        },
        {
            src: '/historia/gallery/historia_galeria_07.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Quinchao',
            description: 'Antiguos reclinatorios',
        },
        {
            src: '/historia/gallery/historia_galeria_08.jpg',
            width: 1333,
            height: 2000,
            title: 'Iglesia de Caguach',
            description: 'Sacerdote franciscano en fiesta patronal',
        },
        {
            src: '/historia/gallery/historia_galeria_05.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Castro',
            description: 'Ilustración de la primera iglesia de Castro a comienzos del s. XIX',
        },
        {
            src: '/historia/gallery/historia_galeria_04.jpg',
            width: 1333,
            height: 2000,
            title: 'Iglesia de Castro',
            description: ' Mapa de la Misión Circular',
        },
        {
            src: '/historia/gallery/historia_galeria_03.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Rilán',
            description: 'Junto al altar se exponen dos banderas, la chilena y la huilliche',
        },
        {
            src: '/historia/gallery/historia_galeria_06.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Ichuac',
            description: 'San Ignacio',
        },
    ];

    return (
        <main>
            <HeaderPage HeaderTitle="LA HISTORIA" HeaderImg={HeaderImg} />

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex items-center justify-center align-middle">
                    <VideoPlayer videoId="B7t_Pp9ku5c" />
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center mb-[20px] md:mb-[70px]">
                    <h1 className="font-semibold text-tinto text-[24px] xl:text-[48px]">
                        TESTIGOS DEL PASADO
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Las iglesias de Chiloé son el resultado de un sincretismo cultural único,
                        que se produce del rico intercambio entre españoles y pueblos originarios.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Este sincretismo tiene sus raíces en un proceso histórico llamado{' '}
                        <b>Misión circular</b>, que se desarrolló durante la Colonia, entre los
                        siglos XVII y XVIII, y que fue implementado primero por los jesuitas y luego
                        por los franciscanos para la evangelización del archipiélago.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Esta misión consistía en un{' '}
                        <b>recorrido anual por parte de los sacerdotes</b>, que partían desde la
                        ciudad de Castro cuando el clima era propicio. Navegaban en dalcas de madera
                        enfrentando las duras condiciones climáticas de la región. Durante estas
                        visitas,{' '}
                        <b>
                            los misioneros organizaban a las comunidades indígenas alrededor de una
                            iglesia central
                        </b>
                        , que se convertía en el punto focal de la vida religiosa, social y
                        cultural.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Estas iglesias se erigían en sitios costeros que ya tenían una importancia
                        ritual y social para los pueblos originarios, tanto canoeros como
                        huilliches. Dado que las visitas de los misioneros eran esporádicas, una vez
                        que se establecían comunidades de creyentes en los distintos sectores,{' '}
                        <b>
                            se designaba a personas locales para cuidar las iglesias y prestar
                            servicios religiosos básicos
                        </b>
                        . Así nacieron los patrones de iglesia y los fiscales, que perduran hasta
                        hoy.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Ya en el período Republicano, durante los siglos XIX y principios del XX, se
                        continuó con la construcción de estos templos, siguiendo el mismo modelo
                        arquitectónico.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Las iglesias que se pueden visitar en la actualidad son generalmente
                        construcciones posteriores a las originales. Las primeras capillas, así como
                        muchas de las que les sucedieron, sufrieron la destrucción causada por
                        incendios o por las adversidades del clima.
                    </p>
                </div>
            </section>
            <section className="md:py-[100px] md:mb-[100px] md:h-auto px-5 py-10 md:px-0">
                <div className="container mx-auto">
                    <GalleryView slides={slides} />

                    <Link href="/#historia" alt="PAGINA DE INICIO">
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
