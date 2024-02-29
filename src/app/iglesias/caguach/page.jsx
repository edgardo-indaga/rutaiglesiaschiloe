import Image from 'next/image';
import Link from 'next/link';
import CaguachGallery from '@/components/CaguachGaleria';
export const metadata = {
    title: 'PTI | Iglesia Jesús Nazareno de Caguach',
};

export default function IglesiaCaguach() {
    return (
        <main>
            <section className="md:h-screen relative">
                <Image
                    src="/iglesias/caguach/caguach-01.webp"
                    alt="Iglesia Jesús Nazareno de Caguach"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="text-tinto md:text-[30px] font-semibold uppercase">
                        Iglesia Jesús Nazareno de Caguach
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1919</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto"
                        />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">Jesús Nazareno</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[100px] md:w-auto"
                        />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">30 de agosto</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        De entre las iglesias que conforman el Sitio de Patrimonio Mundial, la de
                        Caguach es la más alejada de la isla grande y, por lo tanto, la de más
                        difícil acceso. Sin embargo, es también lugar de la celebración religiosa
                        más importante de todo Chiloé. Cada 30 de agosto se celebra a Jesús
                        Nazareno, movilizando a miles de fieles que llegan desde todo el
                        archipiélago.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La imagen de Jesús Nazareno de Caguach, con su pelo natural y capa morada,
                        es la más venerada e imitada. Según la leyenda, a fines del siglo XVIII, los
                        habitantes de las islas de Caguach, Alao, Apiao, Tac y Chaulinec vivían en
                        conflicto constante. Con el fin de unir a estos pueblos, el sacerdote
                        franciscano Hilario Martínez les llevó la imagen del Nazareno que estaba en
                        Tenaún, con la idea de que organizaran una fiesta en conjunto. Sin embargo,
                        al no llegar a un acuerdo sobre qué isla debía quedarse con la imagen, se
                        decidió realizar una competencia de embarcaciones a remo. Los remeros de
                        Caguach resultaron ganadores, por lo que la imagen quedó bajo su resguardo.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        En 1.919 un incendio destruyó la capilla de Caguach, sin embargo, la imagen
                        del Nazareno salió ilesa y la comunidad inició inmediatamente los trabajos
                        para levantar el nuevo templo. Desde hace algunos años, la fiesta del
                        Nazareno se celebra también el tercer domingo de enero, lo que permite que
                        más personas puedan rendirle homenaje a la imagen más popular del
                        archipiélago.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
                    style={{ backgroundImage: "url('/iglesias/caguach/caguach-02.webp')" }}
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
                    <CaguachGallery />
                </div>
                <div className="container mx-auto flex justify-end">
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="md:mt-[60px] md:w-[430px] hover:scale-[1.1] transition-all ease-cubic-bezier float-end md:mr-[50px]"
                        />
                    </Link>
                    <Link href="/iglesias" alt="Volver a paginas Iglesias">
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
