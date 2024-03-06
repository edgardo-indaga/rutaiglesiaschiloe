import Image from 'next/image';
import Link from 'next/link';
import SanJuanGallery from '@/components/SanJuanGaleria';
export const metadata = {
    title: 'PTI | Iglesia San Juan Bautista de San Juan ',
};

export default function IglesiaSanJuan() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/sanjuan/sanjuan-01.webp"
                    alt="Iglesia San Juan Bautista de San Juan"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="font-semibold uppercase text-tinto md:text-[30px]">
                        Iglesia San Juan Bautista de San Juan
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1887</b>
                        </p>
                    </div>
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto"
                        />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">San Juan Bautista</b>
                        </p>
                    </div>
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[100px] md:w-auto"
                        />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">24 de junio</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Llama la atención el emplazamiento de la iglesia de San Juan, que se
                        encuentra muy cerca del borde marino cuando sube la marea. Según cuentan los
                        lugareños, esto se debe al terremoto y posterior maremoto de 1960, cuando el
                        nivel del mar se elevó y socavó el terreno. Afortunadamente, la iglesia se
                        mantuvo en pie. Sin embargo, el cementerio contiguo quedó completamente
                        sumergido y la imagen del patrón San Juan Bautista, tallada en madera, cayó
                        y se trizó.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Junto a la iglesia se encuentra un astillero que mantiene vivo el oficio de
                        carpintería de ribera tradicional de Chiloé. Desde el techo de la iglesia
                        cuelgan miniaturas de barcos chilotes, dejadas como ofrenda por un vecino de
                        la comunidad haciendo alusión a este oficio.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Durante las últimas restauraciones, se descubrieron restos humanos bajo la
                        iglesia, lo que sugiere la presencia de un antiguo cementerio en el lugar.
                        Las osamentas fueron colocadas en un cajón y posteriormente enterradas
                        nuevamente bajo la iglesia.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Con orgullo, la comunidad sanjuanina afirma que su iglesia alberga la mayor
                        cantidad de santos en todo el archipiélago.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-screen"
                    style={{ backgroundImage: "url('/iglesias/sanjuan/sanjuan-02.webp')" }}
                >
                    <Link href="#">
                        <Image
                            src="/iglesias/icono-04.svg"
                            alt="icono 360"
                            width={183}
                            height={73}
                        />
                    </Link>
                </div>
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <SanJuanGallery />
                </div>
                <div className="container mx-auto flex justify-end">
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px]"
                        />
                    </Link>
                    <Link href="/iglesias" alt="Volver a paginas Iglesias">
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
