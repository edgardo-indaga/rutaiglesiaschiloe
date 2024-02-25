import Image from 'next/image';
import Link from 'next/link';
import PatrimonioGallery from '@/components/PatrimonioGaleria';
import HistoriaGallery from '@/components/HistoriaGaleria';

export const metadata = {
    title: 'PTI | El Patrimonio',
};
export default function ElPatrimonio() {
    return (
        <main>
            <section className="bg-cover bg-no-repeat bg-top md:h-screen">
                <Image
                    src="/patrimonio/patrimonio-01.webp"
                    alt="Patrimonio de la humanidad"
                    layout="fill"
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-center"
                />
                <div className="container mx-auto flex justify-center items-center md:h-screen">
                    <h1 className="text-blanco md:text-[40px] font-semibold z-10">
                        PATRMONIO DE LA HUMANIDAD
                    </h1>
                </div>
            </section>

            <section className="md:pt-[70px]">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px]">
                        En el año 2.000, 16 iglesias del archipiélago fueron declaradas como
                    </p>
                    <p className="text-tinto md:text-[26px] font-medium md:leading-[34px]">
                        Sitio de Patrimonio Mundial por parte de la UNESCO
                    </p>
                </div>
            </section>
            <section className="md:py-[70px]">
                <div className="container mx-auto flex flex-col">
                    <p className="text-tinto md:text-[26px] font-medium md:leading-[34px]">
                        ¿QUÉ SIGNIFICA ESTE RECONOCIMIENTO?
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:pt-[70px]">
                        La UNESCO reconoce contados lugares en el mundo que tienen un valor
                        excepcional para la humanidad. Esta excepcionalidad puede deberse a su
                        rareza, representatividad, autenticidad, belleza o significado histórico. En
                        general, son expresiones naturales o culturales que no existen en ninguna
                        otra parte del mundo.
                    </p>
                </div>
            </section>
            <section className="md:pb-[30px]">
                <div className="container mx-auto flex items-center">
                    <Image
                        src="./patrimonio/icono-patrimonio.svg"
                        alt="Icono Patrimonio"
                        width={89}
                        height={140}
                    />
                    <p className="text-tinto md:text-[26px] font-medium md:leading-[34px] md:ml-[20px]">
                        ¿Cuál es el valor excepcional de las iglesias de Chiloé según la UNESCO?
                    </p>
                </div>
            </section>
            <section className="md:pb-[70px]">
                <div className="container mx-auto flex flex-col">
                    <ul className="list-disc md:ml-[130px]">
                        <li className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:py-[10px]">
                            Son una forma única de arquitectura en madera, producto de la fusión de
                            tradiciones culturales europeas e indígenas.
                        </li>
                        <li className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:py-[10px]">
                            Destacan por su diseño arquitectónico, materiales y sistemas
                            constructivos, y por la maestría de los carpinteros que las levantaron.
                        </li>
                        <li className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:py-[10px]">
                            Las prácticas devocionales y comunitarias, los festivales religiosos y
                            las actividades grupales de apoyo como la minga son componentes clave de
                            los valores intangibles de la relación entre las comunidades y las
                            iglesias.
                        </li>
                    </ul>
                </div>
                <div className="container mx-auto flex justify-center">
                    <Link href="#" alt="PATRIMONIO DE LA HUMANIDAD">
                        <Image
                            src="/btn-mas.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier"
                        />
                    </Link>
                </div>
            </section>
            <section className="md:h-auto md:py-[100px] md:mb-[100px]">
                <div className="container mx-auto">
                    <PatrimonioGallery />
                    <Link href="/#patrimonio" alt="PAGINA DE INICIO">
                        <Image
                            src="/btn-volver.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier float-end"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
