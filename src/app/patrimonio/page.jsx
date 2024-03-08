import Image from 'next/image';
import Link from 'next/link';
import PatrimonioGallery from '@/components/PatrimonioGaleria';

export const metadata = {
    title: 'PTI | El Patrimonio',
};
export default function ElPatrimonio() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/patrimonio/patrimonio-01.webp"
                    alt="Patrimonio de la humanidad"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-center"
                />
                <div className="container mx-auto flex items-center justify-center md:h-screen">
                    <h1 className="z-10 font-semibold text-blanco md:text-[40px]">
                        PATRIMONIO DE LA HUMANIDAD
                    </h1>
                </div>
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center md:mb-[70px]">
                    <h1 className="font-semibold text-tinto xl:text-[48px] xl:leading-[58px] text-center">
                        ¿QUÉ SIGNIFICA ESTE RECONOCIMIENTO?
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La UNESCO reconoce contados lugares en el mundo que tienen un valor
                        excepcional para la humanidad. Esta excepcionalidad puede deberse a su
                        rareza, representatividad, autenticidad, belleza o significado histórico.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        En general, son expresiones naturales o culturales que no existen en ninguna
                        otra parte del mundo.
                    </p>
                </div>
            </section>

            <section className="bg-beige md:py-[100px]">
                <div className="container mx-auto flex justify-center md:mb-[70px]">
                    <h1 className="font-semibold text-tinto xl:text-[48px] xl:leading-[58px] text-center">
                        ¿CUÁL ES EL VALOR EXCEPCIONAL DE LAS <br />
                        IGLESIAS DE CHILOÉ SEGÚN LA UNESCO?
                    </h1>
                </div>
                <div className="container mx-auto flex flex-colmd:px-20">
                    <ul className="list-disc md:ml-[100px]">
                        <li className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Son una forma única de arquitectura en madera, producto de la{' '}
                            <b>fusión de tradiciones culturales</b> europeas e indígenas.
                        </li>
                        <li className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Destacan por su{' '}
                            <b>diseño arquitectónico, materiales y sistemas constructivos,</b> y por
                            la maestría de los carpinteros que las levantaron.
                        </li>
                        <li className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:py-[10px]">
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
                            className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                        />
                    </Link>
                </div>
            </section>

            <section className="md:pt-[100px]">
                <div className="container mx-auto flex">
                    <div className="md:w-5/12">
                        <Image
                            src="/patrimonio-01.webp"
                            width={1200}
                            height={1600}
                            alt="Patrimonio de la Humanidad"
                            className="md:h-[711px]"
                        />
                    </div>
                    <div className="md:w-7/12 md:pl-6 md:pr-20 flex flex-col justify-center md:h-[711px]">
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                            El Sitio de Patrimonio Mundial es administrado por la{' '}
                            <b>Fundación Iglesias de Chiloé.</b>
                        </p>
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
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
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="md:py-[100px] md:mb-[100px] md:h-auto">
                <div className="container mx-auto">
                    <PatrimonioGallery />
                    <Link href="/#patrimonio" alt="PAGINA DE INICIO">
                        <Image
                            src="/btn-volver.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
