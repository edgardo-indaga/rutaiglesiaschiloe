import Image from 'next/image';
import Link from 'next/link';
import GalleryView from '@/components/GalleryView';

import HeaderPage from '@components/HeaderPage/HeaderPage';
import HeaderImg from '@public/patrimonio/patrimonio-01.webp';

export const metadata = {
    title: 'PTI | El Patrimonio',
};
export default function ElPatrimonio() {
    const slides = [
        {
            src: '/patrimonio/gallery/patrimonio_galeria_01.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Chonchi',
            description: '',
        },
        {
            src: '/patrimonio/gallery/patrimonio_galeria_02.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Dalcahue',
            description: '',
        },
        {
            src: '/patrimonio/gallery/patrimonio_galeria_03.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Matao',
            description: '',
        },
        {
            src: '/patrimonio/gallery/patrimonio_galeria_04.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Chelin',
            description: 'Representante de la comunidad',
        },
        {
            src: '/patrimonio/gallery/patrimonio_galeria_05.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Colo',
            description: '',
        },
        {
            src: '/patrimonio/gallery/patrimonio_galeria_06.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Castro',
            description: 'Imagen de Jesús Nazareno',
        },
        {
            src: '/patrimonio/gallery/patrimonio_galeria_07.jpg',
            width: 1333,
            height: 2000,
            title: 'Iglesia de Caguach',
            description: 'Fiesta Patronal',
        },
        {
            src: '/patrimonio/gallery/patrimonio_galeria_08.jpg',
            width: 1200,
            height: 800,
            title: 'Iglesia de Achao',
            description: '',
        },
    ];

    return (
        <main>
            <HeaderPage HeaderTitle="PATRIMONIO DE LA HUMANIDAD" HeaderImg={HeaderImg} />

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center mb-[20px] md:mb-[70px]">
                    <h1 className="text-center font-semibold text-tinto text-[24px] xl:text-[48px] xl:leading-[58px]">
                        ¿QUÉ SIGNIFICA ESTE RECONOCIMIENTO?
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La UNESCO reconoce contados lugares en el mundo que tienen un valor
                        excepcional para la humanidad. Esta excepcionalidad puede deberse a su
                        rareza, representatividad, autenticidad, belleza o significado histórico.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        En general, son expresiones naturales o culturales que no existen en ninguna
                        otra parte del mundo.
                    </p>
                </div>
            </section>

            <section className="bg-beige md:py-[100px] md:px-0 px-5 py-10">
                <div className="container mx-auto flex justify-center md:mb-[70px] mb-[20px]">
                    <h1 className="text-center font-semibold text-tinto text-[24px] leading-[32px] xl:text-[48px] xl:leading-[58px]">
                        ¿CUÁL ES EL VALOR EXCEPCIONAL DE LAS <br />
                        IGLESIAS DE CHILOÉ SEGÚN LA UNESCO?
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20 px-5">
                    <ul className="list-disc md:ml-[100px]">
                        <li className="font-thin text-tinto text-[18px] md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Son una forma única de arquitectura en madera, producto de la{' '}
                            <b>fusión de tradiciones culturales</b> europeas e indígenas.
                        </li>
                        <li className="font-thin text-tinto text-[18px] md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Destacan por su{' '}
                            <b>diseño arquitectónico, materiales y sistemas constructivos,</b> y por
                            la maestría de los carpinteros que las levantaron.
                        </li>
                        <li className="font-thin text-tinto text-[18px] md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Las prácticas devocionales y comunitarias, los festivales religiosos y
                            las actividades grupales de apoyo como la minga son componentes clave de
                            los valores intangibles de la{' '}
                            <b>relación entre las comunidades y las iglesias.</b>
                        </li>
                    </ul>
                </div>
                <div className="container mx-auto flex justify-center">
                    <Link
                        href="https://whc.unesco.org/es/list/971"
                        alt="PATRIMONIO DE LA HUMANIDAD"
                        target="_blank"
                    >
                        <Image
                            src="/btn-mas.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px] hidden xl:flex"
                        />
                    </Link>
                </div>
                <div className="flex justify-center md:justify-start xl:hidden">
                    <Link
                        href="https://whc.unesco.org/es/list/971"
                        target="_blank"
                        className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                    >
                        Conoce más
                    </Link>
                </div>
            </section>

            <section className="md:pt-[100px] md:px-0 px-5 py-10">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="md:w-5/12 flex justify-center">
                        <Image
                            src="/patrimonio-01.webp"
                            width={1200}
                            height={1600}
                            alt="Patrimonio de la Humanidad"
                            className="md:h-[711px] h-[400px] w-auto"
                        />
                    </div>
                    <div className="flex flex-col justify-center md:h-[711px] md:w-7/12 md:pr-20 md:pl-6 pt-10">
                        <p className="font-thin text-tinto text-[18px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                            El Sitio de Patrimonio Mundial es administrado por la{' '}
                            <b>Fundación Iglesias de Chiloé.</b>
                        </p>
                        <p className="font-thin text-tinto text-[18px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                            Al interior de la antigua iglesia de la Inmaculada Concepción de Ancud,
                            la Fundación cuenta con un museo que invita a conocer más acerca de la
                            historia y valor de las iglesias de Chiloé.
                        </p>
                        <Link
                            href="https://www.iglesiaschiloe.cl/"
                            alt="PATRIMONIO DE LA HUMANIDAD"
                            target="_blank"
                        >
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px] hidden xl:flex"
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center md:justify-start xl:hidden">
                        <Link
                            href="https://www.iglesiaschiloe.cl/"
                            target="_blank"
                            className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                        >
                            Conoce más
                        </Link>
                    </div>
                </div>
            </section>

            <section className="md:py-[100px] md:mb-[100px] md:h-auto px-5 py-10 md:px-0">
                <div className="container mx-auto">
                    <GalleryView slides={slides} />
                    <Link href="/#patrimonio" alt="PAGINA DE INICIO">
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
